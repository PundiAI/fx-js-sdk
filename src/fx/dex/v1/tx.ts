/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export const protobufPackage = "fx.dex.v1";

/** BOTH for query */
export enum Direction {
  BOTH = 0,
  BUY = 1,
  SELL = 2,
  MarketBuy = 3,
  MarketSell = 4,
  UNRECOGNIZED = -1,
}

export function directionFromJSON(object: any): Direction {
  switch (object) {
    case 0:
    case "BOTH":
      return Direction.BOTH;
    case 1:
    case "BUY":
      return Direction.BUY;
    case 2:
    case "SELL":
      return Direction.SELL;
    case 3:
    case "MarketBuy":
      return Direction.MarketBuy;
    case 4:
    case "MarketSell":
      return Direction.MarketSell;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Direction.UNRECOGNIZED;
  }
}

export function directionToJSON(object: Direction): string {
  switch (object) {
    case Direction.BOTH:
      return "BOTH";
    case Direction.BUY:
      return "BUY";
    case Direction.SELL:
      return "SELL";
    case Direction.MarketBuy:
      return "MarketBuy";
    case Direction.MarketSell:
      return "MarketSell";
    case Direction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MsgCreateOrder {
  owner: string;
  pairId: string;
  direction: Direction;
  price: string;
  baseQuantity: string;
  leverage: Long;
}

export interface MsgCreateOrderResponse {}

export interface MsgCancelOrder {
  owner: string;
  orderId: string;
}

export interface MsgCancelOrderResponse {}

export interface MsgAddMargin {
  owner: string;
  pairId: string;
  positionId: string;
  margin: string;
}

export interface MsgAddMarginResp {}

export interface MsgReduceMargin {
  owner: string;
  pairId: string;
  positionId: string;
  margin: string;
}

export interface ReduceMarginResp {}

export interface MsgClosePosition {
  owner: string;
  pairId: string;
  positionId: string;
  price: string;
  baseQuantity: string;
  fullClose: boolean;
  marketClose: boolean;
}

export interface MsgClosePositionResp {}

export interface MsgLiquidationPosition {
  liquidator: string;
  positionIds: string[];
}

export interface MsgLiquidationPositionResp {}

export interface MsgFundDexPool {
  amount: Coin[];
  depositor: string;
}

export interface MsgFundDexPoolResp {}

function createBaseMsgCreateOrder(): MsgCreateOrder {
  return { owner: "", pairId: "", direction: 0, price: "", baseQuantity: "", leverage: Long.ZERO };
}

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pairId !== "") {
      writer.uint32(18).string(message.pairId);
    }
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.baseQuantity !== "") {
      writer.uint32(42).string(message.baseQuantity);
    }
    if (!message.leverage.isZero()) {
      writer.uint32(48).int64(message.leverage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pairId = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.price = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.baseQuantity = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.leverage = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      direction: isSet(object.direction) ? directionFromJSON(object.direction) : 0,
      price: isSet(object.price) ? String(object.price) : "",
      baseQuantity: isSet(object.baseQuantity) ? String(object.baseQuantity) : "",
      leverage: isSet(object.leverage) ? Long.fromValue(object.leverage) : Long.ZERO,
    };
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.direction !== undefined && (obj.direction = directionToJSON(message.direction));
    message.price !== undefined && (obj.price = message.price);
    message.baseQuantity !== undefined && (obj.baseQuantity = message.baseQuantity);
    message.leverage !== undefined && (obj.leverage = (message.leverage || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateOrder>, I>>(base?: I): MsgCreateOrder {
    return MsgCreateOrder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOrder>, I>>(object: I): MsgCreateOrder {
    const message = createBaseMsgCreateOrder();
    message.owner = object.owner ?? "";
    message.pairId = object.pairId ?? "";
    message.direction = object.direction ?? 0;
    message.price = object.price ?? "";
    message.baseQuantity = object.baseQuantity ?? "";
    message.leverage =
      object.leverage !== undefined && object.leverage !== null ? Long.fromValue(object.leverage) : Long.ZERO;
    return message;
  },
};

function createBaseMsgCreateOrderResponse(): MsgCreateOrderResponse {
  return {};
}

export const MsgCreateOrderResponse = {
  encode(_: MsgCreateOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrderResponse();
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

  fromJSON(_: any): MsgCreateOrderResponse {
    return {};
  },

  toJSON(_: MsgCreateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateOrderResponse>, I>>(base?: I): MsgCreateOrderResponse {
    return MsgCreateOrderResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOrderResponse>, I>>(_: I): MsgCreateOrderResponse {
    const message = createBaseMsgCreateOrderResponse();
    return message;
  },
};

function createBaseMsgCancelOrder(): MsgCancelOrder {
  return { owner: "", orderId: "" };
}

export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.orderId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
    };
  },

  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelOrder>, I>>(base?: I): MsgCancelOrder {
    return MsgCancelOrder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelOrder>, I>>(object: I): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.owner = object.owner ?? "";
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}

export const MsgCancelOrderResponse = {
  encode(_: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();
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

  fromJSON(_: any): MsgCancelOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelOrderResponse>, I>>(base?: I): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelOrderResponse>, I>>(_: I): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  },
};

function createBaseMsgAddMargin(): MsgAddMargin {
  return { owner: "", pairId: "", positionId: "", margin: "" };
}

export const MsgAddMargin = {
  encode(message: MsgAddMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pairId !== "") {
      writer.uint32(18).string(message.pairId);
    }
    if (message.positionId !== "") {
      writer.uint32(26).string(message.positionId);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(message.margin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMargin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMargin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pairId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.positionId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.margin = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddMargin {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      positionId: isSet(object.positionId) ? String(object.positionId) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
    };
  },

  toJSON(message: MsgAddMargin): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.positionId !== undefined && (obj.positionId = message.positionId);
    message.margin !== undefined && (obj.margin = message.margin);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddMargin>, I>>(base?: I): MsgAddMargin {
    return MsgAddMargin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMargin>, I>>(object: I): MsgAddMargin {
    const message = createBaseMsgAddMargin();
    message.owner = object.owner ?? "";
    message.pairId = object.pairId ?? "";
    message.positionId = object.positionId ?? "";
    message.margin = object.margin ?? "";
    return message;
  },
};

function createBaseMsgAddMarginResp(): MsgAddMarginResp {
  return {};
}

export const MsgAddMarginResp = {
  encode(_: MsgAddMarginResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarginResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMarginResp();
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

  fromJSON(_: any): MsgAddMarginResp {
    return {};
  },

  toJSON(_: MsgAddMarginResp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddMarginResp>, I>>(base?: I): MsgAddMarginResp {
    return MsgAddMarginResp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddMarginResp>, I>>(_: I): MsgAddMarginResp {
    const message = createBaseMsgAddMarginResp();
    return message;
  },
};

function createBaseMsgReduceMargin(): MsgReduceMargin {
  return { owner: "", pairId: "", positionId: "", margin: "" };
}

export const MsgReduceMargin = {
  encode(message: MsgReduceMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pairId !== "") {
      writer.uint32(18).string(message.pairId);
    }
    if (message.positionId !== "") {
      writer.uint32(26).string(message.positionId);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(message.margin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReduceMargin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReduceMargin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pairId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.positionId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.margin = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgReduceMargin {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      positionId: isSet(object.positionId) ? String(object.positionId) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
    };
  },

  toJSON(message: MsgReduceMargin): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.positionId !== undefined && (obj.positionId = message.positionId);
    message.margin !== undefined && (obj.margin = message.margin);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgReduceMargin>, I>>(base?: I): MsgReduceMargin {
    return MsgReduceMargin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgReduceMargin>, I>>(object: I): MsgReduceMargin {
    const message = createBaseMsgReduceMargin();
    message.owner = object.owner ?? "";
    message.pairId = object.pairId ?? "";
    message.positionId = object.positionId ?? "";
    message.margin = object.margin ?? "";
    return message;
  },
};

function createBaseReduceMarginResp(): ReduceMarginResp {
  return {};
}

export const ReduceMarginResp = {
  encode(_: ReduceMarginResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReduceMarginResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReduceMarginResp();
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

  fromJSON(_: any): ReduceMarginResp {
    return {};
  },

  toJSON(_: ReduceMarginResp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ReduceMarginResp>, I>>(base?: I): ReduceMarginResp {
    return ReduceMarginResp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReduceMarginResp>, I>>(_: I): ReduceMarginResp {
    const message = createBaseReduceMarginResp();
    return message;
  },
};

function createBaseMsgClosePosition(): MsgClosePosition {
  return {
    owner: "",
    pairId: "",
    positionId: "",
    price: "",
    baseQuantity: "",
    fullClose: false,
    marketClose: false,
  };
}

export const MsgClosePosition = {
  encode(message: MsgClosePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pairId !== "") {
      writer.uint32(18).string(message.pairId);
    }
    if (message.positionId !== "") {
      writer.uint32(26).string(message.positionId);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.baseQuantity !== "") {
      writer.uint32(42).string(message.baseQuantity);
    }
    if (message.fullClose === true) {
      writer.uint32(48).bool(message.fullClose);
    }
    if (message.marketClose === true) {
      writer.uint32(56).bool(message.marketClose);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClosePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClosePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pairId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.positionId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.price = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.baseQuantity = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.fullClose = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.marketClose = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClosePosition {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pairId: isSet(object.pairId) ? String(object.pairId) : "",
      positionId: isSet(object.positionId) ? String(object.positionId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      baseQuantity: isSet(object.baseQuantity) ? String(object.baseQuantity) : "",
      fullClose: isSet(object.fullClose) ? Boolean(object.fullClose) : false,
      marketClose: isSet(object.marketClose) ? Boolean(object.marketClose) : false,
    };
  },

  toJSON(message: MsgClosePosition): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pairId !== undefined && (obj.pairId = message.pairId);
    message.positionId !== undefined && (obj.positionId = message.positionId);
    message.price !== undefined && (obj.price = message.price);
    message.baseQuantity !== undefined && (obj.baseQuantity = message.baseQuantity);
    message.fullClose !== undefined && (obj.fullClose = message.fullClose);
    message.marketClose !== undefined && (obj.marketClose = message.marketClose);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClosePosition>, I>>(base?: I): MsgClosePosition {
    return MsgClosePosition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClosePosition>, I>>(object: I): MsgClosePosition {
    const message = createBaseMsgClosePosition();
    message.owner = object.owner ?? "";
    message.pairId = object.pairId ?? "";
    message.positionId = object.positionId ?? "";
    message.price = object.price ?? "";
    message.baseQuantity = object.baseQuantity ?? "";
    message.fullClose = object.fullClose ?? false;
    message.marketClose = object.marketClose ?? false;
    return message;
  },
};

function createBaseMsgClosePositionResp(): MsgClosePositionResp {
  return {};
}

export const MsgClosePositionResp = {
  encode(_: MsgClosePositionResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClosePositionResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClosePositionResp();
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

  fromJSON(_: any): MsgClosePositionResp {
    return {};
  },

  toJSON(_: MsgClosePositionResp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClosePositionResp>, I>>(base?: I): MsgClosePositionResp {
    return MsgClosePositionResp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClosePositionResp>, I>>(_: I): MsgClosePositionResp {
    const message = createBaseMsgClosePositionResp();
    return message;
  },
};

function createBaseMsgLiquidationPosition(): MsgLiquidationPosition {
  return { liquidator: "", positionIds: [] };
}

export const MsgLiquidationPosition = {
  encode(message: MsgLiquidationPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    for (const v of message.positionIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidationPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidationPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.liquidator = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.positionIds.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidationPosition {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      positionIds: Array.isArray(object?.positionIds) ? object.positionIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgLiquidationPosition): unknown {
    const obj: any = {};
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    if (message.positionIds) {
      obj.positionIds = message.positionIds.map((e) => e);
    } else {
      obj.positionIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidationPosition>, I>>(base?: I): MsgLiquidationPosition {
    return MsgLiquidationPosition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidationPosition>, I>>(object: I): MsgLiquidationPosition {
    const message = createBaseMsgLiquidationPosition();
    message.liquidator = object.liquidator ?? "";
    message.positionIds = object.positionIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgLiquidationPositionResp(): MsgLiquidationPositionResp {
  return {};
}

export const MsgLiquidationPositionResp = {
  encode(_: MsgLiquidationPositionResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidationPositionResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidationPositionResp();
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

  fromJSON(_: any): MsgLiquidationPositionResp {
    return {};
  },

  toJSON(_: MsgLiquidationPositionResp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidationPositionResp>, I>>(base?: I): MsgLiquidationPositionResp {
    return MsgLiquidationPositionResp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidationPositionResp>, I>>(_: I): MsgLiquidationPositionResp {
    const message = createBaseMsgLiquidationPositionResp();
    return message;
  },
};

function createBaseMsgFundDexPool(): MsgFundDexPool {
  return { amount: [], depositor: "" };
}

export const MsgFundDexPool = {
  encode(message: MsgFundDexPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundDexPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundDexPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.depositor = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgFundDexPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: MsgFundDexPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFundDexPool>, I>>(base?: I): MsgFundDexPool {
    return MsgFundDexPool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundDexPool>, I>>(object: I): MsgFundDexPool {
    const message = createBaseMsgFundDexPool();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
};

function createBaseMsgFundDexPoolResp(): MsgFundDexPoolResp {
  return {};
}

export const MsgFundDexPoolResp = {
  encode(_: MsgFundDexPoolResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundDexPoolResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundDexPoolResp();
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

  fromJSON(_: any): MsgFundDexPoolResp {
    return {};
  },

  toJSON(_: MsgFundDexPoolResp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFundDexPoolResp>, I>>(base?: I): MsgFundDexPoolResp {
    return MsgFundDexPoolResp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundDexPoolResp>, I>>(_: I): MsgFundDexPoolResp {
    const message = createBaseMsgFundDexPoolResp();
    return message;
  },
};

export interface Msg {
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  AddMargin(request: MsgAddMargin): Promise<MsgAddMarginResp>;
  ReduceMargin(request: MsgReduceMargin): Promise<ReduceMarginResp>;
  ClosePosition(request: MsgClosePosition): Promise<MsgClosePositionResp>;
  LiquidationPosition(request: MsgLiquidationPosition): Promise<MsgLiquidationPositionResp>;
  FundDexPool(request: MsgFundDexPool): Promise<MsgFundDexPoolResp>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.dex.v1.Msg";
    this.rpc = rpc;
    this.CreateOrder = this.CreateOrder.bind(this);
    this.CancelOrder = this.CancelOrder.bind(this);
    this.AddMargin = this.AddMargin.bind(this);
    this.ReduceMargin = this.ReduceMargin.bind(this);
    this.ClosePosition = this.ClosePosition.bind(this);
    this.LiquidationPosition = this.LiquidationPosition.bind(this);
    this.FundDexPool = this.FundDexPool.bind(this);
  }
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateOrder", data);
    return promise.then((data) => MsgCreateOrderResponse.decode(_m0.Reader.create(data)));
  }

  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelOrder", data);
    return promise.then((data) => MsgCancelOrderResponse.decode(_m0.Reader.create(data)));
  }

  AddMargin(request: MsgAddMargin): Promise<MsgAddMarginResp> {
    const data = MsgAddMargin.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddMargin", data);
    return promise.then((data) => MsgAddMarginResp.decode(_m0.Reader.create(data)));
  }

  ReduceMargin(request: MsgReduceMargin): Promise<ReduceMarginResp> {
    const data = MsgReduceMargin.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReduceMargin", data);
    return promise.then((data) => ReduceMarginResp.decode(_m0.Reader.create(data)));
  }

  ClosePosition(request: MsgClosePosition): Promise<MsgClosePositionResp> {
    const data = MsgClosePosition.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClosePosition", data);
    return promise.then((data) => MsgClosePositionResp.decode(_m0.Reader.create(data)));
  }

  LiquidationPosition(request: MsgLiquidationPosition): Promise<MsgLiquidationPositionResp> {
    const data = MsgLiquidationPosition.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidationPosition", data);
    return promise.then((data) => MsgLiquidationPositionResp.decode(_m0.Reader.create(data)));
  }

  FundDexPool(request: MsgFundDexPool): Promise<MsgFundDexPoolResp> {
    const data = MsgFundDexPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "FundDexPool", data);
    return promise.then((data) => MsgFundDexPoolResp.decode(_m0.Reader.create(data)));
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
