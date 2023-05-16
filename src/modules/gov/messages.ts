import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSubmitProposal } from "cosmjs-types/cosmos/gov/v1beta1/tx";

import {
  MsgDeposit as MsgDepositV1,
  MsgSubmitProposal as MsgSubmitProposalV1,
  MsgVote as MsgVoteV1,
} from "../../types/cosmos/gov/v1/tx";

export const fxgovTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposalV1],
  ["/cosmos.gov.v1.MsgDeposit", MsgDepositV1],
  ["/cosmos.gov.v1.MsgVote", MsgVoteV1],
];
