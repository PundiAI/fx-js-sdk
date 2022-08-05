import { coins } from "@cosmjs/amino";
import { Decimal } from "@cosmjs/math";
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, GasPrice } from "@cosmjs/stargate";
import { defaultSigningClientOptions } from "@cosmjs/stargate/build/testutils.spec";

import { accountFromAny } from "./accounts";
import { dexAminoConverters, dexTypes, ibcAminoConverters, ibcTypes } from "./modules";

export const fxDexTxConfig = {
  options: {
    ...defaultSigningClientOptions,
    prefix: "0x",
    registry: new Registry([...dexTypes, ...ibcTypes]),
    aminoTypes: new AminoTypes({
      ...dexAminoConverters(6),
      ...ibcAminoConverters(),
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
    ...defaultSigningClientOptions,
    prefix: "fx",
    registry: new Registry([...ibcTypes]),
    aminoTypes: new AminoTypes({
      ...ibcAminoConverters(),
    }),
    gasPrice: new GasPrice(Decimal.fromUserInput("4000000000000", 18), "FX"),
    accountParser: accountFromAny,
  },
  algo: "eth_secp256k1",

  fees: undefined,
  precision: 18,
};

export const fxCoreTxConfig = {
  options: {
    ...defaultSigningClientOptions,
    prefix: "fx",
    registry: new Registry([...ibcTypes]),
    aminoTypes: new AminoTypes({
      ...ibcAminoConverters(),
    }),
    gasPrice: new GasPrice(Decimal.fromUserInput("4000000000000", 18), "FX"),
    accountParser: accountFromAny,
  },
  algo: "eth_secp256k1",

  fees: undefined,
  precision: 18,
};
