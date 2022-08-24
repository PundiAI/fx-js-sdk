import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import { MsgSendToExternal } from "../../fx/crosschain/v1/tx";

export const crosschainTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/fx.gravity.crosschain.v1.MsgSendToExternal", MsgSendToExternal],
];

export interface MsgSendToExternalEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.gravity.crosschain.v1.MsgSendToExternal";
  readonly value: Partial<MsgSendToExternal>;
}

export function isMsgSendToExternalEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgSendToExternalEncodeObject {
  return (
    (encodeObject as MsgSendToExternalEncodeObject).typeUrl === "/fx.gravity.crosschain.v1.MsgSendToExternal"
  );
}
