import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  test("counts correctly", () => {
    expect(daysUntilChristmas()).to.be.a("number");
    expect(daysUntilChristmas(new Date(1880, 11, 24))).to.equal(1)
    expect(daysUntilChristmas(new Date(1880, 11, 26))).to.equal(364)
  });
});
