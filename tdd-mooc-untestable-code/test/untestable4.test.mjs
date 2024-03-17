import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from "vitest";
import { PasswordService, PostgresUserDao } from "../src/untestable4.mjs";
import { expect } from "chai";
import argon2 from "@node-rs/argon2";

describe("Untestable 4: enterprise application", () => {
  let service;
  beforeAll(() => {
    process.env.PGUSER = `untestable`
    process.env.PGHOST = `localhost`
    process.env.PGDATABASE = `untestable`
    process.env.PGPASSWORD = `secret`
    process.env.PGPORT = `5432`
    service = new PasswordService();
  });

  afterAll(() => {
    PostgresUserDao.getInstance().close();
  });

  test("password service creates postgresuserdao instance", () => {
    expect(service.users instanceof PostgresUserDao).to.be.true
    expect(PostgresUserDao.getInstance() === service.users)
  });

  test('can change password', async () => {
  })
});

