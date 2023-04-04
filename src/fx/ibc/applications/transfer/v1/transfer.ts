/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fx.ibc.applications.transfer.v1";

/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** the router is hook destination chain */
  router: string;
  /** the fee is destination fee */
  fee: string;
  /** optional memo */
  memo: string;
}

function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return { denom: "", amount: "", sender: "", receiver: "", router: "", fee: "", memo: "" };
}

export const FungibleTokenPacketData = {
  encode(message: FungibleTokenPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.router !== "") {
      writer.uint32(42).string(message.router);
    }
    if (message.fee !== "") {
      writer.uint32(50).string(message.fee);
    }
    if (message.memo !== "") {
      writer.uint32(58).string(message.memo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FungibleTokenPacketData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.router = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.fee = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.memo = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FungibleTokenPacketData {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      router: isSet(object.router) ? String(object.router) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      memo: isSet(object.memo) ? String(object.memo) : "",
    };
  },

  toJSON(message: FungibleTokenPacketData): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.router !== undefined && (obj.router = message.router);
    message.fee !== undefined && (obj.fee = message.fee);
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },

  create<I extends Exact<DeepPartial<FungibleTokenPacketData>, I>>(base?: I): FungibleTokenPacketData {
    return FungibleTokenPacketData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FungibleTokenPacketData>, I>>(object: I): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.router = object.router ?? "";
    message.fee = object.fee ?? "";
    message.memo = object.memo ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
