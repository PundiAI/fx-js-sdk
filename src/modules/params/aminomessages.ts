/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { ParamChange, ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { Any } from "cosmjs-types/google/protobuf/any";

import { ProposalContentAminoConverter } from "../index";

/* eslint-disable @typescript-eslint/no-use-before-define */
export function paramsProposalContentAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/cosmos.params.v1beta1.ParameterChangeProposal": aminoConverterParameterChangeProposal(),
    "cosmos-sdk/ParameterChangeProposal": aminoConverterParameterChangeProposal(),
  };
}

export interface AminoParameterChangeProposal extends AminoMsg {
  readonly type: "cosmos-sdk/ParameterChangeProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    readonly changes: readonly ParamChange[];
  };
}

export function isAminoParameterChangeProposal(msg: AminoMsg): msg is AminoParameterChangeProposal {
  return msg.type === "cosmos-sdk/ParameterChangeProposal";
}

function aminoConverterParameterChangeProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoParameterChangeProposal => {
      if (content.typeUrl !== "/cosmos.params.v1beta1.ParameterChangeProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = ParameterChangeProposal.decode(content.value);
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
          changes: [...proposal.changes],
        },
      };
    },
    fromAmino: (content: AminoParameterChangeProposal): Any => {
      if (content.type !== "cosmos-sdk/ParameterChangeProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: ParameterChangeProposal.encode({
          title: proposal.title,
          description: proposal.description,
          changes: [...proposal.changes],
        }).finish(),
      });
    },
  };
}
