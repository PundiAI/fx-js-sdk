/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fx.migrate.v1";

export interface MigrateRecord {
  from: string;
  to: string;
  height: Long;
}

function createBaseMigrateRecord(): MigrateRecord {
  return { from: "", to: "", height: Long.ZERO };
}

export const MigrateRecord = {
  encode(message: MigrateRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.to = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MigrateRecord {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
    };
  },

  toJSON(message: MigrateRecord): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MigrateRecord>, I>>(base?: I): MigrateRecord {
    return MigrateRecord.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MigrateRecord>, I>>(object: I): MigrateRecord {
    const message = createBaseMigrateRecord();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
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
