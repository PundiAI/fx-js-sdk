import { Any } from "cosmjs-types/google/protobuf/any";

/* eslint-disable import/no-cycle */
export { setupBaseExtension } from "./base/queries";
export {
  AminoMsgSendToExternal,
  crosschainAminoConverters,
  isAminoMsgSendToExternal,
} from "./crosschain/aminomessages";
export {
  crosschainTypes,
  isMsgSendToExternalEncodeObject,
  MsgSendToExternalEncodeObject,
} from "./crosschain/messages";
export { setupCrosschainExtension } from "./crosschain/queries";
export {
  AminoMsgAddMargin,
  AminoMsgCancelOrder,
  AminoMsgClosePosition,
  AminoMsgCreateOrder,
  dexAminoConverters,
  isAminoMsgAddMargin,
  isAminoMsgCancelOrder,
  isAminoMsgClosePosition,
  isAminoMsgCreateOrder,
} from "./dex/aminomessages";
export {
  dexTypes,
  isMsgAddMarginEncodeObject,
  isMsgCancelOrderEncodeObject,
  isMsgClosePositionEncodeObject,
  isMsgCreateOrderEncodeObject,
  MsgAddMarginEncodeObject,
  MsgCancelOrderEncodeObject,
  MsgClosePositionEncodeObject,
  MsgCreateOrderEncodeObject,
} from "./dex/messages";
export { setupErc20Extension } from "./erc20/queries";
export { createGovSubmitProposalAminoConverters } from "./gov/aminomessages";
export { AminoFxMsgIbcTransfer, fxibcAminoConverters, isAminoFxMsgIbcTransfer } from "./ibc/aminomessages";
export { fxibcTypes, FxMsgIbcTransferEncodeObject, isMsgIbcTransferEncodeObject } from "./ibc/messages";
export { setupFxIbcExtension } from "./ibc/queries";
export { setupTxExtension } from "./tx/queries";

/* eslint-disable no-param-reassign */
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
