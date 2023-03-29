/* eslint-disable @typescript-eslint/naming-convention */
import { AminoConverters, AminoMsgSubmitProposal } from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import { MsgSubmitProposal } from "cosmjs-types/cosmos/gov/v1beta1/tx";

import { proposalContentConverter } from "./content";

export function createGovSubmitProposalAminoConverters(): AminoConverters {
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
          content: proposalContentConverter(content, true),
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
          content: proposalContentConverter(content),
        };
      },
    },
  };
}
