import { coins } from "@cosmjs/amino";
import { Decimal } from "@cosmjs/math";
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, GasPrice } from "@cosmjs/stargate";

import { accountFromAny } from "./accounts";
import {
  dexAminoConverters,
  dexTypes,
  fxgovAminoConverters,
  fxibcAminoConverters,
  fxibcTypes,
} from "./modules";
import { fxgovTypes } from "./modules/gov/messages";
import { Algo } from "./signer";

export const fxDexTxConfig = {
  options: {
    broadcastPollIntervalMs: 300,
    broadcastTimeoutMs: 8_000,
    prefix: "0x",
    registry: new Registry([...dexTypes, ...fxibcTypes]),
    aminoTypes: new AminoTypes({
      ...dexAminoConverters(6),
      ...fxibcAminoConverters("cosmos-sdk/MsgTransfer"),
    }),
    gasPrice: GasPrice.fromString("0.0006USDT"),
    accountParser: accountFromAny,
  },
  algo: "eth_secp256k1",

  fees: {
    amount: coins("3000", "USDT"),
    gas: "5000000",
  },
  precision: 6,
};

export const fxCoreTxConfigClassic = {
  options: {
    broadcastPollIntervalMs: 300,
    broadcastTimeoutMs: 8_000,
    prefix: "fx",
    registry: new Registry([...fxibcTypes, ...fxgovTypes]),
    aminoTypes: new AminoTypes({
      ...fxibcAminoConverters(),
      ...fxgovAminoConverters(),
    }),
    gasPrice: new GasPrice(Decimal.fromUserInput("4000000000000", 18), "FX"),
    accountParser: accountFromAny,
  },
  algo: "secp256k1" as Algo,

  fees: undefined,
  precision: 18,
};

export const fxCoreTxConfig = {
  options: {
    broadcastPollIntervalMs: 300,
    broadcastTimeoutMs: 8_000,
    prefix: "fx",
    registry: new Registry([...fxibcTypes, ...fxgovTypes]),
    aminoTypes: new AminoTypes({
      ...fxibcAminoConverters(),
      ...fxgovAminoConverters(),
    }),
    gasPrice: new GasPrice(Decimal.fromUserInput("4000000000000", 18), "FX"),
    accountParser: accountFromAny,
  },
  algo: "eth_secp256k1" as Algo,

  fees: undefined,
  precision: 18,
};
