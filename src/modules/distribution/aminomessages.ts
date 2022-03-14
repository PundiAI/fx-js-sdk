import { AminoMsg } from "@cosmjs/amino";
import { assert } from "@cosmjs/utils";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { Any } from "cosmjs-types/google/protobuf/any";

import { ProposalContentAminoConverter } from "../index";

export function distributionProposalContentAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal": aminoConverterCommunityPoolSpendProposal(),
    "cosmos-sdk/CommunityPoolSpendProposal": aminoConverterCommunityPoolSpendProposal(),
  };
}

export interface AminoCommunityPoolSpendProposal extends AminoMsg {
  readonly type: "cosmos-sdk/CommunityPoolSpendProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    readonly amount: readonly Coin[];
    /** Bech32 account address */
    readonly recipient: string;
  };
}

export function isAminoCommunityPoolSpendProposal(msg: AminoMsg): msg is AminoCommunityPoolSpendProposal {
  return msg.type === "cosmos-sdk/CommunityPoolSpendProposal";
}

function aminoConverterCommunityPoolSpendProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoCommunityPoolSpendProposal => {
      if (content.typeUrl !== "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = CommunityPoolSpendProposal.decode(content.value);
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
          amount: [...proposal.amount],
          recipient: proposal.recipient,
        },
      };
    },
    fromAmino: (content: AminoCommunityPoolSpendProposal): Any => {
      if (content.type !== "cosmos-sdk/CommunityPoolSpendProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.encode({
          title: proposal.title,
          description: proposal.description,
          amount: [...proposal.amount],
          recipient: proposal.recipient,
        }).finish(),
      });
    },
  };
}
