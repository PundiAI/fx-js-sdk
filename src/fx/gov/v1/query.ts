/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EGFParams, Params } from "./params";

export const protobufPackage = "fx.gov.v1";

/** QueryBaseParamsRequest is the request type for the Query/BaseParams RPC method. */
export interface QueryParamsRequest {
  msgType: string;
}

/**
 * QueryBaseParamsResponse is the response type for the Query/BaseParams RPC
 * method.
 */
export interface QueryParamsResponse {
  params?: Params;
}

/** QueryEGFParamsRequest is the request type for the Query/EGFParams RPC method. */
export interface QueryEGFParamsRequest {}

/**
 * QueryEGFParamsResponse is the response type for the Query/EGFParams RPC
 * method.
 */
export interface QueryEGFParamsResponse {
  params?: EGFParams;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { msgType: "" };
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.msgType = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    return { msgType: isSet(object.msgType) ? String(object.msgType) : "" };
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(object: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.msgType = object.msgType ?? "";
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseQueryEGFParamsRequest(): QueryEGFParamsRequest {
  return {};
}

export const QueryEGFParamsRequest = {
  encode(_: QueryEGFParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEGFParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEGFParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryEGFParamsRequest {
    return {};
  },

  toJSON(_: QueryEGFParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEGFParamsRequest>, I>>(base?: I): QueryEGFParamsRequest {
    return QueryEGFParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEGFParamsRequest>, I>>(_: I): QueryEGFParamsRequest {
    const message = createBaseQueryEGFParamsRequest();
    return message;
  },
};

function createBaseQueryEGFParamsResponse(): QueryEGFParamsResponse {
  return { params: undefined };
}

export const QueryEGFParamsResponse = {
  encode(message: QueryEGFParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      EGFParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEGFParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEGFParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.params = EGFParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEGFParamsResponse {
    return { params: isSet(object.params) ? EGFParams.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryEGFParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? EGFParams.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryEGFParamsResponse>, I>>(base?: I): QueryEGFParamsResponse {
    return QueryEGFParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryEGFParamsResponse>, I>>(object: I): QueryEGFParamsResponse {
    const message = createBaseQueryEGFParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? EGFParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service for fx/x/gov module */
export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  EGFParams(request: QueryEGFParamsRequest): Promise<QueryEGFParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.gov.v1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EGFParams = this.EGFParams.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  EGFParams(request: QueryEGFParamsRequest): Promise<QueryEGFParamsResponse> {
    const data = QueryEGFParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EGFParams", data);
    return promise.then((data) => QueryEGFParamsResponse.decode(_m0.Reader.create(data)));
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
