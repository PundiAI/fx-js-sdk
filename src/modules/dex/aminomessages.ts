/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate/build/aminotypes";
import Long from "long";

import {
  directionFromJSON,
  MsgAddMargin,
  MsgCancelOrder,
  MsgClosePosition,
  MsgCreateOrder,
} from "../../fx/dex/v1/tx";
import { toDecString, toProtoString } from "../index";

interface AminoMsgCreateOrder extends AminoMsg {
  readonly type: "dex/MsgCreateOrder";
  readonly value: {
    readonly owner: string;
    readonly pair_id: string;
    readonly direction: number;
    readonly price: string;
    readonly base_quantity: string;
    readonly leverage: string;
  };
}

function aminoConverterMsgCreateOrder(precision: number): AminoConverter {
  return {
    aminoType: "dex/MsgCreateOrder",
    toAmino: ({
      owner,
      pairId,
      direction,
      price,
      baseQuantity,
      leverage,
    }: MsgCreateOrder): AminoMsgCreateOrder["value"] => {
      return {
        owner: owner,
        pair_id: pairId,
        direction: direction,
        price: toDecString(price, precision),
        base_quantity: toDecString(baseQuantity, precision),
        leverage: leverage.toString(),
      };
    },
    fromAmino: ({
      owner,
      pair_id,
      direction,
      price,
      base_quantity,
      leverage,
    }: AminoMsgCreateOrder["value"]): MsgCreateOrder => {
      return {
        owner: owner,
        pairId: pair_id,
        direction: directionFromJSON(direction),
        price: toProtoString(price, precision),
        baseQuantity: toProtoString(base_quantity, precision),
        leverage: Long.fromValue(leverage),
      };
    },
  };
}

interface AminoMsgCancelOrder extends AminoMsg {
  readonly type: "dex/MsgCancelOrder";
  readonly value: {
    readonly owner: string;
    readonly order_id: string;
  };
}

function aminoConverterMsgCancelOrder(): AminoConverter {
  return {
    aminoType: "dex/MsgCancelOrder",
    toAmino: ({ owner, orderId }: MsgCancelOrder): AminoMsgCancelOrder["value"] => {
      return {
        owner: owner,
        order_id: orderId,
      };
    },
    fromAmino: ({ owner, order_id }: AminoMsgCancelOrder["value"]): MsgCancelOrder => {
      return {
        owner: owner,
        orderId: order_id,
      };
    },
  };
}

interface AminoMsgAddMargin extends AminoMsg {
  readonly type: "dex/MsgAddMargin";
  readonly value: {
    readonly owner: string;
    readonly pair_id: string;
    readonly position_id: string;
    readonly margin: string;
  };
}

function aminoConverterMsgAddMargin(precision: number): AminoConverter {
  return {
    aminoType: "dex/MsgAddMargin",
    toAmino: ({ owner, pairId, positionId, margin }: MsgAddMargin): AminoMsgAddMargin["value"] => {
      return {
        owner: owner,
        pair_id: pairId,
        position_id: positionId,
        margin: toDecString(margin, precision),
      };
    },
    fromAmino: ({ owner, pair_id, position_id, margin }: AminoMsgAddMargin["value"]): MsgAddMargin => {
      return {
        owner: owner,
        pairId: pair_id,
        positionId: position_id,
        margin: toProtoString(margin, precision),
      };
    },
  };
}

interface AminoMsgClosePosition extends AminoMsg {
  readonly type: "dex/MsgClosePosition";
  readonly value: {
    readonly owner: string;
    readonly pair_id: string;
    readonly position_id: string;
    readonly price: string;
    readonly base_quantity: string;
    readonly full_close: boolean;
    readonly market_close: boolean;
  };
}

function aminoConverterMsgClosePosition(precision: number): AminoConverter {
  return {
    aminoType: "dex/MsgClosePosition",
    toAmino: ({
      owner,
      pairId,
      positionId,
      price,
      baseQuantity,
      fullClose,
      marketClose,
    }: MsgClosePosition): AminoMsgClosePosition["value"] => {
      return {
        owner: owner,
        pair_id: pairId,
        position_id: positionId,
        price: toDecString(price, precision),
        base_quantity: toDecString(baseQuantity, precision),
        full_close: fullClose,
        market_close: marketClose,
      };
    },
    fromAmino: ({
      owner,
      pair_id,
      position_id,
      price,
      base_quantity,
      full_close,
      market_close,
    }: AminoMsgClosePosition["value"]): MsgClosePosition => {
      return {
        owner: owner,
        pairId: pair_id,
        positionId: position_id,
        price: toProtoString(price, precision),
        baseQuantity: toProtoString(base_quantity, precision),
        fullClose: full_close,
        marketClose: market_close,
      };
    },
  };
}

export function dexAminoConverters(precision: number): Record<string, AminoConverter> {
  if (precision == undefined || precision <= 0) {
    throw new Error("invalid params");
  }
  return {
    "/fx.dex.v1.MsgCreateOrder": aminoConverterMsgCreateOrder(precision),
    "/fx.dex.v1.MsgCancelOrder": aminoConverterMsgCancelOrder(),
    "/fx.dex.v1.MsgAddMargin": aminoConverterMsgAddMargin(precision),
    "/fx.dex.v1.MsgClosePosition": aminoConverterMsgClosePosition(precision),
  };
}
