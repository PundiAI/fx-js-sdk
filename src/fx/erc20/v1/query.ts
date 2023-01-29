/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "./erc20";
import { Params } from "./genesis";

export const protobufPackage = "fx.erc20.v1";

/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
  tokenPairs: TokenPair[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}

/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponse {
  tokenPair?: TokenPair;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params?: Params;
}

/**
 * QueryDenomAliasesRequest is the request type for the Query/DenomAliases RPC
 * method.
 */
export interface QueryDenomAliasesRequest {
  denom: string;
}

/**
 * QueryDenomAliasesResponse is the response type for the Query/DenomAliases RPC
 * method.
 */
export interface QueryDenomAliasesResponse {
  aliases: string[];
}

/**
 * QueryAliasDenomRequest is the request type for the Query/AliasDenom RPC
 * method.
 */
export interface QueryAliasDenomRequest {
  alias: string;
}

/**
 * QueryAliasDenomResponse is the response type for the Query/AliasDenom RPC
 * method.
 */
export interface QueryAliasDenomResponse {
  denom: string;
}

function createBaseQueryTokenPairsRequest(): QueryTokenPairsRequest {
  return { pagination: undefined };
}

export const QueryTokenPairsRequest = {
  encode(message: QueryTokenPairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryTokenPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenPairsRequest>, I>>(object: I): QueryTokenPairsRequest {
    const message = createBaseQueryTokenPairsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenPairsResponse(): QueryTokenPairsResponse {
  return { tokenPairs: [], pagination: undefined };
}

export const QueryTokenPairsResponse = {
  encode(message: QueryTokenPairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairsResponse {
    return {
      tokenPairs: Array.isArray(object?.tokenPairs)
        ? object.tokenPairs.map((e: any) => TokenPair.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTokenPairsResponse): unknown {
    const obj: any = {};
    if (message.tokenPairs) {
      obj.tokenPairs = message.tokenPairs.map((e) => (e ? TokenPair.toJSON(e) : undefined));
    } else {
      obj.tokenPairs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenPairsResponse>, I>>(object: I): QueryTokenPairsResponse {
    const message = createBaseQueryTokenPairsResponse();
    message.tokenPairs = object.tokenPairs?.map((e) => TokenPair.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryTokenPairRequest(): QueryTokenPairRequest {
  return { token: "" };
}

export const QueryTokenPairRequest = {
  encode(message: QueryTokenPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: QueryTokenPairRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenPairRequest>, I>>(object: I): QueryTokenPairRequest {
    const message = createBaseQueryTokenPairRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseQueryTokenPairResponse(): QueryTokenPairResponse {
  return { tokenPair: undefined };
}

export const QueryTokenPairResponse = {
  encode(message: QueryTokenPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenPair !== undefined) {
      TokenPair.encode(message.tokenPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPair = TokenPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPairResponse {
    return { tokenPair: isSet(object.tokenPair) ? TokenPair.fromJSON(object.tokenPair) : undefined };
  },

  toJSON(message: QueryTokenPairResponse): unknown {
    const obj: any = {};
    message.tokenPair !== undefined &&
      (obj.tokenPair = message.tokenPair ? TokenPair.toJSON(message.tokenPair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenPairResponse>, I>>(object: I): QueryTokenPairResponse {
    const message = createBaseQueryTokenPairResponse();
    message.tokenPair =
      object.tokenPair !== undefined && object.tokenPair !== null
        ? TokenPair.fromPartial(object.tokenPair)
        : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
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

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseQueryDenomAliasesRequest(): QueryDenomAliasesRequest {
  return { denom: "" };
}

export const QueryDenomAliasesRequest = {
  encode(message: QueryDenomAliasesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAliasesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAliasesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomAliasesRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryDenomAliasesRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomAliasesRequest>, I>>(
    object: I,
  ): QueryDenomAliasesRequest {
    const message = createBaseQueryDenomAliasesRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryDenomAliasesResponse(): QueryDenomAliasesResponse {
  return { aliases: [] };
}

export const QueryDenomAliasesResponse = {
  encode(message: QueryDenomAliasesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aliases) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAliasesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAliasesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aliases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomAliasesResponse {
    return { aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryDenomAliasesResponse): unknown {
    const obj: any = {};
    if (message.aliases) {
      obj.aliases = message.aliases.map((e) => e);
    } else {
      obj.aliases = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomAliasesResponse>, I>>(
    object: I,
  ): QueryDenomAliasesResponse {
    const message = createBaseQueryDenomAliasesResponse();
    message.aliases = object.aliases?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryAliasDenomRequest(): QueryAliasDenomRequest {
  return { alias: "" };
}

export const QueryAliasDenomRequest = {
  encode(message: QueryAliasDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAliasDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAliasDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alias = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAliasDenomRequest {
    return { alias: isSet(object.alias) ? String(object.alias) : "" };
  },

  toJSON(message: QueryAliasDenomRequest): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAliasDenomRequest>, I>>(object: I): QueryAliasDenomRequest {
    const message = createBaseQueryAliasDenomRequest();
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseQueryAliasDenomResponse(): QueryAliasDenomResponse {
  return { denom: "" };
}

export const QueryAliasDenomResponse = {
  encode(message: QueryAliasDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAliasDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAliasDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAliasDenomResponse {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryAliasDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAliasDenomResponse>, I>>(object: I): QueryAliasDenomResponse {
    const message = createBaseQueryAliasDenomResponse();
    message.denom = object.denom ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves registered token pairs */
  TokenPairs(request: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;
  /** Retrieves a registered token pair */
  TokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;
  /** Params retrieves the erc20 module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves registered denom aliases */
  DenomAliases(request: QueryDenomAliasesRequest): Promise<QueryDenomAliasesResponse>;
  /** Retrieves registered alias denom */
  AliasDenom(request: QueryAliasDenomRequest): Promise<QueryAliasDenomResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.erc20.v1.Query";
    this.rpc = rpc;
    this.TokenPairs = this.TokenPairs.bind(this);
    this.TokenPair = this.TokenPair.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomAliases = this.DenomAliases.bind(this);
    this.AliasDenom = this.AliasDenom.bind(this);
  }
  TokenPairs(request: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse> {
    const data = QueryTokenPairsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenPairs", data);
    return promise.then((data) => QueryTokenPairsResponse.decode(new _m0.Reader(data)));
  }

  TokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
    const data = QueryTokenPairRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenPair", data);
    return promise.then((data) => QueryTokenPairResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  DenomAliases(request: QueryDenomAliasesRequest): Promise<QueryDenomAliasesResponse> {
    const data = QueryDenomAliasesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomAliases", data);
    return promise.then((data) => QueryDenomAliasesResponse.decode(new _m0.Reader(data)));
  }

  AliasDenom(request: QueryAliasDenomRequest): Promise<QueryAliasDenomResponse> {
    const data = QueryAliasDenomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AliasDenom", data);
    return promise.then((data) => QueryAliasDenomResponse.decode(new _m0.Reader(data)));
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
