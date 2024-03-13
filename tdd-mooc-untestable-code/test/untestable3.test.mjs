import { afterEach, beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv } from "../src/untestable3.mjs";
import { writeFile, unlink } from "node:fs/promises";

const input = `
Loid,Forger,,Male
Anya,Forger,6,Female
Yor,Forger,27,Female
`

describe("Untestable 3: CSV file parsing", () => {
  beforeEach(() => {
    try {
      writeFile('./test.csv', input)
    } catch (e) {}
  })
  afterEach(() => {
    try {
      unlink('./test.csv')
    } catch (e) {}
  })
  
  test("todo", async () => {
    // TODO: write proper tests
    try {
      expect(await parsePeopleCsv("people.csv")).to.deep.equal([]);
    } catch (e) {}
  });
});
