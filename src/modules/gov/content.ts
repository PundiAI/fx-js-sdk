import { AminoMsg } from "@cosmjs/amino";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParamChange, ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import {
  CancelSoftwareUpgradeProposal,
  SoftwareUpgradeProposal,
} from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "cosmjs-types/google/protobuf/any";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import Long from "long";

import { UpdateChainOraclesProposal } from "../../fx/crosschain/v1/types";
import {
  RegisterCoinProposal,
  RegisterERC20Proposal,
  ToggleTokenConversionProposal,
  UpdateDenomAliasProposal,
} from "../../fx/erc20/v1/erc20";

export interface AminoTextProposal extends AminoMsg {
  readonly type: "cosmos-sdk/TextProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
  };
}

export interface AminoRegisterCoinProposal {
  readonly title: string;
  readonly description: string;
  readonly metadata?: AminoMetadata;
}

export interface AminoDenomUnit {
  readonly denom: string;
  exponent?: number;
  aliases?: string[];
}

export interface AminoMetadata {
  readonly description: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly denom_units: readonly AminoDenomUnit[];
  readonly base: string;
  readonly display: string;
  readonly name: string;
  readonly symbol: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface AminoRegisterERC20Proposal {
  readonly title: string;
  readonly description: string;
  readonly erc20address: string;
}

export interface AminoToggleTokenConversionProposal {
  readonly title: string;
  readonly description: string;
  readonly token: string;
}

export interface AminoUpdateDenomAliasProposal {
  readonly title: string;
  readonly description: string;
  readonly alias: string;
  readonly denom: string;
}

export interface AminoCommunityPoolSpendProposal {
  readonly title: string;
  readonly description: string;
  readonly amount: readonly Coin[];
  /** Bech32 account address */
  readonly recipient: string;
}

export interface AminoSoftwareUpgradeProposal {
  readonly title: string;
  readonly description: string;
  readonly plan?: Plan;
}

export interface Plan {
  readonly name: string;
  readonly time?: string;
  readonly height: string;
  readonly info: string;
}

export interface AminoCancelSoftwareUpgradeProposal {
  readonly title: string;
  readonly description: string;
}

export interface AminoParameterChangeProposal {
  readonly title: string;
  readonly description: string;
  readonly changes: readonly ParamChange[];
}

export interface AminoUpdateChainOraclesProposal {
  readonly title: string;
  readonly description: string;
  /** Bech32 account address */
  readonly oracles: string[];
  /** support: bsc,polygon,tron */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly chain_name: string;
}

export function proposalContentConverter(content: any, isCosmosAny = false): any {
  if (isCosmosAny) {
    const cosmosAny = content as Any;
    if (!cosmosAny.value || !cosmosAny.typeUrl) {
      throw new Error(`Invalid proposal type: '${content}'`);
    }
    if (cosmosAny.typeUrl === "/cosmos.gov.v1beta1.TextProposal") {
      const proposal = TextProposal.decode(content.value);
      return {
        type: "cosmos-sdk/TextProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
        },
      };
    } else if (cosmosAny.typeUrl === "/fx.erc20.v1.RegisterCoinProposal") {
      const proposal = RegisterCoinProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        metadata: proposal.metadata
          ? {
              description: proposal.metadata.description,
              // eslint-disable-next-line @typescript-eslint/naming-convention
              denom_units: [...proposal.metadata.denomUnits].map((v) => {
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
              base: proposal.metadata.base,
              display: proposal.metadata.display,
              name: proposal.metadata.name,
              symbol: proposal.metadata.symbol,
            }
          : undefined,
      };
    } else if (cosmosAny.typeUrl === "/fx.erc20.v1.RegisterERC20Proposal") {
      const proposal = RegisterERC20Proposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        erc20address: proposal.erc20address,
      };
    } else if (cosmosAny.typeUrl === "/fx.erc20.v1.ToggleTokenConversionProposal") {
      const proposal = ToggleTokenConversionProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        token: proposal.token,
      };
    } else if (cosmosAny.typeUrl === "/fx.erc20.v1.UpdateDenomAliasProposal") {
      const proposal = UpdateDenomAliasProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        alias: proposal.alias,
        denom: proposal.denom,
      };
    } else if (cosmosAny.typeUrl === "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal") {
      const proposal = CommunityPoolSpendProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        amount: [...proposal.amount],
        recipient: proposal.recipient,
      };
    } else if (cosmosAny.typeUrl === "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal") {
      const proposal = SoftwareUpgradeProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        plan: proposal.plan
          ? {
              name: proposal.plan.name,
              time: "0001-01-01T00:00:00Z",
              height: proposal.plan.height ? proposal.plan.height.toString() : "0",
              info: proposal.plan.info,
            }
          : undefined,
      };
    } else if (cosmosAny.typeUrl === "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal") {
      const proposal = CancelSoftwareUpgradeProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
      };
    } else if (cosmosAny.typeUrl === "/cosmos.params.v1beta1.ParameterChangeProposal") {
      const proposal = ParameterChangeProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        changes: [...proposal.changes],
      };
    } else if (cosmosAny.typeUrl === "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal") {
      const proposal = UpdateChainOraclesProposal.decode(content.value);
      return {
        title: proposal.title,
        description: proposal.description,
        oracles: proposal.oracles,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        chain_name: proposal.chainName,
      };
    }
  }

  const aminoTextProposal = content as AminoTextProposal;
  if (aminoTextProposal.type === "cosmos-sdk/TextProposal") {
    return Any.fromPartial({
      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
      value: TextProposal.encode({
        title: aminoTextProposal.value.title,
        description: aminoTextProposal.value.description,
      }).finish(),
    });
  }

  const aminoRegisterCoinProposal = content as AminoRegisterCoinProposal;
  if (
    aminoRegisterCoinProposal.metadata &&
    aminoRegisterCoinProposal.description &&
    aminoRegisterCoinProposal.title
  ) {
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.RegisterCoinProposal",
      value: RegisterCoinProposal.encode({
        title: aminoRegisterCoinProposal.title,
        description: aminoRegisterCoinProposal.description,
        metadata: aminoRegisterCoinProposal.metadata
          ? {
              description: aminoRegisterCoinProposal.metadata.description,
              denomUnits: [...aminoRegisterCoinProposal.metadata.denom_units].map((v) => {
                return {
                  denom: v.denom,
                  exponent: v.exponent ? v.exponent : 0,
                  aliases: v.aliases ? v.aliases : [],
                };
              }),
              base: aminoRegisterCoinProposal.metadata.base,
              display: aminoRegisterCoinProposal.metadata.display,
              name: aminoRegisterCoinProposal.metadata.name,
              symbol: aminoRegisterCoinProposal.metadata.symbol,
            }
          : undefined,
      }).finish(),
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const aminoRegisterERC20Proposal = content as AminoRegisterERC20Proposal;
  if (
    aminoRegisterERC20Proposal.erc20address &&
    aminoRegisterERC20Proposal.title &&
    aminoRegisterERC20Proposal.description
  ) {
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.RegisterERC20Proposal",
      value: RegisterERC20Proposal.encode({
        title: aminoRegisterERC20Proposal.title,
        description: aminoRegisterERC20Proposal.description,
        erc20address: aminoRegisterERC20Proposal.erc20address,
      }).finish(),
    });
  }

  const aminoToggleTokenConversionProposal = content as AminoToggleTokenConversionProposal;
  if (
    aminoToggleTokenConversionProposal.token &&
    aminoToggleTokenConversionProposal.description &&
    aminoToggleTokenConversionProposal.title
  ) {
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.ToggleTokenConversionProposal",
      value: ToggleTokenConversionProposal.encode({
        title: aminoToggleTokenConversionProposal.title,
        description: aminoToggleTokenConversionProposal.description,
        token: aminoToggleTokenConversionProposal.token,
      }).finish(),
    });
  }

  const aminoUpdateDenomAliasProposal = content as AminoUpdateDenomAliasProposal;
  if (
    aminoUpdateDenomAliasProposal.denom &&
    aminoUpdateDenomAliasProposal.alias &&
    aminoUpdateDenomAliasProposal.description &&
    aminoUpdateDenomAliasProposal.title
  ) {
    return Any.fromPartial({
      typeUrl: "/fx.erc20.v1.UpdateDenomAliasProposal",
      value: UpdateDenomAliasProposal.encode({
        title: aminoUpdateDenomAliasProposal.title,
        description: aminoUpdateDenomAliasProposal.description,
        alias: aminoUpdateDenomAliasProposal.alias,
        denom: aminoUpdateDenomAliasProposal.denom,
      }).finish(),
    });
  }

  const aminoCommunityPoolSpendProposal = content as AminoCommunityPoolSpendProposal;
  if (
    aminoCommunityPoolSpendProposal.amount &&
    aminoCommunityPoolSpendProposal.recipient &&
    aminoCommunityPoolSpendProposal.description &&
    aminoCommunityPoolSpendProposal.title
  ) {
    return Any.fromPartial({
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.encode({
        title: aminoCommunityPoolSpendProposal.title,
        description: aminoCommunityPoolSpendProposal.description,
        amount: [...aminoCommunityPoolSpendProposal.amount],
        recipient: aminoCommunityPoolSpendProposal.recipient,
      }).finish(),
    });
  }

  const aminoSoftwareUpgradeProposal = content as AminoSoftwareUpgradeProposal;
  if (
    aminoSoftwareUpgradeProposal.plan &&
    aminoSoftwareUpgradeProposal.description &&
    aminoSoftwareUpgradeProposal.title
  ) {
    return Any.fromPartial({
      typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
      value: SoftwareUpgradeProposal.encode({
        title: aminoSoftwareUpgradeProposal.title,
        description: aminoSoftwareUpgradeProposal.description,
        plan: aminoSoftwareUpgradeProposal.plan
          ? {
              name: aminoSoftwareUpgradeProposal.plan.name,
              time: Timestamp.fromPartial({}),
              height: Long.fromString(aminoSoftwareUpgradeProposal.plan.height || "0", true),
              info: aminoSoftwareUpgradeProposal.plan.info,
              upgradedClientState: undefined,
            }
          : undefined,
      }).finish(),
    });
  }

  const aminoParameterChangeProposal = content as AminoParameterChangeProposal;
  if (
    aminoParameterChangeProposal.changes &&
    aminoParameterChangeProposal.description &&
    aminoParameterChangeProposal.title
  ) {
    return Any.fromPartial({
      typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
      value: ParameterChangeProposal.encode({
        title: aminoParameterChangeProposal.title,
        description: aminoParameterChangeProposal.description,
        changes: [...aminoParameterChangeProposal.changes],
      }).finish(),
    });
  }

  const aminoUpdateChainOraclesProposal = content as AminoUpdateChainOraclesProposal;
  if (
    aminoUpdateChainOraclesProposal.chain_name &&
    aminoUpdateChainOraclesProposal.oracles &&
    aminoUpdateChainOraclesProposal.description &&
    aminoUpdateChainOraclesProposal.title
  ) {
    return Any.fromPartial({
      typeUrl: "/fx.gravity.crosschain.v1.UpdateChainOraclesProposal",
      value: UpdateChainOraclesProposal.encode({
        title: aminoUpdateChainOraclesProposal.title,
        description: aminoUpdateChainOraclesProposal.description,
        oracles: aminoUpdateChainOraclesProposal.oracles,
        chainName: aminoUpdateChainOraclesProposal.chain_name,
      }).finish(),
    });
  }

  const aminoCancelSoftwareUpgradeProposal = content as AminoCancelSoftwareUpgradeProposal;
  if (aminoCancelSoftwareUpgradeProposal.description && aminoCancelSoftwareUpgradeProposal.title) {
    return Any.fromPartial({
      typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
      value: CancelSoftwareUpgradeProposal.encode({
        title: aminoCancelSoftwareUpgradeProposal.title,
        description: aminoCancelSoftwareUpgradeProposal.description,
      }).finish(),
    });
  }
}
