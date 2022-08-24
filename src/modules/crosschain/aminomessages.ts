/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg, Coin } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate/build/aminotypes";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import { Any } from "cosmjs-types/google/protobuf/any";

import { MsgSendToExternal } from "../../fx/crosschain/v1/tx";
import { UpdateChainOraclesProposal } from "../../fx/crosschain/v1/types";
import { ProposalContentAminoConverter } from "../index";

/* eslint-disable @typescript-eslint/no-use-before-define */
export function crosschainProposalContentAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal": aminoConverterUpdateChainOraclesProposal(),
    "crosschain/UpdateChainOraclesProposal": aminoConverterUpdateChainOraclesProposal(),

    "/fx.gravity.crosschain.v1.MsgSendToExternal": aminoConverterMsgSendToExternal(),
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

export interface AminoMsgSendToExternal extends AminoMsg {
  readonly type: "crosschain/MsgSendToExternal";
  readonly value: {
    readonly chain_name: string;
    readonly sender: string;
    readonly dest: string;
    readonly amount?: Coin;
    readonly bridge_fee?: Coin;
  };
}

export function isAminoMsgSendToExternal(msg: AminoMsg): msg is AminoMsgSendToExternal {
  return msg.type === "crosschain/MsgSendToExternal";
}

function aminoConverterMsgSendToExternal(): AminoConverter {
  return {
    aminoType: "crosschain/MsgSendToExternal",
    toAmino: ({
      chainName,
      sender,
      dest,
      amount,
      bridgeFee,
    }: MsgSendToExternal): AminoMsgSendToExternal["value"] => {
      return {
        chain_name: chainName,
        sender: sender,
        dest: dest,
        amount: amount,
        bridge_fee: bridgeFee,
      };
    },
    fromAmino: ({
      chain_name,
      sender,
      dest,
      amount,
      bridge_fee,
    }: AminoMsgSendToExternal["value"]): MsgSendToExternal => {
      return {
        chainName: chain_name,
        sender: sender,
        dest: dest,
        amount: amount,
        bridgeFee: bridge_fee,
      };
    },
  };
}
