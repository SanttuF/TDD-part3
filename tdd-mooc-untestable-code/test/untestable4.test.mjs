import { afterAll, beforeAll, describe, test } from "vitest";
import { PasswordService, PostgresUserDao } from "../src/untestable4copy.mjs";
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

  test('can save and get people into and from the database', async () => {
    await service.users.save({userId: 1, passwordHash: argon2.hashSync('abc123')})
    const user = await service.users.getById(1)
    expect(user).toBeDefined()
    expect(user.userId).to.equal(1)
  })

  test('cant get users that doesnt exist', async () => {
    const user = await service.users.getById(4)
    expect(user).to.equal(null)
  })

  test('can change password', async () => {
    service.changePassword(1, 'abc123', 'def456')
    const user = await service.users.getById(1)
    expect(await argon2.verify(user.passwordHash, 'def456')).to.be.true
  })

  test('cant change with wrong password', async () => {
    try{
      await service.changePassword(1, 'wrong password', 'qwer')
      expect(false).to.be.true
    } catch (e) {
      expect(true).to.be.true
    }
  })
});

