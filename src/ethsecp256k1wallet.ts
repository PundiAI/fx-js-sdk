import { StdSignature } from "@cosmjs/amino";
import { serializeSignDoc, StdSignDoc } from "@cosmjs/amino";
import { Secp256k1, Sha256 } from "@cosmjs/crypto";
import { fromHex, toBase64 } from "@cosmjs/encoding";

import { encodePubkeyByAlgo, pubKeyToAddress } from "./pubkey";
import { AccountData, AminoSigner, AminoSignResponse } from "./signer";

/**
 * A wallet that holds a single secp256k1 keypair.
 *
 * If you want to work with BIP39 mnemonics and multiple accounts, use Secp256k1HdWallet.
 */
export class EthSecp256k1Wallet implements AminoSigner {
  /**
   * Creates a Secp256k1Wallet from the given private key
   *
   * @param privkey The private key.
   * @param prefix The bech32 address prefix (human readable part). Defaults to "cosmos".
   */
  public static async fromKey(privkey: Uint8Array | string, prefix: string): Promise<EthSecp256k1Wallet> {
    let privKeyBytes: Uint8Array;
    if (typeof privkey == "string") {
      privKeyBytes = fromHex(privkey.startsWith("0x") ? privkey.slice(2) : privkey);
    } else {
      privKeyBytes = privkey;
    }
    const uncompressed = (await Secp256k1.makeKeypair(privKeyBytes)).pubkey;
    return new EthSecp256k1Wallet(privKeyBytes, Secp256k1.compressPubkey(uncompressed), prefix);
  }

  private readonly pubkey: Uint8Array;
  private readonly privkey: Uint8Array;
  private readonly prefix: string;

  private constructor(privkey: Uint8Array, pubkey: Uint8Array, prefix: string) {
    this.privkey = privkey;
    this.pubkey = pubkey;
    this.prefix = prefix;
  }

  private get address(): string {
    return pubKeyToAddress(this.pubkey, this.prefix);
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    return [
      {
        algo: "eth_secp256k1",
        address: this.address,
        pubkey: this.pubkey,
      },
    ];
  }

  public async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
    if (signerAddress !== this.address) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }
    const message = new Sha256(serializeSignDoc(signDoc)).digest();
    const signature = await Secp256k1.createSignature(message, this.privkey);
    const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
    return {
      signed: signDoc,
      signature: encodeEthSecp256k1Signature(this.pubkey, signatureBytes),
    };
  }
}

export function encodeEthSecp256k1Signature(pubkey: Uint8Array, signature: Uint8Array): StdSignature {
  if (signature.length !== 64) {
    throw new Error(
      "Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.",
    );
  }

  return {
    pub_key: encodePubkeyByAlgo("eth_secp256k1", pubkey),
    signature: toBase64(signature),
  };
}
