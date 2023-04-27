/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { BridgeValidator } from "./types";

export const protobufPackage = "fx.gravity.v1";

/** Deprecated: after upgrade v3 */
export interface MsgValsetConfirm {
  nonce: Long;
  orchestrator: string;
  ethAddress: string;
  signature: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgValsetConfirmResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgSendToEth {
  sender: string;
  ethDest: string;
  amount?: Coin;
  bridgeFee?: Coin;
}

/** Deprecated: after upgrade v3 */
export interface MsgSendToEthResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgRequestBatch {
  sender: string;
  denom: string;
  minimumFee: string;
  feeReceive: string;
  baseFee: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgRequestBatchResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgConfirmBatch {
  nonce: Long;
  tokenContract: string;
  ethSigner: string;
  orchestrator: string;
  signature: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgConfirmBatchResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgDepositClaim {
  eventNonce: Long;
  blockHeight: Long;
  tokenContract: string;
  amount: string;
  ethSender: string;
  fxReceiver: string;
  targetIbc: string;
  orchestrator: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgDepositClaimResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgWithdrawClaim {
  eventNonce: Long;
  blockHeight: Long;
  batchNonce: Long;
  tokenContract: string;
  orchestrator: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgWithdrawClaimResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgCancelSendToEth {
  transactionId: Long;
  sender: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgCancelSendToEthResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgValsetUpdatedClaim {
  eventNonce: Long;
  blockHeight: Long;
  valsetNonce: Long;
  members: BridgeValidator[];
  orchestrator: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgValsetUpdatedClaimResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgSetOrchestratorAddress {
  validator: string;
  orchestrator: string;
  ethAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgSetOrchestratorAddressResponse {}

/** Deprecated: after upgrade v3 */
export interface MsgFxOriginatedTokenClaim {
  eventNonce: Long;
  blockHeight: Long;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: Long;
  orchestrator: string;
}

/** Deprecated: after upgrade v3 */
export interface MsgFxOriginatedTokenClaimResponse {}

function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return { nonce: Long.UZERO, orchestrator: "", ethAddress: "", signature: "" };
}

export const MsgValsetConfirm = {
  encode(message: MsgValsetConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirm();
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

          message.orchestrator = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ethAddress = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.signature = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgValsetConfirm {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: MsgValsetConfirm): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgValsetConfirm>, I>>(base?: I): MsgValsetConfirm {
    return MsgValsetConfirm.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetConfirm>, I>>(object: I): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}

export const MsgValsetConfirmResponse = {
  encode(_: MsgValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirmResponse();
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

  fromJSON(_: any): MsgValsetConfirmResponse {
    return {};
  },

  toJSON(_: MsgValsetConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgValsetConfirmResponse>, I>>(base?: I): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetConfirmResponse>, I>>(_: I): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
};

function createBaseMsgSendToEth(): MsgSendToEth {
  return { sender: "", ethDest: "", amount: undefined, bridgeFee: undefined };
}

export const MsgSendToEth = {
  encode(message: MsgSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(18).string(message.ethDest);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ethDest = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.amount = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.bridgeFee = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSendToEth {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ethDest: isSet(object.ethDest) ? String(object.ethDest) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      bridgeFee: isSet(object.bridgeFee) ? Coin.fromJSON(object.bridgeFee) : undefined,
    };
  },

  toJSON(message: MsgSendToEth): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethDest !== undefined && (obj.ethDest = message.ethDest);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.bridgeFee !== undefined &&
      (obj.bridgeFee = message.bridgeFee ? Coin.toJSON(message.bridgeFee) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendToEth>, I>>(base?: I): MsgSendToEth {
    return MsgSendToEth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToEth>, I>>(object: I): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bridgeFee =
      object.bridgeFee !== undefined && object.bridgeFee !== null
        ? Coin.fromPartial(object.bridgeFee)
        : undefined;
    return message;
  },
};

function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}

export const MsgSendToEthResponse = {
  encode(_: MsgSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthResponse();
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

  fromJSON(_: any): MsgSendToEthResponse {
    return {};
  },

  toJSON(_: MsgSendToEthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendToEthResponse>, I>>(base?: I): MsgSendToEthResponse {
    return MsgSendToEthResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToEthResponse>, I>>(_: I): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
};

function createBaseMsgRequestBatch(): MsgRequestBatch {
  return { sender: "", denom: "", minimumFee: "", feeReceive: "", baseFee: "" };
}

export const MsgRequestBatch = {
  encode(message: MsgRequestBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.minimumFee !== "") {
      writer.uint32(26).string(message.minimumFee);
    }
    if (message.feeReceive !== "") {
      writer.uint32(34).string(message.feeReceive);
    }
    if (message.baseFee !== "") {
      writer.uint32(42).string(message.baseFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.minimumFee = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.feeReceive = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.baseFee = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestBatch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      minimumFee: isSet(object.minimumFee) ? String(object.minimumFee) : "",
      feeReceive: isSet(object.feeReceive) ? String(object.feeReceive) : "",
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
    };
  },

  toJSON(message: MsgRequestBatch): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.minimumFee !== undefined && (obj.minimumFee = message.minimumFee);
    message.feeReceive !== undefined && (obj.feeReceive = message.feeReceive);
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestBatch>, I>>(base?: I): MsgRequestBatch {
    return MsgRequestBatch.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatch>, I>>(object: I): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.minimumFee = object.minimumFee ?? "";
    message.feeReceive = object.feeReceive ?? "";
    message.baseFee = object.baseFee ?? "";
    return message;
  },
};

function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}

export const MsgRequestBatchResponse = {
  encode(_: MsgRequestBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();
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

  fromJSON(_: any): MsgRequestBatchResponse {
    return {};
  },

  toJSON(_: MsgRequestBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestBatchResponse>, I>>(base?: I): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatchResponse>, I>>(_: I): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
};

function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return { nonce: Long.UZERO, tokenContract: "", ethSigner: "", orchestrator: "", signature: "" };
}

export const MsgConfirmBatch = {
  encode(message: MsgConfirmBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();
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

          message.ethSigner = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.orchestrator = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.signature = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmBatch {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: MsgConfirmBatch): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConfirmBatch>, I>>(base?: I): MsgConfirmBatch {
    return MsgConfirmBatch.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatch>, I>>(object: I): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}

export const MsgConfirmBatchResponse = {
  encode(_: MsgConfirmBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatchResponse();
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

  fromJSON(_: any): MsgConfirmBatchResponse {
    return {};
  },

  toJSON(_: MsgConfirmBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgConfirmBatchResponse>, I>>(base?: I): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatchResponse>, I>>(_: I): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
};

function createBaseMsgDepositClaim(): MsgDepositClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    tokenContract: "",
    amount: "",
    ethSender: "",
    fxReceiver: "",
    targetIbc: "",
    orchestrator: "",
  };
}

export const MsgDepositClaim = {
  encode(message: MsgDepositClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.ethSender !== "") {
      writer.uint32(42).string(message.ethSender);
    }
    if (message.fxReceiver !== "") {
      writer.uint32(50).string(message.fxReceiver);
    }
    if (message.targetIbc !== "") {
      writer.uint32(58).string(message.targetIbc);
    }
    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositClaim {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventNonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokenContract = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.ethSender = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.fxReceiver = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.targetIbc = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.orchestrator = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDepositClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      ethSender: isSet(object.ethSender) ? String(object.ethSender) : "",
      fxReceiver: isSet(object.fxReceiver) ? String(object.fxReceiver) : "",
      targetIbc: isSet(object.targetIbc) ? String(object.targetIbc) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
    };
  },

  toJSON(message: MsgDepositClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.amount !== undefined && (obj.amount = message.amount);
    message.ethSender !== undefined && (obj.ethSender = message.ethSender);
    message.fxReceiver !== undefined && (obj.fxReceiver = message.fxReceiver);
    message.targetIbc !== undefined && (obj.targetIbc = message.targetIbc);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositClaim>, I>>(base?: I): MsgDepositClaim {
    return MsgDepositClaim.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositClaim>, I>>(object: I): MsgDepositClaim {
    const message = createBaseMsgDepositClaim();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethSender = object.ethSender ?? "";
    message.fxReceiver = object.fxReceiver ?? "";
    message.targetIbc = object.targetIbc ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};

function createBaseMsgDepositClaimResponse(): MsgDepositClaimResponse {
  return {};
}

export const MsgDepositClaimResponse = {
  encode(_: MsgDepositClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositClaimResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositClaimResponse();
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

  fromJSON(_: any): MsgDepositClaimResponse {
    return {};
  },

  toJSON(_: MsgDepositClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositClaimResponse>, I>>(base?: I): MsgDepositClaimResponse {
    return MsgDepositClaimResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositClaimResponse>, I>>(_: I): MsgDepositClaimResponse {
    const message = createBaseMsgDepositClaimResponse();
    return message;
  },
};

function createBaseMsgWithdrawClaim(): MsgWithdrawClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    batchNonce: Long.UZERO,
    tokenContract: "",
    orchestrator: "",
  };
}

export const MsgWithdrawClaim = {
  encode(message: MsgWithdrawClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (!message.batchNonce.isZero()) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawClaim {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventNonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.batchNonce = reader.uint64() as Long;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.tokenContract = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.orchestrator = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      batchNonce: isSet(object.batchNonce) ? Long.fromValue(object.batchNonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
    };
  },

  toJSON(message: MsgWithdrawClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawClaim>, I>>(base?: I): MsgWithdrawClaim {
    return MsgWithdrawClaim.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawClaim>, I>>(object: I): MsgWithdrawClaim {
    const message = createBaseMsgWithdrawClaim();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.batchNonce =
      object.batchNonce !== undefined && object.batchNonce !== null
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};

function createBaseMsgWithdrawClaimResponse(): MsgWithdrawClaimResponse {
  return {};
}

export const MsgWithdrawClaimResponse = {
  encode(_: MsgWithdrawClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawClaimResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawClaimResponse();
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

  fromJSON(_: any): MsgWithdrawClaimResponse {
    return {};
  },

  toJSON(_: MsgWithdrawClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawClaimResponse>, I>>(base?: I): MsgWithdrawClaimResponse {
    return MsgWithdrawClaimResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawClaimResponse>, I>>(_: I): MsgWithdrawClaimResponse {
    const message = createBaseMsgWithdrawClaimResponse();
    return message;
  },
};

function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return { transactionId: Long.UZERO, sender: "" };
}

export const MsgCancelSendToEth = {
  encode(message: MsgCancelSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transactionId.isZero()) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.transactionId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelSendToEth {
    return {
      transactionId: isSet(object.transactionId) ? Long.fromValue(object.transactionId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgCancelSendToEth): unknown {
    const obj: any = {};
    message.transactionId !== undefined &&
      (obj.transactionId = (message.transactionId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelSendToEth>, I>>(base?: I): MsgCancelSendToEth {
    return MsgCancelSendToEth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEth>, I>>(object: I): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId =
      object.transactionId !== undefined && object.transactionId !== null
        ? Long.fromValue(object.transactionId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}

export const MsgCancelSendToEthResponse = {
  encode(_: MsgCancelSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthResponse();
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

  fromJSON(_: any): MsgCancelSendToEthResponse {
    return {};
  },

  toJSON(_: MsgCancelSendToEthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelSendToEthResponse>, I>>(base?: I): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEthResponse>, I>>(_: I): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
};

function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    valsetNonce: Long.UZERO,
    members: [],
    orchestrator: "",
  };
}

export const MsgValsetUpdatedClaim = {
  encode(message: MsgValsetUpdatedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (!message.valsetNonce.isZero()) {
      writer.uint32(24).uint64(message.valsetNonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.orchestrator !== "") {
      writer.uint32(50).string(message.orchestrator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventNonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.valsetNonce = reader.uint64() as Long;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.orchestrator = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgValsetUpdatedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      valsetNonce: isSet(object.valsetNonce) ? Long.fromValue(object.valsetNonce) : Long.UZERO,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => BridgeValidator.fromJSON(e))
        : [],
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
    };
  },

  toJSON(message: MsgValsetUpdatedClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.valsetNonce !== undefined && (obj.valsetNonce = (message.valsetNonce || Long.UZERO).toString());
    if (message.members) {
      obj.members = message.members.map((e) => (e ? BridgeValidator.toJSON(e) : undefined));
    } else {
      obj.members = [];
    }
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgValsetUpdatedClaim>, I>>(base?: I): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetUpdatedClaim>, I>>(object: I): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.valsetNonce =
      object.valsetNonce !== undefined && object.valsetNonce !== null
        ? Long.fromValue(object.valsetNonce)
        : Long.UZERO;
    message.members = object.members?.map((e) => BridgeValidator.fromPartial(e)) || [];
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};

function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}

export const MsgValsetUpdatedClaimResponse = {
  encode(_: MsgValsetUpdatedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaimResponse();
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

  fromJSON(_: any): MsgValsetUpdatedClaimResponse {
    return {};
  },

  toJSON(_: MsgValsetUpdatedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgValsetUpdatedClaimResponse>, I>>(
    base?: I,
  ): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetUpdatedClaimResponse>, I>>(
    _: I,
  ): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
};

function createBaseMsgSetOrchestratorAddress(): MsgSetOrchestratorAddress {
  return { validator: "", orchestrator: "", ethAddress: "" };
}

export const MsgSetOrchestratorAddress = {
  encode(message: MsgSetOrchestratorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.orchestrator = reader.string();
          continue;
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): MsgSetOrchestratorAddress {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
    };
  },

  toJSON(message: MsgSetOrchestratorAddress): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetOrchestratorAddress>, I>>(base?: I): MsgSetOrchestratorAddress {
    return MsgSetOrchestratorAddress.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOrchestratorAddress>, I>>(
    object: I,
  ): MsgSetOrchestratorAddress {
    const message = createBaseMsgSetOrchestratorAddress();
    message.validator = object.validator ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
};

function createBaseMsgSetOrchestratorAddressResponse(): MsgSetOrchestratorAddressResponse {
  return {};
}

export const MsgSetOrchestratorAddressResponse = {
  encode(_: MsgSetOrchestratorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddressResponse();
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

  fromJSON(_: any): MsgSetOrchestratorAddressResponse {
    return {};
  },

  toJSON(_: MsgSetOrchestratorAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetOrchestratorAddressResponse>, I>>(
    base?: I,
  ): MsgSetOrchestratorAddressResponse {
    return MsgSetOrchestratorAddressResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOrchestratorAddressResponse>, I>>(
    _: I,
  ): MsgSetOrchestratorAddressResponse {
    const message = createBaseMsgSetOrchestratorAddressResponse();
    return message;
  },
};

function createBaseMsgFxOriginatedTokenClaim(): MsgFxOriginatedTokenClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: Long.UZERO,
    orchestrator: "",
  };
}

export const MsgFxOriginatedTokenClaim = {
  encode(message: MsgFxOriginatedTokenClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(48).uint64(message.decimals);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFxOriginatedTokenClaim {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFxOriginatedTokenClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.eventNonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.tokenContract = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.decimals = reader.uint64() as Long;
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.orchestrator = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgFxOriginatedTokenClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.UZERO,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
    };
  },

  toJSON(message: MsgFxOriginatedTokenClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.UZERO).toString());
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFxOriginatedTokenClaim>, I>>(base?: I): MsgFxOriginatedTokenClaim {
    return MsgFxOriginatedTokenClaim.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgFxOriginatedTokenClaim>, I>>(
    object: I,
  ): MsgFxOriginatedTokenClaim {
    const message = createBaseMsgFxOriginatedTokenClaim();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};

function createBaseMsgFxOriginatedTokenClaimResponse(): MsgFxOriginatedTokenClaimResponse {
  return {};
}

export const MsgFxOriginatedTokenClaimResponse = {
  encode(_: MsgFxOriginatedTokenClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFxOriginatedTokenClaimResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFxOriginatedTokenClaimResponse();
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

  fromJSON(_: any): MsgFxOriginatedTokenClaimResponse {
    return {};
  },

  toJSON(_: MsgFxOriginatedTokenClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFxOriginatedTokenClaimResponse>, I>>(
    base?: I,
  ): MsgFxOriginatedTokenClaimResponse {
    return MsgFxOriginatedTokenClaimResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgFxOriginatedTokenClaimResponse>, I>>(
    _: I,
  ): MsgFxOriginatedTokenClaimResponse {
    const message = createBaseMsgFxOriginatedTokenClaimResponse();
    return message;
  },
};

/** Deprecated: after upgrade v3 */
export interface Msg {
  /** Deprecated: Please use crosschain Msg.OracleSetConfirm */
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
  /** Deprecated: Please use crosschain Msg.SendToExternal */
  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
  /** Deprecated: Please use crosschain Msg.RequestBatch */
  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  /** Deprecated: Please use crosschain Msg.ConfirmBatch */
  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
  /** Deprecated: Please use crosschain Msg.SendToFxClaim */
  DepositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse>;
  /** Deprecated: Please use crosschain Msg.SendToExternalClaim */
  WithdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse>;
  /** Deprecated: Please use crosschain Msg.CancelSendToExternal */
  CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
  /** Deprecated: Please use crosschain Msg.OracleSetUpdateClaim */
  ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.gravity.v1.Msg";
    this.rpc = rpc;
    this.ValsetConfirm = this.ValsetConfirm.bind(this);
    this.SendToEth = this.SendToEth.bind(this);
    this.RequestBatch = this.RequestBatch.bind(this);
    this.ConfirmBatch = this.ConfirmBatch.bind(this);
    this.DepositClaim = this.DepositClaim.bind(this);
    this.WithdrawClaim = this.WithdrawClaim.bind(this);
    this.CancelSendToEth = this.CancelSendToEth.bind(this);
    this.ValsetUpdateClaim = this.ValsetUpdateClaim.bind(this);
  }
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse> {
    const data = MsgValsetConfirm.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValsetConfirm", data);
    return promise.then((data) => MsgValsetConfirmResponse.decode(_m0.Reader.create(data)));
  }

  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse> {
    const data = MsgSendToEth.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendToEth", data);
    return promise.then((data) => MsgSendToEthResponse.decode(_m0.Reader.create(data)));
  }

  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse> {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestBatch", data);
    return promise.then((data) => MsgRequestBatchResponse.decode(_m0.Reader.create(data)));
  }

  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConfirmBatch", data);
    return promise.then((data) => MsgConfirmBatchResponse.decode(_m0.Reader.create(data)));
  }

  DepositClaim(request: MsgDepositClaim): Promise<MsgDepositClaimResponse> {
    const data = MsgDepositClaim.encode(request).finish();
    const promise = this.rpc.request(this.service, "DepositClaim", data);
    return promise.then((data) => MsgDepositClaimResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawClaim(request: MsgWithdrawClaim): Promise<MsgWithdrawClaimResponse> {
    const data = MsgWithdrawClaim.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawClaim", data);
    return promise.then((data) => MsgWithdrawClaimResponse.decode(_m0.Reader.create(data)));
  }

  CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse> {
    const data = MsgCancelSendToEth.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelSendToEth", data);
    return promise.then((data) => MsgCancelSendToEthResponse.decode(_m0.Reader.create(data)));
  }

  ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse> {
    const data = MsgValsetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValsetUpdateClaim", data);
    return promise.then((data) => MsgValsetUpdatedClaimResponse.decode(_m0.Reader.create(data)));
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
