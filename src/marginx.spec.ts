import { coins } from "@cosmjs/amino";
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes, createBankAminoConverters, defaultRegistryTypes } from "@cosmjs/stargate";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";

import { marginxTxConfig } from "./config";
import { OnlineWallet } from "./onlinewallet";
import { SigningFxClient } from "./signingfxclient";
import { onlineFunc, signAndBroadcast, testPublicKeyHex } from "./walletconnect.spec";

describe("marginx test", () => {
  it("create order tx by online wallet", async () => {
    const wallet = new OnlineWallet(testPublicKeyHex, marginxTxConfig.options.prefix, onlineFunc);
    console.debug("address", wallet.address);

    const registry = new Registry([...defaultRegistryTypes]);
    const aminoTypes = new AminoTypes({
      ...createBankAminoConverters(),
    });
    const options = {
      ...marginxTxConfig.options,
      registry: registry,
      aminoTypes: aminoTypes,
    };
    const client = await SigningFxClient.connectWithSigner("http://127.0.0.1:26657", wallet, options);

    const createOrderMsg = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: MsgSend.fromPartial({
        fromAddress: wallet.address,
        toAddress: wallet.address,
        amount: coins("100", "cusd"),
      }),
    };

    const code = await signAndBroadcast(
      client,
      wallet.address,
      [createOrderMsg],
      marginxTxConfig.options.gasPrice,
    );
    expect(code).toEqual(0);
  });
});
