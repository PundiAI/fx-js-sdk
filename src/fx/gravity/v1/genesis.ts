/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LastObservedEthereumBlockHeight, Valset, ERC20ToDenom } from "../../../fx/gravity/v1/types";
import { MsgSetOrchestratorAddress, MsgConfirmBatch, MsgValsetConfirm } from "../../../fx/gravity/v1/tx";
import { OutgoingTransferTx, OutgoingTxBatch } from "../../../fx/gravity/v1/batch";
import { Attestation } from "../../../fx/gravity/v1/attestation";

export const protobufPackage = "fx.gravity.v1";

/**
 * valset_update_power_change_percent
 *
 * If power change between validators of CurrentValset and latest valset request
 * is > 10%
 */
export interface Params {
  gravityId: string;
  contractSourceHash: string;
  bridgeEthAddress: string;
  bridgeChainId: Long;
  signedValsetsWindow: Long;
  signedBatchesWindow: Long;
  signedClaimsWindow: Long;
  targetBatchTimeout: Long;
  averageBlockTime: Long;
  averageEthBlockTime: Long;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionClaim: Uint8Array;
  slashFractionConflictingClaim: Uint8Array;
  unbondSlashingValsetsWindow: Long;
  ibcTransferTimeoutHeight: Long;
  valsetUpdatePowerChangePercent: Uint8Array;
}

/** GenesisState struct */
export interface GenesisState {
  params?: Params;
  lastObservedNonce: Long;
  lastObservedBlockHeight?: LastObservedEthereumBlockHeight;
  delegateKeys: MsgSetOrchestratorAddress[];
  valsets: Valset[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  valsetConfirms: MsgValsetConfirm[];
  attestations: Attestation[];
}

function createBaseParams(): Params {
  return {
    gravityId: "",
    contractSourceHash: "",
    bridgeEthAddress: "",
    bridgeChainId: Long.UZERO,
    signedValsetsWindow: Long.UZERO,
    signedBatchesWindow: Long.UZERO,
    signedClaimsWindow: Long.UZERO,
    targetBatchTimeout: Long.UZERO,
    averageBlockTime: Long.UZERO,
    averageEthBlockTime: Long.UZERO,
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionClaim: new Uint8Array(),
    slashFractionConflictingClaim: new Uint8Array(),
    unbondSlashingValsetsWindow: Long.UZERO,
    ibcTransferTimeoutHeight: Long.UZERO,
    valsetUpdatePowerChangePercent: new Uint8Array(),
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gravityId !== "") {
      writer.uint32(10).string(message.gravityId);
    }
    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }
    if (message.bridgeEthAddress !== "") {
      writer.uint32(34).string(message.bridgeEthAddress);
    }
    if (!message.bridgeChainId.isZero()) {
      writer.uint32(40).uint64(message.bridgeChainId);
    }
    if (!message.signedValsetsWindow.isZero()) {
      writer.uint32(48).uint64(message.signedValsetsWindow);
    }
    if (!message.signedBatchesWindow.isZero()) {
      writer.uint32(56).uint64(message.signedBatchesWindow);
    }
    if (!message.signedClaimsWindow.isZero()) {
      writer.uint32(64).uint64(message.signedClaimsWindow);
    }
    if (!message.targetBatchTimeout.isZero()) {
      writer.uint32(80).uint64(message.targetBatchTimeout);
    }
    if (!message.averageBlockTime.isZero()) {
      writer.uint32(88).uint64(message.averageBlockTime);
    }
    if (!message.averageEthBlockTime.isZero()) {
      writer.uint32(96).uint64(message.averageEthBlockTime);
    }
    if (message.slashFractionValset.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionValset);
    }
    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionBatch);
    }
    if (message.slashFractionClaim.length !== 0) {
      writer.uint32(122).bytes(message.slashFractionClaim);
    }
    if (message.slashFractionConflictingClaim.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionConflictingClaim);
    }
    if (!message.unbondSlashingValsetsWindow.isZero()) {
      writer.uint32(136).uint64(message.unbondSlashingValsetsWindow);
    }
    if (!message.ibcTransferTimeoutHeight.isZero()) {
      writer.uint32(144).uint64(message.ibcTransferTimeoutHeight);
    }
    if (message.valsetUpdatePowerChangePercent.length !== 0) {
      writer.uint32(154).bytes(message.valsetUpdatePowerChangePercent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gravityId = reader.string();
          break;
        case 2:
          message.contractSourceHash = reader.string();
          break;
        case 4:
          message.bridgeEthAddress = reader.string();
          break;
        case 5:
          message.bridgeChainId = reader.uint64() as Long;
          break;
        case 6:
          message.signedValsetsWindow = reader.uint64() as Long;
          break;
        case 7:
          message.signedBatchesWindow = reader.uint64() as Long;
          break;
        case 8:
          message.signedClaimsWindow = reader.uint64() as Long;
          break;
        case 10:
          message.targetBatchTimeout = reader.uint64() as Long;
          break;
        case 11:
          message.averageBlockTime = reader.uint64() as Long;
          break;
        case 12:
          message.averageEthBlockTime = reader.uint64() as Long;
          break;
        case 13:
          message.slashFractionValset = reader.bytes();
          break;
        case 14:
          message.slashFractionBatch = reader.bytes();
          break;
        case 15:
          message.slashFractionClaim = reader.bytes();
          break;
        case 16:
          message.slashFractionConflictingClaim = reader.bytes();
          break;
        case 17:
          message.unbondSlashingValsetsWindow = reader.uint64() as Long;
          break;
        case 18:
          message.ibcTransferTimeoutHeight = reader.uint64() as Long;
          break;
        case 19:
          message.valsetUpdatePowerChangePercent = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      gravityId: isSet(object.gravityId) ? String(object.gravityId) : "",
      contractSourceHash: isSet(object.contractSourceHash) ? String(object.contractSourceHash) : "",
      bridgeEthAddress: isSet(object.bridgeEthAddress) ? String(object.bridgeEthAddress) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? Long.fromString(object.bridgeChainId) : Long.UZERO,
      signedValsetsWindow: isSet(object.signedValsetsWindow)
        ? Long.fromString(object.signedValsetsWindow)
        : Long.UZERO,
      signedBatchesWindow: isSet(object.signedBatchesWindow)
        ? Long.fromString(object.signedBatchesWindow)
        : Long.UZERO,
      signedClaimsWindow: isSet(object.signedClaimsWindow)
        ? Long.fromString(object.signedClaimsWindow)
        : Long.UZERO,
      targetBatchTimeout: isSet(object.targetBatchTimeout)
        ? Long.fromString(object.targetBatchTimeout)
        : Long.UZERO,
      averageBlockTime: isSet(object.averageBlockTime)
        ? Long.fromString(object.averageBlockTime)
        : Long.UZERO,
      averageEthBlockTime: isSet(object.averageEthBlockTime)
        ? Long.fromString(object.averageEthBlockTime)
        : Long.UZERO,
      slashFractionValset: isSet(object.slashFractionValset)
        ? bytesFromBase64(object.slashFractionValset)
        : new Uint8Array(),
      slashFractionBatch: isSet(object.slashFractionBatch)
        ? bytesFromBase64(object.slashFractionBatch)
        : new Uint8Array(),
      slashFractionClaim: isSet(object.slashFractionClaim)
        ? bytesFromBase64(object.slashFractionClaim)
        : new Uint8Array(),
      slashFractionConflictingClaim: isSet(object.slashFractionConflictingClaim)
        ? bytesFromBase64(object.slashFractionConflictingClaim)
        : new Uint8Array(),
      unbondSlashingValsetsWindow: isSet(object.unbondSlashingValsetsWindow)
        ? Long.fromString(object.unbondSlashingValsetsWindow)
        : Long.UZERO,
      ibcTransferTimeoutHeight: isSet(object.ibcTransferTimeoutHeight)
        ? Long.fromString(object.ibcTransferTimeoutHeight)
        : Long.UZERO,
      valsetUpdatePowerChangePercent: isSet(object.valsetUpdatePowerChangePercent)
        ? bytesFromBase64(object.valsetUpdatePowerChangePercent)
        : new Uint8Array(),
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gravityId !== undefined && (obj.gravityId = message.gravityId);
    message.contractSourceHash !== undefined && (obj.contractSourceHash = message.contractSourceHash);
    message.bridgeEthAddress !== undefined && (obj.bridgeEthAddress = message.bridgeEthAddress);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = (message.bridgeChainId || Long.UZERO).toString());
    message.signedValsetsWindow !== undefined &&
      (obj.signedValsetsWindow = (message.signedValsetsWindow || Long.UZERO).toString());
    message.signedBatchesWindow !== undefined &&
      (obj.signedBatchesWindow = (message.signedBatchesWindow || Long.UZERO).toString());
    message.signedClaimsWindow !== undefined &&
      (obj.signedClaimsWindow = (message.signedClaimsWindow || Long.UZERO).toString());
    message.targetBatchTimeout !== undefined &&
      (obj.targetBatchTimeout = (message.targetBatchTimeout || Long.UZERO).toString());
    message.averageBlockTime !== undefined &&
      (obj.averageBlockTime = (message.averageBlockTime || Long.UZERO).toString());
    message.averageEthBlockTime !== undefined &&
      (obj.averageEthBlockTime = (message.averageEthBlockTime || Long.UZERO).toString());
    message.slashFractionValset !== undefined &&
      (obj.slashFractionValset = base64FromBytes(
        message.slashFractionValset !== undefined ? message.slashFractionValset : new Uint8Array(),
      ));
    message.slashFractionBatch !== undefined &&
      (obj.slashFractionBatch = base64FromBytes(
        message.slashFractionBatch !== undefined ? message.slashFractionBatch : new Uint8Array(),
      ));
    message.slashFractionClaim !== undefined &&
      (obj.slashFractionClaim = base64FromBytes(
        message.slashFractionClaim !== undefined ? message.slashFractionClaim : new Uint8Array(),
      ));
    message.slashFractionConflictingClaim !== undefined &&
      (obj.slashFractionConflictingClaim = base64FromBytes(
        message.slashFractionConflictingClaim !== undefined
          ? message.slashFractionConflictingClaim
          : new Uint8Array(),
      ));
    message.unbondSlashingValsetsWindow !== undefined &&
      (obj.unbondSlashingValsetsWindow = (message.unbondSlashingValsetsWindow || Long.UZERO).toString());
    message.ibcTransferTimeoutHeight !== undefined &&
      (obj.ibcTransferTimeoutHeight = (message.ibcTransferTimeoutHeight || Long.UZERO).toString());
    message.valsetUpdatePowerChangePercent !== undefined &&
      (obj.valsetUpdatePowerChangePercent = base64FromBytes(
        message.valsetUpdatePowerChangePercent !== undefined
          ? message.valsetUpdatePowerChangePercent
          : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.gravityId = object.gravityId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthAddress = object.bridgeEthAddress ?? "";
    message.bridgeChainId =
      object.bridgeChainId !== undefined && object.bridgeChainId !== null
        ? Long.fromValue(object.bridgeChainId)
        : Long.UZERO;
    message.signedValsetsWindow =
      object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null
        ? Long.fromValue(object.signedValsetsWindow)
        : Long.UZERO;
    message.signedBatchesWindow =
      object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null
        ? Long.fromValue(object.signedBatchesWindow)
        : Long.UZERO;
    message.signedClaimsWindow =
      object.signedClaimsWindow !== undefined && object.signedClaimsWindow !== null
        ? Long.fromValue(object.signedClaimsWindow)
        : Long.UZERO;
    message.targetBatchTimeout =
      object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null
        ? Long.fromValue(object.targetBatchTimeout)
        : Long.UZERO;
    message.averageBlockTime =
      object.averageBlockTime !== undefined && object.averageBlockTime !== null
        ? Long.fromValue(object.averageBlockTime)
        : Long.UZERO;
    message.averageEthBlockTime =
      object.averageEthBlockTime !== undefined && object.averageEthBlockTime !== null
        ? Long.fromValue(object.averageEthBlockTime)
        : Long.UZERO;
    message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionClaim = object.slashFractionClaim ?? new Uint8Array();
    message.slashFractionConflictingClaim = object.slashFractionConflictingClaim ?? new Uint8Array();
    message.unbondSlashingValsetsWindow =
      object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null
        ? Long.fromValue(object.unbondSlashingValsetsWindow)
        : Long.UZERO;
    message.ibcTransferTimeoutHeight =
      object.ibcTransferTimeoutHeight !== undefined && object.ibcTransferTimeoutHeight !== null
        ? Long.fromValue(object.ibcTransferTimeoutHeight)
        : Long.UZERO;
    message.valsetUpdatePowerChangePercent = object.valsetUpdatePowerChangePercent ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastObservedNonce: Long.UZERO,
    lastObservedBlockHeight: undefined,
    delegateKeys: [],
    valsets: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    batches: [],
    batchConfirms: [],
    valsetConfirms: [],
    attestations: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastObservedNonce.isZero()) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }
    if (message.lastObservedBlockHeight !== undefined) {
      LastObservedEthereumBlockHeight.encode(
        message.lastObservedBlockHeight,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.delegateKeys) {
      MsgSetOrchestratorAddress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.erc20ToDenoms) {
      ERC20ToDenom.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastObservedNonce = reader.uint64() as Long;
          break;
        case 3:
          message.lastObservedBlockHeight = LastObservedEthereumBlockHeight.decode(reader, reader.uint32());
          break;
        case 4:
          message.delegateKeys.push(MsgSetOrchestratorAddress.decode(reader, reader.uint32()));
          break;
        case 5:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.erc20ToDenoms.push(ERC20ToDenom.decode(reader, reader.uint32()));
          break;
        case 7:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 8:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        case 9:
          message.batchConfirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        case 10:
          message.valsetConfirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        case 11:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastObservedNonce: isSet(object.lastObservedNonce)
        ? Long.fromString(object.lastObservedNonce)
        : Long.UZERO,
      lastObservedBlockHeight: isSet(object.lastObservedBlockHeight)
        ? LastObservedEthereumBlockHeight.fromJSON(object.lastObservedBlockHeight)
        : undefined,
      delegateKeys: Array.isArray(object?.delegateKeys)
        ? object.delegateKeys.map((e: any) => MsgSetOrchestratorAddress.fromJSON(e))
        : [],
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [],
      erc20ToDenoms: Array.isArray(object?.erc20ToDenoms)
        ? object.erc20ToDenoms.map((e: any) => ERC20ToDenom.fromJSON(e))
        : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers)
        ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e))
        : [],
      batchConfirms: Array.isArray(object?.batchConfirms)
        ? object.batchConfirms.map((e: any) => MsgConfirmBatch.fromJSON(e))
        : [],
      valsetConfirms: Array.isArray(object?.valsetConfirms)
        ? object.valsetConfirms.map((e: any) => MsgValsetConfirm.fromJSON(e))
        : [],
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => Attestation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastObservedNonce !== undefined &&
      (obj.lastObservedNonce = (message.lastObservedNonce || Long.UZERO).toString());
    message.lastObservedBlockHeight !== undefined &&
      (obj.lastObservedBlockHeight = message.lastObservedBlockHeight
        ? LastObservedEthereumBlockHeight.toJSON(message.lastObservedBlockHeight)
        : undefined);
    if (message.delegateKeys) {
      obj.delegateKeys = message.delegateKeys.map((e) =>
        e ? MsgSetOrchestratorAddress.toJSON(e) : undefined,
      );
    } else {
      obj.delegateKeys = [];
    }
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) => (e ? Valset.toJSON(e) : undefined));
    } else {
      obj.valsets = [];
    }
    if (message.erc20ToDenoms) {
      obj.erc20ToDenoms = message.erc20ToDenoms.map((e) => (e ? ERC20ToDenom.toJSON(e) : undefined));
    } else {
      obj.erc20ToDenoms = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map((e) =>
        e ? OutgoingTransferTx.toJSON(e) : undefined,
      );
    } else {
      obj.unbatchedTransfers = [];
    }
    if (message.batches) {
      obj.batches = message.batches.map((e) => (e ? OutgoingTxBatch.toJSON(e) : undefined));
    } else {
      obj.batches = [];
    }
    if (message.batchConfirms) {
      obj.batchConfirms = message.batchConfirms.map((e) => (e ? MsgConfirmBatch.toJSON(e) : undefined));
    } else {
      obj.batchConfirms = [];
    }
    if (message.valsetConfirms) {
      obj.valsetConfirms = message.valsetConfirms.map((e) => (e ? MsgValsetConfirm.toJSON(e) : undefined));
    } else {
      obj.valsetConfirms = [];
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) => (e ? Attestation.toJSON(e) : undefined));
    } else {
      obj.attestations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastObservedNonce =
      object.lastObservedNonce !== undefined && object.lastObservedNonce !== null
        ? Long.fromValue(object.lastObservedNonce)
        : Long.UZERO;
    message.lastObservedBlockHeight =
      object.lastObservedBlockHeight !== undefined && object.lastObservedBlockHeight !== null
        ? LastObservedEthereumBlockHeight.fromPartial(object.lastObservedBlockHeight)
        : undefined;
    message.delegateKeys = object.delegateKeys?.map((e) => MsgSetOrchestratorAddress.fromPartial(e)) || [];
    message.valsets = object.valsets?.map((e) => Valset.fromPartial(e)) || [];
    message.erc20ToDenoms = object.erc20ToDenoms?.map((e) => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers =
      object.unbatchedTransfers?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    message.batches = object.batches?.map((e) => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map((e) => MsgConfirmBatch.fromPartial(e)) || [];
    message.valsetConfirms = object.valsetConfirms?.map((e) => MsgValsetConfirm.fromPartial(e)) || [];
    message.attestations = object.attestations?.map((e) => Attestation.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
