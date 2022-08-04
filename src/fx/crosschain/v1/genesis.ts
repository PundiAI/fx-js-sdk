/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Params,
  LastObservedBlockHeight,
  Oracle,
  OracleSet,
  BridgeToken,
  OutgoingTransferTx,
  OutgoingTxBatch,
  Attestation,
} from "../../../fx/crosschain/v1/types";
import { MsgOracleSetConfirm, MsgConfirmBatch } from "../../../fx/crosschain/v1/tx";

export const protobufPackage = "fx.gravity.crosschain.v1";

/** GenesisState struct */
export interface GenesisState {
  params?: Params;
  lastObservedEventNonce: Long;
  lastObservedBlockHeight?: LastObservedBlockHeight;
  oracles: Oracle[];
  oracleSets: OracleSet[];
  bridgeTokens: BridgeToken[];
  unbatchedTransfers: OutgoingTransferTx[];
  batches: OutgoingTxBatch[];
  oracleSetConfirms: MsgOracleSetConfirm[];
  batchConfirms: MsgConfirmBatch[];
  attestations: Attestation[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastObservedEventNonce: Long.UZERO,
    lastObservedBlockHeight: undefined,
    oracles: [],
    oracleSets: [],
    bridgeTokens: [],
    unbatchedTransfers: [],
    batches: [],
    oracleSetConfirms: [],
    batchConfirms: [],
    attestations: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastObservedEventNonce.isZero()) {
      writer.uint32(16).uint64(message.lastObservedEventNonce);
    }
    if (message.lastObservedBlockHeight !== undefined) {
      LastObservedBlockHeight.encode(message.lastObservedBlockHeight, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.oracleSets) {
      OracleSet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.bridgeTokens) {
      BridgeToken.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.oracleSetConfirms) {
      MsgOracleSetConfirm.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(82).fork()).ldelim();
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
          message.lastObservedEventNonce = reader.uint64() as Long;
          break;
        case 3:
          message.lastObservedBlockHeight = LastObservedBlockHeight.decode(reader, reader.uint32());
          break;
        case 4:
          message.oracles.push(Oracle.decode(reader, reader.uint32()));
          break;
        case 5:
          message.oracleSets.push(OracleSet.decode(reader, reader.uint32()));
          break;
        case 6:
          message.bridgeTokens.push(BridgeToken.decode(reader, reader.uint32()));
          break;
        case 7:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 8:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        case 9:
          message.oracleSetConfirms.push(MsgOracleSetConfirm.decode(reader, reader.uint32()));
          break;
        case 10:
          message.batchConfirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
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
      lastObservedEventNonce: isSet(object.lastObservedEventNonce)
        ? Long.fromString(object.lastObservedEventNonce)
        : Long.UZERO,
      lastObservedBlockHeight: isSet(object.lastObservedBlockHeight)
        ? LastObservedBlockHeight.fromJSON(object.lastObservedBlockHeight)
        : undefined,
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => Oracle.fromJSON(e)) : [],
      oracleSets: Array.isArray(object?.oracleSets)
        ? object.oracleSets.map((e: any) => OracleSet.fromJSON(e))
        : [],
      bridgeTokens: Array.isArray(object?.bridgeTokens)
        ? object.bridgeTokens.map((e: any) => BridgeToken.fromJSON(e))
        : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers)
        ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e))
        : [],
      oracleSetConfirms: Array.isArray(object?.oracleSetConfirms)
        ? object.oracleSetConfirms.map((e: any) => MsgOracleSetConfirm.fromJSON(e))
        : [],
      batchConfirms: Array.isArray(object?.batchConfirms)
        ? object.batchConfirms.map((e: any) => MsgConfirmBatch.fromJSON(e))
        : [],
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => Attestation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastObservedEventNonce !== undefined &&
      (obj.lastObservedEventNonce = (message.lastObservedEventNonce || Long.UZERO).toString());
    message.lastObservedBlockHeight !== undefined &&
      (obj.lastObservedBlockHeight = message.lastObservedBlockHeight
        ? LastObservedBlockHeight.toJSON(message.lastObservedBlockHeight)
        : undefined);
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => (e ? Oracle.toJSON(e) : undefined));
    } else {
      obj.oracles = [];
    }
    if (message.oracleSets) {
      obj.oracleSets = message.oracleSets.map((e) => (e ? OracleSet.toJSON(e) : undefined));
    } else {
      obj.oracleSets = [];
    }
    if (message.bridgeTokens) {
      obj.bridgeTokens = message.bridgeTokens.map((e) => (e ? BridgeToken.toJSON(e) : undefined));
    } else {
      obj.bridgeTokens = [];
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
    if (message.oracleSetConfirms) {
      obj.oracleSetConfirms = message.oracleSetConfirms.map((e) =>
        e ? MsgOracleSetConfirm.toJSON(e) : undefined,
      );
    } else {
      obj.oracleSetConfirms = [];
    }
    if (message.batchConfirms) {
      obj.batchConfirms = message.batchConfirms.map((e) => (e ? MsgConfirmBatch.toJSON(e) : undefined));
    } else {
      obj.batchConfirms = [];
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
    message.lastObservedEventNonce =
      object.lastObservedEventNonce !== undefined && object.lastObservedEventNonce !== null
        ? Long.fromValue(object.lastObservedEventNonce)
        : Long.UZERO;
    message.lastObservedBlockHeight =
      object.lastObservedBlockHeight !== undefined && object.lastObservedBlockHeight !== null
        ? LastObservedBlockHeight.fromPartial(object.lastObservedBlockHeight)
        : undefined;
    message.oracles = object.oracles?.map((e) => Oracle.fromPartial(e)) || [];
    message.oracleSets = object.oracleSets?.map((e) => OracleSet.fromPartial(e)) || [];
    message.bridgeTokens = object.bridgeTokens?.map((e) => BridgeToken.fromPartial(e)) || [];
    message.unbatchedTransfers =
      object.unbatchedTransfers?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    message.batches = object.batches?.map((e) => OutgoingTxBatch.fromPartial(e)) || [];
    message.oracleSetConfirms =
      object.oracleSetConfirms?.map((e) => MsgOracleSetConfirm.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map((e) => MsgConfirmBatch.fromPartial(e)) || [];
    message.attestations = object.attestations?.map((e) => Attestation.fromPartial(e)) || [];
    return message;
  },
};

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