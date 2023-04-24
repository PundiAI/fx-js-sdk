import { coins, StdFee } from "@cosmjs/amino";
import { Sha256 } from "@cosmjs/crypto";
import { fromHex, fromUtf8, toHex } from "@cosmjs/encoding";
import { Uint64 } from "@cosmjs/math";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { keccak256 } from "@ethersproject/keccak256";
import { SigningKey } from "@ethersproject/signing-key";

import { fxCoreTxConfig } from "./index";
import { SigningFxClient } from "./signingfxclient";

export const testPrivateKeyHex = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const testPublicKeyHex = "0x038318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75";

export async function onlineFunc(signer: string, signData: Uint8Array): Promise<string> {
  // 2. walletconnect sign: functionx_wc_sign_tx_v1
  console.debug("signData", fromUtf8(signData));

  // private key simulation
  const msgHash = new Sha256(signData).digest();
  console.debug("msgHash", toHex(msgHash));
  const testPrivateKey = fromHex(testPrivateKeyHex);
  const privateKey = new SigningKey(testPrivateKey);
  const signature = privateKey.signDigest(keccak256(signData));
  return toHex(
    new Uint8Array([...fromHex(signature.r.slice(2)), ...fromHex(signature.s.slice(2)), signature.v - 27]),
  );
}

export async function signAndBroadcast(
  client: SigningFxClient,
  sender: string,
  messages: readonly EncodeObject[],
  gasPrice: GasPrice = fxCoreTxConfig.options.gasPrice,
): Promise<number> {
  let gasLimit = await client.simulate(sender, messages, undefined);
  gasLimit = Math.round(gasLimit * 1.3);
  console.debug("gasLimit", gasLimit);
  const fees: StdFee = {
    amount: coins(gasPrice.amount.multiply(Uint64.fromNumber(gasLimit)).toString(), gasPrice.denom),
    gas: gasLimit.toString(),
  };
  const result = await client.signAndBroadcast(sender, messages, fees);
  console.debug(result);
  return result.code;
}
