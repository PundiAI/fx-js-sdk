/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "cosmjs-types/google/protobuf/any";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";

export const protobufPackage = "fx.gravity.crosschain.v1";

/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export enum ClaimType {
  CLAIM_TYPE_UNSPECIFIED = 0,
  CLAIM_TYPE_SEND_TO_FX = 1,
  CLAIM_TYPE_SEND_TO_EXTERNAL = 2,
  CLAIM_TYPE_BRIDGE_TOKEN = 3,
  CLAIM_TYPE_ORACLE_SET_UPDATED = 4,
  UNRECOGNIZED = -1,
}

export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_UNSPECIFIED":
      return ClaimType.CLAIM_TYPE_UNSPECIFIED;
    case 1:
    case "CLAIM_TYPE_SEND_TO_FX":
      return ClaimType.CLAIM_TYPE_SEND_TO_FX;
    case 2:
    case "CLAIM_TYPE_SEND_TO_EXTERNAL":
      return ClaimType.CLAIM_TYPE_SEND_TO_EXTERNAL;
    case 3:
    case "CLAIM_TYPE_BRIDGE_TOKEN":
      return ClaimType.CLAIM_TYPE_BRIDGE_TOKEN;
    case 4:
    case "CLAIM_TYPE_ORACLE_SET_UPDATED":
      return ClaimType.CLAIM_TYPE_ORACLE_SET_UPDATED;
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
    case ClaimType.CLAIM_TYPE_SEND_TO_FX:
      return "CLAIM_TYPE_SEND_TO_FX";
    case ClaimType.CLAIM_TYPE_SEND_TO_EXTERNAL:
      return "CLAIM_TYPE_SEND_TO_EXTERNAL";
    case ClaimType.CLAIM_TYPE_BRIDGE_TOKEN:
      return "CLAIM_TYPE_BRIDGE_TOKEN";
    case ClaimType.CLAIM_TYPE_ORACLE_SET_UPDATED:
      return "CLAIM_TYPE_ORACLE_SET_UPDATED";
    default:
      return "UNKNOWN";
  }
}

export interface ProposalOracle {
  oracles: string[];
}

export interface Oracle {
  oracleAddress: string;
  bridgerAddress: string;
  externalAddress: string;
  delegateAmount: string;
  /** start oracle height */
  startHeight: Long;
  online: boolean;
  delegateValidator: string;
  slashTimes: Long;
}

/** BridgeValidator represents a validator's external address and its power */
export interface BridgeValidator {
  power: Long;
  externalAddress: string;
}

/**
 * OracleSet is the external Chain Bridge Multsig Set, each gravity validator
 * also maintains an external key to sign messages, these are used to check
 * signatures on external because of the significant gas savings
 */
export interface OracleSet {
  nonce: Long;
  members: BridgeValidator[];
  height: Long;
}

/**
 * LastObservedBlockHeight stores the last observed
 * external block height along with the our block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedBlockHeight {
  externalBlockHeight: Long;
  blockHeight: Long;
}

/** BridgeToken */
export interface BridgeToken {
  token: string;
  denom: string;
  channelIbc: string;
}

/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all bridger set
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event
 * fired These event nonces must be relayed in order. This is a correctness
 * issue, if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the
 * claim and then passed through the call stack alongside the attestation while
 * it is processed the key in which the attestation is stored is keyed on the
 * exact details of the claim but there is no reason to store those exact
 * details becuause the next message sender will kindly provide you with them.
 */
export interface Attestation {
  observed: boolean;
  votes: string[];
  height: Long;
  claim?: Any;
}

/** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
export interface OutgoingTxBatch {
  batchNonce: Long;
  batchTimeout: Long;
  transactions: OutgoingTransferTx[];
  tokenContract: string;
  block: Long;
  feeReceive: string;
}

/** OutgoingTransferTx represents an individual send from gravity to ETH */
export interface OutgoingTransferTx {
  id: Long;
  sender: string;
  destAddress: string;
  token?: ERC20Token;
  fee?: ERC20Token;
}

/** ERC20Token unique identifier for an Ethereum ERC20 token. */
export interface ERC20Token {
  contract: string;
  amount: string;
}

/** IDSet represents a set of IDs */
export interface IDSet {
  ids: Long[];
}

export interface BatchFees {
  tokenContract: string;
  totalFees: string;
  totalTxs: Long;
  totalAmount: string;
}

export interface MinBatchFee {
  tokenContract: string;
  baseFee: string;
}

/**
 * oracle_set_update_power_change_percent
 *
 * If power change between validators of CurrentOracleSet and latest oracle set
 * request is > 10%
 */
export interface Params {
  gravityId: string;
  averageBlockTime: Long;
  externalBatchTimeout: Long;
  averageExternalBlockTime: Long;
  signedWindow: Long;
  slashFraction: Uint8Array;
  oracleSetUpdatePowerChangePercent: Uint8Array;
  ibcTransferTimeoutHeight: Long;
  /** Deprecated */
  oracles: string[];
  delegateThreshold?: Coin;
  delegateMultiple: Long;
}

/** Deprecated */
export interface InitCrossChainParamsProposal {
  title: string;
  description: string;
  params?: Params;
  chainName: string;
}

export interface UpdateChainOraclesProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  oracles: string[];
  chainName: string;
}

function createBaseProposalOracle(): ProposalOracle {
  return { oracles: [] };
}

export const ProposalOracle = {
  encode(message: ProposalOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalOracle {
    return {
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ProposalOracle): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e);
    } else {
      obj.oracles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalOracle>, I>>(object: I): ProposalOracle {
    const message = createBaseProposalOracle();
    message.oracles = object.oracles?.map((e) => e) || [];
    return message;
  },
};

function createBaseOracle(): Oracle {
  return {
    oracleAddress: "",
    bridgerAddress: "",
    externalAddress: "",
    delegateAmount: "",
    startHeight: Long.ZERO,
    online: false,
    delegateValidator: "",
    slashTimes: Long.ZERO,
  };
}

export const Oracle = {
  encode(message: Oracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleAddress !== "") {
      writer.uint32(10).string(message.oracleAddress);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    if (message.externalAddress !== "") {
      writer.uint32(26).string(message.externalAddress);
    }
    if (message.delegateAmount !== "") {
      writer.uint32(34).string(message.delegateAmount);
    }
    if (!message.startHeight.isZero()) {
      writer.uint32(40).int64(message.startHeight);
    }
    if (message.online === true) {
      writer.uint32(48).bool(message.online);
    }
    if (message.delegateValidator !== "") {
      writer.uint32(58).string(message.delegateValidator);
    }
    if (!message.slashTimes.isZero()) {
      writer.uint32(64).int64(message.slashTimes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Oracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleAddress = reader.string();
          break;
        case 2:
          message.bridgerAddress = reader.string();
          break;
        case 3:
          message.externalAddress = reader.string();
          break;
        case 4:
          message.delegateAmount = reader.string();
          break;
        case 5:
          message.startHeight = reader.int64() as Long;
          break;
        case 6:
          message.online = reader.bool();
          break;
        case 7:
          message.delegateValidator = reader.string();
          break;
        case 8:
          message.slashTimes = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Oracle {
    return {
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
      delegateAmount: isSet(object.delegateAmount) ? String(object.delegateAmount) : "",
      startHeight: isSet(object.startHeight) ? Long.fromString(object.startHeight) : Long.ZERO,
      online: isSet(object.online) ? Boolean(object.online) : false,
      delegateValidator: isSet(object.delegateValidator) ? String(object.delegateValidator) : "",
      slashTimes: isSet(object.slashTimes) ? Long.fromString(object.slashTimes) : Long.ZERO,
    };
  },

  toJSON(message: Oracle): unknown {
    const obj: any = {};
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    message.delegateAmount !== undefined && (obj.delegateAmount = message.delegateAmount);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
    message.online !== undefined && (obj.online = message.online);
    message.delegateValidator !== undefined && (obj.delegateValidator = message.delegateValidator);
    message.slashTimes !== undefined && (obj.slashTimes = (message.slashTimes || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Oracle>, I>>(object: I): Oracle {
    const message = createBaseOracle();
    message.oracleAddress = object.oracleAddress ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.externalAddress = object.externalAddress ?? "";
    message.delegateAmount = object.delegateAmount ?? "";
    message.startHeight =
      object.startHeight !== undefined && object.startHeight !== null
        ? Long.fromValue(object.startHeight)
        : Long.ZERO;
    message.online = object.online ?? false;
    message.delegateValidator = object.delegateValidator ?? "";
    message.slashTimes =
      object.slashTimes !== undefined && object.slashTimes !== null
        ? Long.fromValue(object.slashTimes)
        : Long.ZERO;
    return message;
  },
};

function createBaseBridgeValidator(): BridgeValidator {
  return { power: Long.UZERO, externalAddress: "" };
}

export const BridgeValidator = {
  encode(message: BridgeValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.power.isZero()) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.externalAddress !== "") {
      writer.uint32(18).string(message.externalAddress);
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
          message.externalAddress = reader.string();
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
      power: isSet(object.power) ? Long.fromString(object.power) : Long.UZERO,
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
    };
  },

  toJSON(message: BridgeValidator): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = (message.power || Long.UZERO).toString());
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BridgeValidator>, I>>(object: I): BridgeValidator {
    const message = createBaseBridgeValidator();
    message.power =
      object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.UZERO;
    message.externalAddress = object.externalAddress ?? "";
    return message;
  },
};

function createBaseOracleSet(): OracleSet {
  return { nonce: Long.UZERO, members: [], height: Long.UZERO };
}

export const OracleSet = {
  encode(message: OracleSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSet();
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

  fromJSON(object: any): OracleSet {
    return {
      nonce: isSet(object.nonce) ? Long.fromString(object.nonce) : Long.UZERO,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => BridgeValidator.fromJSON(e))
        : [],
      height: isSet(object.height) ? Long.fromString(object.height) : Long.UZERO,
    };
  },

  toJSON(message: OracleSet): unknown {
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

  fromPartial<I extends Exact<DeepPartial<OracleSet>, I>>(object: I): OracleSet {
    const message = createBaseOracleSet();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.members = object.members?.map((e) => BridgeValidator.fromPartial(e)) || [];
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },
};

function createBaseLastObservedBlockHeight(): LastObservedBlockHeight {
  return { externalBlockHeight: Long.UZERO, blockHeight: Long.UZERO };
}

export const LastObservedBlockHeight = {
  encode(message: LastObservedBlockHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.externalBlockHeight.isZero()) {
      writer.uint32(8).uint64(message.externalBlockHeight);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastObservedBlockHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastObservedBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalBlockHeight = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastObservedBlockHeight {
    return {
      externalBlockHeight: isSet(object.externalBlockHeight)
        ? Long.fromString(object.externalBlockHeight)
        : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO,
    };
  },

  toJSON(message: LastObservedBlockHeight): unknown {
    const obj: any = {};
    message.externalBlockHeight !== undefined &&
      (obj.externalBlockHeight = (message.externalBlockHeight || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastObservedBlockHeight>, I>>(object: I): LastObservedBlockHeight {
    const message = createBaseLastObservedBlockHeight();
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

function createBaseBridgeToken(): BridgeToken {
  return { token: "", denom: "", channelIbc: "" };
}

export const BridgeToken = {
  encode(message: BridgeToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.channelIbc !== "") {
      writer.uint32(26).string(message.channelIbc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.channelIbc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BridgeToken {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelIbc: isSet(object.channelIbc) ? String(object.channelIbc) : "",
    };
  },

  toJSON(message: BridgeToken): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.denom !== undefined && (obj.denom = message.denom);
    message.channelIbc !== undefined && (obj.channelIbc = message.channelIbc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BridgeToken>, I>>(object: I): BridgeToken {
    const message = createBaseBridgeToken();
    message.token = object.token ?? "";
    message.denom = object.denom ?? "";
    message.channelIbc = object.channelIbc ?? "";
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
      height: isSet(object.height) ? Long.fromString(object.height) : Long.UZERO,
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
      batchNonce: isSet(object.batchNonce) ? Long.fromString(object.batchNonce) : Long.UZERO,
      batchTimeout: isSet(object.batchTimeout) ? Long.fromString(object.batchTimeout) : Long.UZERO,
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      block: isSet(object.block) ? Long.fromString(object.block) : Long.UZERO,
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
  return { id: Long.UZERO, sender: "", destAddress: "", token: undefined, fee: undefined };
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
    if (message.token !== undefined) {
      ERC20Token.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      ERC20Token.encode(message.fee, writer.uint32(42).fork()).ldelim();
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
          message.token = ERC20Token.decode(reader, reader.uint32());
          break;
        case 5:
          message.fee = ERC20Token.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
      token: isSet(object.token) ? ERC20Token.fromJSON(object.token) : undefined,
      fee: isSet(object.fee) ? ERC20Token.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: OutgoingTransferTx): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.token !== undefined && (obj.token = message.token ? ERC20Token.toJSON(message.token) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? ERC20Token.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutgoingTransferTx>, I>>(object: I): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.destAddress = object.destAddress ?? "";
    message.token =
      object.token !== undefined && object.token !== null ? ERC20Token.fromPartial(object.token) : undefined;
    message.fee =
      object.fee !== undefined && object.fee !== null ? ERC20Token.fromPartial(object.fee) : undefined;
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

function createBaseIDSet(): IDSet {
  return { ids: [] };
}

export const IDSet = {
  encode(message: IDSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromString(e)) : [],
    };
  },

  toJSON(message: IDSet): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IDSet>, I>>(object: I): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
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
      totalTxs: isSet(object.totalTxs) ? Long.fromString(object.totalTxs) : Long.UZERO,
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

function createBaseParams(): Params {
  return {
    gravityId: "",
    averageBlockTime: Long.UZERO,
    externalBatchTimeout: Long.UZERO,
    averageExternalBlockTime: Long.UZERO,
    signedWindow: Long.UZERO,
    slashFraction: new Uint8Array(),
    oracleSetUpdatePowerChangePercent: new Uint8Array(),
    ibcTransferTimeoutHeight: Long.UZERO,
    oracles: [],
    delegateThreshold: undefined,
    delegateMultiple: Long.ZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gravityId !== "") {
      writer.uint32(10).string(message.gravityId);
    }
    if (!message.averageBlockTime.isZero()) {
      writer.uint32(16).uint64(message.averageBlockTime);
    }
    if (!message.externalBatchTimeout.isZero()) {
      writer.uint32(24).uint64(message.externalBatchTimeout);
    }
    if (!message.averageExternalBlockTime.isZero()) {
      writer.uint32(32).uint64(message.averageExternalBlockTime);
    }
    if (!message.signedWindow.isZero()) {
      writer.uint32(40).uint64(message.signedWindow);
    }
    if (message.slashFraction.length !== 0) {
      writer.uint32(50).bytes(message.slashFraction);
    }
    if (message.oracleSetUpdatePowerChangePercent.length !== 0) {
      writer.uint32(58).bytes(message.oracleSetUpdatePowerChangePercent);
    }
    if (!message.ibcTransferTimeoutHeight.isZero()) {
      writer.uint32(64).uint64(message.ibcTransferTimeoutHeight);
    }
    for (const v of message.oracles) {
      writer.uint32(74).string(v!);
    }
    if (message.delegateThreshold !== undefined) {
      Coin.encode(message.delegateThreshold, writer.uint32(82).fork()).ldelim();
    }
    if (!message.delegateMultiple.isZero()) {
      writer.uint32(88).int64(message.delegateMultiple);
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
          message.averageBlockTime = reader.uint64() as Long;
          break;
        case 3:
          message.externalBatchTimeout = reader.uint64() as Long;
          break;
        case 4:
          message.averageExternalBlockTime = reader.uint64() as Long;
          break;
        case 5:
          message.signedWindow = reader.uint64() as Long;
          break;
        case 6:
          message.slashFraction = reader.bytes();
          break;
        case 7:
          message.oracleSetUpdatePowerChangePercent = reader.bytes();
          break;
        case 8:
          message.ibcTransferTimeoutHeight = reader.uint64() as Long;
          break;
        case 9:
          message.oracles.push(reader.string());
          break;
        case 10:
          message.delegateThreshold = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.delegateMultiple = reader.int64() as Long;
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
      averageBlockTime: isSet(object.averageBlockTime)
        ? Long.fromString(object.averageBlockTime)
        : Long.UZERO,
      externalBatchTimeout: isSet(object.externalBatchTimeout)
        ? Long.fromString(object.externalBatchTimeout)
        : Long.UZERO,
      averageExternalBlockTime: isSet(object.averageExternalBlockTime)
        ? Long.fromString(object.averageExternalBlockTime)
        : Long.UZERO,
      signedWindow: isSet(object.signedWindow) ? Long.fromString(object.signedWindow) : Long.UZERO,
      slashFraction: isSet(object.slashFraction) ? bytesFromBase64(object.slashFraction) : new Uint8Array(),
      oracleSetUpdatePowerChangePercent: isSet(object.oracleSetUpdatePowerChangePercent)
        ? bytesFromBase64(object.oracleSetUpdatePowerChangePercent)
        : new Uint8Array(),
      ibcTransferTimeoutHeight: isSet(object.ibcTransferTimeoutHeight)
        ? Long.fromString(object.ibcTransferTimeoutHeight)
        : Long.UZERO,
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
      delegateThreshold: isSet(object.delegateThreshold)
        ? Coin.fromJSON(object.delegateThreshold)
        : undefined,
      delegateMultiple: isSet(object.delegateMultiple) ? Long.fromString(object.delegateMultiple) : Long.ZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gravityId !== undefined && (obj.gravityId = message.gravityId);
    message.averageBlockTime !== undefined &&
      (obj.averageBlockTime = (message.averageBlockTime || Long.UZERO).toString());
    message.externalBatchTimeout !== undefined &&
      (obj.externalBatchTimeout = (message.externalBatchTimeout || Long.UZERO).toString());
    message.averageExternalBlockTime !== undefined &&
      (obj.averageExternalBlockTime = (message.averageExternalBlockTime || Long.UZERO).toString());
    message.signedWindow !== undefined &&
      (obj.signedWindow = (message.signedWindow || Long.UZERO).toString());
    message.slashFraction !== undefined &&
      (obj.slashFraction = base64FromBytes(
        message.slashFraction !== undefined ? message.slashFraction : new Uint8Array(),
      ));
    message.oracleSetUpdatePowerChangePercent !== undefined &&
      (obj.oracleSetUpdatePowerChangePercent = base64FromBytes(
        message.oracleSetUpdatePowerChangePercent !== undefined
          ? message.oracleSetUpdatePowerChangePercent
          : new Uint8Array(),
      ));
    message.ibcTransferTimeoutHeight !== undefined &&
      (obj.ibcTransferTimeoutHeight = (message.ibcTransferTimeoutHeight || Long.UZERO).toString());
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e);
    } else {
      obj.oracles = [];
    }
    message.delegateThreshold !== undefined &&
      (obj.delegateThreshold = message.delegateThreshold
        ? Coin.toJSON(message.delegateThreshold)
        : undefined);
    message.delegateMultiple !== undefined &&
      (obj.delegateMultiple = (message.delegateMultiple || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.gravityId = object.gravityId ?? "";
    message.averageBlockTime =
      object.averageBlockTime !== undefined && object.averageBlockTime !== null
        ? Long.fromValue(object.averageBlockTime)
        : Long.UZERO;
    message.externalBatchTimeout =
      object.externalBatchTimeout !== undefined && object.externalBatchTimeout !== null
        ? Long.fromValue(object.externalBatchTimeout)
        : Long.UZERO;
    message.averageExternalBlockTime =
      object.averageExternalBlockTime !== undefined && object.averageExternalBlockTime !== null
        ? Long.fromValue(object.averageExternalBlockTime)
        : Long.UZERO;
    message.signedWindow =
      object.signedWindow !== undefined && object.signedWindow !== null
        ? Long.fromValue(object.signedWindow)
        : Long.UZERO;
    message.slashFraction = object.slashFraction ?? new Uint8Array();
    message.oracleSetUpdatePowerChangePercent = object.oracleSetUpdatePowerChangePercent ?? new Uint8Array();
    message.ibcTransferTimeoutHeight =
      object.ibcTransferTimeoutHeight !== undefined && object.ibcTransferTimeoutHeight !== null
        ? Long.fromValue(object.ibcTransferTimeoutHeight)
        : Long.UZERO;
    message.oracles = object.oracles?.map((e) => e) || [];
    message.delegateThreshold =
      object.delegateThreshold !== undefined && object.delegateThreshold !== null
        ? Coin.fromPartial(object.delegateThreshold)
        : undefined;
    message.delegateMultiple =
      object.delegateMultiple !== undefined && object.delegateMultiple !== null
        ? Long.fromValue(object.delegateMultiple)
        : Long.ZERO;
    return message;
  },
};

function createBaseInitCrossChainParamsProposal(): InitCrossChainParamsProposal {
  return { title: "", description: "", params: undefined, chainName: "" };
}

export const InitCrossChainParamsProposal = {
  encode(message: InitCrossChainParamsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    if (message.chainName !== "") {
      writer.uint32(34).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitCrossChainParamsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitCrossChainParamsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitCrossChainParamsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: InitCrossChainParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InitCrossChainParamsProposal>, I>>(
    object: I,
  ): InitCrossChainParamsProposal {
    const message = createBaseInitCrossChainParamsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseUpdateChainOraclesProposal(): UpdateChainOraclesProposal {
  return { title: "", description: "", oracles: [], chainName: "" };
}

export const UpdateChainOraclesProposal = {
  encode(message: UpdateChainOraclesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.oracles) {
      writer.uint32(26).string(v!);
    }
    if (message.chainName !== "") {
      writer.uint32(34).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateChainOraclesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateChainOraclesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.oracles.push(reader.string());
          break;
        case 4:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateChainOraclesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: UpdateChainOraclesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e);
    } else {
      obj.oracles = [];
    }
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateChainOraclesProposal>, I>>(
    object: I,
  ): UpdateChainOraclesProposal {
    const message = createBaseUpdateChainOraclesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.oracles = object.oracles?.map((e) => e) || [];
    message.chainName = object.chainName ?? "";
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
