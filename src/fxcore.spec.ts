import { coin, coins } from "@cosmjs/amino";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, createBankAminoConverters, defaultRegistryTypes } from "@cosmjs/stargate";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { MsgSubmitProposal } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { Duration } from "cosmjs-types/google/protobuf/duration";
import Long from "long";

import { fxCoreTxConfig } from "./index";
import { toDecString } from "./modules";
import { OnlineWallet } from "./onlinewallet";
import { SigningFxClient } from "./signingfxclient";
import {
  MsgDeposit,
  MsgSubmitProposal as MsgSubmitProposalV1,
  MsgVote,
  VoteOption,
} from "./types/cosmos/gov/v1/tx";
import { MsgCancelUpgrade, MsgSoftwareUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import {
  CancelSoftwareUpgradeProposal,
  SoftwareUpgradeProposal,
} from "./types/cosmos/upgrade/v1beta1/upgrade";
import { MsgUpdateChainOracles, MsgUpdateParams } from "./types/fx/crosschain/v1/tx";
import {
  MsgRegisterCoin,
  MsgRegisterERC20,
  MsgToggleTokenConversion,
  MsgUpdateDenomAlias,
  MsgUpdateParams as MsgUpdateParamsErc20,
} from "./types/fx/erc20/v1/tx";
import { MsgCallContract } from "./types/fx/evm/v1/tx";
import { MsgUpdateEGFParams, MsgUpdateParams as MsgUpdateParamsGov } from "./types/fx/gov/v1/tx";
import { onlineFunc, signAndBroadcast, testPublicKeyHex } from "./walletconnect.spec";

describe("fxcore test", () => {
  it("transfer tx", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const registry = new Registry([...defaultRegistryTypes]);
    const aminoTypes = new AminoTypes({
      ...createBankAminoConverters(),
    });
    const options = {
      ...fxCoreTxConfig.options,
      registry: registry,
      aminoTypes: aminoTypes,
    };
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const sendMsg: EncodeObject[] = [
      {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial({
          fromAddress: sender,
          toAddress: sender,
          amount: coins("100", "FX"),
        }),
      },
      {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: MsgSend.fromPartial({
          fromAddress: sender,
          toAddress: sender,
          amount: coins("100", "FX"),
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...sendMsg]);
    expect(code).toEqual(0);
  });

  it("gov v1beta1 MsgSubmitProposal", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const options = fxCoreTxConfig.options;
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const submitProposal: EncodeObject[] = [
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          content: {
            typeUrl: "/cosmos.gov.v1beta1.TextProposal",
            value: TextProposal.encode({
              title: "TextProposal",
              description: "test ...",
            }).finish(),
          },
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          content: {
            typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
            value: SoftwareUpgradeProposal.encode({
              title: "SoftwareUpgradeProposal",
              description: "test ...",
              plan: {
                name: "test",
                height: Long.fromNumber(1000000000),
                info: "test",
                time: undefined,
                upgradedClientState: undefined,
              },
            }).finish(),
          },
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          content: {
            typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
            value: CancelSoftwareUpgradeProposal.encode({
              title: "CancelSoftwareUpgradeProposal",
              description: "test ...",
            }).finish(),
          },
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          content: {
            typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
            value: ParameterChangeProposal.encode({
              title: "ParameterChangeProposal",
              description: "test ...",
              changes: [
                {
                  subspace: "bank",
                  key: "DefaultSendEnabled",
                  value: "true",
                },
              ],
            }).finish(),
          },
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          content: {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            value: CommunityPoolSpendProposal.encode({
              title: "CommunityPoolSpendProposal",
              description: "test ...",
              recipient: sender,
              amount: coins("1000000000000000000", "FX"),
            }).finish(),
          },
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...submitProposal]);
    expect(code).toEqual(0);
  });

  it("gov v1 MsgSubmitProposal erc20", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const options = fxCoreTxConfig.options;
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const submitProposal: EncodeObject[] = [
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.erc20.v1.MsgUpdateParams",
              value: MsgUpdateParamsErc20.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                params: {
                  enableErc20: true,
                  enableEvmHook: true,
                  ibcTimeout: Duration.fromPartial({ seconds: 1, nanos: 0 }),
                },
              }).finish(),
            },
          ],
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.erc20.v1.MsgRegisterCoin",
              value: MsgRegisterCoin.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                metadata: {
                  description: "test desc",
                  base: "test",
                  name: "test name",
                  symbol: "TEST",
                  display: "test",
                  denomUnits: [
                    {
                      denom: "test",
                      exponent: 0,
                      aliases: ["eth0x2870405E4ABF9FcCDc93d9cC83c09788296d8355"],
                    },
                    {
                      denom: "TEST",
                      exponent: 18,
                      aliases: [],
                    },
                  ],
                  uri: "",
                  uriHash: "",
                },
              }).finish(),
            },
          ],
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.erc20.v1.MsgRegisterERC20",
              value: MsgRegisterERC20.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                erc20address: "0x2870405E4aBF9Fccdc93d9cC83c09788296d8355",
                aliases: ["test"],
              }).finish(),
            },
          ],
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.erc20.v1.MsgToggleTokenConversion",
              value: MsgToggleTokenConversion.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                token: "test",
              }).finish(),
            },
          ],
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.erc20.v1.MsgUpdateDenomAlias",
              value: MsgUpdateDenomAlias.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                denom: "test",
                alias: "test",
              }).finish(),
            },
          ],
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...submitProposal]);
    expect(code).toEqual(0);
  });

  it("gov v1 MsgSubmitProposal gov", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const options = fxCoreTxConfig.options;
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const submitProposal: EncodeObject[] = [
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.gov.v1.MsgUpdateParams",
              value: MsgUpdateParamsGov.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                params: {
                  msgType: "fx.erc20.v1.MsgRegisterCoin",
                  minDeposit: coins("1000000000000000000000", "FX"),
                  minInitialDeposit: coin("1000000000000000000000", "FX"),
                  votingPeriod: Duration.fromPartial({ seconds: 1, nanos: 0 }),
                  quorum: toDecString("1", 18),
                  maxDepositPeriod: Duration.fromPartial({ seconds: 1, nanos: 0 }),
                  threshold: toDecString("1", 18),
                  vetoThreshold: toDecString("1", 18),
                },
              }).finish(),
            },
          ],
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.gov.v1.MsgUpdateEGFParams",
              value: MsgUpdateEGFParams.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                params: {
                  egfDepositThreshold: coin("1000000000000000000000", "FX"),
                  claimRatio: toDecString("1", 18),
                },
              }).finish(),
            },
          ],
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...submitProposal]);
    expect(code).toEqual(0);
  });

  it("gov v1 MsgSubmitProposal evm", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const options = fxCoreTxConfig.options;
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const submitProposal: EncodeObject[] = [
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.evm.v1.MsgCallContract",
              value: MsgCallContract.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                contractAddress: "0x56047F2c3E45aDCA58f58082D4EDe581A7264E94",
                data: "test",
              }).finish(),
            },
          ],
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...submitProposal]);
    expect(code).toEqual(0);
  });

  it("gov v1 MsgSubmitProposal crosschain", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const options = fxCoreTxConfig.options;
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const submitProposal: EncodeObject[] = [
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.gravity.crosschain.v1.MsgUpdateParams",
              value: MsgUpdateParams.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                chainName: "eth",
                params: {
                  gravityId: "1",
                  averageBlockTime: Long.fromValue(5000),
                  externalBatchTimeout: Long.fromValue(360000),
                  averageExternalBlockTime: Long.fromValue(5000),
                  signedWindow: Long.fromValue(2),
                  slashFraction: new TextEncoder().encode("500000000000000000"),
                  oracleSetUpdatePowerChangePercent: new TextEncoder().encode("200000000000000000"),
                  ibcTransferTimeoutHeight: Long.fromValue(360000),
                  oracles: [],
                  delegateThreshold: {
                    denom: "FX",
                    amount: "1",
                  },
                  delegateMultiple: Long.fromValue(3),
                },
              }).finish(),
            },
          ],
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/fx.gravity.crosschain.v1.MsgUpdateChainOracles",
              value: MsgUpdateChainOracles.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                chainName: "eth",
                oracles: ["fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz"],
              }).finish(),
            },
          ],
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...submitProposal]);
    expect(code).toEqual(0);
  });

  it("gov v1 MsgSubmitProposal upgrade", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const options = fxCoreTxConfig.options;
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const submitProposal: EncodeObject[] = [
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
              value: MsgCancelUpgrade.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
              }).finish(),
            },
          ],
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposalV1.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          metadata: btoa(`{"title":"abc","summary":"def","metadata":""}`),
          messages: [
            {
              typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
              value: MsgSoftwareUpgrade.encode({
                authority: "fx10d07y265gmmuvt4z0w9aw880jnsr700jqjzsmz",
                plan: {
                  name: "test",
                  height: Long.fromValue(100),
                  info: "test",
                  time: undefined,
                  upgradedClientState: undefined,
                },
              }).finish(),
            },
          ],
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...submitProposal]);
    expect(code).toEqual(0);
  });

  it("gov v1 MsgSubmitProposal MsgDeposit MsgVote", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, "fx", onlineFunc);
    console.debug("address", wallet.address);
    const sender = wallet.address;

    const options = fxCoreTxConfig.options;
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);
    const account = await client.getAccount(sender);
    console.log("account", account);

    const submitProposal: EncodeObject[] = [
      {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial({
          proposer: sender,
          initialDeposit: coins("1000000000000000000000", "FX"),
          content: {
            typeUrl: "/cosmos.gov.v1beta1.TextProposal",
            value: TextProposal.encode({
              title: "TextProposal",
              description: "test ...",
            }).finish(),
          },
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgDeposit",
        value: MsgDeposit.fromPartial({
          depositor: sender,
          proposalId: Long.fromValue(1),
          amount: coins("10000000000000000000000", "FX"),
        }),
      },
      {
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: MsgVote.fromPartial({
          voter: sender,
          proposalId: Long.fromValue(1),
          option: VoteOption.VOTE_OPTION_YES,
          metadata: "test",
        }),
      },
    ];
    const code = await signAndBroadcast(client, sender, [...submitProposal]);
    expect(code).toEqual(0);
  });
});
