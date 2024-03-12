import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  test("test same fixed roll", () => {
    expect(diceHandValue(() => 3, () => 3)).to.equal(103)
  });
  test('test different fixed roll', () => {
    expect(diceHandValue(() => 3, () => 5)).to.equal(5)
  })
  test('test random rolls', () => {
    const s = new Set()

    for(let i = 0; i < 500; i++) {
      s.add(diceHandValue())
    }

    expect(s.size).to.equal(11)
  })
});
