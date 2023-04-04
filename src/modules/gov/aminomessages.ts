/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg, Coin } from "@cosmjs/amino";
import { AminoConverters, AminoMsgSubmitProposal } from "@cosmjs/stargate";
import { MsgSubmitProposal } from "cosmjs-types/cosmos/gov/v1beta1/tx";

import { MsgSubmitProposal as MsgSubmitProposalV1 } from "../../fx/gov/v1/tx";
import { proposalContentFromAminoConverter, proposalContentToAminoConverter } from "./content";
import { proposalMessageFromAminoConverter, proposalMessageToAminoConverter } from "./message";

export interface AminoMsgSubmitProposalV1 extends AminoMsg {
  readonly type: "cosmos-sdk/v1/MsgSubmitProposal";
  readonly value: {
    readonly messages: Array<{
      readonly type: string;
      readonly value: any;
    }>;
    readonly initial_deposit: readonly Coin[];
    /** Bech32 account address */
    readonly proposer: string;
    readonly metadata: string;
  };
}

export function fxgovSubmitProposalAminoConverters(): AminoConverters {
  return {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
      aminoType: "cosmos-sdk/MsgSubmitProposal",
      toAmino: ({
        initialDeposit,
        proposer,
        content,
      }: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => {
        return {
          initial_deposit: initialDeposit,
          proposer: proposer,
          content: proposalContentToAminoConverter(content),
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
          content: proposalContentFromAminoConverter(content),
        };
      },
    },
    "/cosmos.gov.v1.MsgSubmitProposal": {
      aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
      toAmino: ({
        initialDeposit,
        proposer,
        messages,
        metadata,
      }: MsgSubmitProposalV1): AminoMsgSubmitProposalV1["value"] => {
        return {
          initial_deposit: initialDeposit,
          proposer: proposer,
          metadata: metadata,
          messages: [...messages].map((v) => {
            return proposalMessageToAminoConverter(v);
          }),
        };
      },
      fromAmino: ({
        initial_deposit,
        proposer,
        messages,
        metadata,
      }: AminoMsgSubmitProposalV1["value"]): MsgSubmitProposalV1 => {
        return {
          initialDeposit: Array.from(initial_deposit),
          proposer: proposer,
          metadata: metadata,
          messages: [...messages].map((v) => {
            return proposalMessageFromAminoConverter(v);
          }),
        };
      },
    },
  };
}
