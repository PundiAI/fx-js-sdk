/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Duration } from "cosmjs-types/google/protobuf/duration";

export const protobufPackage = "fx.gov.v1";

/** Params defines the fx x/gov module params */
export interface Params {
  minInitialDeposit?: Coin;
  egfDepositThreshold?: Coin;
  claimRatio: string;
  erc20Quorum: string;
  evmQuorum: string;
  egfVotingPeriod?: Duration;
  evmVotingPeriod?: Duration;
}

function createBaseParams(): Params {
  return {
    minInitialDeposit: undefined,
    egfDepositThreshold: undefined,
    claimRatio: "",
    erc20Quorum: "",
    evmQuorum: "",
    egfVotingPeriod: undefined,
    evmVotingPeriod: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minInitialDeposit !== undefined) {
      Coin.encode(message.minInitialDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.egfDepositThreshold !== undefined) {
      Coin.encode(message.egfDepositThreshold, writer.uint32(18).fork()).ldelim();
    }
    if (message.claimRatio !== "") {
      writer.uint32(26).string(message.claimRatio);
    }
    if (message.erc20Quorum !== "") {
      writer.uint32(34).string(message.erc20Quorum);
    }
    if (message.evmQuorum !== "") {
      writer.uint32(42).string(message.evmQuorum);
    }
    if (message.egfVotingPeriod !== undefined) {
      Duration.encode(message.egfVotingPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.evmVotingPeriod !== undefined) {
      Duration.encode(message.evmVotingPeriod, writer.uint32(58).fork()).ldelim();
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

          message.minInitialDeposit = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.egfDepositThreshold = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.claimRatio = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.erc20Quorum = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.evmQuorum = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.egfVotingPeriod = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.evmVotingPeriod = Duration.decode(reader, reader.uint32());
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
      minInitialDeposit: isSet(object.minInitialDeposit)
        ? Coin.fromJSON(object.minInitialDeposit)
        : undefined,
      egfDepositThreshold: isSet(object.egfDepositThreshold)
        ? Coin.fromJSON(object.egfDepositThreshold)
        : undefined,
      claimRatio: isSet(object.claimRatio) ? String(object.claimRatio) : "",
      erc20Quorum: isSet(object.erc20Quorum) ? String(object.erc20Quorum) : "",
      evmQuorum: isSet(object.evmQuorum) ? String(object.evmQuorum) : "",
      egfVotingPeriod: isSet(object.egfVotingPeriod) ? Duration.fromJSON(object.egfVotingPeriod) : undefined,
      evmVotingPeriod: isSet(object.evmVotingPeriod) ? Duration.fromJSON(object.evmVotingPeriod) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.minInitialDeposit !== undefined &&
      (obj.minInitialDeposit = message.minInitialDeposit
        ? Coin.toJSON(message.minInitialDeposit)
        : undefined);
    message.egfDepositThreshold !== undefined &&
      (obj.egfDepositThreshold = message.egfDepositThreshold
        ? Coin.toJSON(message.egfDepositThreshold)
        : undefined);
    message.claimRatio !== undefined && (obj.claimRatio = message.claimRatio);
    message.erc20Quorum !== undefined && (obj.erc20Quorum = message.erc20Quorum);
    message.evmQuorum !== undefined && (obj.evmQuorum = message.evmQuorum);
    message.egfVotingPeriod !== undefined &&
      (obj.egfVotingPeriod = message.egfVotingPeriod ? Duration.toJSON(message.egfVotingPeriod) : undefined);
    message.evmVotingPeriod !== undefined &&
      (obj.evmVotingPeriod = message.evmVotingPeriod ? Duration.toJSON(message.evmVotingPeriod) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.minInitialDeposit =
      object.minInitialDeposit !== undefined && object.minInitialDeposit !== null
        ? Coin.fromPartial(object.minInitialDeposit)
        : undefined;
    message.egfDepositThreshold =
      object.egfDepositThreshold !== undefined && object.egfDepositThreshold !== null
        ? Coin.fromPartial(object.egfDepositThreshold)
        : undefined;
    message.claimRatio = object.claimRatio ?? "";
    message.erc20Quorum = object.erc20Quorum ?? "";
    message.evmQuorum = object.evmQuorum ?? "";
    message.egfVotingPeriod =
      object.egfVotingPeriod !== undefined && object.egfVotingPeriod !== null
        ? Duration.fromPartial(object.egfVotingPeriod)
        : undefined;
    message.evmVotingPeriod =
      object.evmVotingPeriod !== undefined && object.evmVotingPeriod !== null
        ? Duration.fromPartial(object.evmVotingPeriod)
        : undefined;
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
