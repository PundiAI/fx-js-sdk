import { AminoMsg, Coin } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate/build/aminotypes";
import Long from "long";

import { MsgTransfer } from "../../fx/ibc/applications/transfer/v1/tx";

// ibc client proposal `ClientUpdateProposal` `UpgradeProposal` not support amino encode

export function ibcAminoConverters(): Record<string, AminoConverter> {
  return {
    "/fx.ibc.applications.transfer.v1.MsgTransfer": aminoConverterMsgIbcTransfer(),
  };
}

interface AminoHeight {
  readonly revision_number?: string;
  readonly revision_height?: string;
}

function omitDefault<T extends string | number | Long>(input: T): T | undefined {
  if (typeof input === "string") {
    return input === "" ? undefined : input;
  }

  if (typeof input === "number") {
    return input === 0 ? undefined : input;
  }

  if (Long.isLong(input)) {
    return input.isZero() ? undefined : input;
  }

  throw new Error(`Got unsupported type '${typeof input}'`);
}

export interface AminoMsgIbcTransfer extends AminoMsg {
  readonly type: "cosmos-sdk/MsgTransfer";
  readonly value: {
    readonly source_port: string;
    readonly source_channel: string;
    readonly token?: Coin;
    readonly sender: string;
    readonly receiver: string;
    readonly timeout_height?: AminoHeight;
    readonly timeout_timestamp?: string;
    readonly router?: string;
    readonly fee?: Coin;
  };
}

export function isAminoMsgIbcTransfer(msg: AminoMsg): msg is AminoMsgIbcTransfer {
  return msg.type === "cosmos-sdk/MsgTransfer";
}

function aminoConverterMsgIbcTransfer(): AminoConverter {
  return {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: ({
      sourcePort,
      sourceChannel,
      token,
      sender,
      receiver,
      timeoutHeight,
      timeoutTimestamp,
      router,
      fee,
    }: MsgTransfer): AminoMsgIbcTransfer["value"] => {
      return {
        source_port: sourcePort,
        source_channel: sourceChannel,
        token: token
          ? {
              denom: token.denom,
              amount: token.amount,
            }
          : undefined,
        sender: sender,
        receiver: receiver,
        timeout_height: timeoutHeight
          ? {
              revision_height: omitDefault(timeoutHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(timeoutHeight.revisionNumber)?.toString(),
            }
          : undefined,
        timeout_timestamp: omitDefault(timeoutTimestamp)?.toString(),
        router: router === "" ? undefined : router,
        fee: fee
          ? {
              denom: fee.denom,
              amount: fee.amount,
            }
          : {
              denom: "",
              amount: "0",
            },
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp,
      router,
      fee,
    }: AminoMsgIbcTransfer["value"]): MsgTransfer => {
      return {
        sourcePort: source_port,
        sourceChannel: source_channel,
        sender: sender,
        token: token
          ? {
              denom: token.denom,
              amount: token.amount,
            }
          : undefined,
        receiver: receiver,
        timeoutHeight: timeout_height
          ? {
              revisionHeight: Long.fromString(timeout_height.revision_height || "0", true),
              revisionNumber: Long.fromString(timeout_height.revision_number || "0", true),
            }
          : undefined,
        timeoutTimestamp: Long.fromString(timeout_timestamp || "0", true),
        router: router === undefined ? "" : router,
        fee:
          fee && fee.denom !== ""
            ? {
                denom: fee.denom,
                amount: fee.amount,
              }
            : undefined,
      };
    },
  };
}
