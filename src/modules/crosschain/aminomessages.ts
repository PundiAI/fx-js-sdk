/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg, Coin } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate/build/aminotypes";

import { MsgSendToExternal } from "../../fx/crosschain/v1/tx";
import { ProposalContentAminoConverter } from "../index";

/* eslint-disable @typescript-eslint/no-use-before-define */
export function crosschainAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/fx.gravity.crosschain.v1.MsgSendToExternal": aminoConverterMsgSendToExternal(),
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
