/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters, AminoMsgSubmitProposal } from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { MsgSubmitProposal } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";

import { ProposalContentAminoConverter } from "../index";

export function createGovSubmitProposalAminoConverters(
  contents: Record<string, ProposalContentAminoConverter>,
): AminoConverters {
  return {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
      aminoType: "cosmos-sdk/MsgSubmitProposal",
      toAmino: ({
        initialDeposit,
        proposer,
        content,
      }: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => {
        assertDefinedAndNotNull(content);
        return {
          initial_deposit: initialDeposit,
          proposer: proposer,
          content: contents[content.typeUrl].toAmino(content),
        };
      },
      fromAmino: ({
        initial_deposit,
        proposer,
        content,
      }: AminoMsgSubmitProposal["value"]): MsgSubmitProposal => {
        return {
          initialDeposit: Array.from(initial_deposit),
          proposer: proposer,
          content: contents[content.type].fromAmino(content),
        };
      },
    },
  };
}

/* eslint-disable @typescript-eslint/no-use-before-define */
export function govProposalContentAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/cosmos.gov.v1beta1.TextProposal": aminoConverterTextProposal(),
    "cosmos-sdk/TextProposal": aminoConverterTextProposal(),
  };
}

export interface AminoTextProposal extends AminoMsg {
  readonly type: "cosmos-sdk/TextProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
  };
}

export function isAminoTextProposal(msg: AminoMsg): msg is AminoTextProposal {
  return msg.type === "cosmos-sdk/TextProposal";
}

function aminoConverterTextProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoTextProposal => {
      if (content.typeUrl !== "/cosmos.gov.v1beta1.TextProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = TextProposal.decode(content.value);
      return {
        type: "cosmos-sdk/TextProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
        },
      };
    },
    fromAmino: (content: AminoTextProposal): Any => {
      if (content.type !== "cosmos-sdk/TextProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode({
          title: proposal.title,
          description: proposal.description,
        }).finish(),
      });
    },
  };
}
