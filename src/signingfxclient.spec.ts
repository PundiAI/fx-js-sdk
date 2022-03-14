import { SigningFxClient } from "./signingfxclient";

describe("fx client", () => {
  it("query chain id", async () => {
    const client = await SigningFxClient.connect("http://127.0.0.1:26657");

    const chainId = await client.getChainId();
    console.debug("chainId", chainId);
  });
});
