/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg } from "@cosmjs/amino";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import {
  CancelSoftwareUpgradeProposal,
  SoftwareUpgradeProposal,
} from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "cosmjs-types/google/protobuf/any";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import Long from "long";

import { ProposalContentAminoConverter } from "../index";

/* eslint-disable @typescript-eslint/no-use-before-define */
export function upgradeProposalContentAminoConverters(): Record<string, ProposalContentAminoConverter> {
  return {
    "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal": aminoConverterSoftwareUpgradeProposal(),
    "cosmos-sdk/SoftwareUpgradeProposal": aminoConverterSoftwareUpgradeProposal(),

    "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal": aminoConverterCancelSoftwareUpgradeProposal(),
    "cosmos-sdk/CancelSoftwareUpgradeProposal": aminoConverterCancelSoftwareUpgradeProposal(),
  };
}

export interface AminoSoftwareUpgradeProposal extends AminoMsg {
  readonly type: "cosmos-sdk/SoftwareUpgradeProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
    readonly plan?: Plan;
  };
}

export interface Plan {
  readonly name: string;
  readonly time?: string;
  readonly height: string;
  readonly info: string;
}

export function isAminoSoftwareUpgradeProposal(msg: AminoMsg): msg is AminoSoftwareUpgradeProposal {
  return msg.type === "cosmos-sdk/SoftwareUpgradeProposal";
}

function aminoConverterSoftwareUpgradeProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoSoftwareUpgradeProposal => {
      if (content.typeUrl !== "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = SoftwareUpgradeProposal.decode(content.value);
      assertDefinedAndNotNull(proposal.plan);
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: {
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
        },
      };
    },
    fromAmino: (content: AminoSoftwareUpgradeProposal): Any => {
      if (content.type !== "cosmos-sdk/SoftwareUpgradeProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      assertDefinedAndNotNull(proposal.plan);
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.encode({
          title: proposal.title,
          description: proposal.description,
          plan: proposal.plan
            ? {
                name: proposal.plan.name,
                time: Timestamp.fromPartial({}),
                height: Long.fromString(proposal.plan.height || "0", true),
                info: proposal.plan.info,
                upgradedClientState: undefined,
              }
            : undefined,
        }).finish(),
      });
    },
  };
}

export interface AminoCancelSoftwareUpgradeProposal extends AminoMsg {
  readonly type: "cosmos-sdk/CancelSoftwareUpgradeProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
  };
}

export function isAminoCancelSoftwareUpgradeProposal(
  msg: AminoMsg,
): msg is AminoCancelSoftwareUpgradeProposal {
  return msg.type === "cosmos-sdk/CancelSoftwareUpgradeProposal";
}

function aminoConverterCancelSoftwareUpgradeProposal(): ProposalContentAminoConverter {
  return {
    toAmino: (content: Any): AminoCancelSoftwareUpgradeProposal => {
      if (content.typeUrl !== "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal") {
        throw new Error(`Invalid proposal type: '${content.typeUrl}'`);
      }
      const proposal = CancelSoftwareUpgradeProposal.decode(content.value);
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: {
          title: proposal.title,
          description: proposal.description,
        },
      };
    },
    fromAmino: (content: AminoCancelSoftwareUpgradeProposal): Any => {
      if (content.type !== "cosmos-sdk/CancelSoftwareUpgradeProposal") {
        throw new Error(`Invalid proposal type: '${content.type}'`);
      }
      const proposal = content.value;
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.encode({
          title: proposal.title,
          description: proposal.description,
        }).finish(),
      });
    },
  };
}
