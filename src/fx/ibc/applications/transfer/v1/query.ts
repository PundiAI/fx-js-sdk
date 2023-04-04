/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  QueryDenomHashRequest,
  QueryDenomHashResponse,
  QueryDenomTraceRequest,
  QueryDenomTraceResponse,
  QueryDenomTracesRequest,
  QueryDenomTracesResponse,
  QueryEscrowAddressRequest,
  QueryEscrowAddressResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "cosmjs-types/ibc/applications/transfer/v1/query";

export const protobufPackage = "fx.ibc.applications.transfer.v1";

/**
 * Query provides defines the gRPC querier service.
 * Deprecated: This service is deprecated. It may be removed in the next
 * version. Replace ibc.applications.transfer.v1.Query
 */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
  /**
   * EscrowAddress returns the escrow address for a particular port and channel
   * id.
   */
  EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "fx.ibc.applications.transfer.v1.Query";
    this.rpc = rpc;
    this.DenomTrace = this.DenomTrace.bind(this);
    this.DenomTraces = this.DenomTraces.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomHash = this.DenomHash.bind(this);
    this.EscrowAddress = this.EscrowAddress.bind(this);
  }
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomTrace", data);
    return promise.then((data) => QueryDenomTraceResponse.decode(_m0.Reader.create(data)));
  }

  DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse> {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomTraces", data);
    return promise.then((data) => QueryDenomTracesResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomHash", data);
    return promise.then((data) => QueryDenomHashResponse.decode(_m0.Reader.create(data)));
  }

  EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse> {
    const data = QueryEscrowAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EscrowAddress", data);
    return promise.then((data) => QueryEscrowAddressResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
