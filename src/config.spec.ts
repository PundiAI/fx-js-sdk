import { calculateFee } from "@cosmjs/stargate";

import { FxDexTxConfig } from "./config";

describe("config", () => {
  it("gas price", () => {
    expect(calculateFee(5000000, FxDexTxConfig.options.gasPrice)).toStrictEqual({
      amount: [
        {
          amount: "3000",
          denom: "USDT",
        },
      ],
      gas: "5000000",
    });
  });
});
