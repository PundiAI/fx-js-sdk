/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { BridgeValidator } from "../../../fx/crosschain/v1/types";

export const protobufPackage = "fx.gravity.crosschain.v1";

export interface MsgBondedOracle {
  chainName: string;
  oracleAddress: string;
  bridgerAddress: string;
  externalAddress: string;
  validatorAddress: string;
  delegateAmount?: Coin;
}

export interface MsgBondedOracleResponse {}

export interface MsgAddDelegate {
  chainName: string;
  oracleAddress: string;
  amount?: Coin;
}

export interface MsgAddDelegateResponse {}

export interface MsgEditOracle {
  chainName: string;
  oracleAddress: string;
  validatorAddress: string;
}

export interface MsgEditOracleResponse {}

export interface MsgUnbondedOracle {
  chainName: string;
  oracleAddress: string;
}

export interface MsgUnbondedOracleResponse {}

export interface MsgWithdrawReward {
  chainName: string;
  oracleAddress: string;
}

export interface MsgWithdrawRewardResponse {}

/**
 * MsgOracleSetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a OracleSetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * OracleSetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit OracleSetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgOracleSetConfirm {
  nonce: Long;
  bridgerAddress: string;
  externalAddress: string;
  signature: string;
  chainName: string;
}

export interface MsgOracleSetConfirmResponse {}

/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgOracleSetUpdatedClaim {
  eventNonce: Long;
  blockHeight: Long;
  oracleSetNonce: Long;
  members: BridgeValidator[];
  bridgerAddress: string;
  chainName: string;
}

export interface MsgOracleSetUpdatedClaimResponse {}

/**
 * MsgSendToFxClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the bsc blockchain coins are
 * issued to the Payment address in question
 * -------------
 */
export interface MsgSendToFxClaim {
  eventNonce: Long;
  blockHeight: Long;
  tokenContract: string;
  amount: string;
  sender: string;
  receiver: string;
  targetIbc: string;
  bridgerAddress: string;
  chainName: string;
}

export interface MsgSendToFxClaimResponse {}

/**
 * MsgSendToExternal
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Payment messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToExternal {
  sender: string;
  dest: string;
  amount?: Coin;
  bridgeFee?: Coin;
  chainName: string;
}

export interface MsgSendToExternalResponse {
  outgoingTxId: Long;
}

/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToExternal and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToExternal {
  transactionId: Long;
  sender: string;
  chainName: string;
}

export interface MsgCancelSendToExternalResponse {}

/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 * feeReceive:
 */
export interface MsgRequestBatch {
  sender: string;
  denom: string;
  minimumFee: string;
  feeReceive: string;
  chainName: string;
  baseFee: string;
}

export interface MsgRequestBatchResponse {
  batchNonce: Long;
}

/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (determine this without nondeterminism) This message includes the batch
 * as well as an Bsc signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
  nonce: Long;
  tokenContract: string;
  bridgerAddress: string;
  externalAddress: string;
  signature: string;
  chainName: string;
}

export interface MsgConfirmBatchResponse {}

/**
 * SendToExternalClaim claims that a batch of withdrawal
 * operations on the bridge contract was executed.
 */
export interface MsgSendToExternalClaim {
  eventNonce: Long;
  blockHeight: Long;
  batchNonce: Long;
  tokenContract: string;
  bridgerAddress: string;
  chainName: string;
}

export interface MsgSendToExternalClaimResponse {}

export interface MsgBridgeTokenClaim {
  eventNonce: Long;
  blockHeight: Long;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: Long;
  bridgerAddress: string;
  /** Bridge Token channel IBC */
  channelIbc: string;
  chainName: string;
}

export interface MsgBridgeTokenClaimResponse {}

function createBaseMsgBondedOracle(): MsgBondedOracle {
  return {
    chainName: "",
    oracleAddress: "",
    bridgerAddress: "",
    externalAddress: "",
    validatorAddress: "",
    delegateAmount: undefined,
  };
}

export const MsgBondedOracle = {
  encode(message: MsgBondedOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(26).string(message.bridgerAddress);
    }
    if (message.externalAddress !== "") {
      writer.uint32(34).string(message.externalAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (message.delegateAmount !== undefined) {
      Coin.encode(message.delegateAmount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBondedOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondedOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.oracleAddress = reader.string();
          break;
        case 3:
          message.bridgerAddress = reader.string();
          break;
        case 4:
          message.externalAddress = reader.string();
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.delegateAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBondedOracle {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      delegateAmount: isSet(object.delegateAmount) ? Coin.fromJSON(object.delegateAmount) : undefined,
    };
  },

  toJSON(message: MsgBondedOracle): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.delegateAmount !== undefined &&
      (obj.delegateAmount = message.delegateAmount ? Coin.toJSON(message.delegateAmount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBondedOracle>, I>>(object: I): MsgBondedOracle {
    const message = createBaseMsgBondedOracle();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.externalAddress = object.externalAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.delegateAmount =
      object.delegateAmount !== undefined && object.delegateAmount !== null
        ? Coin.fromPartial(object.delegateAmount)
        : undefined;
    return message;
  },
};

function createBaseMsgBondedOracleResponse(): MsgBondedOracleResponse {
  return {};
}

export const MsgBondedOracleResponse = {
  encode(_: MsgBondedOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBondedOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondedOracleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBondedOracleResponse {
    return {};
  },

  toJSON(_: MsgBondedOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBondedOracleResponse>, I>>(_: I): MsgBondedOracleResponse {
    const message = createBaseMsgBondedOracleResponse();
    return message;
  },
};

function createBaseMsgAddDelegate(): MsgAddDelegate {
  return { chainName: "", oracleAddress: "", amount: undefined };
}

export const MsgAddDelegate = {
  encode(message: MsgAddDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.oracleAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddDelegate {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgAddDelegate): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddDelegate>, I>>(object: I): MsgAddDelegate {
    const message = createBaseMsgAddDelegate();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
};

function createBaseMsgAddDelegateResponse(): MsgAddDelegateResponse {
  return {};
}

export const MsgAddDelegateResponse = {
  encode(_: MsgAddDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddDelegateResponse {
    return {};
  },

  toJSON(_: MsgAddDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddDelegateResponse>, I>>(_: I): MsgAddDelegateResponse {
    const message = createBaseMsgAddDelegateResponse();
    return message;
  },
};

function createBaseMsgEditOracle(): MsgEditOracle {
  return { chainName: "", oracleAddress: "", validatorAddress: "" };
}

export const MsgEditOracle = {
  encode(message: MsgEditOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.oracleAddress = reader.string();
          break;
        case 3:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditOracle {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: MsgEditOracle): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditOracle>, I>>(object: I): MsgEditOracle {
    const message = createBaseMsgEditOracle();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMsgEditOracleResponse(): MsgEditOracleResponse {
  return {};
}

export const MsgEditOracleResponse = {
  encode(_: MsgEditOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOracleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditOracleResponse {
    return {};
  },

  toJSON(_: MsgEditOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditOracleResponse>, I>>(_: I): MsgEditOracleResponse {
    const message = createBaseMsgEditOracleResponse();
    return message;
  },
};

function createBaseMsgUnbondedOracle(): MsgUnbondedOracle {
  return { chainName: "", oracleAddress: "" };
}

export const MsgUnbondedOracle = {
  encode(message: MsgUnbondedOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondedOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondedOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.oracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnbondedOracle {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
    };
  },

  toJSON(message: MsgUnbondedOracle): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnbondedOracle>, I>>(object: I): MsgUnbondedOracle {
    const message = createBaseMsgUnbondedOracle();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    return message;
  },
};

function createBaseMsgUnbondedOracleResponse(): MsgUnbondedOracleResponse {
  return {};
}

export const MsgUnbondedOracleResponse = {
  encode(_: MsgUnbondedOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondedOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondedOracleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnbondedOracleResponse {
    return {};
  },

  toJSON(_: MsgUnbondedOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnbondedOracleResponse>, I>>(_: I): MsgUnbondedOracleResponse {
    const message = createBaseMsgUnbondedOracleResponse();
    return message;
  },
};

function createBaseMsgWithdrawReward(): MsgWithdrawReward {
  return { chainName: "", oracleAddress: "" };
}

export const MsgWithdrawReward = {
  encode(message: MsgWithdrawReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.oracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawReward {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
    };
  },

  toJSON(message: MsgWithdrawReward): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawReward>, I>>(object: I): MsgWithdrawReward {
    const message = createBaseMsgWithdrawReward();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    return message;
  },
};

function createBaseMsgWithdrawRewardResponse(): MsgWithdrawRewardResponse {
  return {};
}

export const MsgWithdrawRewardResponse = {
  encode(_: MsgWithdrawRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawRewardResponse {
    return {};
  },

  toJSON(_: MsgWithdrawRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewardResponse>, I>>(_: I): MsgWithdrawRewardResponse {
    const message = createBaseMsgWithdrawRewardResponse();
    return message;
  },
};

function createBaseMsgOracleSetConfirm(): MsgOracleSetConfirm {
  return { nonce: Long.UZERO, bridgerAddress: "", externalAddress: "", signature: "", chainName: "" };
}

export const MsgOracleSetConfirm = {
  encode(message: MsgOracleSetConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    if (message.externalAddress !== "") {
      writer.uint32(26).string(message.externalAddress);
    }
    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }
    if (message.chainName !== "") {
      writer.uint32(42).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleSetConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.bridgerAddress = reader.string();
          break;
        case 3:
          message.externalAddress = reader.string();
          break;
        case 4:
          message.signature = reader.string();
          break;
        case 5:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOracleSetConfirm {
    return {
      nonce: isSet(object.nonce) ? Long.fromString(object.nonce) : Long.UZERO,
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgOracleSetConfirm): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleSetConfirm>, I>>(object: I): MsgOracleSetConfirm {
    const message = createBaseMsgOracleSetConfirm();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.externalAddress = object.externalAddress ?? "";
    message.signature = object.signature ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgOracleSetConfirmResponse(): MsgOracleSetConfirmResponse {
  return {};
}

export const MsgOracleSetConfirmResponse = {
  encode(_: MsgOracleSetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleSetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgOracleSetConfirmResponse {
    return {};
  },

  toJSON(_: MsgOracleSetConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleSetConfirmResponse>, I>>(
    _: I,
  ): MsgOracleSetConfirmResponse {
    const message = createBaseMsgOracleSetConfirmResponse();
    return message;
  },
};

function createBaseMsgOracleSetUpdatedClaim(): MsgOracleSetUpdatedClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    oracleSetNonce: Long.UZERO,
    members: [],
    bridgerAddress: "",
    chainName: "",
  };
}

export const MsgOracleSetUpdatedClaim = {
  encode(message: MsgOracleSetUpdatedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (!message.oracleSetNonce.isZero()) {
      writer.uint32(24).uint64(message.oracleSetNonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(50).string(message.bridgerAddress);
    }
    if (message.chainName !== "") {
      writer.uint32(58).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleSetUpdatedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.oracleSetNonce = reader.uint64() as Long;
          break;
        case 4:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 6:
          message.bridgerAddress = reader.string();
          break;
        case 7:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOracleSetUpdatedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromString(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO,
      oracleSetNonce: isSet(object.oracleSetNonce) ? Long.fromString(object.oracleSetNonce) : Long.UZERO,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => BridgeValidator.fromJSON(e))
        : [],
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgOracleSetUpdatedClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.oracleSetNonce !== undefined &&
      (obj.oracleSetNonce = (message.oracleSetNonce || Long.UZERO).toString());
    if (message.members) {
      obj.members = message.members.map((e) => (e ? BridgeValidator.toJSON(e) : undefined));
    } else {
      obj.members = [];
    }
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleSetUpdatedClaim>, I>>(
    object: I,
  ): MsgOracleSetUpdatedClaim {
    const message = createBaseMsgOracleSetUpdatedClaim();
    message.eventNonce =
      object.eventNonce !== undefined && object.eventNonce !== null
        ? Long.fromValue(object.eventNonce)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.oracleSetNonce =
      object.oracleSetNonce !== undefined && object.oracleSetNonce !== null
        ? Long.fromValue(object.oracleSetNonce)
        : Long.UZERO;
    message.members = object.members?.map((e) => BridgeValidator.fromPartial(e)) || [];
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgOracleSetUpdatedClaimResponse(): MsgOracleSetUpdatedClaimResponse {
  return {};
}

export const MsgOracleSetUpdatedClaimResponse = {
  encode(_: MsgOracleSetUpdatedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOracleSetUpdatedClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetUpdatedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgOracleSetUpdatedClaimResponse {
    return {};
  },

  toJSON(_: MsgOracleSetUpdatedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOracleSetUpdatedClaimResponse>, I>>(
    _: I,
  ): MsgOracleSetUpdatedClaimResponse {
    const message = createBaseMsgOracleSetUpdatedClaimResponse();
    return message;
  },
};

function createBaseMsgSendToFxClaim(): MsgSendToFxClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    tokenContract: "",
    amount: "",
    sender: "",
    receiver: "",
    targetIbc: "",
    bridgerAddress: "",
    chainName: "",
  };
}

export const MsgSendToFxClaim = {
  encode(message: MsgSendToFxClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(50).string(message.receiver);
    }
    if (message.targetIbc !== "") {
      writer.uint32(58).string(message.targetIbc);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(66).string(message.bridgerAddress);
    }
    if (message.chainName !== "") {
      writer.uint32(74).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToFxClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToFxClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.tokenContract = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.sender = reader.string();
          break;
        case 6:
          message.receiver = reader.string();
          break;
        case 7:
          message.targetIbc = reader.string();
          break;
        case 8:
          message.bridgerAddress = reader.string();
          break;
        case 9:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToFxClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromString(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      targetIbc: isSet(object.targetIbc) ? String(object.targetIbc) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgSendToFxClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.targetIbc !== undefined && (obj.targetIbc = message.targetIbc);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToFxClaim>, I>>(object: I): MsgSendToFxClaim {
    const message = createBaseMsgSendToFxClaim();
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
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.targetIbc = object.targetIbc ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgSendToFxClaimResponse(): MsgSendToFxClaimResponse {
  return {};
}

export const MsgSendToFxClaimResponse = {
  encode(_: MsgSendToFxClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToFxClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToFxClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendToFxClaimResponse {
    return {};
  },

  toJSON(_: MsgSendToFxClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToFxClaimResponse>, I>>(_: I): MsgSendToFxClaimResponse {
    const message = createBaseMsgSendToFxClaimResponse();
    return message;
  },
};

function createBaseMsgSendToExternal(): MsgSendToExternal {
  return { sender: "", dest: "", amount: undefined, bridgeFee: undefined, chainName: "" };
}

export const MsgSendToExternal = {
  encode(message: MsgSendToExternal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.dest !== "") {
      writer.uint32(18).string(message.dest);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.chainName !== "") {
      writer.uint32(42).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToExternal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.dest = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.bridgeFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToExternal {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      dest: isSet(object.dest) ? String(object.dest) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      bridgeFee: isSet(object.bridgeFee) ? Coin.fromJSON(object.bridgeFee) : undefined,
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgSendToExternal): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.dest !== undefined && (obj.dest = message.dest);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.bridgeFee !== undefined &&
      (obj.bridgeFee = message.bridgeFee ? Coin.toJSON(message.bridgeFee) : undefined);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToExternal>, I>>(object: I): MsgSendToExternal {
    const message = createBaseMsgSendToExternal();
    message.sender = object.sender ?? "";
    message.dest = object.dest ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bridgeFee =
      object.bridgeFee !== undefined && object.bridgeFee !== null
        ? Coin.fromPartial(object.bridgeFee)
        : undefined;
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgSendToExternalResponse(): MsgSendToExternalResponse {
  return { outgoingTxId: Long.UZERO };
}

export const MsgSendToExternalResponse = {
  encode(message: MsgSendToExternalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.outgoingTxId.isZero()) {
      writer.uint32(8).uint64(message.outgoingTxId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToExternalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outgoingTxId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToExternalResponse {
    return {
      outgoingTxId: isSet(object.outgoingTxId) ? Long.fromString(object.outgoingTxId) : Long.UZERO,
    };
  },

  toJSON(message: MsgSendToExternalResponse): unknown {
    const obj: any = {};
    message.outgoingTxId !== undefined &&
      (obj.outgoingTxId = (message.outgoingTxId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToExternalResponse>, I>>(
    object: I,
  ): MsgSendToExternalResponse {
    const message = createBaseMsgSendToExternalResponse();
    message.outgoingTxId =
      object.outgoingTxId !== undefined && object.outgoingTxId !== null
        ? Long.fromValue(object.outgoingTxId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCancelSendToExternal(): MsgCancelSendToExternal {
  return { transactionId: Long.UZERO, sender: "", chainName: "" };
}

export const MsgCancelSendToExternal = {
  encode(message: MsgCancelSendToExternal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transactionId.isZero()) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.chainName !== "") {
      writer.uint32(26).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToExternal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToExternal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelSendToExternal {
    return {
      transactionId: isSet(object.transactionId) ? Long.fromString(object.transactionId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgCancelSendToExternal): unknown {
    const obj: any = {};
    message.transactionId !== undefined &&
      (obj.transactionId = (message.transactionId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToExternal>, I>>(object: I): MsgCancelSendToExternal {
    const message = createBaseMsgCancelSendToExternal();
    message.transactionId =
      object.transactionId !== undefined && object.transactionId !== null
        ? Long.fromValue(object.transactionId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgCancelSendToExternalResponse(): MsgCancelSendToExternalResponse {
  return {};
}

export const MsgCancelSendToExternalResponse = {
  encode(_: MsgCancelSendToExternalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToExternalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToExternalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelSendToExternalResponse {
    return {};
  },

  toJSON(_: MsgCancelSendToExternalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToExternalResponse>, I>>(
    _: I,
  ): MsgCancelSendToExternalResponse {
    const message = createBaseMsgCancelSendToExternalResponse();
    return message;
  },
};

function createBaseMsgRequestBatch(): MsgRequestBatch {
  return { sender: "", denom: "", minimumFee: "", feeReceive: "", chainName: "", baseFee: "" };
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
    if (message.chainName !== "") {
      writer.uint32(42).string(message.chainName);
    }
    if (message.baseFee !== "") {
      writer.uint32(50).string(message.baseFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.minimumFee = reader.string();
          break;
        case 4:
          message.feeReceive = reader.string();
          break;
        case 5:
          message.chainName = reader.string();
          break;
        case 6:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestBatch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      minimumFee: isSet(object.minimumFee) ? String(object.minimumFee) : "",
      feeReceive: isSet(object.feeReceive) ? String(object.feeReceive) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
    };
  },

  toJSON(message: MsgRequestBatch): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.minimumFee !== undefined && (obj.minimumFee = message.minimumFee);
    message.feeReceive !== undefined && (obj.feeReceive = message.feeReceive);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatch>, I>>(object: I): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.minimumFee = object.minimumFee ?? "";
    message.feeReceive = object.feeReceive ?? "";
    message.chainName = object.chainName ?? "";
    message.baseFee = object.baseFee ?? "";
    return message;
  },
};

function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return { batchNonce: Long.UZERO };
}

export const MsgRequestBatchResponse = {
  encode(message: MsgRequestBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchNonce.isZero()) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchNonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestBatchResponse {
    return {
      batchNonce: isSet(object.batchNonce) ? Long.fromString(object.batchNonce) : Long.UZERO,
    };
  },

  toJSON(message: MsgRequestBatchResponse): unknown {
    const obj: any = {};
    message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatchResponse>, I>>(object: I): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    message.batchNonce =
      object.batchNonce !== undefined && object.batchNonce !== null
        ? Long.fromValue(object.batchNonce)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: Long.UZERO,
    tokenContract: "",
    bridgerAddress: "",
    externalAddress: "",
    signature: "",
    chainName: "",
  };
}

export const MsgConfirmBatch = {
  encode(message: MsgConfirmBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(26).string(message.bridgerAddress);
    }
    if (message.externalAddress !== "") {
      writer.uint32(34).string(message.externalAddress);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    if (message.chainName !== "") {
      writer.uint32(50).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.tokenContract = reader.string();
          break;
        case 3:
          message.bridgerAddress = reader.string();
          break;
        case 4:
          message.externalAddress = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        case 6:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmBatch {
    return {
      nonce: isSet(object.nonce) ? Long.fromString(object.nonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgConfirmBatch): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatch>, I>>(object: I): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce =
      object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.externalAddress = object.externalAddress ?? "";
    message.signature = object.signature ?? "";
    message.chainName = object.chainName ?? "";
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
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

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatchResponse>, I>>(_: I): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
};

function createBaseMsgSendToExternalClaim(): MsgSendToExternalClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    batchNonce: Long.UZERO,
    tokenContract: "",
    bridgerAddress: "",
    chainName: "",
  };
}

export const MsgSendToExternalClaim = {
  encode(message: MsgSendToExternalClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.bridgerAddress !== "") {
      writer.uint32(42).string(message.bridgerAddress);
    }
    if (message.chainName !== "") {
      writer.uint32(50).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToExternalClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternalClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.batchNonce = reader.uint64() as Long;
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.bridgerAddress = reader.string();
          break;
        case 6:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToExternalClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromString(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO,
      batchNonce: isSet(object.batchNonce) ? Long.fromString(object.batchNonce) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgSendToExternalClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToExternalClaim>, I>>(object: I): MsgSendToExternalClaim {
    const message = createBaseMsgSendToExternalClaim();
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
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgSendToExternalClaimResponse(): MsgSendToExternalClaimResponse {
  return {};
}

export const MsgSendToExternalClaimResponse = {
  encode(_: MsgSendToExternalClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToExternalClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternalClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendToExternalClaimResponse {
    return {};
  },

  toJSON(_: MsgSendToExternalClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToExternalClaimResponse>, I>>(
    _: I,
  ): MsgSendToExternalClaimResponse {
    const message = createBaseMsgSendToExternalClaimResponse();
    return message;
  },
};

function createBaseMsgBridgeTokenClaim(): MsgBridgeTokenClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: Long.UZERO,
    bridgerAddress: "",
    channelIbc: "",
    chainName: "",
  };
}

export const MsgBridgeTokenClaim = {
  encode(message: MsgBridgeTokenClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.bridgerAddress !== "") {
      writer.uint32(58).string(message.bridgerAddress);
    }
    if (message.channelIbc !== "") {
      writer.uint32(66).string(message.channelIbc);
    }
    if (message.chainName !== "") {
      writer.uint32(74).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeTokenClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeTokenClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.tokenContract = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.decimals = reader.uint64() as Long;
          break;
        case 7:
          message.bridgerAddress = reader.string();
          break;
        case 8:
          message.channelIbc = reader.string();
          break;
        case 9:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBridgeTokenClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromString(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromString(object.decimals) : Long.UZERO,
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      channelIbc: isSet(object.channelIbc) ? String(object.channelIbc) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgBridgeTokenClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.UZERO).toString());
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.channelIbc !== undefined && (obj.channelIbc = message.channelIbc);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBridgeTokenClaim>, I>>(object: I): MsgBridgeTokenClaim {
    const message = createBaseMsgBridgeTokenClaim();
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
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.channelIbc = object.channelIbc ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgBridgeTokenClaimResponse(): MsgBridgeTokenClaimResponse {
  return {};
}

export const MsgBridgeTokenClaimResponse = {
  encode(_: MsgBridgeTokenClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeTokenClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeTokenClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBridgeTokenClaimResponse {
    return {};
  },

  toJSON(_: MsgBridgeTokenClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBridgeTokenClaimResponse>, I>>(
    _: I,
  ): MsgBridgeTokenClaimResponse {
    const message = createBaseMsgBridgeTokenClaimResponse();
    return message;
  },
};

/** Msg defines the state transitions possible within gravity */
export interface Msg {
  BondedOracle(request: MsgBondedOracle): Promise<MsgBondedOracleResponse>;
  AddDelegate(request: MsgAddDelegate): Promise<MsgAddDelegateResponse>;
  EditOracle(request: MsgEditOracle): Promise<MsgEditOracleResponse>;
  WithdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse>;
  UnbondedOracle(request: MsgUnbondedOracle): Promise<MsgUnbondedOracleResponse>;
  OracleSetConfirm(request: MsgOracleSetConfirm): Promise<MsgOracleSetConfirmResponse>;
  OracleSetUpdateClaim(request: MsgOracleSetUpdatedClaim): Promise<MsgOracleSetUpdatedClaimResponse>;
  BridgeTokenClaim(request: MsgBridgeTokenClaim): Promise<MsgBridgeTokenClaimResponse>;
  SendToFxClaim(request: MsgSendToFxClaim): Promise<MsgSendToFxClaimResponse>;
  SendToExternal(request: MsgSendToExternal): Promise<MsgSendToExternalResponse>;
  CancelSendToExternal(request: MsgCancelSendToExternal): Promise<MsgCancelSendToExternalResponse>;
  SendToExternalClaim(request: MsgSendToExternalClaim): Promise<MsgSendToExternalClaimResponse>;
  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BondedOracle = this.BondedOracle.bind(this);
    this.AddDelegate = this.AddDelegate.bind(this);
    this.EditOracle = this.EditOracle.bind(this);
    this.WithdrawReward = this.WithdrawReward.bind(this);
    this.UnbondedOracle = this.UnbondedOracle.bind(this);
    this.OracleSetConfirm = this.OracleSetConfirm.bind(this);
    this.OracleSetUpdateClaim = this.OracleSetUpdateClaim.bind(this);
    this.BridgeTokenClaim = this.BridgeTokenClaim.bind(this);
    this.SendToFxClaim = this.SendToFxClaim.bind(this);
    this.SendToExternal = this.SendToExternal.bind(this);
    this.CancelSendToExternal = this.CancelSendToExternal.bind(this);
    this.SendToExternalClaim = this.SendToExternalClaim.bind(this);
    this.RequestBatch = this.RequestBatch.bind(this);
    this.ConfirmBatch = this.ConfirmBatch.bind(this);
  }
  BondedOracle(request: MsgBondedOracle): Promise<MsgBondedOracleResponse> {
    const data = MsgBondedOracle.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "BondedOracle", data);
    return promise.then((data) => MsgBondedOracleResponse.decode(new _m0.Reader(data)));
  }

  AddDelegate(request: MsgAddDelegate): Promise<MsgAddDelegateResponse> {
    const data = MsgAddDelegate.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "AddDelegate", data);
    return promise.then((data) => MsgAddDelegateResponse.decode(new _m0.Reader(data)));
  }

  EditOracle(request: MsgEditOracle): Promise<MsgEditOracleResponse> {
    const data = MsgEditOracle.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "EditOracle", data);
    return promise.then((data) => MsgEditOracleResponse.decode(new _m0.Reader(data)));
  }

  WithdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse> {
    const data = MsgWithdrawReward.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "WithdrawReward", data);
    return promise.then((data) => MsgWithdrawRewardResponse.decode(new _m0.Reader(data)));
  }

  UnbondedOracle(request: MsgUnbondedOracle): Promise<MsgUnbondedOracleResponse> {
    const data = MsgUnbondedOracle.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "UnbondedOracle", data);
    return promise.then((data) => MsgUnbondedOracleResponse.decode(new _m0.Reader(data)));
  }

  OracleSetConfirm(request: MsgOracleSetConfirm): Promise<MsgOracleSetConfirmResponse> {
    const data = MsgOracleSetConfirm.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "OracleSetConfirm", data);
    return promise.then((data) => MsgOracleSetConfirmResponse.decode(new _m0.Reader(data)));
  }

  OracleSetUpdateClaim(request: MsgOracleSetUpdatedClaim): Promise<MsgOracleSetUpdatedClaimResponse> {
    const data = MsgOracleSetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "OracleSetUpdateClaim", data);
    return promise.then((data) => MsgOracleSetUpdatedClaimResponse.decode(new _m0.Reader(data)));
  }

  BridgeTokenClaim(request: MsgBridgeTokenClaim): Promise<MsgBridgeTokenClaimResponse> {
    const data = MsgBridgeTokenClaim.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "BridgeTokenClaim", data);
    return promise.then((data) => MsgBridgeTokenClaimResponse.decode(new _m0.Reader(data)));
  }

  SendToFxClaim(request: MsgSendToFxClaim): Promise<MsgSendToFxClaimResponse> {
    const data = MsgSendToFxClaim.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "SendToFxClaim", data);
    return promise.then((data) => MsgSendToFxClaimResponse.decode(new _m0.Reader(data)));
  }

  SendToExternal(request: MsgSendToExternal): Promise<MsgSendToExternalResponse> {
    const data = MsgSendToExternal.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "SendToExternal", data);
    return promise.then((data) => MsgSendToExternalResponse.decode(new _m0.Reader(data)));
  }

  CancelSendToExternal(request: MsgCancelSendToExternal): Promise<MsgCancelSendToExternalResponse> {
    const data = MsgCancelSendToExternal.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "CancelSendToExternal", data);
    return promise.then((data) => MsgCancelSendToExternalResponse.decode(new _m0.Reader(data)));
  }

  SendToExternalClaim(request: MsgSendToExternalClaim): Promise<MsgSendToExternalClaimResponse> {
    const data = MsgSendToExternalClaim.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "SendToExternalClaim", data);
    return promise.then((data) => MsgSendToExternalClaimResponse.decode(new _m0.Reader(data)));
  }

  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse> {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "RequestBatch", data);
    return promise.then((data) => MsgRequestBatchResponse.decode(new _m0.Reader(data)));
  }

  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request("fx.gravity.crosschain.v1.Msg", "ConfirmBatch", data);
    return promise.then((data) => MsgConfirmBatchResponse.decode(new _m0.Reader(data)));
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
