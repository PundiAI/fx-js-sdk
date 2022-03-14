import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import { MsgTransfer } from "../../fx/ibc/applications/transfer/v1/tx";

export const ibcTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/fx.ibc.applications.transfer.v1.MsgTransfer", MsgTransfer],
];

export interface MsgIbcTransferEncodeObject extends EncodeObject {
  readonly typeUrl: "/fx.ibc.applications.transfer.v1.MsgTransfer";
  readonly value: Partial<MsgTransfer>;
}

export function isMsgIbcTransferEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgIbcTransferEncodeObject {
  return (
    (encodeObject as MsgIbcTransferEncodeObject).typeUrl === "/fx.ibc.applications.transfer.v1.MsgTransfer"
  );
}
