/* eslint-disable no-unused-vars */
const { app } = require('../../app');
const { db } = require('../../models/index');
const { findOrCreateMatchingList } = require('../list_manager');

describe('test the findOrCreateMatchingList method', () => {
  const testDb = db;

  beforeAll(async () => {
    await testDb.sequelize.sync({ force: true });
  });

  it('should create a new List instance', async () => {
    const itemType = 'Book';
    const listId = await findOrCreateMatchingList(itemType);

    const lists = await testDb.List.findAll();

    const listType = lists[0].dataValues.type;

    expect(listType).toBe(itemType);
  });

  it('should not create a new List instance', async () => {
    const itemType = 'Book';
    const listId = await findOrCreateMatchingList(itemType);
    const lists = await testDb.List.findAll();
    expect(lists.length).toBe(1);
  });

  afterAll(async () => {
    await testDb.sequelize.close();
  });
});
