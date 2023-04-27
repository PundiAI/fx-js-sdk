import { GeneratedType } from "@cosmjs/proto-signing";

import { MsgAddMargin, MsgCancelOrder, MsgClosePosition, MsgCreateOrder } from "../../types/fx/dex/v1/tx";

export const dexTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/fx.dex.v1.MsgCreateOrder", MsgCreateOrder],
  ["/fx.dex.v1.MsgCancelOrder", MsgCancelOrder],
  ["/fx.dex.v1.MsgAddMargin", MsgAddMargin],
  ["/fx.dex.v1.MsgClosePosition", MsgClosePosition],
];
