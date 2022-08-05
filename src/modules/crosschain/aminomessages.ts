/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import { Any } from "cosmjs-types/google/protobuf/any";

import { UpdateChainOraclesProposal } from "../../fx/crosschain/v1/types";
import { ProposalContentAminoConverter } from "../index";

/* eslint-disable @typescript-eslint/no-use-before-define */
export function crosschainProposalContentAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal": aminoConverterUpdateChainOraclesProposal(),
    "crosschain/UpdateChainOraclesProposal": aminoConverterUpdateChainOraclesProposal(),
  };
}

export interface AminoUpdateChainOraclesProposal extends AminoMsg {
  readonly type: "crosschain/UpdateChainOraclesProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    /** Bech32 account address */
    readonly oracles: string[];
    /** support: bsc,polygon,tron */
    readonly chain_name: string;
  };
}

export function isAminoUpdateChainOraclesProposal(msg: AminoMsg): msg is AminoUpdateChainOraclesProposal {
  return msg.type === "crosschain/UpdateChainOraclesProposal";
}

function aminoConverterUpdateChainOraclesProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoUpdateChainOraclesProposal => {
      if (content.typeUrl !== "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = UpdateChainOraclesProposal.decode(content.value);
      assertDefinedAndNotNull(proposal.oracles);
      return {
        type: "crosschain/UpdateChainOraclesProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
          oracles: proposal.oracles,
          chain_name: proposal.chainName,
        },
      };
    },
    fromAmino: (content: AminoUpdateChainOraclesProposal): Any => {
      if (content.type !== "crosschain/UpdateChainOraclesProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      assertDefinedAndNotNull(proposal.oracles);
      return Any.fromPartial({
        typeUrl: "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal",
        value: UpdateChainOraclesProposal.encode({
          title: proposal.title,
          description: proposal.description,
          oracles: proposal.oracles,
          chainName: proposal.chain_name,
        }).finish(),
      });
    },
  };
}
