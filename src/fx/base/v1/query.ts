/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export const protobufPackage = "fx.base.v1";

export interface GetGasPriceRequest {}

export interface GetGasPriceResponse {
  gasPrices: Coin[];
}

function createBaseGetGasPriceRequest(): GetGasPriceRequest {
  return {};
}

export const GetGasPriceRequest = {
  encode(_: GetGasPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGasPriceRequest();
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

  fromJSON(_: any): GetGasPriceRequest {
    return {};
  },

  toJSON(_: GetGasPriceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGasPriceRequest>, I>>(_: I): GetGasPriceRequest {
    const message = createBaseGetGasPriceRequest();
    return message;
  },
};

function createBaseGetGasPriceResponse(): GetGasPriceResponse {
  return { gasPrices: [] };
}

export const GetGasPriceResponse = {
  encode(message: GetGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gasPrices) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasPrices.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGasPriceResponse {
    return {
      gasPrices: Array.isArray(object?.gasPrices) ? object.gasPrices.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetGasPriceResponse): unknown {
    const obj: any = {};
    if (message.gasPrices) {
      obj.gasPrices = message.gasPrices.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.gasPrices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGasPriceResponse>, I>>(object: I): GetGasPriceResponse {
    const message = createBaseGetGasPriceResponse();
    message.gasPrices = object.gasPrices?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  GetGasPrice(request: GetGasPriceRequest): Promise<GetGasPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.base.v1.Query";
    this.rpc = rpc;
    this.GetGasPrice = this.GetGasPrice.bind(this);
  }
  GetGasPrice(request: GetGasPriceRequest): Promise<GetGasPriceResponse> {
    const data = GetGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGasPrice", data);
    return promise.then((data) => GetGasPriceResponse.decode(new _m0.Reader(data)));
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
