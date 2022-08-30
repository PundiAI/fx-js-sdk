import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { TokenPair } from "../../fx/erc20/v1/erc20";
import { QueryClientImpl } from "../../fx/erc20/v1/query";

export interface Erc20Extension {
  readonly erc20: {
    readonly tokenPairs: () => Promise<TokenPair[] | null>;
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
      tokenPairs: async function () {
        const { tokenPairs } = await queryService.TokenPairs({});
        return tokenPairs;
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
