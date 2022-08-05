import { AminoSignResponse, encodeSecp256k1Signature, serializeSignDoc, StdSignDoc } from "@cosmjs/amino";
import { ExtendedSecp256k1Signature, Secp256k1Signature } from "@cosmjs/crypto";
import { fromHex } from "@cosmjs/encoding";
import { DirectSignResponse, makeSignBytes } from "@cosmjs/proto-signing";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { encodeEthSecp256k1Signature } from "./ethsecp256k1wallet";
import { pubKeyToAddress } from "./pubkey";
import { AccountData, Algo } from "./signer";

export interface AminoSigner {
  readonly getAccounts: () => Promise<readonly AccountData[]>;
  readonly signAmino: (signerAddress: string, signDoc: StdSignDoc) => Promise<AminoSignResponse>;
}

export type OnlineSignCallback = (signer: string, signData: Uint8Array) => Promise<string>;

export class OnlineWallet implements AminoSigner {
  private readonly pubkey: Uint8Array;
  private readonly prefix: string;
  private readonly algo: Algo;
  private readonly onlineFunc: OnlineSignCallback;
  public signDirect: any = undefined;

  public constructor(
    pubKey: Uint8Array | string,
    prefix: string,
    onlineFunc: OnlineSignCallback,
    algo: Algo = "eth_secp256k1",
    isDirectSign = false,
  ) {
    let pubKeyBytes: Uint8Array;
    if (typeof pubKey == "string") {
      pubKeyBytes = fromHex(pubKey.startsWith("0x") ? pubKey.slice(2) : pubKey);
    } else {
      pubKeyBytes = pubKey;
    }
    this.pubkey = pubKeyBytes;
    this.prefix = prefix;
    this.algo = algo;
    this.onlineFunc = onlineFunc;
    if (isDirectSign) {
      this.signDirect = async function (
        signerAddress: string,
        signDoc: SignDoc,
      ): Promise<DirectSignResponse> {
        const signBytes = makeSignBytes(signDoc);
        if (signerAddress !== this.address) {
          throw new Error(`Address ${signerAddress} not found in wallet`);
        }
        const signatureResult = fromHex(await this.onlineFunc(signerAddress, signBytes));
        let signature: Secp256k1Signature;
        if (signatureResult.length == 65) {
          signature = ExtendedSecp256k1Signature.fromFixedLength(signatureResult);
        } else {
          signature = Secp256k1Signature.fromFixedLength(signatureResult);
        }
        const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
        const stdSignature = encodeSecp256k1Signature(this.pubkey, signatureBytes);
        return {
          signed: signDoc,
          signature: stdSignature,
        };
      };
    }
  }

  public get address(): string {
    return pubKeyToAddress(this.pubkey, this.prefix);
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    return [
      {
        algo: this.algo,
        address: this.address,
        pubkey: this.pubkey,
      },
    ];
  }

  public async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
    if (signerAddress !== this.address) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }
    const signBytes = serializeSignDoc(signDoc);
    const signatureResult = fromHex(await this.onlineFunc(signerAddress, signBytes));
    let signature: Secp256k1Signature;
    if (signatureResult.length == 65) {
      signature = ExtendedSecp256k1Signature.fromFixedLength(signatureResult);
    } else {
      signature = Secp256k1Signature.fromFixedLength(signatureResult);
    }
    const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
    return {
      signed: signDoc,
      signature: encodeEthSecp256k1Signature(this.pubkey, signatureBytes),
    };
  }
}
