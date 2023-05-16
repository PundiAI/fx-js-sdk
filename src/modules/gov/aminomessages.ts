/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg, Coin } from "@cosmjs/amino";
import { AminoConverters, AminoMsgSubmitProposal } from "@cosmjs/stargate";
import { MsgSubmitProposal } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import Long from "long";

import {
  MsgDeposit,
  MsgSubmitProposal as MsgSubmitProposalV1,
  MsgVote,
  voteOptionFromJSON,
} from "../../types/cosmos/gov/v1/tx";
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
    readonly proposer: string;
    readonly metadata: string;
  };
}

export interface AminoMsgVoteV1 extends AminoMsg {
  readonly type: "cosmos-sdk/v1/MsgVote";
  readonly value: {
    readonly proposal_id: string;
    readonly voter: string;
    readonly option: number;
    readonly metadata: string;
  };
}

export interface AminoMsgDepositV1 extends AminoMsg {
  readonly type: "cosmos-sdk/v1/MsgDeposit";
  readonly value: {
    readonly proposal_id: string;
    readonly depositor: string;
    readonly amount: readonly Coin[];
  };
}

export function fxgovAminoConverters(): AminoConverters {
  return {
    "/cosmos.gov.v1.MsgDeposit": {
      aminoType: "cosmos-sdk/v1/MsgDeposit",
      toAmino: ({ amount, depositor, proposalId }: MsgDeposit): AminoMsgDepositV1["value"] => {
        return {
          amount,
          depositor,
          proposal_id: proposalId.toString(),
        };
      },
      fromAmino: ({ amount, depositor, proposal_id }: AminoMsgDepositV1["value"]): MsgDeposit => {
        return {
          amount: Array.from(amount),
          depositor,
          proposalId: Long.fromString(proposal_id),
        };
      },
    },
    "/cosmos.gov.v1.MsgVote": {
      aminoType: "cosmos-sdk/v1/MsgVote",
      toAmino: ({ option, proposalId, voter, metadata }: MsgVote): AminoMsgVoteV1["value"] => {
        return {
          option: option,
          proposal_id: proposalId.toString(),
          voter: voter,
          metadata: metadata,
        };
      },
      fromAmino: ({ option, proposal_id, voter, metadata }: AminoMsgVoteV1["value"]): MsgVote => {
        return {
          option: voteOptionFromJSON(option),
          proposalId: Long.fromString(proposal_id),
          voter: voter,
          metadata: metadata,
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
  };
}
