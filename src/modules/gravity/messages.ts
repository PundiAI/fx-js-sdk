import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import { MsgSendToEth } from "../../fx/gravity/v1/tx";

export const gravityTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/fx.gravity.v1.MsgSendToEth", MsgSendToEth],
];

export interface MsgSendToEthEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.gravity.v1.MsgSendToEth";
  readonly value: Partial<MsgSendToEth>;
}

export function isMsgSendToEthEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgSendToEthEncodeObject {
  return (encodeObject as MsgSendToEthEncodeObject).typeUrl === "/fx.gravity.v1.MsgSendToEth";
}
