import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClientImpl, QueryDenomTracesResponse } from "cosmjs-types/ibc/applications/transfer/v1/query";
import { DenomTrace } from "cosmjs-types/ibc/applications/transfer/v1/transfer";

export interface FxIbcExtension {
  readonly fxibc: {
    readonly denomTrace: (hash: string) => Promise<DenomTrace | null>;
    readonly denomTraces: (pagination?: PageRequest) => Promise<QueryDenomTracesResponse | null>;
    readonly denomHash: (trace: string) => Promise<string | null>;
  };
}

export function setupFxIbcExtension(base: QueryClient): FxIbcExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    fxibc: {
      denomTrace: async function (hash: string) {
        const response = await queryService.DenomTrace({ hash: hash });
        return response.denomTrace ? response.denomTrace : null;
      },
      denomTraces: async function (pagination?: PageRequest) {
        return await queryService.DenomTraces({ pagination: pagination });
      },
      denomHash: async function (trace: string) {
        const { hash } = await queryService.DenomHash({ trace: trace });
        return hash;
      },
    },
  };
}
