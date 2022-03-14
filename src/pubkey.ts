import {
  encodeSecp256k1Pubkey,
  isMultisigThresholdPubkey,
  isSecp256k1Pubkey,
  MultisigThresholdPubkey,
  Pubkey,
  SinglePubkey,
} from "@cosmjs/amino";
import { fromBase64, fromBech32, fromHex, toBase64, toBech32 } from "@cosmjs/encoding";
import { Uint53 } from "@cosmjs/math";
import { getAddress } from "@ethersproject/address";
import { arrayify } from "@ethersproject/bytes";
import { keccak256 } from "@ethersproject/keccak256";
import { computePublicKey } from "@ethersproject/signing-key";
import { LegacyAminoPubKey } from "cosmjs-types/cosmos/crypto/multisig/keys";
import { PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { Any } from "cosmjs-types/google/protobuf/any";
import { hexlify } from "ethers/lib/utils";

import { Algo } from "./signer";

export function encodePubkey(pubkey: Pubkey): Any {
  if (isSecp256k1Pubkey(pubkey)) {
    const pubkeyProto = PubKey.fromPartial({
      key: fromBase64(pubkey.value),
    });
    return Any.fromPartial({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: Uint8Array.from(PubKey.encode(pubkeyProto).finish()),
    });
  } else if (isMultisigThresholdPubkey(pubkey)) {
    const pubkeyProto = LegacyAminoPubKey.fromPartial({
      threshold: Uint53.fromString(pubkey.value.threshold).toNumber(),
      publicKeys: pubkey.value.pubkeys.map(encodePubkey),
    });
    return Any.fromPartial({
      typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
      value: Uint8Array.from(LegacyAminoPubKey.encode(pubkeyProto).finish()),
    });
  } else if (pubkey.type === "ethermint/PubKeyEthSecp256k1") {
    const pubkeyProto = PubKey.fromPartial({
      key: fromBase64(pubkey.value),
    });
    return Any.fromPartial({
      typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
      value: Uint8Array.from(PubKey.encode(pubkeyProto).finish()),
    });
  }
  {
    throw new Error(`Pubkey type ${pubkey.type} not recognized`);
  }
}

function decodeSinglePubkey(pubkey: Any): SinglePubkey {
  switch (pubkey.typeUrl) {
    case "/cosmos.crypto.secp256k1.PubKey": {
      const { key } = PubKey.decode(pubkey.value);
      return encodeSecp256k1Pubkey(key);
    }
    default:
      throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized as single public key type`);
  }
}

export function decodePubkey(pubkey?: Any | null): Pubkey | null {
  if (!pubkey || !pubkey.value) {
    return null;
  }

  switch (pubkey.typeUrl) {
    case "/cosmos.crypto.secp256k1.PubKey": {
      return decodeSinglePubkey(pubkey);
    }
    case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
      const { threshold, publicKeys } = LegacyAminoPubKey.decode(pubkey.value);
      const out: MultisigThresholdPubkey = {
        type: "tendermint/PubKeyMultisigThreshold",
        value: {
          threshold: threshold.toString(),
          pubkeys: publicKeys.map(decodeSinglePubkey),
        },
      };
      return out;
    }
    case "/ethermint.crypto.v1.ethsecp256k1.PubKey": {
      const { key } = PubKey.decode(pubkey.value);
      return {
        type: pubkey.typeUrl,
        value: toBase64(key),
      };
    }
    default:
      throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized`);
  }
}

export function pubKeyToAddress(pubKey: Uint8Array | string, prefix: string): string {
  let pubKeyBytes: Uint8Array;
  if (typeof pubKey == "string") {
    pubKeyBytes = fromHex(pubKey.startsWith("0x") ? pubKey.slice(2) : pubKey);
  } else {
    pubKeyBytes = pubKey;
  }
  const publicKey = fromHex(computePublicKey(pubKeyBytes, false).slice(4));
  const address = keccak256(publicKey).slice(-40);
  if (prefix !== "" && prefix !== "0x") {
    return toBech32(prefix, fromHex(address));
  } else {
    return getAddress(address);
  }
}

export function hexAddressToBech32(prefix: string, address: string): string {
  return toBech32(prefix, arrayify(address));
}

export function bech32ToHexAddress(address: string): string {
  return getAddress(hexlify(fromBech32(address).data));
}

export function encodePubkeyByAlgo(algo: Algo, pubkey: Uint8Array): Pubkey {
  if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
    throw new Error("Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03");
  }
  if (algo === "eth_secp256k1") {
    return {
      type: "ethermint/PubKeyEthSecp256k1",
      value: toBase64(pubkey),
    };
  } else {
    return encodeSecp256k1Pubkey(pubkey);
  }
}
