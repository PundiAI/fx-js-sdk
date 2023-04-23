import { Secp256k1 } from "@cosmjs/crypto";
import { toBase64 } from "@cosmjs/encoding";
import { arrayify, hexlify } from "@ethersproject/bytes";
import { Wallet } from "ethers";

import { hexAddressToBech32, pubKeyToAddress } from "./pubkey";

describe("address", () => {
  it("hex address to bech32", () => {
    expect(hexAddressToBech32("fx", "0x61bd2030908d658dd5a2139D2C13Af55b9138efb")).toBe(
      "fx1vx7jqvys34jcm4dzzwwjcya02ku38rhmjm2kch",
    );
  });

  it("pub key to address", () => {
    // private b3d59ae908fdfdcd2cd1e7a2dd8b694c5b621714836a758e05062cdc78f8ecb5
    const pubkey = "0352fa32f8fb8515b9341847e7dcdc419a2701b77756e43cb22ddd3c0e1adaa526";
    expect(pubKeyToAddress(pubkey, "0x")).toBe("0x61bd2030908d658dd5a2139D2C13Af55b9138efb");
    expect(pubKeyToAddress(pubkey, "fx")).toBe("fx1vx7jqvys34jcm4dzzwwjcya02ku38rhmjm2kch");
  });

  it("mnemonic to private key ", () => {
    const mnemonic = "test test test test test test test test test test test junk";
    const ethWallet = Wallet.fromMnemonic(mnemonic);
    const publicKey = Secp256k1.compressPubkey(arrayify(ethWallet.publicKey));

    expect(ethWallet.privateKey).toBe("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");

    expect(hexlify(publicKey)).toBe("0x038318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75");

    expect(pubKeyToAddress(publicKey, "0x")).toBe("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    expect(pubKeyToAddress(publicKey, "fx")).toBe("fx17w0adeg64ky0daxwd2ugyuneellmjgnxed28x3");

    expect(toBase64(publicKey)).toBe("A4MYU1tUEF1Keq5gwI/EX5aHGBtP38YlvRp1P6c5f+11");
  });
});
