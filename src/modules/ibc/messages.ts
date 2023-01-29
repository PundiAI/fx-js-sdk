import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import { MsgTransfer } from "../../fx/ibc/applications/transfer/v1/tx";

export const fxibcTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/fx.ibc.applications.transfer.v1.MsgTransfer", MsgTransfer],
];

export interface FxMsgIbcTransferEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.ibc.applications.transfer.v1.MsgTransfer";
  readonly value: Partial<MsgTransfer>;
}

export function isMsgIbcTransferEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is FxMsgIbcTransferEncodeObject {
  return (
    (encodeObject as FxMsgIbcTransferEncodeObject).typeUrl === "/fx.ibc.applications.transfer.v1.MsgTransfer"
  );
}
