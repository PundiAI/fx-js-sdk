/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MigrateRecord } from "./migrate";

export const protobufPackage = "fx.migrate.v1";

export interface QueryMigrateRecordRequest {
  address: string;
}

export interface QueryMigrateRecordResponse {
  /** has migrate true-> migrated, false-> not migrated. */
  found: boolean;
  /** migrateRecord defines the the migrate record. */
  migrateRecord?: MigrateRecord;
}

export interface QueryMigrateCheckAccountRequest {
  /** migrate from address */
  from: string;
  /** migrate to address */
  to: string;
}

export interface QueryMigrateCheckAccountResponse {}

function createBaseQueryMigrateRecordRequest(): QueryMigrateRecordRequest {
  return { address: "" };
}

export const QueryMigrateRecordRequest = {
  encode(message: QueryMigrateRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMigrateRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrateRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMigrateRecordRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryMigrateRecordRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMigrateRecordRequest>, I>>(
    object: I,
  ): QueryMigrateRecordRequest {
    const message = createBaseQueryMigrateRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryMigrateRecordResponse(): QueryMigrateRecordResponse {
  return { found: false, migrateRecord: undefined };
}

export const QueryMigrateRecordResponse = {
  encode(message: QueryMigrateRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.found === true) {
      writer.uint32(8).bool(message.found);
    }
    if (message.migrateRecord !== undefined) {
      MigrateRecord.encode(message.migrateRecord, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMigrateRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrateRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.found = reader.bool();
          break;
        case 2:
          message.migrateRecord = MigrateRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMigrateRecordResponse {
    return {
      found: isSet(object.found) ? Boolean(object.found) : false,
      migrateRecord: isSet(object.migrateRecord) ? MigrateRecord.fromJSON(object.migrateRecord) : undefined,
    };
  },

  toJSON(message: QueryMigrateRecordResponse): unknown {
    const obj: any = {};
    message.found !== undefined && (obj.found = message.found);
    message.migrateRecord !== undefined &&
      (obj.migrateRecord = message.migrateRecord ? MigrateRecord.toJSON(message.migrateRecord) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMigrateRecordResponse>, I>>(
    object: I,
  ): QueryMigrateRecordResponse {
    const message = createBaseQueryMigrateRecordResponse();
    message.found = object.found ?? false;
    message.migrateRecord =
      object.migrateRecord !== undefined && object.migrateRecord !== null
        ? MigrateRecord.fromPartial(object.migrateRecord)
        : undefined;
    return message;
  },
};

function createBaseQueryMigrateCheckAccountRequest(): QueryMigrateCheckAccountRequest {
  return { from: "", to: "" };
}

export const QueryMigrateCheckAccountRequest = {
  encode(message: QueryMigrateCheckAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMigrateCheckAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrateCheckAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMigrateCheckAccountRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
    };
  },

  toJSON(message: QueryMigrateCheckAccountRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMigrateCheckAccountRequest>, I>>(
    object: I,
  ): QueryMigrateCheckAccountRequest {
    const message = createBaseQueryMigrateCheckAccountRequest();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
};

function createBaseQueryMigrateCheckAccountResponse(): QueryMigrateCheckAccountResponse {
  return {};
}

export const QueryMigrateCheckAccountResponse = {
  encode(_: QueryMigrateCheckAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMigrateCheckAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrateCheckAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryMigrateCheckAccountResponse {
    return {};
  },

  toJSON(_: QueryMigrateCheckAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMigrateCheckAccountResponse>, I>>(
    _: I,
  ): QueryMigrateCheckAccountResponse {
    const message = createBaseQueryMigrateCheckAccountResponse();
    return message;
  },
};

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  MigrateRecord(request: QueryMigrateRecordRequest): Promise<QueryMigrateRecordResponse>;
  MigrateCheckAccount(request: QueryMigrateCheckAccountRequest): Promise<QueryMigrateCheckAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.migrate.v1.Query";
    this.rpc = rpc;
    this.MigrateRecord = this.MigrateRecord.bind(this);
    this.MigrateCheckAccount = this.MigrateCheckAccount.bind(this);
  }
  MigrateRecord(request: QueryMigrateRecordRequest): Promise<QueryMigrateRecordResponse> {
    const data = QueryMigrateRecordRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MigrateRecord", data);
    return promise.then((data) => QueryMigrateRecordResponse.decode(new _m0.Reader(data)));
  }

  MigrateCheckAccount(request: QueryMigrateCheckAccountRequest): Promise<QueryMigrateCheckAccountResponse> {
    const data = QueryMigrateCheckAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MigrateCheckAccount", data);
    return promise.then((data) => QueryMigrateCheckAccountResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
