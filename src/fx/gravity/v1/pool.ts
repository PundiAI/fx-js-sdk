/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fx.gravity.v1";

/** IDSet represents a set of IDs */
export interface IDSet {
  ids: Long[];
}

export interface BatchFees {
  tokenContract: string;
  totalFees: string;
  totalTxs: Long;
  totalAmount: string;
}

export interface MinBatchFee {
  tokenContract: string;
  baseFee: string;
}

function createBaseIDSet(): IDSet {
  return { ids: [] };
}

export const IDSet = {
  encode(message: IDSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromString(e)) : [],
    };
  },

  toJSON(message: IDSet): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IDSet>, I>>(object: I): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseBatchFees(): BatchFees {
  return { tokenContract: "", totalFees: "", totalTxs: Long.UZERO, totalAmount: "" };
}

export const BatchFees = {
  encode(message: BatchFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenContract !== "") {
      writer.uint32(10).string(message.tokenContract);
    }
    if (message.totalFees !== "") {
      writer.uint32(18).string(message.totalFees);
    }
    if (!message.totalTxs.isZero()) {
      writer.uint32(24).uint64(message.totalTxs);
    }
    if (message.totalAmount !== "") {
      writer.uint32(34).string(message.totalAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenContract = reader.string();
          break;
        case 2:
          message.totalFees = reader.string();
          break;
        case 3:
          message.totalTxs = reader.uint64() as Long;
          break;
        case 4:
          message.totalAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchFees {
    return {
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      totalFees: isSet(object.totalFees) ? String(object.totalFees) : "",
      totalTxs: isSet(object.totalTxs) ? Long.fromString(object.totalTxs) : Long.UZERO,
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
    };
  },

  toJSON(message: BatchFees): unknown {
    const obj: any = {};
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.totalFees !== undefined && (obj.totalFees = message.totalFees);
    message.totalTxs !== undefined && (obj.totalTxs = (message.totalTxs || Long.UZERO).toString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchFees>, I>>(object: I): BatchFees {
    const message = createBaseBatchFees();
    message.tokenContract = object.tokenContract ?? "";
    message.totalFees = object.totalFees ?? "";
    message.totalTxs =
      object.totalTxs !== undefined && object.totalTxs !== null
        ? Long.fromValue(object.totalTxs)
        : Long.UZERO;
    message.totalAmount = object.totalAmount ?? "";
    return message;
  },
};

function createBaseMinBatchFee(): MinBatchFee {
  return { tokenContract: "", baseFee: "" };
}

export const MinBatchFee = {
  encode(message: MinBatchFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenContract !== "") {
      writer.uint32(10).string(message.tokenContract);
    }
    if (message.baseFee !== "") {
      writer.uint32(18).string(message.baseFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinBatchFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinBatchFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenContract = reader.string();
          break;
        case 2:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinBatchFee {
    return {
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
    };
  },

  toJSON(message: MinBatchFee): unknown {
    const obj: any = {};
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MinBatchFee>, I>>(object: I): MinBatchFee {
    const message = createBaseMinBatchFee();
    message.tokenContract = object.tokenContract ?? "";
    message.baseFee = object.baseFee ?? "";
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
