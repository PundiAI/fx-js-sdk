/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export const protobufPackage = "fx.other";

/** Deprecated: GasPriceRequest */
export interface GasPriceRequest {}

/** Deprecated: GasPriceResponse */
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceRequest();
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

  fromJSON(_: any): GasPriceRequest {
    return {};
  },

  toJSON(_: GasPriceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GasPriceRequest>, I>>(base?: I): GasPriceRequest {
    return GasPriceRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.gasPrices.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<GasPriceResponse>, I>>(base?: I): GasPriceResponse {
    return GasPriceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GasPriceResponse>, I>>(object: I): GasPriceResponse {
    const message = createBaseGasPriceResponse();
    message.gasPrices = object.gasPrices?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

/** Deprecated: Query */
export interface Query {
  /** Deprecated: please use cosmos.base.node.v1beta1.Service.Config */
  FxGasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
  /** Deprecated: please use cosmos.base.node.v1beta1.Service.Config */
  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.other.Query";
    this.rpc = rpc;
    this.FxGasPrice = this.FxGasPrice.bind(this);
    this.GasPrice = this.GasPrice.bind(this);
  }
  FxGasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
    const data = GasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FxGasPrice", data);
    return promise.then((data) => GasPriceResponse.decode(_m0.Reader.create(data)));
  }

  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
    const data = GasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GasPrice", data);
    return promise.then((data) => GasPriceResponse.decode(_m0.Reader.create(data)));
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
