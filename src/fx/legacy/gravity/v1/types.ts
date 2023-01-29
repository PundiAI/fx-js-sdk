/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "cosmjs-types/google/protobuf/any";

export const protobufPackage = "fx.gravity.v1";

/** Deprecated: after upgrade v3 */
export enum ClaimType {
  CLAIM_TYPE_UNSPECIFIED = 0,
  CLAIM_TYPE_DEPOSIT = 1,
  CLAIM_TYPE_WITHDRAW = 2,
  CLAIM_TYPE_ORIGINATED_TOKEN = 3,
  CLAIM_TYPE_VALSET_UPDATED = 4,
  UNRECOGNIZED = -1,
}

export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_UNSPECIFIED":
      return ClaimType.CLAIM_TYPE_UNSPECIFIED;
    case 1:
    case "CLAIM_TYPE_DEPOSIT":
      return ClaimType.CLAIM_TYPE_DEPOSIT;
    case 2:
    case "CLAIM_TYPE_WITHDRAW":
      return ClaimType.CLAIM_TYPE_WITHDRAW;
    case 3:
    case "CLAIM_TYPE_ORIGINATED_TOKEN":
      return ClaimType.CLAIM_TYPE_ORIGINATED_TOKEN;
    case 4:
    case "CLAIM_TYPE_VALSET_UPDATED":
      return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}

export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_UNSPECIFIED:
      return "CLAIM_TYPE_UNSPECIFIED";
    case ClaimType.CLAIM_TYPE_DEPOSIT:
      return "CLAIM_TYPE_DEPOSIT";
    case ClaimType.CLAIM_TYPE_WITHDRAW:
      return "CLAIM_TYPE_WITHDRAW";
    case ClaimType.CLAIM_TYPE_ORIGINATED_TOKEN:
      return "CLAIM_TYPE_ORIGINATED_TOKEN";
    case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
      return "CLAIM_TYPE_VALSET_UPDATED";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Deprecated: after upgrade v3 */
export interface BridgeValidator {
  power: Long;
  ethAddress: string;
}

/** Deprecated: after upgrade v3 */
export interface Valset {
  nonce: Long;
  members: BridgeValidator[];
  height: Long;
}

/** Deprecated: after upgrade v3 */
export interface LastObservedEthereumBlockHeight {
  fxBlockHeight: Long;
  ethBlockHeight: Long;
}

/** Deprecated: after upgrade v3 */
export interface ERC20ToDenom {
  erc20: string;
  denom: string;
}

/** Deprecated: after upgrade v3 */
export interface ERC20Token {
  contract: string;
  amount: string;
}

/** Deprecated: after upgrade v3 */
export interface Attestation {
  observed: boolean;
  votes: string[];
  height: Long;
  claim?: Any;
}

/** Deprecated: after upgrade v3 */
export interface OutgoingTxBatch {
  batchNonce: Long;
  batchTimeout: Long;
  transactions: OutgoingTransferTx[];
  tokenContract: string;
  block: Long;
  feeReceive: string;
}

/** Deprecated: after upgrade v3 */
export interface OutgoingTransferTx {
  id: Long;
  sender: string;
  destAddress: string;
  erc20Token?: ERC20Token;
  erc20Fee?: ERC20Token;
}

/** Deprecated: after upgrade v3 */
export interface BatchFees {
  tokenContract: string;
  totalFees: string;
  totalTxs: Long;
  totalAmount: string;
}

/** Deprecated: after upgrade v3 */
export interface MinBatchFee {
  tokenContract: string;
  baseFee: string;
}

function createBaseBridgeValidator(): BridgeValidator {
  return { power: Long.UZERO, ethAddress: "" };
}

export const BridgeValidator = {
  encode(message: BridgeValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.power.isZero()) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.uint64() as Long;
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BridgeValidator {
    return {
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.UZERO,
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
    };
  },

  toJSON(message: BridgeValidator): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = (message.power || Long.UZERO).toString());
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BridgeValidator>, I>>(object: I): BridgeValidator {
    const message = createBaseBridgeValidator();
    message.power =
      object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.UZERO;
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
};

function createBaseValset(): Valset {
  return { nonce: Long.UZERO, members: [], height: Long.UZERO };
}

export const Valset = {
  encode(message: Valset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Valset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Valset {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => BridgeValidator.fromJSON(e))
        : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
    };
  },

  toJSON(message: Valset): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    if (message.members) {
      obj.members = message.members.map((e) => (e ? BridgeValidator.toJSON(e) : undefined));
    } else {
      obj.members = [];
    }
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Valset>, I>>(object: I): Valset {
    const message = createBaseValset();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.members = object.members?.map((e) => BridgeValidator.fromPartial(e)) || [];
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },
};

function createBaseLastObservedEthereumBlockHeight(): LastObservedEthereumBlockHeight {
  return { fxBlockHeight: Long.UZERO, ethBlockHeight: Long.UZERO };
}

export const LastObservedEthereumBlockHeight = {
  encode(message: LastObservedEthereumBlockHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.fxBlockHeight.isZero()) {
      writer.uint32(8).uint64(message.fxBlockHeight);
    }
    if (!message.ethBlockHeight.isZero()) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastObservedEthereumBlockHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastObservedEthereumBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fxBlockHeight = reader.uint64() as Long;
          break;
        case 2:
          message.ethBlockHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastObservedEthereumBlockHeight {
    return {
      fxBlockHeight: isSet(object.fxBlockHeight) ? Long.fromValue(object.fxBlockHeight) : Long.UZERO,
      ethBlockHeight: isSet(object.ethBlockHeight) ? Long.fromValue(object.ethBlockHeight) : Long.UZERO,
    };
  },

  toJSON(message: LastObservedEthereumBlockHeight): unknown {
    const obj: any = {};
    message.fxBlockHeight !== undefined &&
      (obj.fxBlockHeight = (message.fxBlockHeight || Long.UZERO).toString());
    message.ethBlockHeight !== undefined &&
      (obj.ethBlockHeight = (message.ethBlockHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastObservedEthereumBlockHeight>, I>>(
    object: I,
  ): LastObservedEthereumBlockHeight {
    const message = createBaseLastObservedEthereumBlockHeight();
    message.fxBlockHeight =
      object.fxBlockHeight !== undefined && object.fxBlockHeight !== null
        ? Long.fromValue(object.fxBlockHeight)
        : Long.UZERO;
    message.ethBlockHeight =
      object.ethBlockHeight !== undefined && object.ethBlockHeight !== null
        ? Long.fromValue(object.ethBlockHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseERC20ToDenom(): ERC20ToDenom {
  return { erc20: "", denom: "" };
}

export const ERC20ToDenom = {
  encode(message: ERC20ToDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20ToDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20ToDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20ToDenom {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: ERC20ToDenom): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20ToDenom>, I>>(object: I): ERC20ToDenom {
    const message = createBaseERC20ToDenom();
    message.erc20 = object.erc20 ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseERC20Token(): ERC20Token {
  return { contract: "", amount: "" };
}

export const ERC20Token = {
  encode(message: ERC20Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Token();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20Token {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: ERC20Token): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20Token>, I>>(object: I): ERC20Token {
    const message = createBaseERC20Token();
    message.contract = object.contract ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseAttestation(): Attestation {
  return { observed: false, votes: [], height: Long.UZERO, claim: undefined };
}

export const Attestation = {
  encode(message: Attestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.observed === true) {
      writer.uint32(8).bool(message.observed);
    }
    for (const v of message.votes) {
      writer.uint32(18).string(v!);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.claim !== undefined) {
      Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.observed = reader.bool();
          break;
        case 2:
          message.votes.push(reader.string());
          break;
        case 3:
          message.height = reader.uint64() as Long;
          break;
        case 4:
          message.claim = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attestation {
    return {
      observed: isSet(object.observed) ? Boolean(object.observed) : false,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => String(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      claim: isSet(object.claim) ? Any.fromJSON(object.claim) : undefined,
    };
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    message.observed !== undefined && (obj.observed = message.observed);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    message.claim !== undefined && (obj.claim = message.claim ? Any.toJSON(message.claim) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attestation>, I>>(object: I): Attestation {
    const message = createBaseAttestation();
    message.observed = object.observed ?? false;
    message.votes = object.votes?.map((e) => e) || [];
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.claim =
      object.claim !== undefined && object.claim !== null ? Any.fromPartial(object.claim) : undefined;
    return message;
  },
};

function createBaseOutgoingTxBatch(): OutgoingTxBatch {
  return {
    batchNonce: Long.UZERO,
    batchTimeout: Long.UZERO,
    transactions: [],
    tokenContract: "",
    block: Long.UZERO,
    feeReceive: "",
  };
}

export const OutgoingTxBatch = {
  encode(message: OutgoingTxBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchNonce.isZero()) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    if (!message.batchTimeout.isZero()) {
      writer.uint32(16).uint64(message.batchTimeout);
    }
    for (const v of message.transactions) {
      OutgoingTransferTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (!message.block.isZero()) {
      writer.uint32(40).uint64(message.block);
    }
    if (message.feeReceive !== "") {
      writer.uint32(50).string(message.feeReceive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTxBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTxBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64() as Long;
          break;
        case 2:
          message.batchTimeout = reader.uint64() as Long;
          break;
        case 3:
          message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.block = reader.uint64() as Long;
          break;
        case 6:
          message.feeReceive = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutgoingTxBatch {
    return {
      batchNonce: isSet(object.batchNonce) ? Long.fromValue(object.batchNonce) : Long.UZERO,
      batchTimeout: isSet(object.batchTimeout) ? Long.fromValue(object.batchTimeout) : Long.UZERO,
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
      feeReceive: isSet(object.feeReceive) ? String(object.feeReceive) : "",
    };
  },

  toJSON(message: OutgoingTxBatch): unknown {
    const obj: any = {};
    message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    message.batchTimeout !== undefined &&
      (obj.batchTimeout = (message.batchTimeout || Long.UZERO).toString());
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => (e ? OutgoingTransferTx.toJSON(e) : undefined));
    } else {
      obj.transactions = [];
    }
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    message.feeReceive !== undefined && (obj.feeReceive = message.feeReceive);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutgoingTxBatch>, I>>(object: I): OutgoingTxBatch {
    const message = createBaseOutgoingTxBatch();
    message.batchNonce =
      object.batchNonce !== undefined && object.batchNonce !== null
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO;
    message.batchTimeout =
      object.batchTimeout !== undefined && object.batchTimeout !== null
        ? Long.fromValue(object.batchTimeout)
        : Long.UZERO;
    message.transactions = object.transactions?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    message.tokenContract = object.tokenContract ?? "";
    message.block =
      object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.feeReceive = object.feeReceive ?? "";
    return message;
  },
};

function createBaseOutgoingTransferTx(): OutgoingTransferTx {
  return { id: Long.UZERO, sender: "", destAddress: "", erc20Token: undefined, erc20Fee: undefined };
}

export const OutgoingTransferTx = {
  encode(message: OutgoingTransferTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    if (message.erc20Token !== undefined) {
      ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
    }
    if (message.erc20Fee !== undefined) {
      ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutgoingTransferTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutgoingTransferTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.destAddress = reader.string();
          break;
        case 4:
          message.erc20Token = ERC20Token.decode(reader, reader.uint32());
          break;
        case 5:
          message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutgoingTransferTx {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
      erc20Token: isSet(object.erc20Token) ? ERC20Token.fromJSON(object.erc20Token) : undefined,
      erc20Fee: isSet(object.erc20Fee) ? ERC20Token.fromJSON(object.erc20Fee) : undefined,
    };
  },

  toJSON(message: OutgoingTransferTx): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.erc20Token !== undefined &&
      (obj.erc20Token = message.erc20Token ? ERC20Token.toJSON(message.erc20Token) : undefined);
    message.erc20Fee !== undefined &&
      (obj.erc20Fee = message.erc20Fee ? ERC20Token.toJSON(message.erc20Fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutgoingTransferTx>, I>>(object: I): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.destAddress = object.destAddress ?? "";
    message.erc20Token =
      object.erc20Token !== undefined && object.erc20Token !== null
        ? ERC20Token.fromPartial(object.erc20Token)
        : undefined;
    message.erc20Fee =
      object.erc20Fee !== undefined && object.erc20Fee !== null
        ? ERC20Token.fromPartial(object.erc20Fee)
        : undefined;
    return message;
  },
};

function createBaseBatchFees(): BatchFees {
  return { tokenContract: "", totalFees: "", totalTxs: Long.UZERO, totalAmount: "" };
}

export const BatchFees = {
  encode(message: BatchFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenContract !== "") {
      writer.uint32(10).string(message.tokenContract);
    }
    if (message.totalFees !== "") {
      writer.uint32(18).string(message.totalFees);
    }
    if (!message.totalTxs.isZero()) {
      writer.uint32(24).uint64(message.totalTxs);
    }
    if (message.totalAmount !== "") {
      writer.uint32(34).string(message.totalAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenContract = reader.string();
          break;
        case 2:
          message.totalFees = reader.string();
          break;
        case 3:
          message.totalTxs = reader.uint64() as Long;
          break;
        case 4:
          message.totalAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchFees {
    return {
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      totalFees: isSet(object.totalFees) ? String(object.totalFees) : "",
      totalTxs: isSet(object.totalTxs) ? Long.fromValue(object.totalTxs) : Long.UZERO,
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
    };
  },

  toJSON(message: BatchFees): unknown {
    const obj: any = {};
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.totalFees !== undefined && (obj.totalFees = message.totalFees);
    message.totalTxs !== undefined && (obj.totalTxs = (message.totalTxs || Long.UZERO).toString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchFees>, I>>(object: I): BatchFees {
    const message = createBaseBatchFees();
    message.tokenContract = object.tokenContract ?? "";
    message.totalFees = object.totalFees ?? "";
    message.totalTxs =
      object.totalTxs !== undefined && object.totalTxs !== null
        ? Long.fromValue(object.totalTxs)
        : Long.UZERO;
    message.totalAmount = object.totalAmount ?? "";
    return message;
  },
};

function createBaseMinBatchFee(): MinBatchFee {
  return { tokenContract: "", baseFee: "" };
}

export const MinBatchFee = {
  encode(message: MinBatchFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenContract !== "") {
      writer.uint32(10).string(message.tokenContract);
    }
    if (message.baseFee !== "") {
      writer.uint32(18).string(message.baseFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinBatchFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinBatchFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenContract = reader.string();
          break;
        case 2:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinBatchFee {
    return {
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
    };
  },

  toJSON(message: MinBatchFee): unknown {
    const obj: any = {};
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MinBatchFee>, I>>(object: I): MinBatchFee {
    const message = createBaseMinBatchFee();
    message.tokenContract = object.tokenContract ?? "";
    message.baseFee = object.baseFee ?? "";
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
