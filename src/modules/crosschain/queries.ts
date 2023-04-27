import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import {
  QueryClientImpl,
  QueryDenomToTokenResponse,
  QueryTokenToDenomResponse,
} from "../../types/fx/crosschain/v1/query";
import { BridgeToken } from "../../types/fx/crosschain/v1/types";

export interface CrosschainExtension {
  readonly crosschain: {
    readonly tokenToDenom: (chainName: string, token: string) => Promise<QueryTokenToDenomResponse | null>;
    readonly denomToToken: (chainName: string, denom: string) => Promise<QueryDenomToTokenResponse | null>;
    readonly bridgeTokens: (chainName: string) => Promise<BridgeToken[] | null>;
  };
}

export function setupCrosschainExtension(base: QueryClient): CrosschainExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    crosschain: {
      tokenToDenom: async function (chainName: string, token: string) {
        return await queryService.TokenToDenom({ chainName: chainName, token: token });
      },
      denomToToken: async function (chainName: string, denom: string) {
        return await queryService.DenomToToken({ chainName: chainName, denom: denom });
      },
      bridgeTokens: async function (chainName: string) {
        const { bridgeTokens } = await queryService.BridgeTokens({ chainName: chainName });
        return bridgeTokens;
      },
    },
  };
}
