/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fx.auth.v1";

export interface ConvertAddressRequest {
  address: string;
  prefix: string;
}

export interface ConvertAddressResponse {
  address: string;
}

function createBaseConvertAddressRequest(): ConvertAddressRequest {
  return { address: "", prefix: "" };
}

export const ConvertAddressRequest = {
  encode(message: ConvertAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.prefix = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConvertAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
    };
  },

  toJSON(message: ConvertAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvertAddressRequest>, I>>(base?: I): ConvertAddressRequest {
    return ConvertAddressRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConvertAddressRequest>, I>>(object: I): ConvertAddressRequest {
    const message = createBaseConvertAddressRequest();
    message.address = object.address ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
};

function createBaseConvertAddressResponse(): ConvertAddressResponse {
  return { address: "" };
}

export const ConvertAddressResponse = {
  encode(message: ConvertAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConvertAddressResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: ConvertAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvertAddressResponse>, I>>(base?: I): ConvertAddressResponse {
    return ConvertAddressResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConvertAddressResponse>, I>>(object: I): ConvertAddressResponse {
    const message = createBaseConvertAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
};

export interface Query {
  ConvertAddress(request: ConvertAddressRequest): Promise<ConvertAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.auth.v1.Query";
    this.rpc = rpc;
    this.ConvertAddress = this.ConvertAddress.bind(this);
  }
  ConvertAddress(request: ConvertAddressRequest): Promise<ConvertAddressResponse> {
    const data = ConvertAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertAddress", data);
    return promise.then((data) => ConvertAddressResponse.decode(_m0.Reader.create(data)));
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
