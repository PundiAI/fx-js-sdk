import { Wallet } from "ethers";
import Long from "long";

import { EthSecp256k1Wallet } from "./ethsecp256k1wallet";
import { fxCoreTxConfig, fxDexTxConfig } from "./index";
import { OnlineWallet } from "./onlinewallet";
import { SigningFxClient } from "./signingfxclient";
import { Direction } from "./types/fx/dex/v1/tx";
import { onlineFunc, signAndBroadcast, testPublicKeyHex } from "./walletconnect.spec";

describe("fxdex test", () => {
  it("create order tx by online wallet", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, fxDexTxConfig.options.prefix, onlineFunc);
    console.debug("address", wallet.address);

    const client = await SigningFxClient.connectWithSigner(
      "http://127.0.0.1:26657",
      wallet,
      fxDexTxConfig.options,
    );

    const createOrderMsg = {
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

    const code = await signAndBroadcast(
      client,
      wallet.address,
      [createOrderMsg],
      fxDexTxConfig.options.gasPrice,
    );
    expect(code).toEqual(0);
  });

  it("create order tx by mnemonic", async () => {
    const mnemonic = "test test test test test test test test test test test junk";
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

    const createOrderMsg = {
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

    const code = await signAndBroadcast(client, sender, [createOrderMsg], fxDexTxConfig.options.gasPrice);
    expect(code).toEqual(0);
  });

  it("send ibc transfer tx by mnemonic (fxdex to fxcore)", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, fxDexTxConfig.options.prefix, onlineFunc);

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

    const ibcTransferMsg = {
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

    const code = await signAndBroadcast(client, sender, [ibcTransferMsg], fxDexTxConfig.options.gasPrice);
    expect(code).toEqual(0);
  });

  it("send ibc transfer tx by mnemonic (fxcore to fxdex)", async () => {
    const wallet = new OnlineWallet(
      testPublicKeyHex,
      fxCoreTxConfig.options.prefix,
      onlineFunc,
      fxCoreTxConfig.algo,
    );
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

    const ibcTransferMsg = {
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

    const code = await signAndBroadcast(client, sender, [ibcTransferMsg]);
    expect(code).toEqual(0);
  });
});
