import { toDecString, toProtoString } from "./index";

describe("test", () => {
  it("test toDecString", function () {
    expect(toDecString("", 6)).toEqual("<nil>");
    expect(toDecString("0", 6)).toEqual("0.000000");
    expect(toDecString(" 10", 6)).toEqual("0.000010");
    expect(toDecString("10", 6)).toEqual("0.000010");
    expect(toDecString("100000", 6)).toEqual("0.100000");
    expect(toDecString("1000000", 6)).toEqual("1.000000");
    expect(toDecString("10000000", 6)).toEqual("10.000000");
  });

  it("test toProtoString", function () {
    expect(toProtoString("", 6)).toEqual("<nil>");
    expect(toProtoString("0.000000", 6)).toEqual("0");
    expect(toProtoString("0.000010", 6)).toEqual("10");
    expect(toProtoString(" 0.000010", 6)).toEqual("10");
    expect(toProtoString("0.100000", 6)).toEqual("100000");
    expect(toProtoString("1.000000", 6)).toEqual("1000000");
    expect(toProtoString("10.000000", 6)).toEqual("10000000");
  });
});
