import { Any } from "cosmjs-types/google/protobuf/any";

/* eslint-disable import/no-cycle */
export {
  AminoMsgSendToExternal,
  AminoUpdateChainOraclesProposal,
  crosschainProposalContentAminoConverters,
  isAminoMsgSendToExternal,
  isAminoUpdateChainOraclesProposal,
} from "./crosschain/aminomessages";
export {
  crosschainTypes,
  isMsgSendToExternalEncodeObject,
  MsgSendToExternalEncodeObject,
} from "./crosschain/messages";
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
export {
  AminoCommunityPoolSpendProposal,
  distributionProposalContentAminoConverters,
  isAminoCommunityPoolSpendProposal,
} from "./distribution/aminomessages";
export {
  AminoDenomUnit,
  AminoMetadata,
  AminoRegisterCoinProposal,
  AminoRegisterERC20Proposal,
  AminoToggleTokenConversionProposal,
  AminoUpdateDenomAliasProposal,
  erc20ProposalContentAminoConverters,
  isAminoRegisterCoinProposal,
  isAminoRegisterERC20Proposal,
  isAminoToggleTokenConversionProposal,
  isAminoUpdateDenomAliasProposal,
} from "./erc20/aminomessages";
export {
  AminoTextProposal,
  createGovSubmitProposalAminoConverters,
  govProposalContentAminoConverters,
  isAminoTextProposal,
} from "./gov/aminomessages";
export { AminoFxMsgIbcTransfer, fxibcAminoConverters, isAminoFxMsgIbcTransfer } from "./ibc/aminomessages";
export { fxibcTypes, isMsgIbcTransferEncodeObject, FxMsgIbcTransferEncodeObject } from "./ibc/messages";
export {
  AminoParameterChangeProposal,
  isAminoParameterChangeProposal,
  paramsProposalContentAminoConverters,
} from "./params/aminomessages";
export {
  AminoCancelSoftwareUpgradeProposal,
  AminoSoftwareUpgradeProposal,
  isAminoCancelSoftwareUpgradeProposal,
  isAminoSoftwareUpgradeProposal,
  upgradeProposalContentAminoConverters,
} from "./upgrade/aminomessages";

export { setupBaseExtension } from "./base/queries";
export { setupCrosschainExtension } from "./crosschain/queries";
export { setupErc20Extension } from "./erc20/queries";
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
