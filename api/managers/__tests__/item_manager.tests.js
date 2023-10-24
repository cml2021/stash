/* eslint-disable no-unused-vars */
const supertest = require('supertest');
const { app } = require('../../app');
const { db } = require('../../models/index');
const { createItem } = require('../item_manager');

describe('test the createItem method', () => {
  const testDb = db;
  console.log(testDb);

  beforeAll(async () => {
    await testDb.sequelize.sync({ force: true });
  });

  it('should create a new Item instance', async () => {
    const name = 'The Road';
    const type = 'Book';

    const item = await createItem(name, type);
    expect(item.dataValues.name).toBe(name);
    expect(item.dataValues.type).toBe(type);
  });

  afterAll(async () => {
    await testDb.sequelize.close();
  });
});
