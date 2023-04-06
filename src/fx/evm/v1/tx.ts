/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "fx.evm.v1";

/** MsgCallContract defines the request structure for executing a CallContract message. */
export interface MsgCallContract {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** specify to call the contract address */
  contractAddress: string;
  data: string;
}

/** MsgCallContractResponse defines the response structure for executing a CallContract message. */
export interface MsgCallContractResponse {}

function createBaseMsgCallContract(): MsgCallContract {
  return { authority: "", contractAddress: "", data: "" };
}

export const MsgCallContract = {
  encode(message: MsgCallContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCallContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCallContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCallContract {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: MsgCallContract): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCallContract>, I>>(base?: I): MsgCallContract {
    return MsgCallContract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCallContract>, I>>(object: I): MsgCallContract {
    const message = createBaseMsgCallContract();
    message.authority = object.authority ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseMsgCallContractResponse(): MsgCallContractResponse {
  return {};
}

export const MsgCallContractResponse = {
  encode(_: MsgCallContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCallContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCallContractResponse();
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

  fromJSON(_: any): MsgCallContractResponse {
    return {};
  },

  toJSON(_: MsgCallContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCallContractResponse>, I>>(base?: I): MsgCallContractResponse {
    return MsgCallContractResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCallContractResponse>, I>>(_: I): MsgCallContractResponse {
    const message = createBaseMsgCallContractResponse();
    return message;
  },
};

/** Msg defines the x/evm Msg service. */
export interface Msg {
  /**
   * CallContract defines a (governance) operation for updating the x/evm module
   * callContract. The authority defaults to the x/gov module account.
   */
  CallContract(request: MsgCallContract): Promise<MsgCallContractResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.evm.v1.Msg";
    this.rpc = rpc;
    this.CallContract = this.CallContract.bind(this);
  }
  CallContract(request: MsgCallContract): Promise<MsgCallContractResponse> {
    const data = MsgCallContract.encode(request).finish();
    const promise = this.rpc.request(this.service, "CallContract", data);
    return promise.then((data) => MsgCallContractResponse.decode(_m0.Reader.create(data)));
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
