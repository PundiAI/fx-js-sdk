/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Duration } from "cosmjs-types/google/protobuf/duration";

export const protobufPackage = "fx.gov.v1";

/** Params defines the fx x/gov module params */
export interface Params {
  msgType: string;
  minDeposit: Coin[];
  minInitialDeposit?: Coin;
  votingPeriod?: Duration;
  quorum: string;
  maxDepositPeriod?: Duration;
  threshold: string;
  vetoThreshold: string;
}

export interface EGFParams {
  egfDepositThreshold?: Coin;
  claimRatio: string;
}

function createBaseParams(): Params {
  return {
    msgType: "",
    minDeposit: [],
    minInitialDeposit: undefined,
    votingPeriod: undefined,
    quorum: "",
    maxDepositPeriod: undefined,
    threshold: "",
    vetoThreshold: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.minInitialDeposit !== undefined) {
      Coin.encode(message.minInitialDeposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(42).string(message.quorum);
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.threshold !== "") {
      writer.uint32(58).string(message.threshold);
    }
    if (message.vetoThreshold !== "") {
      writer.uint32(66).string(message.vetoThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.msgType = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.minInitialDeposit = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.votingPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.quorum = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.threshold = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.vetoThreshold = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      msgType: isSet(object.msgType) ? String(object.msgType) : "",
      minDeposit: Array.isArray(object?.minDeposit)
        ? object.minDeposit.map((e: any) => Coin.fromJSON(e))
        : [],
      minInitialDeposit: isSet(object.minInitialDeposit)
        ? Coin.fromJSON(object.minInitialDeposit)
        : undefined,
      votingPeriod: isSet(object.votingPeriod) ? Duration.fromJSON(object.votingPeriod) : undefined,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      maxDepositPeriod: isSet(object.maxDepositPeriod)
        ? Duration.fromJSON(object.maxDepositPeriod)
        : undefined,
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      vetoThreshold: isSet(object.vetoThreshold) ? String(object.vetoThreshold) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.minDeposit = [];
    }
    message.minInitialDeposit !== undefined &&
      (obj.minInitialDeposit = message.minInitialDeposit
        ? Coin.toJSON(message.minInitialDeposit)
        : undefined);
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.maxDepositPeriod !== undefined &&
      (obj.maxDepositPeriod = message.maxDepositPeriod
        ? Duration.toJSON(message.maxDepositPeriod)
        : undefined);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined && (obj.vetoThreshold = message.vetoThreshold);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.msgType = object.msgType ?? "";
    message.minDeposit = object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.minInitialDeposit =
      object.minInitialDeposit !== undefined && object.minInitialDeposit !== null
        ? Coin.fromPartial(object.minInitialDeposit)
        : undefined;
    message.votingPeriod =
      object.votingPeriod !== undefined && object.votingPeriod !== null
        ? Duration.fromPartial(object.votingPeriod)
        : undefined;
    message.quorum = object.quorum ?? "";
    message.maxDepositPeriod =
      object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null
        ? Duration.fromPartial(object.maxDepositPeriod)
        : undefined;
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    return message;
  },
};

function createBaseEGFParams(): EGFParams {
  return { egfDepositThreshold: undefined, claimRatio: "" };
}

export const EGFParams = {
  encode(message: EGFParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.egfDepositThreshold !== undefined) {
      Coin.encode(message.egfDepositThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (message.claimRatio !== "") {
      writer.uint32(18).string(message.claimRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EGFParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEGFParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.egfDepositThreshold = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.claimRatio = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EGFParams {
    return {
      egfDepositThreshold: isSet(object.egfDepositThreshold)
        ? Coin.fromJSON(object.egfDepositThreshold)
        : undefined,
      claimRatio: isSet(object.claimRatio) ? String(object.claimRatio) : "",
    };
  },

  toJSON(message: EGFParams): unknown {
    const obj: any = {};
    message.egfDepositThreshold !== undefined &&
      (obj.egfDepositThreshold = message.egfDepositThreshold
        ? Coin.toJSON(message.egfDepositThreshold)
        : undefined);
    message.claimRatio !== undefined && (obj.claimRatio = message.claimRatio);
    return obj;
  },

  create<I extends Exact<DeepPartial<EGFParams>, I>>(base?: I): EGFParams {
    return EGFParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EGFParams>, I>>(object: I): EGFParams {
    const message = createBaseEGFParams();
    message.egfDepositThreshold =
      object.egfDepositThreshold !== undefined && object.egfDepositThreshold !== null
        ? Coin.fromPartial(object.egfDepositThreshold)
        : undefined;
    message.claimRatio = object.claimRatio ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
