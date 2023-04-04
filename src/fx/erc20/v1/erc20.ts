/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata } from "cosmjs-types/cosmos/bank/v1beta1/bank";

export const protobufPackage = "fx.erc20.v1";

/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}

export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}

export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    case Owner.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * TokenPair defines an instance that records pairing consisting of a Cosmos
 * native Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** address of ERC20 contract token */
  erc20Address: string;
  /** cosmos base denomination to be mapped to */
  denom: string;
  /** shows token mapping enable status */
  enabled: boolean;
  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contractOwner: Owner;
}

/**
 * Deprecated: Do not use. As of the Cosmos SDK release v0.46.x, there is no
 * longer a need for an explicit MsgRegisterCoin. register coin
 * a simple MsgUpdateChainOracles can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
export interface RegisterCoinProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** token pair of Cosmos native denom and ERC20 token address */
  metadata?: Metadata;
}

/**
 * RegisterCoinProposal is a gov Content type to register a token pair
 *
 * Deprecated: Do not use. As of the Cosmos SDK release v0.46.x, there is no
 * longer a need for an explicit MsgRegisterERC20. register ERC20
 * a simple MsgUpdateChainOracles can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
export interface RegisterERC20Proposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address of ERC20 token */
  erc20address: string;
  /** aliases is a list of string aliases for the given denom */
  aliases: string[];
}

/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 *
 * Deprecated: Do not use. As of the Cosmos SDK release v0.46.x, there is no
 * longer a need for an explicit MsgToggleTokenConversion. toggle token
 * conversion, a simple MsgUpdateChainOracles can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
export interface ToggleTokenConversionProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}

/**
 * UpdateDenomAliasProposal is a gov Content type to update denom alias
 *
 * Deprecated: Do not use. As of the Cosmos SDK release v0.46.x, there is no
 * longer a need for an explicit MsgUpdateDenomAlias.update denomAlias
 * a simple MsgUpdateChainOracles can be invoked from the x/gov
 * module via a v1 governance proposal.
 */
export interface UpdateDenomAliasProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** denom */
  denom: string;
  /** alias update */
  alias: string;
}

function createBaseTokenPair(): TokenPair {
  return { erc20Address: "", denom: "", enabled: false, contractOwner: 0 };
}

export const TokenPair = {
  encode(message: TokenPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20Address !== "") {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.erc20Address = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.contractOwner = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenPair {
    return {
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      contractOwner: isSet(object.contractOwner) ? ownerFromJSON(object.contractOwner) : 0,
    };
  },

  toJSON(message: TokenPair): unknown {
    const obj: any = {};
    message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.contractOwner !== undefined && (obj.contractOwner = ownerToJSON(message.contractOwner));
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenPair>, I>>(base?: I): TokenPair {
    return TokenPair.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TokenPair>, I>>(object: I): TokenPair {
    const message = createBaseTokenPair();
    message.erc20Address = object.erc20Address ?? "";
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    message.contractOwner = object.contractOwner ?? 0;
    return message;
  },
};

function createBaseRegisterCoinProposal(): RegisterCoinProposal {
  return { title: "", description: "", metadata: undefined };
}

export const RegisterCoinProposal = {
  encode(message: RegisterCoinProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterCoinProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterCoinProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterCoinProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: RegisterCoinProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterCoinProposal>, I>>(base?: I): RegisterCoinProposal {
    return RegisterCoinProposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterCoinProposal>, I>>(object: I): RegisterCoinProposal {
    const message = createBaseRegisterCoinProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseRegisterERC20Proposal(): RegisterERC20Proposal {
  return { title: "", description: "", erc20address: "", aliases: [] };
}

export const RegisterERC20Proposal = {
  encode(message: RegisterERC20Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.erc20address !== "") {
      writer.uint32(26).string(message.erc20address);
    }
    for (const v of message.aliases) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterERC20Proposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterERC20Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.erc20address = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.aliases.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterERC20Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      erc20address: isSet(object.erc20address) ? String(object.erc20address) : "",
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: RegisterERC20Proposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.erc20address !== undefined && (obj.erc20address = message.erc20address);
    if (message.aliases) {
      obj.aliases = message.aliases.map((e) => e);
    } else {
      obj.aliases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterERC20Proposal>, I>>(base?: I): RegisterERC20Proposal {
    return RegisterERC20Proposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterERC20Proposal>, I>>(object: I): RegisterERC20Proposal {
    const message = createBaseRegisterERC20Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.erc20address = object.erc20address ?? "";
    message.aliases = object.aliases?.map((e) => e) || [];
    return message;
  },
};

function createBaseToggleTokenConversionProposal(): ToggleTokenConversionProposal {
  return { title: "", description: "", token: "" };
}

export const ToggleTokenConversionProposal = {
  encode(message: ToggleTokenConversionProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToggleTokenConversionProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToggleTokenConversionProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
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

  fromJSON(object: any): ToggleTokenConversionProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: ToggleTokenConversionProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<ToggleTokenConversionProposal>, I>>(base?: I): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ToggleTokenConversionProposal>, I>>(
    object: I,
  ): ToggleTokenConversionProposal {
    const message = createBaseToggleTokenConversionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseUpdateDenomAliasProposal(): UpdateDenomAliasProposal {
  return { title: "", description: "", denom: "", alias: "" };
}

export const UpdateDenomAliasProposal = {
  encode(message: UpdateDenomAliasProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.alias !== "") {
      writer.uint32(34).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDenomAliasProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDenomAliasProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.alias = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDenomAliasProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
    };
  },

  toJSON(message: UpdateDenomAliasProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDenomAliasProposal>, I>>(base?: I): UpdateDenomAliasProposal {
    return UpdateDenomAliasProposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateDenomAliasProposal>, I>>(object: I): UpdateDenomAliasProposal {
    const message = createBaseUpdateDenomAliasProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.alias = object.alias ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
