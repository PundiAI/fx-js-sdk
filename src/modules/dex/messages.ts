import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import { MsgAddMargin, MsgCancelOrder, MsgClosePosition, MsgCreateOrder } from "../../fx/dex/v1/tx";

export const dexTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/fx.dex.v1.MsgCreateOrder", MsgCreateOrder],
  ["/fx.dex.v1.MsgCancelOrder", MsgCancelOrder],
  ["/fx.dex.v1.MsgAddMargin", MsgAddMargin],
  ["/fx.dex.v1.MsgClosePosition", MsgClosePosition],
];

export interface MsgCreateOrderEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.dex.v1.MsgCreateOrder";
  readonly value: Partial<MsgCreateOrder>;
}

export function isMsgCreateOrderEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgCreateOrderEncodeObject {
  return (encodeObject as MsgCreateOrderEncodeObject).typeUrl === "/fx.dex.v1.MsgCreateOrder";
}

export interface MsgCancelOrderEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.dex.v1.MsgCancelOrder";
  readonly value: Partial<MsgCancelOrder>;
}

export function isMsgCancelOrderEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgCancelOrderEncodeObject {
  return (encodeObject as MsgCancelOrderEncodeObject).typeUrl === "/fx.dex.v1.MsgCancelOrder";
}

export interface MsgAddMarginEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.dex.v1.MsgAddMargin";
  readonly value: Partial<MsgAddMargin>;
}

export function isMsgAddMarginEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgAddMarginEncodeObject {
  return (encodeObject as MsgAddMarginEncodeObject).typeUrl === "/fx.dex.v1.MsgAddMargin";
}

export interface MsgClosePositionEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.dex.v1.MsgClosePosition";
  readonly value: Partial<MsgClosePosition>;
}

export function isMsgClosePositionEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgClosePositionEncodeObject {
  return (encodeObject as MsgClosePositionEncodeObject).typeUrl === "/fx.dex.v1.MsgClosePosition";
}
