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
    const mnemonic =
      "victory chief couch wedding salt mention pen airport young color claw wait genius coffee nominee eight motor screen require home budget enjoy copy tornado";
    const ethWallet = Wallet.fromMnemonic(mnemonic);
    const publicKey = Secp256k1.compressPubkey(arrayify(ethWallet.publicKey));

    expect(ethWallet.privateKey).toBe("0x91630c1f3b8a8648fc96761685f0106f68a2d9a2fb32a065a7417967cda8583c");

    expect(hexlify(publicKey)).toBe("0x0342c931c630cf00eb9429bd2a0a5c6cfba6801fbe867772ece0e12ade462467bf");

    expect(pubKeyToAddress(publicKey, "0x")).toBe("0xEF209001c404Cf1c9Cd5fd740c288D1826fCC5d3");
    expect(pubKeyToAddress(publicKey, "fx")).toBe("fx1ausfqqwyqn83e8x4l46qc2ydrqn0e3wnep02fs");

    expect(toBase64(publicKey)).toBe("A0LJMcYwzwDrlCm9KgpcbPumgB++hndy7ODhKt5GJGe/");
  });
});
