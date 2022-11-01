import { coins, StdFee } from "@cosmjs/amino";
import { Sha256 } from "@cosmjs/crypto";
import { fromHex, fromUtf8, toHex } from "@cosmjs/encoding";
import { Uint64 } from "@cosmjs/math";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, createBankAminoConverters, defaultRegistryTypes } from "@cosmjs/stargate";
import { keccak256 } from "@ethersproject/keccak256";
import { SigningKey } from "@ethersproject/signing-key";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";

import { fxCoreTxConfig } from "./index";
import { OnlineWallet } from "./onlinewallet";
import { SigningFxClient } from "./signingfxclient";

async function onlineFunc(signer: string, signData: Uint8Array): Promise<string> {
  // 2. walletconnect sign: functionx_wc_sign_tx_v1
  console.debug("signData", fromUtf8(signData));

  // private key simulation
  const msgHash = new Sha256(signData).digest();
  console.debug("msgHash", toHex(msgHash));
  const testPrivateKey = fromHex("91630c1f3b8a8648fc96761685f0106f68a2d9a2fb32a065a7417967cda8583c");
  const privateKey = new SigningKey(testPrivateKey);
  const signature = privateKey.signDigest(keccak256(signData));
  return toHex(
    new Uint8Array([...fromHex(signature.r.slice(2)), ...fromHex(signature.s.slice(2)), signature.v - 27]),
  );
}

describe("walletconnect denom", () => {
  it("transfer tx", async () => {
    // 1 get account: functionx_wc_accounts_v1
    // public key simulation
    const pubkey = "0x0342c931c630cf00eb9429bd2a0a5c6cfba6801fbe867772ece0e12ade462467bf";
    console.debug("pubkey", pubkey);

    const wallet = new OnlineWallet(pubkey, "fx", onlineFunc, fxCoreTxConfig.algo);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const registry = new Registry([...defaultRegistryTypes]);
    const aminoTypes = new AminoTypes({
      ...createBankAminoConverters(),
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
});
