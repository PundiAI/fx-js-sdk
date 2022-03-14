import { Any } from "cosmjs-types/google/protobuf/any";
import Long from "long";

export { dexAminoConverters } from "./dex/aminomessages";
export { AminoMsgCreateOrder, isAminoMsgCreateOrder } from "./dex/aminomessages";
export { AminoMsgCancelOrder, isAminoMsgCancelOrder } from "./dex/aminomessages";
export { AminoMsgAddMargin, isAminoMsgAddMargin } from "./dex/aminomessages";
export { AminoMsgClosePosition, isAminoMsgClosePosition } from "./dex/aminomessages";
export { dexTypes } from "./dex/messages";
export { isMsgCreateOrderEncodeObject, MsgCreateOrderEncodeObject } from "./dex/messages";
export { isMsgCancelOrderEncodeObject, MsgCancelOrderEncodeObject } from "./dex/messages";
export { isMsgAddMarginEncodeObject, MsgAddMarginEncodeObject } from "./dex/messages";
export { isMsgClosePositionEncodeObject, MsgClosePositionEncodeObject } from "./dex/messages";
export { ibcAminoConverters } from "./ibc/aminomessages";
export { AminoMsgIbcTransfer, isAminoMsgIbcTransfer } from "./ibc/aminomessages";
export { ibcTypes } from "./ibc/messages";
export { isMsgIbcTransferEncodeObject, MsgIbcTransferEncodeObject } from "./ibc/messages";

export function toDecString(dec: string | undefined, precision: number): string {
  dec = dec?.trim();
  if (dec == undefined || dec?.length <= 0) {
    return "<nil>";
  } else {
    if (dec.indexOf("-") != -1) {
      throw new Error("negative numbers are not supported");
    }
    if (dec.startsWith("0") && dec.length != 1) {
      return toDecString(dec.slice(1), precision);
    }
    if (dec.length <= precision) {
      dec = dec.padStart(precision + 1, "0");
    }
    return dec.slice(0, dec.length - precision) + "." + dec.slice(dec.length - precision);
  }
}

export function toProtoString(dec: string | undefined, precision: number): string {
  dec = dec?.trim();
  if (dec == undefined || dec?.length <= 0) {
    return "<nil>";
  } else {
    if (dec.indexOf("-") != -1) {
      throw new Error("negative numbers are not supported");
    }
    dec = dec.replace(".", "");
    if (dec.startsWith("0")) {
      if (dec.length <= 1) {
        return "0";
      }
      return toProtoString(dec.slice(1), precision);
    }
    return dec;
  }
}

export interface ProposalContentAminoConverter {
  readonly toAmino: (content: Any) => any;
  readonly fromAmino: (content: any) => Any;
}
