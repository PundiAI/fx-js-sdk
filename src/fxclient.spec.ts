import { fxCoreTxConfig } from "./config";
import { SigningFxClient } from "./signingfxclient";

describe("fxclient test", () => {
  it("query chain", async function () {
    const client = await SigningFxClient.connect("http://127.0.0.1:26657", fxCoreTxConfig.options);

    const address = "fx17w0adeg64ky0daxwd2ugyuneellmjgnxed28x3";

    const account = await client.getAccount(address);
    console.debug("account", account);

    const balances = await client.getAllBalances(address);
    console.debug("balances", balances);

    const balance = await client.getBalance(address, "FX");
    console.debug("balance", balance);

    const chainId = await client.getChainId();
    console.debug("chainId", chainId);

    const height = await client.getHeight();
    console.debug("height", height);

    const block = await client.getBlock();
    console.debug("block", block);
  });
});
