import { coins, StdFee } from "@cosmjs/amino";
import { Sha256 } from "@cosmjs/crypto";
import { fromHex, fromUtf8, toHex } from "@cosmjs/encoding";
import { Uint64 } from "@cosmjs/math";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, createBankAminoConverters, defaultRegistryTypes } from "@cosmjs/stargate";
import { keccak256 } from "@ethersproject/keccak256";
import { SigningKey } from "@ethersproject/signing-key";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgSubmitProposal } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { Wallet } from "ethers";
import Long from "long";

import { EthSecp256k1Wallet } from "./ethsecp256k1wallet";
import { Direction } from "./fx/dex/v1/tx";
import { RegisterCoinProposal } from "./fx/erc20/v1/erc20";
import { fxCoreTxConfig, fxDexTxConfig } from "./index";
import {
  createGovSubmitProposalAminoConverters,
  erc20ProposalContentAminoConverters,
  MsgCreateOrderEncodeObject,
  FxMsgIbcTransferEncodeObject,
} from "./modules";
import { OnlineWallet } from "./onlinewallet";
import { SigningFxClient } from "./signingfxclient";

async function onlineFunc(signer: string, signData: Uint8Array): Promise<string> {
  // walletconnect sign
  console.debug("signData", fromUtf8(signData));

  // private key simulation
  const msgHash = new Sha256(signData).digest();
  console.debug("msgHash", toHex(msgHash));
  const testPrivateKey = fromHex("91630c1f3b8a8648fc96761685f0106f68a2d9a2fb32a065a7417967cda8583c");
  const privateKey = new SigningKey(testPrivateKey);
  const signature = privateKey.signDigest(keccak256(signData));
  // const signature = await Secp256k1.createSignature(msgHash, testPrivateKey);
  // toHex(signature.toFixedLength())
  return toHex(
    new Uint8Array([...fromHex(signature.r.slice(2)), ...fromHex(signature.s.slice(2)), signature.v - 27]),
  );
}

describe("denom test", () => {
  it("transfer tx", async () => {
    const pubkey = "0x0342c931c630cf00eb9429bd2a0a5c6cfba6801fbe867772ece0e12ade462467bf";
    console.debug("pubkey", pubkey);

    const wallet = new OnlineWallet(pubkey, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const registry = new Registry([...defaultRegistryTypes]);
    const aminoTypes = new AminoTypes({
      ...createBankAminoConverters(),
      ...createGovSubmitProposalAminoConverters(erc20ProposalContentAminoConverters()),
    });
    const options = {
      ...fxCoreTxConfig.options,
      registry: registry,
      aminoTypes: aminoTypes,
    };
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const sendMsg: EncodeObject[] = [
      {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial({
          fromAddress: sender,
          toAddress: sender,
          amount: coins("100", "FX"),
        }),
      },
      {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial({
          fromAddress: sender,
          toAddress: sender,
          amount: coins("100", "FX"),
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          content: {
            typeUrl: "/fx.erc20.v1.RegisterCoinProposal",
            value: RegisterCoinProposal.encode({
              title: "register coin test",
              description: "test ...",
              metadata: {
                description: "test desc",
                base: "test",
                name: "test name",
                symbol: "TEST",
                display: "test",
                denomUnits: [
                  {
                    denom: "test",
                    exponent: 0,
                    aliases: ["eth0x2870405E4ABF9FcCDc93d9cC83c09788296d8355"],
                  },
                  {
                    denom: "TEST",
                    exponent: 18,
                    aliases: [],
                  },
                ],
              },
            }).finish(),
          },
        }),
      },
    ];
    let gasLimit = await client.simulate(sender, [...sendMsg], undefined);
    gasLimit = Math.round(gasLimit * 1.3);
    console.debug("gasLimit", gasLimit);
    const gasPrice = fxCoreTxConfig.options.gasPrice;
    const fees: StdFee = {
      amount: coins(gasPrice.amount.multiply(Uint64.fromNumber(gasLimit)).toString(), gasPrice.denom),
      gas: gasLimit.toString(),
    };
    const result = await client.signAndBroadcast(sender, [...sendMsg], fees);
    console.debug(result);
  });

  it("create order tx by online wallet", async () => {
    const pubkey = "0x0342c931c630cf00eb9429bd2a0a5c6cfba6801fbe867772ece0e12ade462467bf";
    console.debug("pubkey", pubkey);

    const wallet = new OnlineWallet(pubkey, fxDexTxConfig.options.prefix, onlineFunc);
    console.debug("address", wallet.address);

    const client = await SigningFxClient.connectWithSigner(
      "http://127.0.0.1:26657",
      wallet,
      fxDexTxConfig.options,
    );

    const createOrderMsg: MsgCreateOrderEncodeObject = {
      typeUrl: "/fx.dex.v1.MsgCreateOrder",
      value: {
        owner: wallet.address,
        pairId: "TSLA:USDT",
        direction: Direction.BUY,
        price: "10000",
        baseQuantity: "10000",
        leverage: Long.fromValue(1),
      },
    };

    const gasLimit = await client.simulate(wallet.address, [createOrderMsg], undefined);
    console.debug("gasLimit", gasLimit);

    const result = await client.signAndBroadcast(wallet.address, [createOrderMsg], fxDexTxConfig.fees);
    console.debug(result);
    if (result.code == 0) {
      console.debug(result.transactionHash);
    } else {
      console.error(result.rawLog);
    }
  });

  it("create order tx by mnemonic", async () => {
    const mnemonic =
      "dune antenna hood magic kit blouse film video another pioneer dilemma hobby message rug sail gas culture upgrade twin flag joke people general aunt";
    const ethWallet = Wallet.fromMnemonic(mnemonic);
    const sender = ethWallet.address;
    console.debug("address", sender);
    const wallet = await EthSecp256k1Wallet.fromKey(ethWallet.privateKey, fxDexTxConfig.options.prefix);

    console.debug("options", fxDexTxConfig.options);

    const client = await SigningFxClient.connectWithSigner(
      "http://127.0.0.1:26657",
      wallet,
      fxDexTxConfig.options,
    );

    const createOrderMsg: MsgCreateOrderEncodeObject = {
      typeUrl: "/fx.dex.v1.MsgCreateOrder",
      value: {
        owner: sender,
        pairId: "TSLA:USDT",
        direction: Direction.BUY,
        price: "100000",
        baseQuantity: "1000000",
        leverage: Long.fromValue(1),
      },
    };

    const gasLimit = await client.simulate(sender, [createOrderMsg], undefined);
    console.debug("gasLimit", gasLimit);

    const result = await client.signAndBroadcast(sender, [createOrderMsg], fxDexTxConfig.fees);
    console.debug(result);
    if (result.code == 0) {
      console.debug(result.transactionHash);
    } else {
      console.error(result.rawLog);
    }
  });

  it("send ibc transfer tx by mnemonic (fxdex to fxcore)", async () => {
    const pubkey = "0x0342c931c630cf00eb9429bd2a0a5c6cfba6801fbe867772ece0e12ade462467bf";

    const wallet = new OnlineWallet(pubkey, fxDexTxConfig.options.prefix, onlineFunc);

    const sender = wallet.address;
    console.debug("address", sender);

    console.debug("options", fxDexTxConfig.options);

    const client = await SigningFxClient.connectWithSigner(
      "http://127.0.0.01:26657",
      wallet,
      fxDexTxConfig.options,
    );

    const timeout = new Date();
    timeout.setDate(timeout.getDate() + 1);

    const ibcTransferMsg: FxMsgIbcTransferEncodeObject = {
      typeUrl: "/fx.ibc.applications.transfer.v1.MsgTransfer",
      value: {
        sourcePort: "transfer",
        sourceChannel: "channel-2",
        token: {
          denom: "USDT",
          amount: "10" + "0".repeat(fxDexTxConfig.precision),
        },
        sender: sender,
        receiver: "fx1vx7jqvys34jcm4dzzwwjcya02ku38rhmjm2kch",
        timeoutHeight: {
          revisionNumber: Long.fromValue("0"),
          revisionHeight: Long.fromValue("0"),
        },
        timeoutTimestamp: Long.fromValue(Date.parse(timeout.toString()) * 1_000_000),
        router: "",
        fee: {
          denom: "USDT",
          amount: "0",
        },
        memo: "",
      },
    };

    const gasLimit = await client.simulate(sender, [ibcTransferMsg], undefined);
    console.debug("gasLimit", gasLimit);

    const result = await client.signAndBroadcast(sender, [ibcTransferMsg], fxDexTxConfig.fees);
    console.debug(result);
    if (result.code == 0) {
      console.debug(result.transactionHash);
    } else {
      console.error(result.rawLog);
    }
  });

  it("send ibc transfer tx by mnemonic (fxcore to fxdex)", async () => {
    const pubkey = "0x0342c931c630cf00eb9429bd2a0a5c6cfba6801fbe867772ece0e12ade462467bf";

    const wallet = new OnlineWallet(pubkey, fxCoreTxConfig.options.prefix, onlineFunc, fxCoreTxConfig.algo);
    const sender = wallet.address;
    console.debug("address", sender);

    console.debug("options", fxCoreTxConfig.options);
    const client = await SigningFxClient.connectWithSigner(
      "http://127.0.0.1:26657",
      wallet,
      fxCoreTxConfig.options,
    );
    const balances = await client.getAllBalances(sender);
    console.debug("balances", balances);

    const timeout = new Date();
    timeout.setDate(timeout.getDate() + 1);

    const ibcTransferMsg: FxMsgIbcTransferEncodeObject = {
      typeUrl: "/fx.ibc.applications.transfer.v1.MsgTransfer",
      value: {
        sourcePort: "transfer",
        sourceChannel: "channel-0",
        token: {
          denom: "FX",
          amount: "1",
        },
        sender: sender,
        receiver: "0x61bd2030908d658dd5a2139D2C13Af55b9138efb",
        timeoutHeight: {
          revisionNumber: Long.fromString("0"),
          revisionHeight: Long.fromString("0"),
        },
        timeoutTimestamp: Long.fromValue(Date.parse(timeout.toString()) * 1e6),
        router: "",
        fee: {
          denom: "FX",
          amount: "0",
        },
        memo: "",
      },
    };

    let gasLimit = await client.simulate(sender, [ibcTransferMsg], undefined);
    gasLimit = Math.round(gasLimit * 1.3);
    console.debug("gasLimit", gasLimit);
    const gasPrice = fxCoreTxConfig.options.gasPrice;
    const fees: StdFee = {
      amount: coins(gasPrice.amount.multiply(Uint64.fromNumber(gasLimit)).toString(), gasPrice.denom),
      gas: gasLimit.toString(),
    };
    const result = await client.signAndBroadcast(sender, [ibcTransferMsg], fees);
    console.debug(result);
    if (result.code == 0) {
      console.debug(result.transactionHash);
    } else {
      console.error(result.rawLog);
    }
  });

  it("query chain", async function () {
    const client = await SigningFxClient.connect("http://127.0.0.1:26657");

    const address = "fx1ausfqqwyqn83e8x4l46qc2ydrqn0e3wnep02fs";

    const account = await client.getAccount(address);
    console.debug("account", account);

    const balances = await client.getAllBalances(address);
    console.debug("balances", balances);

    const balance = await client.getBalance(address, "FX");
    console.debug("balance", balance);

    const chainId = await client.getChainId();
    console.debug("chainId", chainId);

    const height = await client.getHeight();
    console.debug("height", height);

    const block = await client.getBlock();
    console.debug("block", block);
  });
});
