import { calculateFee } from "@cosmjs/stargate";

import { fxDexTxConfig } from "./config";

describe("config", () => {
  it("gas price", () => {
    expect(calculateFee(5000000, fxDexTxConfig.options.gasPrice)).toStrictEqual({
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
