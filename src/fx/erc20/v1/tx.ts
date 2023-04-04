/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { TokenPair } from "./erc20";
import { Params } from "./genesis";

export const protobufPackage = "fx.erc20.v1";

/** MsgConvertCoin defines a Msg to convert a Cosmos Coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * Cosmos coin which denomination is registered on erc20 bridge.
   * The coin amount defines the total ERC20 tokens to convert.
   */
  coin?: Coin;
  /** recipient hex address to receive ERC20 token */
  receiver: string;
  /** cosmos bech32 address from the owner of the given ERC20 tokens */
  sender: string;
}

/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {
}

/** MsgConvertERC20 defines a Msg to convert an ERC20 token to a Cosmos SDK coin. */
export interface MsgConvertERC20 {
  /** ERC20 token contract address registered on erc20 bridge */
  contractAddress: string;
  /** amount of ERC20 tokens to mint */
  amount: string;
  /** bech32 address to receive SDK coins. */
  receiver: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender: string;
}

/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {
}

/** MsgConvertDenom defines a Msg to convert an denom to other denom */
export interface MsgConvertDenom {
  /** msg sender */
  sender: string;
  /** receiver address */
  receiver: string;
  /** coin to convert */
  coin?: Coin;
  /** target denom */
  target: string;
}

/** MsgConvertDenomResponse returns no fields */
export interface MsgConvertDenomResponse {
}

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/erc20 parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgRegisterCoin {
  /** authority is the address of the governance account. */
  authority: string;
  /** token pair of Cosmos native denom and ERC20 token address */
  metadata?: Metadata;
}

export interface MsgRegisterCoinResponse {
  pair?: TokenPair;
}

export interface MsgRegisterERC20 {
  /** authority is the address of the governance account. */
  authority: string;
  /** contract address of ERC20 token */
  erc20address: string;
  /** aliases is a list of string aliases for the given denom */
  aliases: string[];
}

export interface MsgRegisterERC20Response {
  pair?: TokenPair;
}

export interface MsgToggleTokenConversion {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}

export interface MsgToggleTokenConversionResponse {
  pair?: TokenPair;
}

export interface MsgUpdateDenomAlias {
  /** authority is the address of the governance account. */
  authority: string;
  /** denom */
  denom: string;
  /** alias update */
  alias: string;
}

export interface MsgUpdateDenomAliasResponse {
}

function createBaseMsgConvertCoin(): MsgConvertCoin {
  return { coin: undefined, receiver: "", sender: "" };
}

export const MsgConvertCoin = {
  encode(message: MsgConvertCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConvertCoin {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgConvertCoin): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertCoin>, I>>(base?: I): MsgConvertCoin {
    return MsgConvertCoin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertCoin>, I>>(object: I): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgConvertCoinResponse(): MsgConvertCoinResponse {
  return {};
}

export const MsgConvertCoinResponse = {
  encode(_: MsgConvertCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinResponse();
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

  fromJSON(_: any): MsgConvertCoinResponse {
    return {};
  },

  toJSON(_: MsgConvertCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertCoinResponse>, I>>(base?: I): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertCoinResponse>, I>>(_: I): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
};

function createBaseMsgConvertERC20(): MsgConvertERC20 {
  return { contractAddress: "", amount: "", receiver: "", sender: "" };
}

export const MsgConvertERC20 = {
  encode(message: MsgConvertERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.contractAddress = reader.string();
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

          message.receiver = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConvertERC20 {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgConvertERC20): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertERC20>, I>>(base?: I): MsgConvertERC20 {
    return MsgConvertERC20.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertERC20>, I>>(object: I): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgConvertERC20Response(): MsgConvertERC20Response {
  return {};
}

export const MsgConvertERC20Response = {
  encode(_: MsgConvertERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20Response();
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

  fromJSON(_: any): MsgConvertERC20Response {
    return {};
  },

  toJSON(_: MsgConvertERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertERC20Response>, I>>(base?: I): MsgConvertERC20Response {
    return MsgConvertERC20Response.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertERC20Response>, I>>(_: I): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
};

function createBaseMsgConvertDenom(): MsgConvertDenom {
  return { sender: "", receiver: "", coin: undefined, target: "" };
}

export const MsgConvertDenom = {
  encode(message: MsgConvertDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertDenom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.target = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConvertDenom {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      target: isSet(object.target) ? String(object.target) : "",
    };
  },

  toJSON(message: MsgConvertDenom): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertDenom>, I>>(base?: I): MsgConvertDenom {
    return MsgConvertDenom.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertDenom>, I>>(object: I): MsgConvertDenom {
    const message = createBaseMsgConvertDenom();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.target = object.target ?? "";
    return message;
  },
};

function createBaseMsgConvertDenomResponse(): MsgConvertDenomResponse {
  return {};
}

export const MsgConvertDenomResponse = {
  encode(_: MsgConvertDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertDenomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertDenomResponse();
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

  fromJSON(_: any): MsgConvertDenomResponse {
    return {};
  },

  toJSON(_: MsgConvertDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConvertDenomResponse>, I>>(base?: I): MsgConvertDenomResponse {
    return MsgConvertDenomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConvertDenomResponse>, I>>(_: I): MsgConvertDenomResponse {
    const message = createBaseMsgConvertDenomResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgRegisterCoin(): MsgRegisterCoin {
  return { authority: "", metadata: undefined };
}

export const MsgRegisterCoin = {
  encode(message: MsgRegisterCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCoin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCoin();
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

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterCoin {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: MsgRegisterCoin): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterCoin>, I>>(base?: I): MsgRegisterCoin {
    return MsgRegisterCoin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterCoin>, I>>(object: I): MsgRegisterCoin {
    const message = createBaseMsgRegisterCoin();
    message.authority = object.authority ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseMsgRegisterCoinResponse(): MsgRegisterCoinResponse {
  return { pair: undefined };
}

export const MsgRegisterCoinResponse = {
  encode(message: MsgRegisterCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      TokenPair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = TokenPair.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterCoinResponse {
    return { pair: isSet(object.pair) ? TokenPair.fromJSON(object.pair) : undefined };
  },

  toJSON(message: MsgRegisterCoinResponse): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair ? TokenPair.toJSON(message.pair) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterCoinResponse>, I>>(base?: I): MsgRegisterCoinResponse {
    return MsgRegisterCoinResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterCoinResponse>, I>>(object: I): MsgRegisterCoinResponse {
    const message = createBaseMsgRegisterCoinResponse();
    message.pair = (object.pair !== undefined && object.pair !== null) ? TokenPair.fromPartial(object.pair) : undefined;
    return message;
  },
};

function createBaseMsgRegisterERC20(): MsgRegisterERC20 {
  return { authority: "", erc20address: "", aliases: [] };
}

export const MsgRegisterERC20 = {
  encode(message: MsgRegisterERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.erc20address !== "") {
      writer.uint32(18).string(message.erc20address);
    }
    for (const v of message.aliases) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterERC20 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20();
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

          message.erc20address = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.aliases.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterERC20 {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      erc20address: isSet(object.erc20address) ? String(object.erc20address) : "",
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgRegisterERC20): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.erc20address !== undefined && (obj.erc20address = message.erc20address);
    if (message.aliases) {
      obj.aliases = message.aliases.map((e) => e);
    } else {
      obj.aliases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterERC20>, I>>(base?: I): MsgRegisterERC20 {
    return MsgRegisterERC20.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterERC20>, I>>(object: I): MsgRegisterERC20 {
    const message = createBaseMsgRegisterERC20();
    message.authority = object.authority ?? "";
    message.erc20address = object.erc20address ?? "";
    message.aliases = object.aliases?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgRegisterERC20Response(): MsgRegisterERC20Response {
  return { pair: undefined };
}

export const MsgRegisterERC20Response = {
  encode(message: MsgRegisterERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      TokenPair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterERC20Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = TokenPair.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterERC20Response {
    return { pair: isSet(object.pair) ? TokenPair.fromJSON(object.pair) : undefined };
  },

  toJSON(message: MsgRegisterERC20Response): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair ? TokenPair.toJSON(message.pair) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterERC20Response>, I>>(base?: I): MsgRegisterERC20Response {
    return MsgRegisterERC20Response.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterERC20Response>, I>>(object: I): MsgRegisterERC20Response {
    const message = createBaseMsgRegisterERC20Response();
    message.pair = (object.pair !== undefined && object.pair !== null) ? TokenPair.fromPartial(object.pair) : undefined;
    return message;
  },
};

function createBaseMsgToggleTokenConversion(): MsgToggleTokenConversion {
  return { authority: "", token: "" };
}

export const MsgToggleTokenConversion = {
  encode(message: MsgToggleTokenConversion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleTokenConversion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTokenConversion();
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

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgToggleTokenConversion {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: MsgToggleTokenConversion): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgToggleTokenConversion>, I>>(base?: I): MsgToggleTokenConversion {
    return MsgToggleTokenConversion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgToggleTokenConversion>, I>>(object: I): MsgToggleTokenConversion {
    const message = createBaseMsgToggleTokenConversion();
    message.authority = object.authority ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseMsgToggleTokenConversionResponse(): MsgToggleTokenConversionResponse {
  return { pair: undefined };
}

export const MsgToggleTokenConversionResponse = {
  encode(message: MsgToggleTokenConversionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      TokenPair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgToggleTokenConversionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTokenConversionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pair = TokenPair.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgToggleTokenConversionResponse {
    return { pair: isSet(object.pair) ? TokenPair.fromJSON(object.pair) : undefined };
  },

  toJSON(message: MsgToggleTokenConversionResponse): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair ? TokenPair.toJSON(message.pair) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgToggleTokenConversionResponse>, I>>(
    base?: I,
  ): MsgToggleTokenConversionResponse {
    return MsgToggleTokenConversionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgToggleTokenConversionResponse>, I>>(
    object: I,
  ): MsgToggleTokenConversionResponse {
    const message = createBaseMsgToggleTokenConversionResponse();
    message.pair = (object.pair !== undefined && object.pair !== null) ? TokenPair.fromPartial(object.pair) : undefined;
    return message;
  },
};

function createBaseMsgUpdateDenomAlias(): MsgUpdateDenomAlias {
  return { authority: "", denom: "", alias: "" };
}

export const MsgUpdateDenomAlias = {
  encode(message: MsgUpdateDenomAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenomAlias {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomAlias();
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

          message.denom = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.alias = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDenomAlias {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
    };
  },

  toJSON(message: MsgUpdateDenomAlias): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDenomAlias>, I>>(base?: I): MsgUpdateDenomAlias {
    return MsgUpdateDenomAlias.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomAlias>, I>>(object: I): MsgUpdateDenomAlias {
    const message = createBaseMsgUpdateDenomAlias();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseMsgUpdateDenomAliasResponse(): MsgUpdateDenomAliasResponse {
  return {};
}

export const MsgUpdateDenomAliasResponse = {
  encode(_: MsgUpdateDenomAliasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenomAliasResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDenomAliasResponse();
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

  fromJSON(_: any): MsgUpdateDenomAliasResponse {
    return {};
  },

  toJSON(_: MsgUpdateDenomAliasResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDenomAliasResponse>, I>>(base?: I): MsgUpdateDenomAliasResponse {
    return MsgUpdateDenomAliasResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomAliasResponse>, I>>(_: I): MsgUpdateDenomAliasResponse {
    const message = createBaseMsgUpdateDenomAliasResponse();
    return message;
  },
};

/** Msg defines the erc20 Msg service. */
export interface Msg {
  /**
   * ConvertCoin mints a ERC20 representation of the SDK Coin denom that is
   * registered on the token mapping.
   */
  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse>;
  /**
   * ConvertERC20 mints a Cosmos coin representation of the ERC20 token contract
   * that is registered on the token mapping.
   */
  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response>;
  /** ConvertDenom convert denom to other denom */
  ConvertDenom(request: MsgConvertDenom): Promise<MsgConvertDenomResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/erc20 module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  RegisterCoin(request: MsgRegisterCoin): Promise<MsgRegisterCoinResponse>;
  RegisterERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response>;
  ToggleTokenConversion(request: MsgToggleTokenConversion): Promise<MsgToggleTokenConversionResponse>;
  UpdateDenomAlias(request: MsgUpdateDenomAlias): Promise<MsgUpdateDenomAliasResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.erc20.v1.Msg";
    this.rpc = rpc;
    this.ConvertCoin = this.ConvertCoin.bind(this);
    this.ConvertERC20 = this.ConvertERC20.bind(this);
    this.ConvertDenom = this.ConvertDenom.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.RegisterCoin = this.RegisterCoin.bind(this);
    this.RegisterERC20 = this.RegisterERC20.bind(this);
    this.ToggleTokenConversion = this.ToggleTokenConversion.bind(this);
    this.UpdateDenomAlias = this.UpdateDenomAlias.bind(this);
  }
  ConvertCoin(request: MsgConvertCoin): Promise<MsgConvertCoinResponse> {
    const data = MsgConvertCoin.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertCoin", data);
    return promise.then((data) => MsgConvertCoinResponse.decode(_m0.Reader.create(data)));
  }

  ConvertERC20(request: MsgConvertERC20): Promise<MsgConvertERC20Response> {
    const data = MsgConvertERC20.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertERC20", data);
    return promise.then((data) => MsgConvertERC20Response.decode(_m0.Reader.create(data)));
  }

  ConvertDenom(request: MsgConvertDenom): Promise<MsgConvertDenomResponse> {
    const data = MsgConvertDenom.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConvertDenom", data);
    return promise.then((data) => MsgConvertDenomResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  RegisterCoin(request: MsgRegisterCoin): Promise<MsgRegisterCoinResponse> {
    const data = MsgRegisterCoin.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterCoin", data);
    return promise.then((data) => MsgRegisterCoinResponse.decode(_m0.Reader.create(data)));
  }

  RegisterERC20(request: MsgRegisterERC20): Promise<MsgRegisterERC20Response> {
    const data = MsgRegisterERC20.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterERC20", data);
    return promise.then((data) => MsgRegisterERC20Response.decode(_m0.Reader.create(data)));
  }

  ToggleTokenConversion(request: MsgToggleTokenConversion): Promise<MsgToggleTokenConversionResponse> {
    const data = MsgToggleTokenConversion.encode(request).finish();
    const promise = this.rpc.request(this.service, "ToggleTokenConversion", data);
    return promise.then((data) => MsgToggleTokenConversionResponse.decode(_m0.Reader.create(data)));
  }

  UpdateDenomAlias(request: MsgUpdateDenomAlias): Promise<MsgUpdateDenomAliasResponse> {
    const data = MsgUpdateDenomAlias.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDenomAlias", data);
    return promise.then((data) => MsgUpdateDenomAliasResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
