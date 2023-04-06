/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./genesis";
import { MsgConfirmBatch, MsgValsetConfirm } from "./tx";
import { BatchFees, ERC20ToDenom, MinBatchFee, OutgoingTransferTx, OutgoingTxBatch, Valset } from "./types";

export const protobufPackage = "fx.gravity.v1";

/** Deprecated: after upgrade v3 */
export interface QueryParamsRequest {}

/** Deprecated: after upgrade v3 */
export interface QueryParamsResponse {
  params?: Params;
}

/** Deprecated: after upgrade v3 */
export interface QueryCurrentValsetRequest {}

/** Deprecated: after upgrade v3 */
export interface QueryCurrentValsetResponse {
  valset?: Valset;
}

/** Deprecated: after upgrade v3 */
export interface QueryValsetRequestRequest {
  nonce: Long;
}

/** Deprecated: after upgrade v3 */
export interface QueryValsetRequestResponse {
  valset?: Valset;
}

/** Deprecated: after upgrade v3 */
export interface QueryValsetConfirmRequest {
  nonce: Long;
  address: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryValsetConfirmResponse {
  confirm?: MsgValsetConfirm;
}

/** Deprecated: after upgrade v3 */
export interface QueryValsetConfirmsByNonceRequest {
  nonce: Long;
}

/** Deprecated: after upgrade v3 */
export interface QueryValsetConfirmsByNonceResponse {
  confirms: MsgValsetConfirm[];
}

/** Deprecated: after upgrade v3 */
export interface QueryLastValsetRequestsRequest {}

/** Deprecated: after upgrade v3 */
export interface QueryLastValsetRequestsResponse {
  valsets: Valset[];
}

/** Deprecated: after upgrade v3 */
export interface QueryLastPendingValsetRequestByAddrRequest {
  address: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryLastPendingValsetRequestByAddrResponse {
  valsets: Valset[];
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchFeeRequest {
  minBatchFees: MinBatchFee[];
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}

/** Deprecated: after upgrade v3 */
export interface QueryLastPendingBatchRequestByAddrRequest {
  address: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryLastPendingBatchRequestByAddrResponse {
  batch?: OutgoingTxBatch;
}

/** Deprecated: after upgrade v3 */
export interface QueryOutgoingTxBatchesRequest {}

/** Deprecated: after upgrade v3 */
export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchRequestByNonceRequest {
  nonce: Long;
  tokenContract: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchRequestByNonceResponse {
  batch?: OutgoingTxBatch;
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchConfirmRequest {
  nonce: Long;
  tokenContract: string;
  address: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchConfirmResponse {
  confirm?: MsgConfirmBatch;
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchConfirmsRequest {
  nonce: Long;
  tokenContract: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}

/** Deprecated: after upgrade v3 */
export interface QueryLastEventNonceByAddrRequest {
  address: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryLastEventNonceByAddrResponse {
  eventNonce: Long;
}

/** Deprecated: after upgrade v3 */
export interface QueryERC20ToDenomRequest {
  erc20: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryERC20ToDenomResponse {
  denom: string;
  fxOriginated: boolean;
}

/** Deprecated: after upgrade v3 */
export interface QueryDenomToERC20Request {
  denom: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryDenomToERC20Response {
  erc20: string;
  fxOriginated: boolean;
}

/** Deprecated: after upgrade v3 */
export interface QueryDelegateKeyByValidatorRequest {
  validatorAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryDelegateKeyByValidatorResponse {
  ethAddress: string;
  orchestratorAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryDelegateKeyByEthRequest {
  ethAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryDelegateKeyByEthResponse {
  validatorAddress: string;
  orchestratorAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryDelegateKeyByOrchestratorRequest {
  orchestratorAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryDelegateKeyByOrchestratorResponse {
  validatorAddress: string;
  ethAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryPendingSendToEthRequest {
  senderAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryPendingSendToEthResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}

/** Deprecated: after upgrade v3 */
export interface QueryLastObservedBlockHeightRequest {}

/** Deprecated: after upgrade v3 */
export interface QueryLastObservedBlockHeightResponse {
  ethBlockHeight: Long;
  blockHeight: Long;
}

/** Deprecated: after upgrade v3 */
export interface QueryLastEventBlockHeightByAddrRequest {
  address: string;
}

/** Deprecated: after upgrade v3 */
export interface QueryLastEventBlockHeightByAddrResponse {
  blockHeight: Long;
}

/** Deprecated: after upgrade v3 */
export interface QueryProjectedBatchTimeoutHeightRequest {}

/** Deprecated: after upgrade v3 */
export interface QueryProjectedBatchTimeoutHeightResponse {
  timeoutHeight: Long;
}

/** Deprecated: after upgrade v3 */
export interface QueryBridgeTokensRequest {}

/** Deprecated: after upgrade v3 */
export interface QueryBridgeTokensResponse {
  bridgeTokens: ERC20ToDenom[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
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

function createBaseQueryCurrentValsetRequest(): QueryCurrentValsetRequest {
  return {};
}

export const QueryCurrentValsetRequest = {
  encode(_: QueryCurrentValsetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryCurrentValsetRequest {
    return {};
  },

  toJSON(_: QueryCurrentValsetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentValsetRequest>, I>>(base?: I): QueryCurrentValsetRequest {
    return QueryCurrentValsetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentValsetRequest>, I>>(_: I): QueryCurrentValsetRequest {
    const message = createBaseQueryCurrentValsetRequest();
    return message;
  },
};

function createBaseQueryCurrentValsetResponse(): QueryCurrentValsetResponse {
  return { valset: undefined };
}

export const QueryCurrentValsetResponse = {
  encode(message: QueryCurrentValsetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.valset = Valset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentValsetResponse {
    return { valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined };
  },

  toJSON(message: QueryCurrentValsetResponse): unknown {
    const obj: any = {};
    message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentValsetResponse>, I>>(base?: I): QueryCurrentValsetResponse {
    return QueryCurrentValsetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentValsetResponse>, I>>(
    object: I,
  ): QueryCurrentValsetResponse {
    const message = createBaseQueryCurrentValsetResponse();
    message.valset =
      object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
};

function createBaseQueryValsetRequestRequest(): QueryValsetRequestRequest {
  return { nonce: Long.UZERO };
}

export const QueryValsetRequestRequest = {
  encode(message: QueryValsetRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

  fromJSON(object: any): QueryValsetRequestRequest {
    return { nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO };
  },

  toJSON(message: QueryValsetRequestRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValsetRequestRequest>, I>>(base?: I): QueryValsetRequestRequest {
    return QueryValsetRequestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetRequestRequest>, I>>(
    object: I,
  ): QueryValsetRequestRequest {
    const message = createBaseQueryValsetRequestRequest();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryValsetRequestResponse(): QueryValsetRequestResponse {
  return { valset: undefined };
}

export const QueryValsetRequestResponse = {
  encode(message: QueryValsetRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.valset = Valset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValsetRequestResponse {
    return { valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined };
  },

  toJSON(message: QueryValsetRequestResponse): unknown {
    const obj: any = {};
    message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValsetRequestResponse>, I>>(base?: I): QueryValsetRequestResponse {
    return QueryValsetRequestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetRequestResponse>, I>>(
    object: I,
  ): QueryValsetRequestResponse {
    const message = createBaseQueryValsetRequestResponse();
    message.valset =
      object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
};

function createBaseQueryValsetConfirmRequest(): QueryValsetConfirmRequest {
  return { nonce: Long.UZERO, address: "" };
}

export const QueryValsetConfirmRequest = {
  encode(message: QueryValsetConfirmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryValsetConfirmRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValsetConfirmRequest>, I>>(base?: I): QueryValsetConfirmRequest {
    return QueryValsetConfirmRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmRequest>, I>>(
    object: I,
  ): QueryValsetConfirmRequest {
    const message = createBaseQueryValsetConfirmRequest();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryValsetConfirmResponse(): QueryValsetConfirmResponse {
  return { confirm: undefined };
}

export const QueryValsetConfirmResponse = {
  encode(message: QueryValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.confirm !== undefined) {
      MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmResponse {
    return { confirm: isSet(object.confirm) ? MsgValsetConfirm.fromJSON(object.confirm) : undefined };
  },

  toJSON(message: QueryValsetConfirmResponse): unknown {
    const obj: any = {};
    message.confirm !== undefined &&
      (obj.confirm = message.confirm ? MsgValsetConfirm.toJSON(message.confirm) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValsetConfirmResponse>, I>>(base?: I): QueryValsetConfirmResponse {
    return QueryValsetConfirmResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmResponse>, I>>(
    object: I,
  ): QueryValsetConfirmResponse {
    const message = createBaseQueryValsetConfirmResponse();
    message.confirm =
      object.confirm !== undefined && object.confirm !== null
        ? MsgValsetConfirm.fromPartial(object.confirm)
        : undefined;
    return message;
  },
};

function createBaseQueryValsetConfirmsByNonceRequest(): QueryValsetConfirmsByNonceRequest {
  return { nonce: Long.UZERO };
}

export const QueryValsetConfirmsByNonceRequest = {
  encode(message: QueryValsetConfirmsByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
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

  fromJSON(object: any): QueryValsetConfirmsByNonceRequest {
    return { nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO };
  },

  toJSON(message: QueryValsetConfirmsByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValsetConfirmsByNonceRequest>, I>>(
    base?: I,
  ): QueryValsetConfirmsByNonceRequest {
    return QueryValsetConfirmsByNonceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmsByNonceRequest>, I>>(
    object: I,
  ): QueryValsetConfirmsByNonceRequest {
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryValsetConfirmsByNonceResponse(): QueryValsetConfirmsByNonceResponse {
  return { confirms: [] };
}

export const QueryValsetConfirmsByNonceResponse = {
  encode(message: QueryValsetConfirmsByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmsByNonceResponse {
    return {
      confirms: Array.isArray(object?.confirms)
        ? object.confirms.map((e: any) => MsgValsetConfirm.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryValsetConfirmsByNonceResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) => (e ? MsgValsetConfirm.toJSON(e) : undefined));
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValsetConfirmsByNonceResponse>, I>>(
    base?: I,
  ): QueryValsetConfirmsByNonceResponse {
    return QueryValsetConfirmsByNonceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmsByNonceResponse>, I>>(
    object: I,
  ): QueryValsetConfirmsByNonceResponse {
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map((e) => MsgValsetConfirm.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastValsetRequestsRequest(): QueryLastValsetRequestsRequest {
  return {};
}

export const QueryLastValsetRequestsRequest = {
  encode(_: QueryLastValsetRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryLastValsetRequestsRequest {
    return {};
  },

  toJSON(_: QueryLastValsetRequestsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastValsetRequestsRequest>, I>>(
    base?: I,
  ): QueryLastValsetRequestsRequest {
    return QueryLastValsetRequestsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastValsetRequestsRequest>, I>>(
    _: I,
  ): QueryLastValsetRequestsRequest {
    const message = createBaseQueryLastValsetRequestsRequest();
    return message;
  },
};

function createBaseQueryLastValsetRequestsResponse(): QueryLastValsetRequestsResponse {
  return { valsets: [] };
}

export const QueryLastValsetRequestsResponse = {
  encode(message: QueryLastValsetRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.valsets.push(Valset.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastValsetRequestsResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryLastValsetRequestsResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) => (e ? Valset.toJSON(e) : undefined));
    } else {
      obj.valsets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastValsetRequestsResponse>, I>>(
    base?: I,
  ): QueryLastValsetRequestsResponse {
    return QueryLastValsetRequestsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastValsetRequestsResponse>, I>>(
    object: I,
  ): QueryLastValsetRequestsResponse {
    const message = createBaseQueryLastValsetRequestsResponse();
    message.valsets = object.valsets?.map((e) => Valset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastPendingValsetRequestByAddrRequest(): QueryLastPendingValsetRequestByAddrRequest {
  return { address: "" };
}

export const QueryLastPendingValsetRequestByAddrRequest = {
  encode(
    message: QueryLastPendingValsetRequestByAddrRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastPendingValsetRequestByAddrRequest>, I>>(
    base?: I,
  ): QueryLastPendingValsetRequestByAddrRequest {
    return QueryLastPendingValsetRequestByAddrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingValsetRequestByAddrRequest>, I>>(
    object: I,
  ): QueryLastPendingValsetRequestByAddrRequest {
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryLastPendingValsetRequestByAddrResponse(): QueryLastPendingValsetRequestByAddrResponse {
  return { valsets: [] };
}

export const QueryLastPendingValsetRequestByAddrResponse = {
  encode(
    message: QueryLastPendingValsetRequestByAddrResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.valsets.push(Valset.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) => (e ? Valset.toJSON(e) : undefined));
    } else {
      obj.valsets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastPendingValsetRequestByAddrResponse>, I>>(
    base?: I,
  ): QueryLastPendingValsetRequestByAddrResponse {
    return QueryLastPendingValsetRequestByAddrResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingValsetRequestByAddrResponse>, I>>(
    object: I,
  ): QueryLastPendingValsetRequestByAddrResponse {
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    message.valsets = object.valsets?.map((e) => Valset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBatchFeeRequest(): QueryBatchFeeRequest {
  return { minBatchFees: [] };
}

export const QueryBatchFeeRequest = {
  encode(message: QueryBatchFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minBatchFees) {
      MinBatchFee.encode(v!, writer.uint32(10).fork()).ldelim();
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
      minBatchFees: Array.isArray(object?.minBatchFees)
        ? object.minBatchFees.map((e: any) => MinBatchFee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBatchFeeRequest): unknown {
    const obj: any = {};
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
  return { address: "" };
}

export const QueryLastPendingBatchRequestByAddrRequest = {
  encode(
    message: QueryLastPendingBatchRequestByAddrRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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

          message.address = reader.string();
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
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
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
    message.address = object.address ?? "";
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
  return {};
}

export const QueryOutgoingTxBatchesRequest = {
  encode(_: QueryOutgoingTxBatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryOutgoingTxBatchesRequest {
    return {};
  },

  toJSON(_: QueryOutgoingTxBatchesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutgoingTxBatchesRequest>, I>>(
    base?: I,
  ): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutgoingTxBatchesRequest>, I>>(
    _: I,
  ): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
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
  return { nonce: Long.UZERO, tokenContract: "" };
}

export const QueryBatchRequestByNonceRequest = {
  encode(message: QueryBatchRequestByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
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
          if (tag != 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenContract = reader.string();
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
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
    };
  },

  toJSON(message: QueryBatchRequestByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
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
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
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
  return { nonce: Long.UZERO, tokenContract: "", address: "" };
}

export const QueryBatchConfirmRequest = {
  encode(message: QueryBatchConfirmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
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
          if (tag != 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
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

          message.address = reader.string();
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
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryBatchConfirmRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchConfirmRequest>, I>>(base?: I): QueryBatchConfirmRequest {
    return QueryBatchConfirmRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmRequest>, I>>(
    object: I,
  ): QueryBatchConfirmRequest {
    const message = createBaseQueryBatchConfirmRequest();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.address = object.address ?? "";
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
  return { nonce: Long.UZERO, tokenContract: "" };
}

export const QueryBatchConfirmsRequest = {
  encode(message: QueryBatchConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
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
          if (tag != 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenContract = reader.string();
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
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
    };
  },

  toJSON(message: QueryBatchConfirmsRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBatchConfirmsRequest>, I>>(base?: I): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmsRequest>, I>>(
    object: I,
  ): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
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
  return { address: "" };
}

export const QueryLastEventNonceByAddrRequest = {
  encode(message: QueryLastEventNonceByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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

          message.address = reader.string();
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
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryLastEventNonceByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
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
    message.address = object.address ?? "";
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

function createBaseQueryERC20ToDenomRequest(): QueryERC20ToDenomRequest {
  return { erc20: "" };
}

export const QueryERC20ToDenomRequest = {
  encode(message: QueryERC20ToDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.erc20 = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryERC20ToDenomRequest {
    return { erc20: isSet(object.erc20) ? String(object.erc20) : "" };
  },

  toJSON(message: QueryERC20ToDenomRequest): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryERC20ToDenomRequest>, I>>(base?: I): QueryERC20ToDenomRequest {
    return QueryERC20ToDenomRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryERC20ToDenomRequest>, I>>(
    object: I,
  ): QueryERC20ToDenomRequest {
    const message = createBaseQueryERC20ToDenomRequest();
    message.erc20 = object.erc20 ?? "";
    return message;
  },
};

function createBaseQueryERC20ToDenomResponse(): QueryERC20ToDenomResponse {
  return { denom: "", fxOriginated: false };
}

export const QueryERC20ToDenomResponse = {
  encode(message: QueryERC20ToDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.fxOriginated === true) {
      writer.uint32(16).bool(message.fxOriginated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fxOriginated = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryERC20ToDenomResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      fxOriginated: isSet(object.fxOriginated) ? Boolean(object.fxOriginated) : false,
    };
  },

  toJSON(message: QueryERC20ToDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.fxOriginated !== undefined && (obj.fxOriginated = message.fxOriginated);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryERC20ToDenomResponse>, I>>(base?: I): QueryERC20ToDenomResponse {
    return QueryERC20ToDenomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryERC20ToDenomResponse>, I>>(
    object: I,
  ): QueryERC20ToDenomResponse {
    const message = createBaseQueryERC20ToDenomResponse();
    message.denom = object.denom ?? "";
    message.fxOriginated = object.fxOriginated ?? false;
    return message;
  },
};

function createBaseQueryDenomToERC20Request(): QueryDenomToERC20Request {
  return { denom: "" };
}

export const QueryDenomToERC20Request = {
  encode(message: QueryDenomToERC20Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Request();
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

  fromJSON(object: any): QueryDenomToERC20Request {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryDenomToERC20Request): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomToERC20Request>, I>>(base?: I): QueryDenomToERC20Request {
    return QueryDenomToERC20Request.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomToERC20Request>, I>>(
    object: I,
  ): QueryDenomToERC20Request {
    const message = createBaseQueryDenomToERC20Request();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryDenomToERC20Response(): QueryDenomToERC20Response {
  return { erc20: "", fxOriginated: false };
}

export const QueryDenomToERC20Response = {
  encode(message: QueryDenomToERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.fxOriginated === true) {
      writer.uint32(16).bool(message.fxOriginated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.erc20 = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fxOriginated = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomToERC20Response {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      fxOriginated: isSet(object.fxOriginated) ? Boolean(object.fxOriginated) : false,
    };
  },

  toJSON(message: QueryDenomToERC20Response): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.fxOriginated !== undefined && (obj.fxOriginated = message.fxOriginated);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomToERC20Response>, I>>(base?: I): QueryDenomToERC20Response {
    return QueryDenomToERC20Response.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomToERC20Response>, I>>(
    object: I,
  ): QueryDenomToERC20Response {
    const message = createBaseQueryDenomToERC20Response();
    message.erc20 = object.erc20 ?? "";
    message.fxOriginated = object.fxOriginated ?? false;
    return message;
  },
};

function createBaseQueryDelegateKeyByValidatorRequest(): QueryDelegateKeyByValidatorRequest {
  return { validatorAddress: "" };
}

export const QueryDelegateKeyByValidatorRequest = {
  encode(message: QueryDelegateKeyByValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeyByValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeyByValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeyByValidatorRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryDelegateKeyByValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegateKeyByValidatorRequest>, I>>(
    base?: I,
  ): QueryDelegateKeyByValidatorRequest {
    return QueryDelegateKeyByValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeyByValidatorRequest>, I>>(
    object: I,
  ): QueryDelegateKeyByValidatorRequest {
    const message = createBaseQueryDelegateKeyByValidatorRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegateKeyByValidatorResponse(): QueryDelegateKeyByValidatorResponse {
  return { ethAddress: "", orchestratorAddress: "" };
}

export const QueryDelegateKeyByValidatorResponse = {
  encode(message: QueryDelegateKeyByValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeyByValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeyByValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ethAddress = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.orchestratorAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeyByValidatorResponse {
    return {
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
    };
  },

  toJSON(message: QueryDelegateKeyByValidatorResponse): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegateKeyByValidatorResponse>, I>>(
    base?: I,
  ): QueryDelegateKeyByValidatorResponse {
    return QueryDelegateKeyByValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeyByValidatorResponse>, I>>(
    object: I,
  ): QueryDelegateKeyByValidatorResponse {
    const message = createBaseQueryDelegateKeyByValidatorResponse();
    message.ethAddress = object.ethAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegateKeyByEthRequest(): QueryDelegateKeyByEthRequest {
  return { ethAddress: "" };
}

export const QueryDelegateKeyByEthRequest = {
  encode(message: QueryDelegateKeyByEthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeyByEthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeyByEthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ethAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeyByEthRequest {
    return { ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "" };
  },

  toJSON(message: QueryDelegateKeyByEthRequest): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegateKeyByEthRequest>, I>>(
    base?: I,
  ): QueryDelegateKeyByEthRequest {
    return QueryDelegateKeyByEthRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeyByEthRequest>, I>>(
    object: I,
  ): QueryDelegateKeyByEthRequest {
    const message = createBaseQueryDelegateKeyByEthRequest();
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegateKeyByEthResponse(): QueryDelegateKeyByEthResponse {
  return { validatorAddress: "", orchestratorAddress: "" };
}

export const QueryDelegateKeyByEthResponse = {
  encode(message: QueryDelegateKeyByEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeyByEthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeyByEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.orchestratorAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeyByEthResponse {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
    };
  },

  toJSON(message: QueryDelegateKeyByEthResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegateKeyByEthResponse>, I>>(
    base?: I,
  ): QueryDelegateKeyByEthResponse {
    return QueryDelegateKeyByEthResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeyByEthResponse>, I>>(
    object: I,
  ): QueryDelegateKeyByEthResponse {
    const message = createBaseQueryDelegateKeyByEthResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegateKeyByOrchestratorRequest(): QueryDelegateKeyByOrchestratorRequest {
  return { orchestratorAddress: "" };
}

export const QueryDelegateKeyByOrchestratorRequest = {
  encode(
    message: QueryDelegateKeyByOrchestratorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.orchestratorAddress !== "") {
      writer.uint32(10).string(message.orchestratorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeyByOrchestratorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeyByOrchestratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.orchestratorAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeyByOrchestratorRequest {
    return {
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : "",
    };
  },

  toJSON(message: QueryDelegateKeyByOrchestratorRequest): unknown {
    const obj: any = {};
    message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegateKeyByOrchestratorRequest>, I>>(
    base?: I,
  ): QueryDelegateKeyByOrchestratorRequest {
    return QueryDelegateKeyByOrchestratorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeyByOrchestratorRequest>, I>>(
    object: I,
  ): QueryDelegateKeyByOrchestratorRequest {
    const message = createBaseQueryDelegateKeyByOrchestratorRequest();
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegateKeyByOrchestratorResponse(): QueryDelegateKeyByOrchestratorResponse {
  return { validatorAddress: "", ethAddress: "" };
}

export const QueryDelegateKeyByOrchestratorResponse = {
  encode(
    message: QueryDelegateKeyByOrchestratorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeyByOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeyByOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ethAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeyByOrchestratorResponse {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
    };
  },

  toJSON(message: QueryDelegateKeyByOrchestratorResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegateKeyByOrchestratorResponse>, I>>(
    base?: I,
  ): QueryDelegateKeyByOrchestratorResponse {
    return QueryDelegateKeyByOrchestratorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeyByOrchestratorResponse>, I>>(
    object: I,
  ): QueryDelegateKeyByOrchestratorResponse {
    const message = createBaseQueryDelegateKeyByOrchestratorResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
};

function createBaseQueryPendingSendToEthRequest(): QueryPendingSendToEthRequest {
  return { senderAddress: "" };
}

export const QueryPendingSendToEthRequest = {
  encode(message: QueryPendingSendToEthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
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

  fromJSON(object: any): QueryPendingSendToEthRequest {
    return { senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "" };
  },

  toJSON(message: QueryPendingSendToEthRequest): unknown {
    const obj: any = {};
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPendingSendToEthRequest>, I>>(
    base?: I,
  ): QueryPendingSendToEthRequest {
    return QueryPendingSendToEthRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingSendToEthRequest>, I>>(
    object: I,
  ): QueryPendingSendToEthRequest {
    const message = createBaseQueryPendingSendToEthRequest();
    message.senderAddress = object.senderAddress ?? "";
    return message;
  },
};

function createBaseQueryPendingSendToEthResponse(): QueryPendingSendToEthResponse {
  return { transfersInBatches: [], unbatchedTransfers: [] };
}

export const QueryPendingSendToEthResponse = {
  encode(message: QueryPendingSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEthResponse();
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

  fromJSON(object: any): QueryPendingSendToEthResponse {
    return {
      transfersInBatches: Array.isArray(object?.transfersInBatches)
        ? object.transfersInBatches.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers)
        ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPendingSendToEthResponse): unknown {
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

  create<I extends Exact<DeepPartial<QueryPendingSendToEthResponse>, I>>(
    base?: I,
  ): QueryPendingSendToEthResponse {
    return QueryPendingSendToEthResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingSendToEthResponse>, I>>(
    object: I,
  ): QueryPendingSendToEthResponse {
    const message = createBaseQueryPendingSendToEthResponse();
    message.transfersInBatches =
      object.transfersInBatches?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    message.unbatchedTransfers =
      object.unbatchedTransfers?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastObservedBlockHeightRequest(): QueryLastObservedBlockHeightRequest {
  return {};
}

export const QueryLastObservedBlockHeightRequest = {
  encode(_: QueryLastObservedBlockHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedBlockHeightRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastObservedBlockHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryLastObservedBlockHeightRequest {
    return {};
  },

  toJSON(_: QueryLastObservedBlockHeightRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLastObservedBlockHeightRequest>, I>>(
    base?: I,
  ): QueryLastObservedBlockHeightRequest {
    return QueryLastObservedBlockHeightRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastObservedBlockHeightRequest>, I>>(
    _: I,
  ): QueryLastObservedBlockHeightRequest {
    const message = createBaseQueryLastObservedBlockHeightRequest();
    return message;
  },
};

function createBaseQueryLastObservedBlockHeightResponse(): QueryLastObservedBlockHeightResponse {
  return { ethBlockHeight: Long.UZERO, blockHeight: Long.UZERO };
}

export const QueryLastObservedBlockHeightResponse = {
  encode(
    message: QueryLastObservedBlockHeightResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.ethBlockHeight.isZero()) {
      writer.uint32(8).uint64(message.ethBlockHeight);
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

          message.ethBlockHeight = reader.uint64() as Long;
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
      ethBlockHeight: isSet(object.ethBlockHeight) ? Long.fromValue(object.ethBlockHeight) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
    };
  },

  toJSON(message: QueryLastObservedBlockHeightResponse): unknown {
    const obj: any = {};
    message.ethBlockHeight !== undefined &&
      (obj.ethBlockHeight = (message.ethBlockHeight || Long.UZERO).toString());
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
    message.ethBlockHeight =
      object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
        ? Long.fromValue(object.ethBlockHeight)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryLastEventBlockHeightByAddrRequest(): QueryLastEventBlockHeightByAddrRequest {
  return { address: "" };
}

export const QueryLastEventBlockHeightByAddrRequest = {
  encode(
    message: QueryLastEventBlockHeightByAddrRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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

          message.address = reader.string();
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
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryLastEventBlockHeightByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
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
    message.address = object.address ?? "";
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

function createBaseQueryProjectedBatchTimeoutHeightRequest(): QueryProjectedBatchTimeoutHeightRequest {
  return {};
}

export const QueryProjectedBatchTimeoutHeightRequest = {
  encode(_: QueryProjectedBatchTimeoutHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProjectedBatchTimeoutHeightRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectedBatchTimeoutHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryProjectedBatchTimeoutHeightRequest {
    return {};
  },

  toJSON(_: QueryProjectedBatchTimeoutHeightRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProjectedBatchTimeoutHeightRequest>, I>>(
    base?: I,
  ): QueryProjectedBatchTimeoutHeightRequest {
    return QueryProjectedBatchTimeoutHeightRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryProjectedBatchTimeoutHeightRequest>, I>>(
    _: I,
  ): QueryProjectedBatchTimeoutHeightRequest {
    const message = createBaseQueryProjectedBatchTimeoutHeightRequest();
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
  return {};
}

export const QueryBridgeTokensRequest = {
  encode(_: QueryBridgeTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBridgeTokensRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBridgeTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryBridgeTokensRequest {
    return {};
  },

  toJSON(_: QueryBridgeTokensRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBridgeTokensRequest>, I>>(base?: I): QueryBridgeTokensRequest {
    return QueryBridgeTokensRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBridgeTokensRequest>, I>>(_: I): QueryBridgeTokensRequest {
    const message = createBaseQueryBridgeTokensRequest();
    return message;
  },
};

function createBaseQueryBridgeTokensResponse(): QueryBridgeTokensResponse {
  return { bridgeTokens: [] };
}

export const QueryBridgeTokensResponse = {
  encode(message: QueryBridgeTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bridgeTokens) {
      ERC20ToDenom.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.bridgeTokens.push(ERC20ToDenom.decode(reader, reader.uint32()));
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
        ? object.bridgeTokens.map((e: any) => ERC20ToDenom.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBridgeTokensResponse): unknown {
    const obj: any = {};
    if (message.bridgeTokens) {
      obj.bridgeTokens = message.bridgeTokens.map((e) => (e ? ERC20ToDenom.toJSON(e) : undefined));
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
    message.bridgeTokens = object.bridgeTokens?.map((e) => ERC20ToDenom.fromPartial(e)) || [];
    return message;
  },
};

/** Deprecated: after upgrade v3 */
export interface Query {
  /** Deprecated: Please use crosschain query.Params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Deprecated: Please use crosschain query.CurrentOracleSet */
  CurrentValset(request: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
  /** Deprecated: Please use crosschain query.OracleSetRequest */
  ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
  /** Deprecated: Please use crosschain query.OracleSetConfirm */
  ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
  /** Deprecated: Please use crosschain query.OracleSetConfirmsByNonce */
  ValsetConfirmsByNonce(
    request: QueryValsetConfirmsByNonceRequest,
  ): Promise<QueryValsetConfirmsByNonceResponse>;
  /** Deprecated: Please use crosschain query.LastOracleSetRequests */
  LastValsetRequests(request: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
  /** Deprecated: Please use crosschain query.LastPendingOracleSetRequestByAddr */
  LastPendingValsetRequestByAddr(
    request: QueryLastPendingValsetRequestByAddrRequest,
  ): Promise<QueryLastPendingValsetRequestByAddrResponse>;
  /** Deprecated: Please use crosschain query.LastPendingBatchRequestByAddr */
  LastPendingBatchRequestByAddr(
    request: QueryLastPendingBatchRequestByAddrRequest,
  ): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  /** Deprecated: Please use crosschain query.LastEventNonceByAddr */
  LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
  /** Deprecated: Please use crosschain query.LastEventBlockHeightByAddr */
  LastEventBlockHeightByAddr(
    request: QueryLastEventBlockHeightByAddrRequest,
  ): Promise<QueryLastEventBlockHeightByAddrResponse>;
  /** Deprecated: Please use crosschain query.BatchFees */
  BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  /** Deprecated: Please use crosschain query.LastObservedBlockHeight */
  LastObservedBlockHeight(
    request: QueryLastObservedBlockHeightRequest,
  ): Promise<QueryLastObservedBlockHeightResponse>;
  /** Deprecated: Please use crosschain query.OutgoingTxBatches */
  OutgoingTxBatches(request: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
  /** Deprecated: Please use crosschain query.BatchRequestByNonce */
  BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
  /** Deprecated: Please use crosschain query.BatchConfirm */
  BatchConfirm(request: QueryBatchConfirmRequest): Promise<QueryBatchConfirmResponse>;
  /** Deprecated: Please use crosschain query.BatchConfirms */
  BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
  /** Deprecated: Please use crosschain query.TokenToDenom */
  ERC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
  /** Deprecated: Please use crosschain query.DenomToToken */
  DenomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
  /** Deprecated: Please use crosschain query.GetOracleByAddr */
  GetDelegateKeyByValidator(
    request: QueryDelegateKeyByValidatorRequest,
  ): Promise<QueryDelegateKeyByValidatorResponse>;
  /** Deprecated: Please use crosschain query.GetOracleByExternalAddr */
  GetDelegateKeyByEth(request: QueryDelegateKeyByEthRequest): Promise<QueryDelegateKeyByEthResponse>;
  /** Deprecated: Please use crosschain query.GetOracleByBridgerAddr */
  GetDelegateKeyByOrchestrator(
    request: QueryDelegateKeyByOrchestratorRequest,
  ): Promise<QueryDelegateKeyByOrchestratorResponse>;
  /** Deprecated: Please use crosschain query.GetPendingSendToExternal */
  GetPendingSendToEth(request: QueryPendingSendToEthRequest): Promise<QueryPendingSendToEthResponse>;
  /** Deprecated: Please use crosschain query.ProjectedBatchTimeoutHeight */
  ProjectedBatchTimeoutHeight(
    request: QueryProjectedBatchTimeoutHeightRequest,
  ): Promise<QueryProjectedBatchTimeoutHeightResponse>;
  /** Deprecated: Please use crosschain query.BridgeTokens */
  BridgeTokens(request: QueryBridgeTokensRequest): Promise<QueryBridgeTokensResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.gravity.v1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.CurrentValset = this.CurrentValset.bind(this);
    this.ValsetRequest = this.ValsetRequest.bind(this);
    this.ValsetConfirm = this.ValsetConfirm.bind(this);
    this.ValsetConfirmsByNonce = this.ValsetConfirmsByNonce.bind(this);
    this.LastValsetRequests = this.LastValsetRequests.bind(this);
    this.LastPendingValsetRequestByAddr = this.LastPendingValsetRequestByAddr.bind(this);
    this.LastPendingBatchRequestByAddr = this.LastPendingBatchRequestByAddr.bind(this);
    this.LastEventNonceByAddr = this.LastEventNonceByAddr.bind(this);
    this.LastEventBlockHeightByAddr = this.LastEventBlockHeightByAddr.bind(this);
    this.BatchFees = this.BatchFees.bind(this);
    this.LastObservedBlockHeight = this.LastObservedBlockHeight.bind(this);
    this.OutgoingTxBatches = this.OutgoingTxBatches.bind(this);
    this.BatchRequestByNonce = this.BatchRequestByNonce.bind(this);
    this.BatchConfirm = this.BatchConfirm.bind(this);
    this.BatchConfirms = this.BatchConfirms.bind(this);
    this.ERC20ToDenom = this.ERC20ToDenom.bind(this);
    this.DenomToERC20 = this.DenomToERC20.bind(this);
    this.GetDelegateKeyByValidator = this.GetDelegateKeyByValidator.bind(this);
    this.GetDelegateKeyByEth = this.GetDelegateKeyByEth.bind(this);
    this.GetDelegateKeyByOrchestrator = this.GetDelegateKeyByOrchestrator.bind(this);
    this.GetPendingSendToEth = this.GetPendingSendToEth.bind(this);
    this.ProjectedBatchTimeoutHeight = this.ProjectedBatchTimeoutHeight.bind(this);
    this.BridgeTokens = this.BridgeTokens.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  CurrentValset(request: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse> {
    const data = QueryCurrentValsetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentValset", data);
    return promise.then((data) => QueryCurrentValsetResponse.decode(_m0.Reader.create(data)));
  }

  ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> {
    const data = QueryValsetRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValsetRequest", data);
    return promise.then((data) => QueryValsetRequestResponse.decode(_m0.Reader.create(data)));
  }

  ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> {
    const data = QueryValsetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValsetConfirm", data);
    return promise.then((data) => QueryValsetConfirmResponse.decode(_m0.Reader.create(data)));
  }

  ValsetConfirmsByNonce(
    request: QueryValsetConfirmsByNonceRequest,
  ): Promise<QueryValsetConfirmsByNonceResponse> {
    const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValsetConfirmsByNonce", data);
    return promise.then((data) => QueryValsetConfirmsByNonceResponse.decode(_m0.Reader.create(data)));
  }

  LastValsetRequests(request: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse> {
    const data = QueryLastValsetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastValsetRequests", data);
    return promise.then((data) => QueryLastValsetRequestsResponse.decode(_m0.Reader.create(data)));
  }

  LastPendingValsetRequestByAddr(
    request: QueryLastPendingValsetRequestByAddrRequest,
  ): Promise<QueryLastPendingValsetRequestByAddrResponse> {
    const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LastPendingValsetRequestByAddr", data);
    return promise.then((data) =>
      QueryLastPendingValsetRequestByAddrResponse.decode(_m0.Reader.create(data)),
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

  ERC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> {
    const data = QueryERC20ToDenomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ERC20ToDenom", data);
    return promise.then((data) => QueryERC20ToDenomResponse.decode(_m0.Reader.create(data)));
  }

  DenomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> {
    const data = QueryDenomToERC20Request.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomToERC20", data);
    return promise.then((data) => QueryDenomToERC20Response.decode(_m0.Reader.create(data)));
  }

  GetDelegateKeyByValidator(
    request: QueryDelegateKeyByValidatorRequest,
  ): Promise<QueryDelegateKeyByValidatorResponse> {
    const data = QueryDelegateKeyByValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDelegateKeyByValidator", data);
    return promise.then((data) => QueryDelegateKeyByValidatorResponse.decode(_m0.Reader.create(data)));
  }

  GetDelegateKeyByEth(request: QueryDelegateKeyByEthRequest): Promise<QueryDelegateKeyByEthResponse> {
    const data = QueryDelegateKeyByEthRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDelegateKeyByEth", data);
    return promise.then((data) => QueryDelegateKeyByEthResponse.decode(_m0.Reader.create(data)));
  }

  GetDelegateKeyByOrchestrator(
    request: QueryDelegateKeyByOrchestratorRequest,
  ): Promise<QueryDelegateKeyByOrchestratorResponse> {
    const data = QueryDelegateKeyByOrchestratorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDelegateKeyByOrchestrator", data);
    return promise.then((data) => QueryDelegateKeyByOrchestratorResponse.decode(_m0.Reader.create(data)));
  }

  GetPendingSendToEth(request: QueryPendingSendToEthRequest): Promise<QueryPendingSendToEthResponse> {
    const data = QueryPendingSendToEthRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPendingSendToEth", data);
    return promise.then((data) => QueryPendingSendToEthResponse.decode(_m0.Reader.create(data)));
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
