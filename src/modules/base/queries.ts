import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

import { QueryClientImpl } from "../../fx/base/v1/query";

export interface FxBaseExtension {
  readonly fxbase: {
    readonly getGasPrice: () => Promise<Coin[] | null>;
  };
}

export function setupOtherExtension(base: QueryClient): FxBaseExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    fxbase: {
      getGasPrice: async function () {
        const { gasPrices } = await queryService.GetGasPrice({});
        return gasPrices;
      },
    },
  };
}
