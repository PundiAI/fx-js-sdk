import { AminoMsg } from "@cosmjs/amino";
import { assert } from "@cosmjs/utils";
import { DenomUnit } from "cosmjs-types/cosmos/bank/v1beta1/bank";
import { Any } from "cosmjs-types/google/protobuf/any";

import {
  RegisterCoinProposal,
  RegisterERC20Proposal,
  ToggleTokenConversionProposal,
  UpdateDenomAliasProposal,
} from "../../fx/erc20/v1/erc20";
import { ProposalContentAminoConverter } from "../index";

export function erc20ProposalContentAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/fx.erc20.v1.RegisterCoinProposal": aminoConverterRegisterCoinProposal(),
    "erc20/RegisterCoinProposal": aminoConverterRegisterCoinProposal(),

    "/fx.erc20.v1.RegisterERC20Proposal": aminoConverterRegisterERC20Proposal(),
    "erc20/RegisterERC20Proposal": aminoConverterRegisterERC20Proposal(),

    "/fx.erc20.v1.ToggleTokenConversionProposal": aminoConverterToggleTokenConversionProposal(),
    "erc20/ToggleTokenConversionProposal": aminoConverterToggleTokenConversionProposal(),

    "/fx.erc20.v1.UpdateDenomAliasProposal": aminoConverterUpdateDenomAliasProposal(),
    "erc20/UpdateDenomAliasProposal": aminoConverterUpdateDenomAliasProposal(),
  };
}

export interface AminoRegisterCoinProposal extends AminoMsg {
  readonly type: "erc20/RegisterCoinProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    readonly metadata?: Metadata;
  };
}

export interface Metadata {
  readonly description: string;
  readonly denom_units: readonly DenomUnit[];
  readonly base: string;
  readonly display: string;
  readonly name: string;
  readonly symbol: string;
}

export function isAminoRegisterCoinProposal(msg: AminoMsg): msg is AminoRegisterCoinProposal {
  return msg.type === "erc20/RegisterCoinProposal";
}

function aminoConverterRegisterCoinProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoRegisterCoinProposal => {
      if (content.typeUrl !== "/fx.erc20.v1.RegisterCoinProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = RegisterCoinProposal.decode(content.value);
      return {
        type: "erc20/RegisterCoinProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
          metadata: proposal.metadata
            ? {
                description: proposal.metadata.description,
                denom_units: [...proposal.metadata.denomUnits],
                base: proposal.metadata.base,
                display: proposal.metadata.display,
                name: proposal.metadata.name,
                symbol: proposal.metadata.symbol,
              }
            : undefined,
        },
      };
    },
    fromAmino: (content: AminoRegisterCoinProposal): Any => {
      if (content.type !== "erc20/RegisterCoinProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/fx.erc20.v1.RegisterCoinProposal",
        value: RegisterCoinProposal.encode({
          title: proposal.title,
          description: proposal.description,
          metadata: proposal.metadata
            ? {
                description: proposal.metadata.description,
                denomUnits: [...proposal.metadata.denom_units],
                base: proposal.metadata.base,
                display: proposal.metadata.display,
                name: proposal.metadata.name,
                symbol: proposal.metadata.symbol,
              }
            : undefined,
        }).finish(),
      });
    },
  };
}

export interface AminoRegisterERC20Proposal extends AminoMsg {
  readonly type: "erc20/RegisterERC20Proposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    readonly erc20address: string;
  };
}

export function isAminoRegisterERC20Proposal(msg: AminoMsg): msg is AminoRegisterERC20Proposal {
  return msg.type === "erc20/RegisterERC20Proposal";
}

function aminoConverterRegisterERC20Proposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoRegisterERC20Proposal => {
      if (content.typeUrl !== "/fx.erc20.v1.RegisterERC20Proposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = RegisterERC20Proposal.decode(content.value);
      return {
        type: "erc20/RegisterERC20Proposal",
        value: {
          title: proposal.title,
          description: proposal.description,
          erc20address: proposal.erc20address,
        },
      };
    },
    fromAmino: (content: AminoRegisterERC20Proposal): Any => {
      if (content.type !== "erc20/RegisterERC20Proposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/fx.erc20.v1.RegisterERC20Proposal",
        value: RegisterERC20Proposal.encode({
          title: proposal.title,
          description: proposal.description,
          erc20address: proposal.erc20address,
        }).finish(),
      });
    },
  };
}

export interface AminoToggleTokenConversionProposal extends AminoMsg {
  readonly type: "erc20/ToggleTokenConversionProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    readonly token: string;
  };
}

export function isAminoToggleTokenConversionProposal(
  msg: AminoMsg,
): msg is AminoToggleTokenConversionProposal {
  return msg.type === "erc20/ToggleTokenConversionProposal";
}

function aminoConverterToggleTokenConversionProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoToggleTokenConversionProposal => {
      if (content.typeUrl !== "/fx.erc20.v1.ToggleTokenConversionProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = ToggleTokenConversionProposal.decode(content.value);
      return {
        type: "erc20/ToggleTokenConversionProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
          token: proposal.token,
        },
      };
    },
    fromAmino: (content: AminoToggleTokenConversionProposal): Any => {
      if (content.type !== "erc20/ToggleTokenConversionProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/fx.erc20.v1.ToggleTokenConversionProposal",
        value: ToggleTokenConversionProposal.encode({
          title: proposal.title,
          description: proposal.description,
          token: proposal.token,
        }).finish(),
      });
    },
  };
}

export interface AminoUpdateDenomAliasProposal extends AminoMsg {
  readonly type: "erc20/UpdateDenomAliasProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    readonly alias: string;
    readonly denom: string;
  };
}

export function isAminoUpdateDenomAliasProposal(msg: AminoMsg): msg is AminoUpdateDenomAliasProposal {
  return msg.type === "erc20/UpdateDenomAliasProposal";
}

function aminoConverterUpdateDenomAliasProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoUpdateDenomAliasProposal => {
      if (content.typeUrl !== "/fx.erc20.v1.UpdateDenomAliasProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = UpdateDenomAliasProposal.decode(content.value);
      return {
        type: "erc20/UpdateDenomAliasProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
          alias: proposal.alias,
          denom: proposal.denom,
        },
      };
    },
    fromAmino: (content: AminoUpdateDenomAliasProposal): Any => {
      if (content.type !== "erc20/UpdateDenomAliasProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/fx.erc20.v1.UpdateDenomAliasProposal",
        value: UpdateDenomAliasProposal.encode({
          title: proposal.title,
          description: proposal.description,
          alias: proposal.alias,
          denom: proposal.denom,
        }).finish(),
      });
    },
  };
}
