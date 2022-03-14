/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export const protobufPackage = "fx.other";

export interface GasPriceRequest {}

export interface GasPriceResponse {
  gasPrices: Coin[];
}

function createBaseGasPriceRequest(): GasPriceRequest {
  return {};
}

export const GasPriceRequest = {
  encode(_: GasPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceRequest();
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

  fromJSON(_: any): GasPriceRequest {
    return {};
  },

  toJSON(_: GasPriceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GasPriceRequest>, I>>(_: I): GasPriceRequest {
    const message = createBaseGasPriceRequest();
    return message;
  },
};

function createBaseGasPriceResponse(): GasPriceResponse {
  return { gasPrices: [] };
}

export const GasPriceResponse = {
  encode(message: GasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gasPrices) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceResponse();
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

  fromJSON(object: any): GasPriceResponse {
    return {
      gasPrices: Array.isArray(object?.gasPrices) ? object.gasPrices.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: GasPriceResponse): unknown {
    const obj: any = {};
    if (message.gasPrices) {
      obj.gasPrices = message.gasPrices.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.gasPrices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GasPriceResponse>, I>>(object: I): GasPriceResponse {
    const message = createBaseGasPriceResponse();
    message.gasPrices = object.gasPrices?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  /** Deprecated */
  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GasPrice = this.GasPrice.bind(this);
  }
  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
    const data = GasPriceRequest.encode(request).finish();
    const promise = this.rpc.request("fx.other.Query", "GasPrice", data);
    return promise.then((data) => GasPriceResponse.decode(new _m0.Reader(data)));
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
