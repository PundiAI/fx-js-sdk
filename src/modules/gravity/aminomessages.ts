/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg, Coin } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate/build/aminotypes";

import { MsgSendToEth } from "../../fx/gravity/v1/tx";

/* eslint-disable @typescript-eslint/no-use-before-define */
export function gravityAminoConverters(): Record<string, AminoConverter> {
  return {
    "/fx.gravity.v1.MsgSendToEth": aminoConverterMsgSendToEth(),
  };
}

export interface AminoMsgSendToEth extends AminoMsg {
  readonly type: "gravity/MsgSendToEth";
  readonly value: {
    readonly sender: string;
    readonly eth_dest: string;
    readonly amount?: Coin;
    readonly bridge_fee?: Coin;
  };
}

export function isAminoMsgSendToEth(msg: AminoMsg): msg is AminoMsgSendToEth {
  return msg.type === "gravity/MsgSendToEth";
}

function aminoConverterMsgSendToEth(): AminoConverter {
  return {
    aminoType: "gravity/MsgSendToEth",
    toAmino: ({ sender, ethDest, amount, bridgeFee }: MsgSendToEth): AminoMsgSendToEth["value"] => {
      return {
        sender: sender,
        eth_dest: ethDest,
        amount: amount,
        bridge_fee: bridgeFee,
      };
    },
    fromAmino: ({ sender, eth_dest, amount, bridge_fee }: AminoMsgSendToEth["value"]): MsgSendToEth => {
      return {
        sender: sender,
        ethDest: eth_dest,
        amount: amount,
        bridgeFee: bridge_fee,
      };
    },
  };
}
