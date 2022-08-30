import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

import { QueryClientImpl } from "../../fx/other/query";

export interface OtherExtension {
  readonly other: {
    readonly gasPrice: () => Promise<Coin[] | null>;
  };
}

export function setupOtherExtension(base: QueryClient): OtherExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    other: {
      gasPrice: async function () {
        const { gasPrices } = await queryService.GasPrice({});
        return gasPrices;
      },
    },
  };
}
