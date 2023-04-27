/* eslint-disable @typescript-eslint/naming-convention */
import { Any } from "cosmjs-types/google/protobuf/any";
import Long from "long";

import { durationToNanos, nanosToDuration } from "../../tools";
import { MsgCancelUpgrade, MsgSoftwareUpgrade } from "../../types/cosmos/upgrade/v1beta1/tx";
import { MsgUpdateChainOracles, MsgUpdateParams } from "../../types/fx/crosschain/v1/tx";
import {
  MsgRegisterCoin,
  MsgRegisterERC20,
  MsgToggleTokenConversion,
  MsgUpdateDenomAlias,
  MsgUpdateParams as MsgUpdateParamsErc20,
} from "../../types/fx/erc20/v1/tx";
import { MsgCallContract } from "../../types/fx/evm/v1/tx";
import { MsgUpdateEGFParams, MsgUpdateParams as MsgUpdateParamsGov } from "../../types/fx/gov/v1/tx";
import { toDecString, toProtoString } from "../index";

interface AminoDenomUnit {
  readonly denom: string;
  exponent?: number;
  aliases?: string[];
}

export function proposalMessageToAminoConverter(message: Any): any {
  if (!message.value || !message.typeUrl) {
    throw new Error(`Invalid proposal message type: '${message}'`);
  }
  if (message.typeUrl == "/fx.gravity.crosschain.v1.MsgUpdateChainOracles") {
    const msg = MsgUpdateChainOracles.decode(message.value);
    return {
      type: "crosschain/MsgUpdateChainOracles",
      value: {
        chain_name: msg.chainName,
        authority: msg.authority,
        oracles: msg.oracles,
      },
    };
  }
  if (message.typeUrl == "/fx.gravity.crosschain.v1.MsgUpdateParams") {
    const msg = MsgUpdateParams.decode(message.value);
    return {
      type: "crosschain/MsgUpdateParams",
      value: {
        chain_name: msg.chainName,
        authority: msg.authority,
        params: {
          average_block_time: msg.params?.averageBlockTime.toString(),
          average_external_block_time: msg.params?.averageExternalBlockTime.toString(),
          delegate_multiple: msg.params?.delegateMultiple.toString(),
          delegate_threshold: msg.params?.delegateThreshold,
          external_batch_timeout: msg.params?.externalBatchTimeout.toString(),
          gravity_id: msg.params?.gravityId,
          ibc_transfer_timeout_height: msg.params?.ibcTransferTimeoutHeight.toString(),
          oracle_set_update_power_change_percent: toDecString(
            new TextDecoder().decode(msg.params?.oracleSetUpdatePowerChangePercent),
            18,
          ),
          signed_window: msg.params?.signedWindow.toString(),
          slash_fraction: toDecString(new TextDecoder().decode(msg.params?.slashFraction), 18),
        },
      },
    };
  }
  if (message.typeUrl == "/fx.erc20.v1.MsgUpdateParams") {
    const msg = MsgUpdateParamsErc20.decode(message.value);
    const params: any = {};
    if (msg.params?.ibcTimeout) params.ibc_timeout = durationToNanos(msg.params.ibcTimeout);
    if (msg.params?.enableErc20) params.enable_erc20 = msg.params.enableErc20;
    if (msg.params?.enableEvmHook) params.enable_evm_hook = msg.params.enableEvmHook;
    return {
      type: "erc20/MsgUpdateParams",
      value: {
        authority: msg.authority,
        params: params,
      },
    };
  }
  if (message.typeUrl == "/fx.erc20.v1.MsgRegisterCoin") {
    const msg = MsgRegisterCoin.decode(message.value);
    const metadata: any = {
      description: msg.metadata?.description,
      denom_units: msg.metadata?.denomUnits.map((v) => {
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
      base: msg.metadata?.base,
      display: msg.metadata?.display,
      name: msg.metadata?.name,
      symbol: msg.metadata?.symbol,
    };
    if (msg.metadata?.uri) {
      metadata.uri = msg.metadata?.uri;
    }
    if (msg.metadata?.uriHash) {
      metadata.uri_hash = msg.metadata?.uriHash;
    }
    return {
      type: "erc20/MsgRegisterCoin",
      value: {
        authority: msg.authority,
        metadata: metadata,
      },
    };
  }
  if (message.typeUrl == "/fx.erc20.v1.MsgRegisterERC20") {
    const msg = MsgRegisterERC20.decode(message.value);
    return {
      type: "erc20/MsgRegisterERC20",
      value: {
        authority: msg.authority,
        erc20address: msg.erc20address,
        aliases: msg.aliases,
      },
    };
  }
  if (message.typeUrl == "/fx.erc20.v1.MsgToggleTokenConversion") {
    const msg = MsgToggleTokenConversion.decode(message.value);
    return {
      type: "erc20/MsgToggleTokenConversion",
      value: {
        authority: msg.authority,
        token: msg.token,
      },
    };
  }
  if (message.typeUrl == "/fx.erc20.v1.MsgUpdateDenomAlias") {
    const msg = MsgUpdateDenomAlias.decode(message.value);
    return {
      type: "erc20/MsgUpdateDenomAlias",
      value: {
        authority: msg.authority,
        denom: msg.denom,
        alias: msg.alias,
      },
    };
  }
  if (message.typeUrl == "/fx.evm.v1.MsgCallContract") {
    const msg = MsgCallContract.decode(message.value);
    return {
      type: "evm/MsgCallContract",
      value: {
        authority: msg.authority,
        contract_address: msg.contractAddress,
        data: msg.data,
      },
    };
  }
  if (message.typeUrl == "/fx.gov.v1.MsgUpdateParams") {
    const msg = MsgUpdateParamsGov.decode(message.value);
    return {
      type: "gov/MsgUpdateParams",
      value: {
        authority: msg.authority,
        params: {
          msg_type: msg.params?.msgType,
          min_deposit: msg.params?.minDeposit,
          min_initial_deposit: msg.params?.minInitialDeposit,
          voting_period: durationToNanos(msg.params?.votingPeriod),
          quorum: msg.params?.quorum,
          max_deposit_period: durationToNanos(msg.params?.maxDepositPeriod),
          threshold: msg.params?.threshold,
          veto_threshold: msg.params?.vetoThreshold,
        },
      },
    };
  }
  if (message.typeUrl == "/fx.gov.v1.MsgUpdateEGFParams") {
    const msg = MsgUpdateEGFParams.decode(message.value);
    return {
      type: "gov/MsgUpdateEGFParams",
      value: {
        authority: msg.authority,
        params: {
          egf_deposit_threshold: msg.params?.egfDepositThreshold,
          claim_ratio: msg.params?.claimRatio,
        },
      },
    };
  }
  if (message.typeUrl == "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade") {
    const msg = MsgSoftwareUpgrade.decode(message.value);
    return {
      type: "cosmos-sdk/MsgSoftwareUpgrade",
      value: {
        authority: msg.authority,
        plan: {
          name: msg.plan?.name,
          time: "0001-01-01T00:00:00Z",
          height: msg.plan?.height ? msg.plan.height.toString() : "0",
          info: msg.plan?.info,
        },
      },
    };
  }
  if (message.typeUrl == "/cosmos.upgrade.v1beta1.MsgCancelUpgrade") {
    const msg = MsgCancelUpgrade.decode(message.value);
    return {
      type: "cosmos-sdk/MsgCancelUpgrade",
      value: {
        authority: msg.authority,
      },
    };
  }
  throw new Error("not support type");
}

export function proposalMessageFromAminoConverter(message: any): Any {
  if (message.type === "crosschain/MsgUpdateChainOracles") {
    const msg = message.value;
    return {
      typeUrl: "/fx.gravity.crosschain.v1.MsgUpdateChainOracles",
      value: MsgUpdateChainOracles.encode({
        authority: msg.authority,
        chainName: msg.chain_name,
        oracles: msg.oracles,
      }).finish(),
    };
  }
  if (message.type === "crosschain/MsgUpdateParams") {
    const msg = message.value;
    return {
      typeUrl: "/fx.gravity.crosschain.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode({
        authority: msg.authority,
        chainName: msg.chain_name,
        params: {
          gravityId: msg.params.gravity_id,
          averageBlockTime: Long.fromString(msg.params.average_block_time),
          externalBatchTimeout: Long.fromString(msg.params.external_batch_timeout),
          averageExternalBlockTime: Long.fromString(msg.params.average_external_block_time),
          signedWindow: Long.fromString(msg.params.signed_window),
          slashFraction: new TextEncoder().encode(toProtoString(msg.params.slash_fraction, 18)),
          oracleSetUpdatePowerChangePercent: new TextEncoder().encode(
            toProtoString(msg.params.oracle_set_update_power_change_percent, 18),
          ),
          ibcTransferTimeoutHeight: Long.fromString(msg.params.ibc_transfer_timeout_height),
          oracles: [],
          delegateThreshold: msg.params.delegate_threshold,
          delegateMultiple: Long.fromString(msg.params.delegate_multiple),
        },
      }).finish(),
    };
  }
  if (message.type === "erc20/MsgUpdateParams") {
    const msg = message.value;
    return {
      typeUrl: "/fx.erc20.v1.MsgUpdateParams",
      value: MsgUpdateParamsErc20.encode({
        authority: msg.authority,
        params: {
          enableErc20: msg.params.enable_erc20,
          enableEvmHook: msg.params.enable_evm_hook,
          ibcTimeout: nanosToDuration(msg.params.ibc_timeout),
        },
      }).finish(),
    };
  }
  if (message.type === "erc20/MsgRegisterCoin") {
    const msg = message.value;
    return {
      typeUrl: "/fx.erc20.v1.MsgRegisterCoin",
      value: MsgRegisterCoin.encode({
        authority: msg.authority,
        metadata: {
          description: msg.metadata.description,
          denomUnits: [...msg.metadata.denom_units].map((v) => {
            return {
              denom: v.denom,
              exponent: v.exponent ? v.exponent : 0,
              aliases: v.aliases ? v.aliases : [],
            };
          }),
          base: msg.metadata.base,
          display: msg.metadata.display,
          name: msg.metadata.name,
          symbol: msg.metadata.symbol,
          uri: msg.metadata.uri ? msg.metadata.uri : "",
          uriHash: msg.metadata.uri_hash ? msg.metadata.uri_hash : "",
        },
      }).finish(),
    };
  }
  if (message.type === "erc20/MsgRegisterERC20") {
    const msg = message.value;
    return {
      typeUrl: "/fx.erc20.v1.MsgRegisterERC20",
      value: MsgRegisterERC20.encode({
        authority: msg.authority,
        erc20address: msg.erc20address,
        aliases: msg.aliases,
      }).finish(),
    };
  }
  if (message.type === "erc20/MsgToggleTokenConversion") {
    const msg = message.value;
    return {
      typeUrl: "/fx.erc20.v1.MsgToggleTokenConversion",
      value: MsgToggleTokenConversion.encode({
        authority: msg.authority,
        token: msg.token,
      }).finish(),
    };
  }
  if (message.type === "erc20/MsgUpdateDenomAlias") {
    const msg = message.value;
    return {
      typeUrl: "/fx.erc20.v1.MsgUpdateDenomAlias",
      value: MsgUpdateDenomAlias.encode({
        authority: msg.authority,
        denom: msg.denom,
        alias: msg.alias,
      }).finish(),
    };
  }
  if (message.type == "evm/MsgCallContract") {
    const msg = message.value;
    return {
      typeUrl: "/fx.evm.v1.MsgCallContract",
      value: MsgCallContract.encode({
        authority: msg.authority,
        contractAddress: msg.contract_address,
        data: msg.data,
      }).finish(),
    };
  }
  if (message.type == "gov/MsgUpdateParams") {
    const msg = message.value;
    return {
      typeUrl: "/fx.gov.v1.MsgUpdateParams",
      value: MsgUpdateParamsGov.encode({
        authority: msg.authority,
        params: {
          msgType: msg.params.msg_type,
          minDeposit: msg.params.min_deposit,
          minInitialDeposit: msg.params.min_initial_deposit,
          votingPeriod: nanosToDuration(msg.params.voting_period),
          quorum: msg.params.quorum,
          maxDepositPeriod: nanosToDuration(msg.params.max_deposit_period),
          threshold: msg.params.threshold,
          vetoThreshold: msg.params.veto_threshold,
        },
      }).finish(),
    };
  }
  if (message.type == "gov/MsgUpdateEGFParams") {
    const msg = message.value;
    return {
      typeUrl: "/fx.gov.v1.MsgUpdateEGFParams",
      value: MsgUpdateEGFParams.encode({
        authority: msg.authority,
        params: {
          egfDepositThreshold: msg.params.egf_deposit_threshold,
          claimRatio: msg.params.claim_ratio,
        },
      }).finish(),
    };
  }
  if (message.type === "cosmos-sdk/MsgSoftwareUpgrade") {
    const msg = message.value;
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode({
        authority: msg.authority,
        plan: {
          name: msg.plan.name,
          time: undefined,
          height: Long.fromString(msg.plan.height || "0", true),
          info: msg.plan.info,
          upgradedClientState: undefined,
        },
      }).finish(),
    };
  }
  if (message.type === "cosmos-sdk/MsgCancelUpgrade") {
    const msg = message.value;
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode({
        authority: msg.authority,
      }).finish(),
    };
  }
  throw new Error("not support type");
}
