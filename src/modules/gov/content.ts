/* eslint-disable @typescript-eslint/naming-convention */
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import {
  CancelSoftwareUpgradeProposal,
  SoftwareUpgradeProposal,
} from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "cosmjs-types/google/protobuf/any";
import Long from "long";

import { UpdateChainOraclesProposal } from "../../fx/crosschain/v1/types";
import {
  RegisterCoinProposal,
  RegisterERC20Proposal,
  ToggleTokenConversionProposal,
  UpdateDenomAliasProposal,
} from "../../fx/erc20/v1/erc20";

interface AminoDenomUnit {
  readonly denom: string;
  exponent?: number;
  aliases?: string[];
}

export function proposalContentToAminoConverter(content: Any | undefined): any {
  if (content == undefined || !content.value || !content.typeUrl) {
    throw new Error(`Invalid proposal content type: '${content}'`);
  }
  if (content.typeUrl === "/cosmos.gov.v1beta1.TextProposal") {
    const proposal = TextProposal.decode(content.value);
    return {
      type: "cosmos-sdk/TextProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
      },
    };
  }
  if (content.typeUrl === "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal") {
    const proposal = CommunityPoolSpendProposal.decode(content.value);
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        amount: proposal.amount,
        recipient: proposal.recipient,
      },
    };
  }
  if (content.typeUrl === "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal") {
    const proposal = SoftwareUpgradeProposal.decode(content.value);
    return {
      type: "cosmos-sdk/SoftwareUpgradeProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        plan: {
          name: proposal.plan?.name,
          time: "0001-01-01T00:00:00Z",
          height: proposal.plan?.height ? proposal.plan.height.toString() : "0",
          info: proposal.plan?.info,
        },
      },
    };
  }
  if (content.typeUrl === "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal") {
    const proposal = CancelSoftwareUpgradeProposal.decode(content.value);
    return {
      type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
      },
    };
  }
  if (content.typeUrl === "/cosmos.params.v1beta1.ParameterChangeProposal") {
    const proposal = ParameterChangeProposal.decode(content.value);
    return {
      type: "cosmos-sdk/ParameterChangeProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        changes: [...proposal.changes],
      },
    };
  }
  if (content.typeUrl === "/fx.erc20.v1.RegisterCoinProposal") {
    const proposal = RegisterCoinProposal.decode(content.value);
    const metadata: any = {
      description: proposal.metadata?.description,
      denom_units: proposal.metadata?.denomUnits.map((v) => {
        const denomUnit: AminoDenomUnit = {
          denom: v.denom,
          exponent: v.exponent,
          aliases: v.aliases,
        };
        if (denomUnit.aliases?.length === 0) {
          delete denomUnit.aliases;
        }
        if (denomUnit.exponent === 0) {
          delete denomUnit.exponent;
        }
        return denomUnit;
      }),
      base: proposal.metadata?.base,
      display: proposal.metadata?.display,
      name: proposal.metadata?.name,
      symbol: proposal.metadata?.symbol,
    };
    if (proposal.metadata?.uri) {
      metadata.uri = proposal.metadata.uri;
    }
    if (proposal.metadata?.uriHash) {
      metadata.uri_hash = proposal.metadata.uriHash;
    }
    return {
      type: "erc20/RegisterCoinProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        metadata: metadata,
      },
    };
  }
  if (content.typeUrl === "/fx.erc20.v1.RegisterERC20Proposal") {
    const proposal = RegisterERC20Proposal.decode(content.value);
    return {
      type: "erc20/RegisterERC20Proposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        erc20address: proposal.erc20address,
      },
    };
  }
  if (content.typeUrl === "/fx.erc20.v1.ToggleTokenConversionProposal") {
    const proposal = ToggleTokenConversionProposal.decode(content.value);
    return {
      type: "erc20/ToggleTokenConversionProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        token: proposal.token,
      },
    };
  }
  if (content.typeUrl === "/fx.erc20.v1.UpdateDenomAliasProposal") {
    const proposal = UpdateDenomAliasProposal.decode(content.value);
    return {
      type: "erc20/UpdateDenomAliasProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        alias: proposal.alias,
        denom: proposal.denom,
      },
    };
  }
  if (content.typeUrl === "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal") {
    const proposal = UpdateChainOraclesProposal.decode(content.value);
    return {
      type: "crosschain/UpdateChainOraclesProposal",
      value: {
        title: proposal.title,
        description: proposal.description,
        oracles: proposal.oracles,
        chain_name: proposal.chainName,
      },
    };
  }
  throw new Error("not support type");
}

export function proposalContentFromAminoConverter(content: any): Any {
  if (content.type === "cosmos-sdk/TextProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
      value: TextProposal.encode({
        title: proposal.title,
        description: proposal.description,
      }).finish(),
    });
  }
  if (content.type === "cosmos-sdk/SoftwareUpgradeProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
      value: SoftwareUpgradeProposal.encode({
        title: proposal.title,
        description: proposal.description,
        plan: {
          name: proposal.plan.name,
          time: undefined,
          height: Long.fromString(proposal.plan.height || "0", true),
          info: proposal.plan.info,
          upgradedClientState: undefined,
        },
      }).finish(),
    });
  }
  if (content.type === "cosmos-sdk/CancelSoftwareUpgradeProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
      value: CancelSoftwareUpgradeProposal.encode({
        title: proposal.title,
        description: proposal.description,
      }).finish(),
    });
  }
  if (content.type === "cosmos-sdk/ParameterChangeProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
      value: ParameterChangeProposal.encode({
        title: proposal.title,
        description: proposal.description,
        changes: [...proposal.changes],
      }).finish(),
    });
  }
  if (content.type === "cosmos-sdk/CommunityPoolSpendProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.encode({
        title: proposal.title,
        description: proposal.description,
        amount: [...proposal.amount],
        recipient: proposal.recipient,
      }).finish(),
    });
  }
  if (content.type === "erc20/RegisterCoinProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.RegisterCoinProposal",
      value: RegisterCoinProposal.encode({
        title: proposal.title,
        description: proposal.description,
        metadata: {
          description: proposal.metadata.description,
          denomUnits: [...proposal.metadata.denom_units].map((v) => {
            return {
              denom: v.denom,
              exponent: v.exponent ? v.exponent : 0,
              aliases: v.aliases ? v.aliases : [],
            };
          }),
          base: proposal.metadata.base,
          display: proposal.metadata.display,
          name: proposal.metadata.name,
          symbol: proposal.metadata.symbol,
          uri: proposal.metadata.uri ? proposal.metadata.uri : "",
          uriHash: proposal.metadata.uri_hash ? proposal.metadata.uri_hash : "",
        },
      }).finish(),
    });
  }
  if (content.type === "erc20/RegisterERC20Proposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.RegisterERC20Proposal",
      value: RegisterERC20Proposal.encode({
        aliases: proposal.aliases,
        title: proposal.title,
        description: proposal.description,
        erc20address: proposal.erc20address,
      }).finish(),
    });
  }
  if (content.type === "erc20/ToggleTokenConversionProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.ToggleTokenConversionProposal",
      value: ToggleTokenConversionProposal.encode({
        title: proposal.title,
        description: proposal.description,
        token: proposal.token,
      }).finish(),
    });
  }
  if (content.type === "erc20/UpdateDenomAliasProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.UpdateDenomAliasProposal",
      value: UpdateDenomAliasProposal.encode({
        title: proposal.title,
        description: proposal.description,
        alias: proposal.alias,
        denom: proposal.denom,
      }).finish(),
    });
  }
  if (content.type === "crosschain/UpdateChainOraclesProposal") {
    const proposal = content.value;
    return Any.fromPartial({
      typeUrl: "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal",
      value: UpdateChainOraclesProposal.encode({
        title: proposal.title,
        description: proposal.description,
        oracles: proposal.oracles,
        chainName: proposal.chain_name,
      }).finish(),
    });
  }
  throw new Error("not support type");
}
