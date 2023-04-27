import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";

import { TokenPair } from "../../types/fx/erc20/v1/erc20";
import { QueryClientImpl, QueryTokenPairsResponse } from "../../types/fx/erc20/v1/query";

export interface Erc20Extension {
  readonly erc20: {
    readonly tokenPairs: (pagination?: PageRequest) => Promise<QueryTokenPairsResponse | null>;
    readonly tokenPair: (token: string) => Promise<TokenPair | null>;
    readonly denomAliases: (denom: string) => Promise<string[] | null>;
    readonly aliasDenom: (alias: string) => Promise<string | null>;
  };
}

export function setupErc20Extension(base: QueryClient): Erc20Extension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    erc20: {
      tokenPairs: async function (pagination?: PageRequest) {
        return await queryService.TokenPairs({ pagination: pagination });
      },
      tokenPair: async function (token: string) {
        const response = await queryService.TokenPair({ token: token });
        return response.tokenPair ? response.tokenPair : null;
      },
      denomAliases: async function (denom: string) {
        const { aliases } = await queryService.DenomAliases({ denom: denom });
        return aliases;
      },
      aliasDenom: async function (alias: string) {
        const { denom } = await queryService.AliasDenom({ alias: alias });
        return denom;
      },
    },
  };
}
