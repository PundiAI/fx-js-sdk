/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgConfirmBatch, MsgOracleSetConfirm } from "./tx";
import {
  BatchFees,
  BridgeToken,
  MinBatchFee,
  Oracle,
  OracleSet,
  OutgoingTransferTx,
  OutgoingTxBatch,
  Params,
} from "./types";

export const protobufPackage = "fx.gravity.crosschain.v1";

export interface QueryParamsRequest {
  chainName: string;
}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryCurrentOracleSetRequest {
  chainName: string;
}

export interface QueryCurrentOracleSetResponse {
  oracleSet?: OracleSet;
}

export interface QueryOracleSetRequestRequest {
  chainName: string;
  nonce: Long;
}

export interface QueryOracleSetRequestResponse {
  oracleSet?: OracleSet;
}

export interface QueryOracleSetConfirmRequest {
  chainName: string;
  bridgerAddress: string;
  nonce: Long;
}

export interface QueryOracleSetConfirmResponse {
  confirm?: MsgOracleSetConfirm;
}

export interface QueryOracleSetConfirmsByNonceRequest {
  chainName: string;
  nonce: Long;
}

export interface QueryOracleSetConfirmsByNonceResponse {
  confirms: MsgOracleSetConfirm[];
}

export interface QueryLastOracleSetRequestsRequest {
  chainName: string;
}

export interface QueryLastOracleSetRequestsResponse {
  oracleSets: OracleSet[];
}

export interface QueryLastPendingOracleSetRequestByAddrRequest {
  chainName: string;
  bridgerAddress: string;
}

export interface QueryLastPendingOracleSetRequestByAddrResponse {
  oracleSets: OracleSet[];
}

export interface QueryBatchFeeRequest {
  chainName: string;
  minBatchFees: MinBatchFee[];
}

export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}

export interface QueryLastPendingBatchRequestByAddrRequest {
  chainName: string;
  bridgerAddress: string;
}

export interface QueryLastPendingBatchRequestByAddrResponse {
  batch?: OutgoingTxBatch;
}

export interface QueryOutgoingTxBatchesRequest {
  chainName: string;
}

export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}

export interface QueryBatchRequestByNonceRequest {
  chainName: string;
  tokenContract: string;
  nonce: Long;
}

export interface QueryBatchRequestByNonceResponse {
  batch?: OutgoingTxBatch;
}

export interface QueryBatchConfirmRequest {
  chainName: string;
  tokenContract: string;
  bridgerAddress: string;
  nonce: Long;
}

export interface QueryBatchConfirmResponse {
  confirm?: MsgConfirmBatch;
}

export interface QueryBatchConfirmsRequest {
  chainName: string;
  tokenContract: string;
  nonce: Long;
}

export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}

export interface QueryLastEventNonceByAddrRequest {
  chainName: string;
  bridgerAddress: string;
}

export interface QueryLastEventNonceByAddrResponse {
  eventNonce: Long;
}

export interface QueryTokenToDenomRequest {
  chainName: string;
  token: string;
}

export interface QueryTokenToDenomResponse {
  denom: string;
}

export interface QueryDenomToTokenRequest {
  chainName: string;
  denom: string;
}

export interface QueryDenomToTokenResponse {
  token: string;
}

export interface QueryOracleByAddrRequest {
  chainName: string;
  oracleAddress: string;
}

export interface QueryOracleResponse {
  oracle?: Oracle;
}

export interface QueryOracleByExternalAddrRequest {
  chainName: string;
  externalAddress: string;
}

export interface QueryOracleByBridgerAddrRequest {
  chainName: string;
  bridgerAddress: string;
}

export interface QueryPendingSendToExternalRequest {
  chainName: string;
  senderAddress: string;
}

export interface QueryPendingSendToExternalResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}

export interface QueryLastObservedBlockHeightRequest {
  chainName: string;
}

export interface QueryLastObservedBlockHeightResponse {
  externalBlockHeight: Long;
  blockHeight: Long;
}

export interface QueryLastEventBlockHeightByAddrRequest {
  chainName: string;
  bridgerAddress: string;
}

export interface QueryLastEventBlockHeightByAddrResponse {
  blockHeight: Long;
}

export interface QueryOraclesRequest {
  chainName: string;
}

export interface QueryOraclesResponse {
  /** oracles contains all the queried oracles. */
  oracles: Oracle[];
}

export interface QueryProjectedBatchTimeoutHeightRequest {
  chainName: string;
}

export interface QueryProjectedBatchTimeoutHeightResponse {
  timeoutHeight: Long;
}

export interface QueryBridgeTokensRequest {
  chainName: string;
}

export interface QueryBridgeTokensResponse {
  bridgeTokens: BridgeToken[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { chainName: "" };
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(object: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseQueryCurrentOracleSetRequest(): QueryCurrentOracleSetRequest {
  return { chainName: "" };
}

export const QueryCurrentOracleSetRequest = {
  encode(message: QueryCurrentOracleSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentOracleSetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentOracleSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentOracleSetRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryCurrentOracleSetRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentOracleSetRequest>, I>>(
    base?: I,
  ): QueryCurrentOracleSetRequest {
    return QueryCurrentOracleSetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentOracleSetRequest>, I>>(
    object: I,
  ): QueryCurrentOracleSetRequest {
    const message = createBaseQueryCurrentOracleSetRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryCurrentOracleSetResponse(): QueryCurrentOracleSetResponse {
  return { oracleSet: undefined };
}

export const QueryCurrentOracleSetResponse = {
  encode(message: QueryCurrentOracleSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleSet !== undefined) {
      OracleSet.encode(message.oracleSet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentOracleSetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentOracleSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oracleSet = OracleSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentOracleSetResponse {
    return { oracleSet: isSet(object.oracleSet) ? OracleSet.fromJSON(object.oracleSet) : undefined };
  },

  toJSON(message: QueryCurrentOracleSetResponse): unknown {
    const obj: any = {};
    message.oracleSet !== undefined &&
      (obj.oracleSet = message.oracleSet ? OracleSet.toJSON(message.oracleSet) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentOracleSetResponse>, I>>(
    base?: I,
  ): QueryCurrentOracleSetResponse {
    return QueryCurrentOracleSetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentOracleSetResponse>, I>>(
    object: I,
  ): QueryCurrentOracleSetResponse {
    const message = createBaseQueryCurrentOracleSetResponse();
    message.oracleSet =
      object.oracleSet !== undefined && object.oracleSet !== null
        ? OracleSet.fromPartial(object.oracleSet)
        : undefined;
    return message;
  },
};

function createBaseQueryOracleSetRequestRequest(): QueryOracleSetRequestRequest {
  return { chainName: "", nonce: Long.UZERO };
}

export const QueryOracleSetRequestRequest = {
  encode(message: QueryOracleSetRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleSetRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleSetRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleSetRequestRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: QueryOracleSetRequestRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleSetRequestRequest>, I>>(
    base?: I,
  ): QueryOracleSetRequestRequest {
    return QueryOracleSetRequestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleSetRequestRequest>, I>>(
    object: I,
  ): QueryOracleSetRequestRequest {
    const message = createBaseQueryOracleSetRequestRequest();
    message.chainName = object.chainName ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryOracleSetRequestResponse(): QueryOracleSetRequestResponse {
  return { oracleSet: undefined };
}

export const QueryOracleSetRequestResponse = {
  encode(message: QueryOracleSetRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleSet !== undefined) {
      OracleSet.encode(message.oracleSet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleSetRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleSetRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oracleSet = OracleSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleSetRequestResponse {
    return { oracleSet: isSet(object.oracleSet) ? OracleSet.fromJSON(object.oracleSet) : undefined };
  },

  toJSON(message: QueryOracleSetRequestResponse): unknown {
    const obj: any = {};
    message.oracleSet !== undefined &&
      (obj.oracleSet = message.oracleSet ? OracleSet.toJSON(message.oracleSet) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleSetRequestResponse>, I>>(
    base?: I,
  ): QueryOracleSetRequestResponse {
    return QueryOracleSetRequestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleSetRequestResponse>, I>>(
    object: I,
  ): QueryOracleSetRequestResponse {
    const message = createBaseQueryOracleSetRequestResponse();
    message.oracleSet =
      object.oracleSet !== undefined && object.oracleSet !== null
        ? OracleSet.fromPartial(object.oracleSet)
        : undefined;
    return message;
  },
};

function createBaseQueryOracleSetConfirmRequest(): QueryOracleSetConfirmRequest {
  return { chainName: "", bridgerAddress: "", nonce: Long.UZERO };
}

export const QueryOracleSetConfirmRequest = {
  encode(message: QueryOracleSetConfirmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleSetConfirmRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleSetConfirmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleSetConfirmRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: QueryOracleSetConfirmRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleSetConfirmRequest>, I>>(
    base?: I,
  ): QueryOracleSetConfirmRequest {
    return QueryOracleSetConfirmRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleSetConfirmRequest>, I>>(
    object: I,
  ): QueryOracleSetConfirmRequest {
    const message = createBaseQueryOracleSetConfirmRequest();
    message.chainName = object.chainName ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryOracleSetConfirmResponse(): QueryOracleSetConfirmResponse {
  return { confirm: undefined };
}

export const QueryOracleSetConfirmResponse = {
  encode(message: QueryOracleSetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.confirm !== undefined) {
      MsgOracleSetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleSetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleSetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.confirm = MsgOracleSetConfirm.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleSetConfirmResponse {
    return { confirm: isSet(object.confirm) ? MsgOracleSetConfirm.fromJSON(object.confirm) : undefined };
  },

  toJSON(message: QueryOracleSetConfirmResponse): unknown {
    const obj: any = {};
    message.confirm !== undefined &&
      (obj.confirm = message.confirm ? MsgOracleSetConfirm.toJSON(message.confirm) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleSetConfirmResponse>, I>>(
    base?: I,
  ): QueryOracleSetConfirmResponse {
    return QueryOracleSetConfirmResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleSetConfirmResponse>, I>>(
    object: I,
  ): QueryOracleSetConfirmResponse {
    const message = createBaseQueryOracleSetConfirmResponse();
    message.confirm =
      object.confirm !== undefined && object.confirm !== null
        ? MsgOracleSetConfirm.fromPartial(object.confirm)
        : undefined;
    return message;
  },
};

function createBaseQueryOracleSetConfirmsByNonceRequest(): QueryOracleSetConfirmsByNonceRequest {
  return { chainName: "", nonce: Long.UZERO };
}

export const QueryOracleSetConfirmsByNonceRequest = {
  encode(
    message: QueryOracleSetConfirmsByNonceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleSetConfirmsByNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleSetConfirmsByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleSetConfirmsByNonceRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: QueryOracleSetConfirmsByNonceRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleSetConfirmsByNonceRequest>, I>>(
    base?: I,
  ): QueryOracleSetConfirmsByNonceRequest {
    return QueryOracleSetConfirmsByNonceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleSetConfirmsByNonceRequest>, I>>(
    object: I,
  ): QueryOracleSetConfirmsByNonceRequest {
    const message = createBaseQueryOracleSetConfirmsByNonceRequest();
    message.chainName = object.chainName ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryOracleSetConfirmsByNonceResponse(): QueryOracleSetConfirmsByNonceResponse {
  return { confirms: [] };
}

export const QueryOracleSetConfirmsByNonceResponse = {
  encode(
    message: QueryOracleSetConfirmsByNonceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.confirms) {
      MsgOracleSetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleSetConfirmsByNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleSetConfirmsByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.confirms.push(MsgOracleSetConfirm.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleSetConfirmsByNonceResponse {
    return {
      confirms: Array.isArray(object?.confirms)
        ? object.confirms.map((e: any) => MsgOracleSetConfirm.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOracleSetConfirmsByNonceResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) => (e ? MsgOracleSetConfirm.toJSON(e) : undefined));
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleSetConfirmsByNonceResponse>, I>>(
    base?: I,
  ): QueryOracleSetConfirmsByNonceResponse {
    return QueryOracleSetConfirmsByNonceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleSetConfirmsByNonceResponse>, I>>(
    object: I,
  ): QueryOracleSetConfirmsByNonceResponse {
    const message = createBaseQueryOracleSetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map((e) => MsgOracleSetConfirm.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastOracleSetRequestsRequest(): QueryLastOracleSetRequestsRequest {
  return { chainName: "" };
}

export const QueryLastOracleSetRequestsRequest = {
  encode(message: QueryLastOracleSetRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastOracleSetRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastOracleSetRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastOracleSetRequestsRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryLastOracleSetRequestsRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastOracleSetRequestsRequest>, I>>(
    base?: I,
  ): QueryLastOracleSetRequestsRequest {
    return QueryLastOracleSetRequestsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastOracleSetRequestsRequest>, I>>(
    object: I,
  ): QueryLastOracleSetRequestsRequest {
    const message = createBaseQueryLastOracleSetRequestsRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryLastOracleSetRequestsResponse(): QueryLastOracleSetRequestsResponse {
  return { oracleSets: [] };
}

export const QueryLastOracleSetRequestsResponse = {
  encode(message: QueryLastOracleSetRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracleSets) {
      OracleSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastOracleSetRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastOracleSetRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oracleSets.push(OracleSet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastOracleSetRequestsResponse {
    return {
      oracleSets: Array.isArray(object?.oracleSets)
        ? object.oracleSets.map((e: any) => OracleSet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryLastOracleSetRequestsResponse): unknown {
    const obj: any = {};
    if (message.oracleSets) {
      obj.oracleSets = message.oracleSets.map((e) => (e ? OracleSet.toJSON(e) : undefined));
    } else {
      obj.oracleSets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastOracleSetRequestsResponse>, I>>(
    base?: I,
  ): QueryLastOracleSetRequestsResponse {
    return QueryLastOracleSetRequestsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastOracleSetRequestsResponse>, I>>(
    object: I,
  ): QueryLastOracleSetRequestsResponse {
    const message = createBaseQueryLastOracleSetRequestsResponse();
    message.oracleSets = object.oracleSets?.map((e) => OracleSet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastPendingOracleSetRequestByAddrRequest(): QueryLastPendingOracleSetRequestByAddrRequest {
  return { chainName: "", bridgerAddress: "" };
}

export const QueryLastPendingOracleSetRequestByAddrRequest = {
  encode(
    message: QueryLastPendingOracleSetRequestByAddrRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingOracleSetRequestByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingOracleSetRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingOracleSetRequestByAddrRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
    };
  },

  toJSON(message: QueryLastPendingOracleSetRequestByAddrRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastPendingOracleSetRequestByAddrRequest>, I>>(
    base?: I,
  ): QueryLastPendingOracleSetRequestByAddrRequest {
    return QueryLastPendingOracleSetRequestByAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingOracleSetRequestByAddrRequest>, I>>(
    object: I,
  ): QueryLastPendingOracleSetRequestByAddrRequest {
    const message = createBaseQueryLastPendingOracleSetRequestByAddrRequest();
    message.chainName = object.chainName ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    return message;
  },
};

function createBaseQueryLastPendingOracleSetRequestByAddrResponse(): QueryLastPendingOracleSetRequestByAddrResponse {
  return { oracleSets: [] };
}

export const QueryLastPendingOracleSetRequestByAddrResponse = {
  encode(
    message: QueryLastPendingOracleSetRequestByAddrResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.oracleSets) {
      OracleSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingOracleSetRequestByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingOracleSetRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oracleSets.push(OracleSet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingOracleSetRequestByAddrResponse {
    return {
      oracleSets: Array.isArray(object?.oracleSets)
        ? object.oracleSets.map((e: any) => OracleSet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryLastPendingOracleSetRequestByAddrResponse): unknown {
    const obj: any = {};
    if (message.oracleSets) {
      obj.oracleSets = message.oracleSets.map((e) => (e ? OracleSet.toJSON(e) : undefined));
    } else {
      obj.oracleSets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastPendingOracleSetRequestByAddrResponse>, I>>(
    base?: I,
  ): QueryLastPendingOracleSetRequestByAddrResponse {
    return QueryLastPendingOracleSetRequestByAddrResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingOracleSetRequestByAddrResponse>, I>>(
    object: I,
  ): QueryLastPendingOracleSetRequestByAddrResponse {
    const message = createBaseQueryLastPendingOracleSetRequestByAddrResponse();
    message.oracleSets = object.oracleSets?.map((e) => OracleSet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBatchFeeRequest(): QueryBatchFeeRequest {
  return { chainName: "", minBatchFees: [] };
}

export const QueryBatchFeeRequest = {
  encode(message: QueryBatchFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    for (const v of message.minBatchFees) {
      MinBatchFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.minBatchFees.push(MinBatchFee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchFeeRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      minBatchFees: Array.isArray(object?.minBatchFees)
        ? object.minBatchFees.map((e: any) => MinBatchFee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBatchFeeRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    if (message.minBatchFees) {
      obj.minBatchFees = message.minBatchFees.map((e) => (e ? MinBatchFee.toJSON(e) : undefined));
    } else {
      obj.minBatchFees = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchFeeRequest>, I>>(base?: I): QueryBatchFeeRequest {
    return QueryBatchFeeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchFeeRequest>, I>>(object: I): QueryBatchFeeRequest {
    const message = createBaseQueryBatchFeeRequest();
    message.chainName = object.chainName ?? "";
    message.minBatchFees = object.minBatchFees?.map((e) => MinBatchFee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBatchFeeResponse(): QueryBatchFeeResponse {
  return { batchFees: [] };
}

export const QueryBatchFeeResponse = {
  encode(message: QueryBatchFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batchFees) {
      BatchFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchFeeResponse {
    return {
      batchFees: Array.isArray(object?.batchFees)
        ? object.batchFees.map((e: any) => BatchFees.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBatchFeeResponse): unknown {
    const obj: any = {};
    if (message.batchFees) {
      obj.batchFees = message.batchFees.map((e) => (e ? BatchFees.toJSON(e) : undefined));
    } else {
      obj.batchFees = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchFeeResponse>, I>>(base?: I): QueryBatchFeeResponse {
    return QueryBatchFeeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchFeeResponse>, I>>(object: I): QueryBatchFeeResponse {
    const message = createBaseQueryBatchFeeResponse();
    message.batchFees = object.batchFees?.map((e) => BatchFees.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastPendingBatchRequestByAddrRequest(): QueryLastPendingBatchRequestByAddrRequest {
  return { chainName: "", bridgerAddress: "" };
}

export const QueryLastPendingBatchRequestByAddrRequest = {
  encode(
    message: QueryLastPendingBatchRequestByAddrRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
    };
  },

  toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastPendingBatchRequestByAddrRequest>, I>>(
    base?: I,
  ): QueryLastPendingBatchRequestByAddrRequest {
    return QueryLastPendingBatchRequestByAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingBatchRequestByAddrRequest>, I>>(
    object: I,
  ): QueryLastPendingBatchRequestByAddrRequest {
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    message.chainName = object.chainName ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    return message;
  },
};

function createBaseQueryLastPendingBatchRequestByAddrResponse(): QueryLastPendingBatchRequestByAddrResponse {
  return { batch: undefined };
}

export const QueryLastPendingBatchRequestByAddrResponse = {
  encode(
    message: QueryLastPendingBatchRequestByAddrResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse {
    return { batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined };
  },

  toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown {
    const obj: any = {};
    message.batch !== undefined &&
      (obj.batch = message.batch ? OutgoingTxBatch.toJSON(message.batch) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastPendingBatchRequestByAddrResponse>, I>>(
    base?: I,
  ): QueryLastPendingBatchRequestByAddrResponse {
    return QueryLastPendingBatchRequestByAddrResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingBatchRequestByAddrResponse>, I>>(
    object: I,
  ): QueryLastPendingBatchRequestByAddrResponse {
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    message.batch =
      object.batch !== undefined && object.batch !== null
        ? OutgoingTxBatch.fromPartial(object.batch)
        : undefined;
    return message;
  },
};

function createBaseQueryOutgoingTxBatchesRequest(): QueryOutgoingTxBatchesRequest {
  return { chainName: "" };
}

export const QueryOutgoingTxBatchesRequest = {
  encode(message: QueryOutgoingTxBatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutgoingTxBatchesRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryOutgoingTxBatchesRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutgoingTxBatchesRequest>, I>>(
    base?: I,
  ): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutgoingTxBatchesRequest>, I>>(
    object: I,
  ): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryOutgoingTxBatchesResponse(): QueryOutgoingTxBatchesResponse {
  return { batches: [] };
}

export const QueryOutgoingTxBatchesResponse = {
  encode(message: QueryOutgoingTxBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutgoingTxBatchesResponse {
    return {
      batches: Array.isArray(object?.batches)
        ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOutgoingTxBatchesResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map((e) => (e ? OutgoingTxBatch.toJSON(e) : undefined));
    } else {
      obj.batches = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutgoingTxBatchesResponse>, I>>(
    base?: I,
  ): QueryOutgoingTxBatchesResponse {
    return QueryOutgoingTxBatchesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutgoingTxBatchesResponse>, I>>(
    object: I,
  ): QueryOutgoingTxBatchesResponse {
    const message = createBaseQueryOutgoingTxBatchesResponse();
    message.batches = object.batches?.map((e) => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBatchRequestByNonceRequest(): QueryBatchRequestByNonceRequest {
  return { chainName: "", tokenContract: "", nonce: Long.UZERO };
}

export const QueryBatchRequestByNonceRequest = {
  encode(message: QueryBatchRequestByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenContract = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchRequestByNonceRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: QueryBatchRequestByNonceRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchRequestByNonceRequest>, I>>(
    base?: I,
  ): QueryBatchRequestByNonceRequest {
    return QueryBatchRequestByNonceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchRequestByNonceRequest>, I>>(
    object: I,
  ): QueryBatchRequestByNonceRequest {
    const message = createBaseQueryBatchRequestByNonceRequest();
    message.chainName = object.chainName ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryBatchRequestByNonceResponse(): QueryBatchRequestByNonceResponse {
  return { batch: undefined };
}

export const QueryBatchRequestByNonceResponse = {
  encode(message: QueryBatchRequestByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchRequestByNonceResponse {
    return { batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined };
  },

  toJSON(message: QueryBatchRequestByNonceResponse): unknown {
    const obj: any = {};
    message.batch !== undefined &&
      (obj.batch = message.batch ? OutgoingTxBatch.toJSON(message.batch) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchRequestByNonceResponse>, I>>(
    base?: I,
  ): QueryBatchRequestByNonceResponse {
    return QueryBatchRequestByNonceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchRequestByNonceResponse>, I>>(
    object: I,
  ): QueryBatchRequestByNonceResponse {
    const message = createBaseQueryBatchRequestByNonceResponse();
    message.batch =
      object.batch !== undefined && object.batch !== null
        ? OutgoingTxBatch.fromPartial(object.batch)
        : undefined;
    return message;
  },
};

function createBaseQueryBatchConfirmRequest(): QueryBatchConfirmRequest {
  return { chainName: "", tokenContract: "", bridgerAddress: "", nonce: Long.UZERO };
}

export const QueryBatchConfirmRequest = {
  encode(message: QueryBatchConfirmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(26).string(message.bridgerAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenContract = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchConfirmRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: QueryBatchConfirmRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchConfirmRequest>, I>>(base?: I): QueryBatchConfirmRequest {
    return QueryBatchConfirmRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmRequest>, I>>(
    object: I,
  ): QueryBatchConfirmRequest {
    const message = createBaseQueryBatchConfirmRequest();
    message.chainName = object.chainName ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryBatchConfirmResponse(): QueryBatchConfirmResponse {
  return { confirm: undefined };
}

export const QueryBatchConfirmResponse = {
  encode(message: QueryBatchConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.confirm !== undefined) {
      MsgConfirmBatch.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.confirm = MsgConfirmBatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchConfirmResponse {
    return { confirm: isSet(object.confirm) ? MsgConfirmBatch.fromJSON(object.confirm) : undefined };
  },

  toJSON(message: QueryBatchConfirmResponse): unknown {
    const obj: any = {};
    message.confirm !== undefined &&
      (obj.confirm = message.confirm ? MsgConfirmBatch.toJSON(message.confirm) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchConfirmResponse>, I>>(base?: I): QueryBatchConfirmResponse {
    return QueryBatchConfirmResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmResponse>, I>>(
    object: I,
  ): QueryBatchConfirmResponse {
    const message = createBaseQueryBatchConfirmResponse();
    message.confirm =
      object.confirm !== undefined && object.confirm !== null
        ? MsgConfirmBatch.fromPartial(object.confirm)
        : undefined;
    return message;
  },
};

function createBaseQueryBatchConfirmsRequest(): QueryBatchConfirmsRequest {
  return { chainName: "", tokenContract: "", nonce: Long.UZERO };
}

export const QueryBatchConfirmsRequest = {
  encode(message: QueryBatchConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenContract = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchConfirmsRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: QueryBatchConfirmsRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchConfirmsRequest>, I>>(base?: I): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmsRequest>, I>>(
    object: I,
  ): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    message.chainName = object.chainName ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryBatchConfirmsResponse(): QueryBatchConfirmsResponse {
  return { confirms: [] };
}

export const QueryBatchConfirmsResponse = {
  encode(message: QueryBatchConfirmsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBatchConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms)
        ? object.confirms.map((e: any) => MsgConfirmBatch.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBatchConfirmsResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) => (e ? MsgConfirmBatch.toJSON(e) : undefined));
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchConfirmsResponse>, I>>(base?: I): QueryBatchConfirmsResponse {
    return QueryBatchConfirmsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmsResponse>, I>>(
    object: I,
  ): QueryBatchConfirmsResponse {
    const message = createBaseQueryBatchConfirmsResponse();
    message.confirms = object.confirms?.map((e) => MsgConfirmBatch.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastEventNonceByAddrRequest(): QueryLastEventNonceByAddrRequest {
  return { chainName: "", bridgerAddress: "" };
}

export const QueryLastEventNonceByAddrRequest = {
  encode(message: QueryLastEventNonceByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventNonceByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastEventNonceByAddrRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
    };
  },

  toJSON(message: QueryLastEventNonceByAddrRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastEventNonceByAddrRequest>, I>>(
    base?: I,
  ): QueryLastEventNonceByAddrRequest {
    return QueryLastEventNonceByAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastEventNonceByAddrRequest>, I>>(
    object: I,
  ): QueryLastEventNonceByAddrRequest {
    const message = createBaseQueryLastEventNonceByAddrRequest();
    message.chainName = object.chainName ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    return message;
  },
};

function createBaseQueryLastEventNonceByAddrResponse(): QueryLastEventNonceByAddrResponse {
  return { eventNonce: Long.UZERO };
}

export const QueryLastEventNonceByAddrResponse = {
  encode(message: QueryLastEventNonceByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventNonceByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventNonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastEventNonceByAddrResponse {
    return { eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO };
  },

  toJSON(message: QueryLastEventNonceByAddrResponse): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastEventNonceByAddrResponse>, I>>(
    base?: I,
  ): QueryLastEventNonceByAddrResponse {
    return QueryLastEventNonceByAddrResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastEventNonceByAddrResponse>, I>>(
    object: I,
  ): QueryLastEventNonceByAddrResponse {
    const message = createBaseQueryLastEventNonceByAddrResponse();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryTokenToDenomRequest(): QueryTokenToDenomRequest {
  return { chainName: "", token: "" };
}

export const QueryTokenToDenomRequest = {
  encode(message: QueryTokenToDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenToDenomRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenToDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenToDenomRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: QueryTokenToDenomRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokenToDenomRequest>, I>>(base?: I): QueryTokenToDenomRequest {
    return QueryTokenToDenomRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenToDenomRequest>, I>>(
    object: I,
  ): QueryTokenToDenomRequest {
    const message = createBaseQueryTokenToDenomRequest();
    message.chainName = object.chainName ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseQueryTokenToDenomResponse(): QueryTokenToDenomResponse {
  return { denom: "" };
}

export const QueryTokenToDenomResponse = {
  encode(message: QueryTokenToDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenToDenomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenToDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenToDenomResponse {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTokenToDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTokenToDenomResponse>, I>>(base?: I): QueryTokenToDenomResponse {
    return QueryTokenToDenomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenToDenomResponse>, I>>(
    object: I,
  ): QueryTokenToDenomResponse {
    const message = createBaseQueryTokenToDenomResponse();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryDenomToTokenRequest(): QueryDenomToTokenRequest {
  return { chainName: "", denom: "" };
}

export const QueryDenomToTokenRequest = {
  encode(message: QueryDenomToTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomToTokenRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryDenomToTokenRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomToTokenRequest>, I>>(base?: I): QueryDenomToTokenRequest {
    return QueryDenomToTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomToTokenRequest>, I>>(
    object: I,
  ): QueryDenomToTokenRequest {
    const message = createBaseQueryDenomToTokenRequest();
    message.chainName = object.chainName ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryDenomToTokenResponse(): QueryDenomToTokenResponse {
  return { token: "" };
}

export const QueryDenomToTokenResponse = {
  encode(message: QueryDenomToTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomToTokenResponse {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: QueryDenomToTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomToTokenResponse>, I>>(base?: I): QueryDenomToTokenResponse {
    return QueryDenomToTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomToTokenResponse>, I>>(
    object: I,
  ): QueryDenomToTokenResponse {
    const message = createBaseQueryDenomToTokenResponse();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseQueryOracleByAddrRequest(): QueryOracleByAddrRequest {
  return { chainName: "", oracleAddress: "" };
}

export const QueryOracleByAddrRequest = {
  encode(message: QueryOracleByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.oracleAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleByAddrRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
    };
  },

  toJSON(message: QueryOracleByAddrRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleByAddrRequest>, I>>(base?: I): QueryOracleByAddrRequest {
    return QueryOracleByAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleByAddrRequest>, I>>(
    object: I,
  ): QueryOracleByAddrRequest {
    const message = createBaseQueryOracleByAddrRequest();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    return message;
  },
};

function createBaseQueryOracleResponse(): QueryOracleResponse {
  return { oracle: undefined };
}

export const QueryOracleResponse = {
  encode(message: QueryOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== undefined) {
      Oracle.encode(message.oracle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oracle = Oracle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleResponse {
    return { oracle: isSet(object.oracle) ? Oracle.fromJSON(object.oracle) : undefined };
  },

  toJSON(message: QueryOracleResponse): unknown {
    const obj: any = {};
    message.oracle !== undefined && (obj.oracle = message.oracle ? Oracle.toJSON(message.oracle) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleResponse>, I>>(base?: I): QueryOracleResponse {
    return QueryOracleResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleResponse>, I>>(object: I): QueryOracleResponse {
    const message = createBaseQueryOracleResponse();
    message.oracle =
      object.oracle !== undefined && object.oracle !== null ? Oracle.fromPartial(object.oracle) : undefined;
    return message;
  },
};

function createBaseQueryOracleByExternalAddrRequest(): QueryOracleByExternalAddrRequest {
  return { chainName: "", externalAddress: "" };
}

export const QueryOracleByExternalAddrRequest = {
  encode(message: QueryOracleByExternalAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.externalAddress !== "") {
      writer.uint32(18).string(message.externalAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleByExternalAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleByExternalAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.externalAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleByExternalAddrRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
    };
  },

  toJSON(message: QueryOracleByExternalAddrRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleByExternalAddrRequest>, I>>(
    base?: I,
  ): QueryOracleByExternalAddrRequest {
    return QueryOracleByExternalAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleByExternalAddrRequest>, I>>(
    object: I,
  ): QueryOracleByExternalAddrRequest {
    const message = createBaseQueryOracleByExternalAddrRequest();
    message.chainName = object.chainName ?? "";
    message.externalAddress = object.externalAddress ?? "";
    return message;
  },
};

function createBaseQueryOracleByBridgerAddrRequest(): QueryOracleByBridgerAddrRequest {
  return { chainName: "", bridgerAddress: "" };
}

export const QueryOracleByBridgerAddrRequest = {
  encode(message: QueryOracleByBridgerAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleByBridgerAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleByBridgerAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleByBridgerAddrRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
    };
  },

  toJSON(message: QueryOracleByBridgerAddrRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleByBridgerAddrRequest>, I>>(
    base?: I,
  ): QueryOracleByBridgerAddrRequest {
    return QueryOracleByBridgerAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleByBridgerAddrRequest>, I>>(
    object: I,
  ): QueryOracleByBridgerAddrRequest {
    const message = createBaseQueryOracleByBridgerAddrRequest();
    message.chainName = object.chainName ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    return message;
  },
};

function createBaseQueryPendingSendToExternalRequest(): QueryPendingSendToExternalRequest {
  return { chainName: "", senderAddress: "" };
}

export const QueryPendingSendToExternalRequest = {
  encode(message: QueryPendingSendToExternalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.senderAddress !== "") {
      writer.uint32(18).string(message.senderAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToExternalRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToExternalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.senderAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPendingSendToExternalRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
    };
  },

  toJSON(message: QueryPendingSendToExternalRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPendingSendToExternalRequest>, I>>(
    base?: I,
  ): QueryPendingSendToExternalRequest {
    return QueryPendingSendToExternalRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingSendToExternalRequest>, I>>(
    object: I,
  ): QueryPendingSendToExternalRequest {
    const message = createBaseQueryPendingSendToExternalRequest();
    message.chainName = object.chainName ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  },
};

function createBaseQueryPendingSendToExternalResponse(): QueryPendingSendToExternalResponse {
  return { transfersInBatches: [], unbatchedTransfers: [] };
}

export const QueryPendingSendToExternalResponse = {
  encode(message: QueryPendingSendToExternalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToExternalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToExternalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPendingSendToExternalResponse {
    return {
      transfersInBatches: Array.isArray(object?.transfersInBatches)
        ? object.transfersInBatches.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers)
        ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPendingSendToExternalResponse): unknown {
    const obj: any = {};
    if (message.transfersInBatches) {
      obj.transfersInBatches = message.transfersInBatches.map((e) =>
        e ? OutgoingTransferTx.toJSON(e) : undefined,
      );
    } else {
      obj.transfersInBatches = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map((e) =>
        e ? OutgoingTransferTx.toJSON(e) : undefined,
      );
    } else {
      obj.unbatchedTransfers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPendingSendToExternalResponse>, I>>(
    base?: I,
  ): QueryPendingSendToExternalResponse {
    return QueryPendingSendToExternalResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingSendToExternalResponse>, I>>(
    object: I,
  ): QueryPendingSendToExternalResponse {
    const message = createBaseQueryPendingSendToExternalResponse();
    message.transfersInBatches =
      object.transfersInBatches?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    message.unbatchedTransfers =
      object.unbatchedTransfers?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastObservedBlockHeightRequest(): QueryLastObservedBlockHeightRequest {
  return { chainName: "" };
}

export const QueryLastObservedBlockHeightRequest = {
  encode(message: QueryLastObservedBlockHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedBlockHeightRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastObservedBlockHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastObservedBlockHeightRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryLastObservedBlockHeightRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastObservedBlockHeightRequest>, I>>(
    base?: I,
  ): QueryLastObservedBlockHeightRequest {
    return QueryLastObservedBlockHeightRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastObservedBlockHeightRequest>, I>>(
    object: I,
  ): QueryLastObservedBlockHeightRequest {
    const message = createBaseQueryLastObservedBlockHeightRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryLastObservedBlockHeightResponse(): QueryLastObservedBlockHeightResponse {
  return { externalBlockHeight: Long.UZERO, blockHeight: Long.UZERO };
}

export const QueryLastObservedBlockHeightResponse = {
  encode(
    message: QueryLastObservedBlockHeightResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.externalBlockHeight.isZero()) {
      writer.uint32(8).uint64(message.externalBlockHeight);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedBlockHeightResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastObservedBlockHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.externalBlockHeight = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastObservedBlockHeightResponse {
    return {
      externalBlockHeight: isSet(object.externalBlockHeight)
        ? Long.fromValue(object.externalBlockHeight)
        : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
    };
  },

  toJSON(message: QueryLastObservedBlockHeightResponse): unknown {
    const obj: any = {};
    message.externalBlockHeight !== undefined &&
      (obj.externalBlockHeight = (message.externalBlockHeight || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastObservedBlockHeightResponse>, I>>(
    base?: I,
  ): QueryLastObservedBlockHeightResponse {
    return QueryLastObservedBlockHeightResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastObservedBlockHeightResponse>, I>>(
    object: I,
  ): QueryLastObservedBlockHeightResponse {
    const message = createBaseQueryLastObservedBlockHeightResponse();
    message.externalBlockHeight =
      object.externalBlockHeight !== undefined && object.externalBlockHeight !== null
        ? Long.fromValue(object.externalBlockHeight)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLastEventBlockHeightByAddrRequest(): QueryLastEventBlockHeightByAddrRequest {
  return { chainName: "", bridgerAddress: "" };
}

export const QueryLastEventBlockHeightByAddrRequest = {
  encode(
    message: QueryLastEventBlockHeightByAddrRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventBlockHeightByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventBlockHeightByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastEventBlockHeightByAddrRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
    };
  },

  toJSON(message: QueryLastEventBlockHeightByAddrRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastEventBlockHeightByAddrRequest>, I>>(
    base?: I,
  ): QueryLastEventBlockHeightByAddrRequest {
    return QueryLastEventBlockHeightByAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastEventBlockHeightByAddrRequest>, I>>(
    object: I,
  ): QueryLastEventBlockHeightByAddrRequest {
    const message = createBaseQueryLastEventBlockHeightByAddrRequest();
    message.chainName = object.chainName ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    return message;
  },
};

function createBaseQueryLastEventBlockHeightByAddrResponse(): QueryLastEventBlockHeightByAddrResponse {
  return { blockHeight: Long.UZERO };
}

export const QueryLastEventBlockHeightByAddrResponse = {
  encode(
    message: QueryLastEventBlockHeightByAddrResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventBlockHeightByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventBlockHeightByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastEventBlockHeightByAddrResponse {
    return { blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO };
  },

  toJSON(message: QueryLastEventBlockHeightByAddrResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastEventBlockHeightByAddrResponse>, I>>(
    base?: I,
  ): QueryLastEventBlockHeightByAddrResponse {
    return QueryLastEventBlockHeightByAddrResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastEventBlockHeightByAddrResponse>, I>>(
    object: I,
  ): QueryLastEventBlockHeightByAddrResponse {
    const message = createBaseQueryLastEventBlockHeightByAddrResponse();
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryOraclesRequest(): QueryOraclesRequest {
  return { chainName: "" };
}

export const QueryOraclesRequest = {
  encode(message: QueryOraclesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOraclesRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryOraclesRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOraclesRequest>, I>>(base?: I): QueryOraclesRequest {
    return QueryOraclesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOraclesRequest>, I>>(object: I): QueryOraclesRequest {
    const message = createBaseQueryOraclesRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryOraclesResponse(): QueryOraclesResponse {
  return { oracles: [] };
}

export const QueryOraclesResponse = {
  encode(message: QueryOraclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oracles.push(Oracle.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOraclesResponse {
    return {
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => Oracle.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryOraclesResponse): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => (e ? Oracle.toJSON(e) : undefined));
    } else {
      obj.oracles = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOraclesResponse>, I>>(base?: I): QueryOraclesResponse {
    return QueryOraclesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOraclesResponse>, I>>(object: I): QueryOraclesResponse {
    const message = createBaseQueryOraclesResponse();
    message.oracles = object.oracles?.map((e) => Oracle.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryProjectedBatchTimeoutHeightRequest(): QueryProjectedBatchTimeoutHeightRequest {
  return { chainName: "" };
}

export const QueryProjectedBatchTimeoutHeightRequest = {
  encode(
    message: QueryProjectedBatchTimeoutHeightRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectedBatchTimeoutHeightRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectedBatchTimeoutHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProjectedBatchTimeoutHeightRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryProjectedBatchTimeoutHeightRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProjectedBatchTimeoutHeightRequest>, I>>(
    base?: I,
  ): QueryProjectedBatchTimeoutHeightRequest {
    return QueryProjectedBatchTimeoutHeightRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectedBatchTimeoutHeightRequest>, I>>(
    object: I,
  ): QueryProjectedBatchTimeoutHeightRequest {
    const message = createBaseQueryProjectedBatchTimeoutHeightRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryProjectedBatchTimeoutHeightResponse(): QueryProjectedBatchTimeoutHeightResponse {
  return { timeoutHeight: Long.UZERO };
}

export const QueryProjectedBatchTimeoutHeightResponse = {
  encode(
    message: QueryProjectedBatchTimeoutHeightResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.timeoutHeight.isZero()) {
      writer.uint32(8).uint64(message.timeoutHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectedBatchTimeoutHeightResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectedBatchTimeoutHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timeoutHeight = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProjectedBatchTimeoutHeightResponse {
    return { timeoutHeight: isSet(object.timeoutHeight) ? Long.fromValue(object.timeoutHeight) : Long.UZERO };
  },

  toJSON(message: QueryProjectedBatchTimeoutHeightResponse): unknown {
    const obj: any = {};
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = (message.timeoutHeight || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProjectedBatchTimeoutHeightResponse>, I>>(
    base?: I,
  ): QueryProjectedBatchTimeoutHeightResponse {
    return QueryProjectedBatchTimeoutHeightResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectedBatchTimeoutHeightResponse>, I>>(
    object: I,
  ): QueryProjectedBatchTimeoutHeightResponse {
    const message = createBaseQueryProjectedBatchTimeoutHeightResponse();
    message.timeoutHeight =
      object.timeoutHeight !== undefined && object.timeoutHeight !== null
        ? Long.fromValue(object.timeoutHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryBridgeTokensRequest(): QueryBridgeTokensRequest {
  return { chainName: "" };
}

export const QueryBridgeTokensRequest = {
  encode(message: QueryBridgeTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBridgeTokensRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBridgeTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBridgeTokensRequest {
    return { chainName: isSet(object.chainName) ? String(object.chainName) : "" };
  },

  toJSON(message: QueryBridgeTokensRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBridgeTokensRequest>, I>>(base?: I): QueryBridgeTokensRequest {
    return QueryBridgeTokensRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBridgeTokensRequest>, I>>(
    object: I,
  ): QueryBridgeTokensRequest {
    const message = createBaseQueryBridgeTokensRequest();
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseQueryBridgeTokensResponse(): QueryBridgeTokensResponse {
  return { bridgeTokens: [] };
}

export const QueryBridgeTokensResponse = {
  encode(message: QueryBridgeTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bridgeTokens) {
      BridgeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBridgeTokensResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBridgeTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.bridgeTokens.push(BridgeToken.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBridgeTokensResponse {
    return {
      bridgeTokens: Array.isArray(object?.bridgeTokens)
        ? object.bridgeTokens.map((e: any) => BridgeToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBridgeTokensResponse): unknown {
    const obj: any = {};
    if (message.bridgeTokens) {
      obj.bridgeTokens = message.bridgeTokens.map((e) => (e ? BridgeToken.toJSON(e) : undefined));
    } else {
      obj.bridgeTokens = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBridgeTokensResponse>, I>>(base?: I): QueryBridgeTokensResponse {
    return QueryBridgeTokensResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBridgeTokensResponse>, I>>(
    object: I,
  ): QueryBridgeTokensResponse {
    const message = createBaseQueryBridgeTokensResponse();
    message.bridgeTokens = object.bridgeTokens?.map((e) => BridgeToken.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  CurrentOracleSet(request: QueryCurrentOracleSetRequest): Promise<QueryCurrentOracleSetResponse>;
  OracleSetRequest(request: QueryOracleSetRequestRequest): Promise<QueryOracleSetRequestResponse>;
  OracleSetConfirm(request: QueryOracleSetConfirmRequest): Promise<QueryOracleSetConfirmResponse>;
  OracleSetConfirmsByNonce(
    request: QueryOracleSetConfirmsByNonceRequest,
  ): Promise<QueryOracleSetConfirmsByNonceResponse>;
  LastOracleSetRequests(
    request: QueryLastOracleSetRequestsRequest,
  ): Promise<QueryLastOracleSetRequestsResponse>;
  LastPendingOracleSetRequestByAddr(
    request: QueryLastPendingOracleSetRequestByAddrRequest,
  ): Promise<QueryLastPendingOracleSetRequestByAddrResponse>;
  LastPendingBatchRequestByAddr(
    request: QueryLastPendingBatchRequestByAddrRequest,
  ): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
  LastEventBlockHeightByAddr(
    request: QueryLastEventBlockHeightByAddrRequest,
  ): Promise<QueryLastEventBlockHeightByAddrResponse>;
  BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  LastObservedBlockHeight(
    request: QueryLastObservedBlockHeightRequest,
  ): Promise<QueryLastObservedBlockHeightResponse>;
  OutgoingTxBatches(request: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
  BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
  BatchConfirm(request: QueryBatchConfirmRequest): Promise<QueryBatchConfirmResponse>;
  BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
  TokenToDenom(request: QueryTokenToDenomRequest): Promise<QueryTokenToDenomResponse>;
  DenomToToken(request: QueryDenomToTokenRequest): Promise<QueryDenomToTokenResponse>;
  GetOracleByAddr(request: QueryOracleByAddrRequest): Promise<QueryOracleResponse>;
  GetOracleByExternalAddr(request: QueryOracleByExternalAddrRequest): Promise<QueryOracleResponse>;
  GetOracleByBridgerAddr(request: QueryOracleByBridgerAddrRequest): Promise<QueryOracleResponse>;
  GetPendingSendToExternal(
    request: QueryPendingSendToExternalRequest,
  ): Promise<QueryPendingSendToExternalResponse>;
  /** Validators queries all oracle that match the given status. */
  Oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse>;
  ProjectedBatchTimeoutHeight(
    request: QueryProjectedBatchTimeoutHeightRequest,
  ): Promise<QueryProjectedBatchTimeoutHeightResponse>;
  BridgeTokens(request: QueryBridgeTokensRequest): Promise<QueryBridgeTokensResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.gravity.crosschain.v1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.CurrentOracleSet = this.CurrentOracleSet.bind(this);
    this.OracleSetRequest = this.OracleSetRequest.bind(this);
    this.OracleSetConfirm = this.OracleSetConfirm.bind(this);
    this.OracleSetConfirmsByNonce = this.OracleSetConfirmsByNonce.bind(this);
    this.LastOracleSetRequests = this.LastOracleSetRequests.bind(this);
    this.LastPendingOracleSetRequestByAddr = this.LastPendingOracleSetRequestByAddr.bind(this);
    this.LastPendingBatchRequestByAddr = this.LastPendingBatchRequestByAddr.bind(this);
    this.LastEventNonceByAddr = this.LastEventNonceByAddr.bind(this);
    this.LastEventBlockHeightByAddr = this.LastEventBlockHeightByAddr.bind(this);
    this.BatchFees = this.BatchFees.bind(this);
    this.LastObservedBlockHeight = this.LastObservedBlockHeight.bind(this);
    this.OutgoingTxBatches = this.OutgoingTxBatches.bind(this);
    this.BatchRequestByNonce = this.BatchRequestByNonce.bind(this);
    this.BatchConfirm = this.BatchConfirm.bind(this);
    this.BatchConfirms = this.BatchConfirms.bind(this);
    this.TokenToDenom = this.TokenToDenom.bind(this);
    this.DenomToToken = this.DenomToToken.bind(this);
    this.GetOracleByAddr = this.GetOracleByAddr.bind(this);
    this.GetOracleByExternalAddr = this.GetOracleByExternalAddr.bind(this);
    this.GetOracleByBridgerAddr = this.GetOracleByBridgerAddr.bind(this);
    this.GetPendingSendToExternal = this.GetPendingSendToExternal.bind(this);
    this.Oracles = this.Oracles.bind(this);
    this.ProjectedBatchTimeoutHeight = this.ProjectedBatchTimeoutHeight.bind(this);
    this.BridgeTokens = this.BridgeTokens.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  CurrentOracleSet(request: QueryCurrentOracleSetRequest): Promise<QueryCurrentOracleSetResponse> {
    const data = QueryCurrentOracleSetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentOracleSet", data);
    return promise.then((data) => QueryCurrentOracleSetResponse.decode(_m0.Reader.create(data)));
  }

  OracleSetRequest(request: QueryOracleSetRequestRequest): Promise<QueryOracleSetRequestResponse> {
    const data = QueryOracleSetRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleSetRequest", data);
    return promise.then((data) => QueryOracleSetRequestResponse.decode(_m0.Reader.create(data)));
  }

  OracleSetConfirm(request: QueryOracleSetConfirmRequest): Promise<QueryOracleSetConfirmResponse> {
    const data = QueryOracleSetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleSetConfirm", data);
    return promise.then((data) => QueryOracleSetConfirmResponse.decode(_m0.Reader.create(data)));
  }

  OracleSetConfirmsByNonce(
    request: QueryOracleSetConfirmsByNonceRequest,
  ): Promise<QueryOracleSetConfirmsByNonceResponse> {
    const data = QueryOracleSetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleSetConfirmsByNonce", data);
    return promise.then((data) => QueryOracleSetConfirmsByNonceResponse.decode(_m0.Reader.create(data)));
  }

  LastOracleSetRequests(
    request: QueryLastOracleSetRequestsRequest,
  ): Promise<QueryLastOracleSetRequestsResponse> {
    const data = QueryLastOracleSetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastOracleSetRequests", data);
    return promise.then((data) => QueryLastOracleSetRequestsResponse.decode(_m0.Reader.create(data)));
  }

  LastPendingOracleSetRequestByAddr(
    request: QueryLastPendingOracleSetRequestByAddrRequest,
  ): Promise<QueryLastPendingOracleSetRequestByAddrResponse> {
    const data = QueryLastPendingOracleSetRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastPendingOracleSetRequestByAddr", data);
    return promise.then((data) =>
      QueryLastPendingOracleSetRequestByAddrResponse.decode(_m0.Reader.create(data)),
    );
  }

  LastPendingBatchRequestByAddr(
    request: QueryLastPendingBatchRequestByAddrRequest,
  ): Promise<QueryLastPendingBatchRequestByAddrResponse> {
    const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastPendingBatchRequestByAddr", data);
    return promise.then((data) => QueryLastPendingBatchRequestByAddrResponse.decode(_m0.Reader.create(data)));
  }

  LastEventNonceByAddr(
    request: QueryLastEventNonceByAddrRequest,
  ): Promise<QueryLastEventNonceByAddrResponse> {
    const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastEventNonceByAddr", data);
    return promise.then((data) => QueryLastEventNonceByAddrResponse.decode(_m0.Reader.create(data)));
  }

  LastEventBlockHeightByAddr(
    request: QueryLastEventBlockHeightByAddrRequest,
  ): Promise<QueryLastEventBlockHeightByAddrResponse> {
    const data = QueryLastEventBlockHeightByAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastEventBlockHeightByAddr", data);
    return promise.then((data) => QueryLastEventBlockHeightByAddrResponse.decode(_m0.Reader.create(data)));
  }

  BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse> {
    const data = QueryBatchFeeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BatchFees", data);
    return promise.then((data) => QueryBatchFeeResponse.decode(_m0.Reader.create(data)));
  }

  LastObservedBlockHeight(
    request: QueryLastObservedBlockHeightRequest,
  ): Promise<QueryLastObservedBlockHeightResponse> {
    const data = QueryLastObservedBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastObservedBlockHeight", data);
    return promise.then((data) => QueryLastObservedBlockHeightResponse.decode(_m0.Reader.create(data)));
  }

  OutgoingTxBatches(request: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse> {
    const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OutgoingTxBatches", data);
    return promise.then((data) => QueryOutgoingTxBatchesResponse.decode(_m0.Reader.create(data)));
  }

  BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> {
    const data = QueryBatchRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BatchRequestByNonce", data);
    return promise.then((data) => QueryBatchRequestByNonceResponse.decode(_m0.Reader.create(data)));
  }

  BatchConfirm(request: QueryBatchConfirmRequest): Promise<QueryBatchConfirmResponse> {
    const data = QueryBatchConfirmRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BatchConfirm", data);
    return promise.then((data) => QueryBatchConfirmResponse.decode(_m0.Reader.create(data)));
  }

  BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> {
    const data = QueryBatchConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BatchConfirms", data);
    return promise.then((data) => QueryBatchConfirmsResponse.decode(_m0.Reader.create(data)));
  }

  TokenToDenom(request: QueryTokenToDenomRequest): Promise<QueryTokenToDenomResponse> {
    const data = QueryTokenToDenomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenToDenom", data);
    return promise.then((data) => QueryTokenToDenomResponse.decode(_m0.Reader.create(data)));
  }

  DenomToToken(request: QueryDenomToTokenRequest): Promise<QueryDenomToTokenResponse> {
    const data = QueryDenomToTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomToToken", data);
    return promise.then((data) => QueryDenomToTokenResponse.decode(_m0.Reader.create(data)));
  }

  GetOracleByAddr(request: QueryOracleByAddrRequest): Promise<QueryOracleResponse> {
    const data = QueryOracleByAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOracleByAddr", data);
    return promise.then((data) => QueryOracleResponse.decode(_m0.Reader.create(data)));
  }

  GetOracleByExternalAddr(request: QueryOracleByExternalAddrRequest): Promise<QueryOracleResponse> {
    const data = QueryOracleByExternalAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOracleByExternalAddr", data);
    return promise.then((data) => QueryOracleResponse.decode(_m0.Reader.create(data)));
  }

  GetOracleByBridgerAddr(request: QueryOracleByBridgerAddrRequest): Promise<QueryOracleResponse> {
    const data = QueryOracleByBridgerAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOracleByBridgerAddr", data);
    return promise.then((data) => QueryOracleResponse.decode(_m0.Reader.create(data)));
  }

  GetPendingSendToExternal(
    request: QueryPendingSendToExternalRequest,
  ): Promise<QueryPendingSendToExternalResponse> {
    const data = QueryPendingSendToExternalRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPendingSendToExternal", data);
    return promise.then((data) => QueryPendingSendToExternalResponse.decode(_m0.Reader.create(data)));
  }

  Oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse> {
    const data = QueryOraclesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Oracles", data);
    return promise.then((data) => QueryOraclesResponse.decode(_m0.Reader.create(data)));
  }

  ProjectedBatchTimeoutHeight(
    request: QueryProjectedBatchTimeoutHeightRequest,
  ): Promise<QueryProjectedBatchTimeoutHeightResponse> {
    const data = QueryProjectedBatchTimeoutHeightRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProjectedBatchTimeoutHeight", data);
    return promise.then((data) => QueryProjectedBatchTimeoutHeightResponse.decode(_m0.Reader.create(data)));
  }

  BridgeTokens(request: QueryBridgeTokensRequest): Promise<QueryBridgeTokensResponse> {
    const data = QueryBridgeTokensRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BridgeTokens", data);
    return promise.then((data) => QueryBridgeTokensResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
