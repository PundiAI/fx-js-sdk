import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import {
  QueryClientImpl,
  QueryDenomToERC20Response,
  QueryERC20ToDenomResponse,
} from "../../fx/gravity/v1/query";
import { ERC20ToDenom } from "../../fx/gravity/v1/types";

export interface GravityExtension {
  readonly gravity: {
    readonly erc20ToDenom: (token: string) => Promise<QueryERC20ToDenomResponse | null>;
    readonly denomToErc20: (denom: string) => Promise<QueryDenomToERC20Response | null>;
    readonly bridgeTokens: (chainName: string) => Promise<ERC20ToDenom[] | null>;
  };
}

export function setupGravityExtension(base: QueryClient): GravityExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    gravity: {
      erc20ToDenom: async function (erc20: string) {
        return await queryService.ERC20ToDenom({ erc20: erc20 });
      },
      denomToErc20: async function (denom: string) {
        return await queryService.DenomToERC20({ denom: denom });
      },
      bridgeTokens: async function () {
        const { bridgeTokens } = await queryService.BridgeTokens({});
        return bridgeTokens;
      },
    },
  };
}
