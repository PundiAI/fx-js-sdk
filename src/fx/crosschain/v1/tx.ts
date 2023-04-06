/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { BridgeValidator, Params } from "./types";

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

export interface MsgReDelegate {
  chainName: string;
  oracleAddress: string;
  validatorAddress: string;
}

export interface MsgReDelegateResponse {}

export interface MsgEditBridger {
  chainName: string;
  oracleAddress: string;
  bridgerAddress: string;
}

export interface MsgEditBridgerResponse {}

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

/** Deprecated: after block 5713000 */
export interface MsgSetOrchestratorAddress {
  oracleAddress: string;
  bridgerAddress: string;
  externalAddress: string;
  deposit?: Coin;
  chainName: string;
}

/** Deprecated: after block 5713000 */
export interface MsgAddOracleDeposit {
  oracleAddress: string;
  amount?: Coin;
  chainName: string;
}

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  chainName: string;
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/crosschain parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}

export interface MsgIncreaseBridgeFee {
  chainName: string;
  transactionId: Long;
  sender: string;
  addBridgeFee?: Coin;
}

export interface MsgIncreaseBridgeFeeResponse {}

export interface MsgUpdateChainOracles {
  chainName: string;
  /** authority is the address of the governance account. */
  authority: string;
  oracles: string[];
}

export interface MsgUpdateChainOraclesResponse {}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondedOracle();
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
        case 3:
          if (tag != 26) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.externalAddress = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.delegateAmount = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgBondedOracle>, I>>(base?: I): MsgBondedOracle {
    return MsgBondedOracle.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondedOracleResponse();
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

  fromJSON(_: any): MsgBondedOracleResponse {
    return {};
  },

  toJSON(_: MsgBondedOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBondedOracleResponse>, I>>(base?: I): MsgBondedOracleResponse {
    return MsgBondedOracleResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDelegate();
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
        case 3:
          if (tag != 26) {
            break;
          }

          message.amount = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgAddDelegate>, I>>(base?: I): MsgAddDelegate {
    return MsgAddDelegate.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDelegateResponse();
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

  fromJSON(_: any): MsgAddDelegateResponse {
    return {};
  },

  toJSON(_: MsgAddDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddDelegateResponse>, I>>(base?: I): MsgAddDelegateResponse {
    return MsgAddDelegateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddDelegateResponse>, I>>(_: I): MsgAddDelegateResponse {
    const message = createBaseMsgAddDelegateResponse();
    return message;
  },
};

function createBaseMsgReDelegate(): MsgReDelegate {
  return { chainName: "", oracleAddress: "", validatorAddress: "" };
}

export const MsgReDelegate = {
  encode(message: MsgReDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReDelegate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReDelegate();
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
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): MsgReDelegate {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: MsgReDelegate): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgReDelegate>, I>>(base?: I): MsgReDelegate {
    return MsgReDelegate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgReDelegate>, I>>(object: I): MsgReDelegate {
    const message = createBaseMsgReDelegate();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMsgReDelegateResponse(): MsgReDelegateResponse {
  return {};
}

export const MsgReDelegateResponse = {
  encode(_: MsgReDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReDelegateResponse();
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

  fromJSON(_: any): MsgReDelegateResponse {
    return {};
  },

  toJSON(_: MsgReDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgReDelegateResponse>, I>>(base?: I): MsgReDelegateResponse {
    return MsgReDelegateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgReDelegateResponse>, I>>(_: I): MsgReDelegateResponse {
    const message = createBaseMsgReDelegateResponse();
    return message;
  },
};

function createBaseMsgEditBridger(): MsgEditBridger {
  return { chainName: "", oracleAddress: "", bridgerAddress: "" };
}

export const MsgEditBridger = {
  encode(message: MsgEditBridger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(26).string(message.bridgerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBridger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBridger();
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
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): MsgEditBridger {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
    };
  },

  toJSON(message: MsgEditBridger): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditBridger>, I>>(base?: I): MsgEditBridger {
    return MsgEditBridger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditBridger>, I>>(object: I): MsgEditBridger {
    const message = createBaseMsgEditBridger();
    message.chainName = object.chainName ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    return message;
  },
};

function createBaseMsgEditBridgerResponse(): MsgEditBridgerResponse {
  return {};
}

export const MsgEditBridgerResponse = {
  encode(_: MsgEditBridgerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBridgerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBridgerResponse();
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

  fromJSON(_: any): MsgEditBridgerResponse {
    return {};
  },

  toJSON(_: MsgEditBridgerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditBridgerResponse>, I>>(base?: I): MsgEditBridgerResponse {
    return MsgEditBridgerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditBridgerResponse>, I>>(_: I): MsgEditBridgerResponse {
    const message = createBaseMsgEditBridgerResponse();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondedOracle();
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

  create<I extends Exact<DeepPartial<MsgUnbondedOracle>, I>>(base?: I): MsgUnbondedOracle {
    return MsgUnbondedOracle.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondedOracleResponse();
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

  fromJSON(_: any): MsgUnbondedOracleResponse {
    return {};
  },

  toJSON(_: MsgUnbondedOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUnbondedOracleResponse>, I>>(base?: I): MsgUnbondedOracleResponse {
    return MsgUnbondedOracleResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReward();
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

  create<I extends Exact<DeepPartial<MsgWithdrawReward>, I>>(base?: I): MsgWithdrawReward {
    return MsgWithdrawReward.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardResponse();
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

  fromJSON(_: any): MsgWithdrawRewardResponse {
    return {};
  },

  toJSON(_: MsgWithdrawRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawRewardResponse>, I>>(base?: I): MsgWithdrawRewardResponse {
    return MsgWithdrawRewardResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetConfirm();
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

          message.bridgerAddress = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.externalAddress = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.signature = reader.string();
          continue;
        case 5:
          if (tag != 42) {
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

  fromJSON(object: any): MsgOracleSetConfirm {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
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

  create<I extends Exact<DeepPartial<MsgOracleSetConfirm>, I>>(base?: I): MsgOracleSetConfirm {
    return MsgOracleSetConfirm.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetConfirmResponse();
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

  fromJSON(_: any): MsgOracleSetConfirmResponse {
    return {};
  },

  toJSON(_: MsgOracleSetConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgOracleSetConfirmResponse>, I>>(
    base?: I,
  ): MsgOracleSetConfirmResponse {
    return MsgOracleSetConfirmResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetUpdatedClaim();
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

          message.oracleSetNonce = reader.uint64() as Long;
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

          message.bridgerAddress = reader.string();
          continue;
        case 7:
          if (tag != 58) {
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

  fromJSON(object: any): MsgOracleSetUpdatedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      oracleSetNonce: isSet(object.oracleSetNonce) ? Long.fromValue(object.oracleSetNonce) : Long.UZERO,
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

  create<I extends Exact<DeepPartial<MsgOracleSetUpdatedClaim>, I>>(base?: I): MsgOracleSetUpdatedClaim {
    return MsgOracleSetUpdatedClaim.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOracleSetUpdatedClaimResponse();
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

  fromJSON(_: any): MsgOracleSetUpdatedClaimResponse {
    return {};
  },

  toJSON(_: MsgOracleSetUpdatedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgOracleSetUpdatedClaimResponse>, I>>(
    base?: I,
  ): MsgOracleSetUpdatedClaimResponse {
    return MsgOracleSetUpdatedClaimResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToFxClaim();
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

          message.sender = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.receiver = reader.string();
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

          message.bridgerAddress = reader.string();
          continue;
        case 9:
          if (tag != 74) {
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

  fromJSON(object: any): MsgSendToFxClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
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

  create<I extends Exact<DeepPartial<MsgSendToFxClaim>, I>>(base?: I): MsgSendToFxClaim {
    return MsgSendToFxClaim.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToFxClaimResponse();
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

  fromJSON(_: any): MsgSendToFxClaimResponse {
    return {};
  },

  toJSON(_: MsgSendToFxClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendToFxClaimResponse>, I>>(base?: I): MsgSendToFxClaimResponse {
    return MsgSendToFxClaimResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternal();
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

          message.dest = reader.string();
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
        case 5:
          if (tag != 42) {
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

  create<I extends Exact<DeepPartial<MsgSendToExternal>, I>>(base?: I): MsgSendToExternal {
    return MsgSendToExternal.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.outgoingTxId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSendToExternalResponse {
    return { outgoingTxId: isSet(object.outgoingTxId) ? Long.fromValue(object.outgoingTxId) : Long.UZERO };
  },

  toJSON(message: MsgSendToExternalResponse): unknown {
    const obj: any = {};
    message.outgoingTxId !== undefined &&
      (obj.outgoingTxId = (message.outgoingTxId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendToExternalResponse>, I>>(base?: I): MsgSendToExternalResponse {
    return MsgSendToExternalResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToExternal();
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
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): MsgCancelSendToExternal {
    return {
      transactionId: isSet(object.transactionId) ? Long.fromValue(object.transactionId) : Long.UZERO,
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

  create<I extends Exact<DeepPartial<MsgCancelSendToExternal>, I>>(base?: I): MsgCancelSendToExternal {
    return MsgCancelSendToExternal.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToExternalResponse();
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

  fromJSON(_: any): MsgCancelSendToExternalResponse {
    return {};
  },

  toJSON(_: MsgCancelSendToExternalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelSendToExternalResponse>, I>>(
    base?: I,
  ): MsgCancelSendToExternalResponse {
    return MsgCancelSendToExternalResponse.fromPartial(base ?? {});
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

          message.chainName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
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

  create<I extends Exact<DeepPartial<MsgRequestBatch>, I>>(base?: I): MsgRequestBatch {
    return MsgRequestBatch.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.batchNonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRequestBatchResponse {
    return { batchNonce: isSet(object.batchNonce) ? Long.fromValue(object.batchNonce) : Long.UZERO };
  },

  toJSON(message: MsgRequestBatchResponse): unknown {
    const obj: any = {};
    message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestBatchResponse>, I>>(base?: I): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.fromPartial(base ?? {});
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

          message.bridgerAddress = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.externalAddress = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.signature = reader.string();
          continue;
        case 6:
          if (tag != 50) {
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

  fromJSON(object: any): MsgConfirmBatch {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
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

  create<I extends Exact<DeepPartial<MsgConfirmBatch>, I>>(base?: I): MsgConfirmBatch {
    return MsgConfirmBatch.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternalClaim();
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

          message.bridgerAddress = reader.string();
          continue;
        case 6:
          if (tag != 50) {
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

  fromJSON(object: any): MsgSendToExternalClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      batchNonce: isSet(object.batchNonce) ? Long.fromValue(object.batchNonce) : Long.UZERO,
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

  create<I extends Exact<DeepPartial<MsgSendToExternalClaim>, I>>(base?: I): MsgSendToExternalClaim {
    return MsgSendToExternalClaim.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToExternalClaimResponse();
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

  fromJSON(_: any): MsgSendToExternalClaimResponse {
    return {};
  },

  toJSON(_: MsgSendToExternalClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendToExternalClaimResponse>, I>>(
    base?: I,
  ): MsgSendToExternalClaimResponse {
    return MsgSendToExternalClaimResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeTokenClaim();
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

          message.bridgerAddress = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.channelIbc = reader.string();
          continue;
        case 9:
          if (tag != 74) {
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

  fromJSON(object: any): MsgBridgeTokenClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.UZERO,
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

  create<I extends Exact<DeepPartial<MsgBridgeTokenClaim>, I>>(base?: I): MsgBridgeTokenClaim {
    return MsgBridgeTokenClaim.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeTokenClaimResponse();
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

  fromJSON(_: any): MsgBridgeTokenClaimResponse {
    return {};
  },

  toJSON(_: MsgBridgeTokenClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBridgeTokenClaimResponse>, I>>(
    base?: I,
  ): MsgBridgeTokenClaimResponse {
    return MsgBridgeTokenClaimResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBridgeTokenClaimResponse>, I>>(
    _: I,
  ): MsgBridgeTokenClaimResponse {
    const message = createBaseMsgBridgeTokenClaimResponse();
    return message;
  },
};

function createBaseMsgSetOrchestratorAddress(): MsgSetOrchestratorAddress {
  return { oracleAddress: "", bridgerAddress: "", externalAddress: "", deposit: undefined, chainName: "" };
}

export const MsgSetOrchestratorAddress = {
  encode(message: MsgSetOrchestratorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleAddress !== "") {
      writer.uint32(10).string(message.oracleAddress);
    }
    if (message.bridgerAddress !== "") {
      writer.uint32(18).string(message.bridgerAddress);
    }
    if (message.externalAddress !== "") {
      writer.uint32(26).string(message.externalAddress);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    if (message.chainName !== "") {
      writer.uint32(42).string(message.chainName);
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

          message.oracleAddress = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.bridgerAddress = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.externalAddress = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.deposit = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
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

  fromJSON(object: any): MsgSetOrchestratorAddress {
    return {
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      bridgerAddress: isSet(object.bridgerAddress) ? String(object.bridgerAddress) : "",
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgSetOrchestratorAddress): unknown {
    const obj: any = {};
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.bridgerAddress !== undefined && (obj.bridgerAddress = message.bridgerAddress);
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetOrchestratorAddress>, I>>(base?: I): MsgSetOrchestratorAddress {
    return MsgSetOrchestratorAddress.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOrchestratorAddress>, I>>(
    object: I,
  ): MsgSetOrchestratorAddress {
    const message = createBaseMsgSetOrchestratorAddress();
    message.oracleAddress = object.oracleAddress ?? "";
    message.bridgerAddress = object.bridgerAddress ?? "";
    message.externalAddress = object.externalAddress ?? "";
    message.deposit =
      object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgAddOracleDeposit(): MsgAddOracleDeposit {
  return { oracleAddress: "", amount: undefined, chainName: "" };
}

export const MsgAddOracleDeposit = {
  encode(message: MsgAddOracleDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleAddress !== "") {
      writer.uint32(10).string(message.oracleAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainName !== "") {
      writer.uint32(26).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOracleDeposit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOracleDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oracleAddress = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.amount = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): MsgAddOracleDeposit {
    return {
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgAddOracleDeposit): unknown {
    const obj: any = {};
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddOracleDeposit>, I>>(base?: I): MsgAddOracleDeposit {
    return MsgAddOracleDeposit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddOracleDeposit>, I>>(object: I): MsgAddOracleDeposit {
    const message = createBaseMsgAddOracleDeposit();
    message.oracleAddress = object.oracleAddress ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { chainName: "", authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
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

          message.authority = reader.string();
          continue;
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.chainName = object.chainName ?? "";
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgIncreaseBridgeFee(): MsgIncreaseBridgeFee {
  return { chainName: "", transactionId: Long.UZERO, sender: "", addBridgeFee: undefined };
}

export const MsgIncreaseBridgeFee = {
  encode(message: MsgIncreaseBridgeFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (!message.transactionId.isZero()) {
      writer.uint32(16).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.addBridgeFee !== undefined) {
      Coin.encode(message.addBridgeFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreaseBridgeFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseBridgeFee();
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

          message.transactionId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.addBridgeFee = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgIncreaseBridgeFee {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      transactionId: isSet(object.transactionId) ? Long.fromValue(object.transactionId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      addBridgeFee: isSet(object.addBridgeFee) ? Coin.fromJSON(object.addBridgeFee) : undefined,
    };
  },

  toJSON(message: MsgIncreaseBridgeFee): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.transactionId !== undefined &&
      (obj.transactionId = (message.transactionId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.addBridgeFee !== undefined &&
      (obj.addBridgeFee = message.addBridgeFee ? Coin.toJSON(message.addBridgeFee) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIncreaseBridgeFee>, I>>(base?: I): MsgIncreaseBridgeFee {
    return MsgIncreaseBridgeFee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgIncreaseBridgeFee>, I>>(object: I): MsgIncreaseBridgeFee {
    const message = createBaseMsgIncreaseBridgeFee();
    message.chainName = object.chainName ?? "";
    message.transactionId =
      object.transactionId !== undefined && object.transactionId !== null
        ? Long.fromValue(object.transactionId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.addBridgeFee =
      object.addBridgeFee !== undefined && object.addBridgeFee !== null
        ? Coin.fromPartial(object.addBridgeFee)
        : undefined;
    return message;
  },
};

function createBaseMsgIncreaseBridgeFeeResponse(): MsgIncreaseBridgeFeeResponse {
  return {};
}

export const MsgIncreaseBridgeFeeResponse = {
  encode(_: MsgIncreaseBridgeFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreaseBridgeFeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncreaseBridgeFeeResponse();
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

  fromJSON(_: any): MsgIncreaseBridgeFeeResponse {
    return {};
  },

  toJSON(_: MsgIncreaseBridgeFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIncreaseBridgeFeeResponse>, I>>(
    base?: I,
  ): MsgIncreaseBridgeFeeResponse {
    return MsgIncreaseBridgeFeeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgIncreaseBridgeFeeResponse>, I>>(
    _: I,
  ): MsgIncreaseBridgeFeeResponse {
    const message = createBaseMsgIncreaseBridgeFeeResponse();
    return message;
  },
};

function createBaseMsgUpdateChainOracles(): MsgUpdateChainOracles {
  return { chainName: "", authority: "", oracles: [] };
}

export const MsgUpdateChainOracles = {
  encode(message: MsgUpdateChainOracles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    for (const v of message.oracles) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainOracles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChainOracles();
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

          message.authority = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.oracles.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateChainOracles {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      authority: isSet(object.authority) ? String(object.authority) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgUpdateChainOracles): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e);
    } else {
      obj.oracles = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateChainOracles>, I>>(base?: I): MsgUpdateChainOracles {
    return MsgUpdateChainOracles.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateChainOracles>, I>>(object: I): MsgUpdateChainOracles {
    const message = createBaseMsgUpdateChainOracles();
    message.chainName = object.chainName ?? "";
    message.authority = object.authority ?? "";
    message.oracles = object.oracles?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgUpdateChainOraclesResponse(): MsgUpdateChainOraclesResponse {
  return {};
}

export const MsgUpdateChainOraclesResponse = {
  encode(_: MsgUpdateChainOraclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainOraclesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChainOraclesResponse();
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

  fromJSON(_: any): MsgUpdateChainOraclesResponse {
    return {};
  },

  toJSON(_: MsgUpdateChainOraclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateChainOraclesResponse>, I>>(
    base?: I,
  ): MsgUpdateChainOraclesResponse {
    return MsgUpdateChainOraclesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateChainOraclesResponse>, I>>(
    _: I,
  ): MsgUpdateChainOraclesResponse {
    const message = createBaseMsgUpdateChainOraclesResponse();
    return message;
  },
};

/** Msg defines the state transitions possible within gravity */
export interface Msg {
  BondedOracle(request: MsgBondedOracle): Promise<MsgBondedOracleResponse>;
  AddDelegate(request: MsgAddDelegate): Promise<MsgAddDelegateResponse>;
  ReDelegate(request: MsgReDelegate): Promise<MsgReDelegateResponse>;
  EditBridger(request: MsgEditBridger): Promise<MsgEditBridgerResponse>;
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
  /**
   * UpdateParams defines a governance operation for updating the x/crosschain module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  IncreaseBridgeFee(request: MsgIncreaseBridgeFee): Promise<MsgIncreaseBridgeFeeResponse>;
  UpdateChainOracles(request: MsgUpdateChainOracles): Promise<MsgUpdateChainOraclesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.gravity.crosschain.v1.Msg";
    this.rpc = rpc;
    this.BondedOracle = this.BondedOracle.bind(this);
    this.AddDelegate = this.AddDelegate.bind(this);
    this.ReDelegate = this.ReDelegate.bind(this);
    this.EditBridger = this.EditBridger.bind(this);
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
    this.UpdateParams = this.UpdateParams.bind(this);
    this.IncreaseBridgeFee = this.IncreaseBridgeFee.bind(this);
    this.UpdateChainOracles = this.UpdateChainOracles.bind(this);
  }
  BondedOracle(request: MsgBondedOracle): Promise<MsgBondedOracleResponse> {
    const data = MsgBondedOracle.encode(request).finish();
    const promise = this.rpc.request(this.service, "BondedOracle", data);
    return promise.then((data) => MsgBondedOracleResponse.decode(_m0.Reader.create(data)));
  }

  AddDelegate(request: MsgAddDelegate): Promise<MsgAddDelegateResponse> {
    const data = MsgAddDelegate.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddDelegate", data);
    return promise.then((data) => MsgAddDelegateResponse.decode(_m0.Reader.create(data)));
  }

  ReDelegate(request: MsgReDelegate): Promise<MsgReDelegateResponse> {
    const data = MsgReDelegate.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReDelegate", data);
    return promise.then((data) => MsgReDelegateResponse.decode(_m0.Reader.create(data)));
  }

  EditBridger(request: MsgEditBridger): Promise<MsgEditBridgerResponse> {
    const data = MsgEditBridger.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditBridger", data);
    return promise.then((data) => MsgEditBridgerResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse> {
    const data = MsgWithdrawReward.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawReward", data);
    return promise.then((data) => MsgWithdrawRewardResponse.decode(_m0.Reader.create(data)));
  }

  UnbondedOracle(request: MsgUnbondedOracle): Promise<MsgUnbondedOracleResponse> {
    const data = MsgUnbondedOracle.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnbondedOracle", data);
    return promise.then((data) => MsgUnbondedOracleResponse.decode(_m0.Reader.create(data)));
  }

  OracleSetConfirm(request: MsgOracleSetConfirm): Promise<MsgOracleSetConfirmResponse> {
    const data = MsgOracleSetConfirm.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleSetConfirm", data);
    return promise.then((data) => MsgOracleSetConfirmResponse.decode(_m0.Reader.create(data)));
  }

  OracleSetUpdateClaim(request: MsgOracleSetUpdatedClaim): Promise<MsgOracleSetUpdatedClaimResponse> {
    const data = MsgOracleSetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleSetUpdateClaim", data);
    return promise.then((data) => MsgOracleSetUpdatedClaimResponse.decode(_m0.Reader.create(data)));
  }

  BridgeTokenClaim(request: MsgBridgeTokenClaim): Promise<MsgBridgeTokenClaimResponse> {
    const data = MsgBridgeTokenClaim.encode(request).finish();
    const promise = this.rpc.request(this.service, "BridgeTokenClaim", data);
    return promise.then((data) => MsgBridgeTokenClaimResponse.decode(_m0.Reader.create(data)));
  }

  SendToFxClaim(request: MsgSendToFxClaim): Promise<MsgSendToFxClaimResponse> {
    const data = MsgSendToFxClaim.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendToFxClaim", data);
    return promise.then((data) => MsgSendToFxClaimResponse.decode(_m0.Reader.create(data)));
  }

  SendToExternal(request: MsgSendToExternal): Promise<MsgSendToExternalResponse> {
    const data = MsgSendToExternal.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendToExternal", data);
    return promise.then((data) => MsgSendToExternalResponse.decode(_m0.Reader.create(data)));
  }

  CancelSendToExternal(request: MsgCancelSendToExternal): Promise<MsgCancelSendToExternalResponse> {
    const data = MsgCancelSendToExternal.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelSendToExternal", data);
    return promise.then((data) => MsgCancelSendToExternalResponse.decode(_m0.Reader.create(data)));
  }

  SendToExternalClaim(request: MsgSendToExternalClaim): Promise<MsgSendToExternalClaimResponse> {
    const data = MsgSendToExternalClaim.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendToExternalClaim", data);
    return promise.then((data) => MsgSendToExternalClaimResponse.decode(_m0.Reader.create(data)));
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

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  IncreaseBridgeFee(request: MsgIncreaseBridgeFee): Promise<MsgIncreaseBridgeFeeResponse> {
    const data = MsgIncreaseBridgeFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "IncreaseBridgeFee", data);
    return promise.then((data) => MsgIncreaseBridgeFeeResponse.decode(_m0.Reader.create(data)));
  }

  UpdateChainOracles(request: MsgUpdateChainOracles): Promise<MsgUpdateChainOraclesResponse> {
    const data = MsgUpdateChainOracles.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateChainOracles", data);
    return promise.then((data) => MsgUpdateChainOraclesResponse.decode(_m0.Reader.create(data)));
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
