const { db } = require('../models/index');
const { findMatchingList } = require('./list_manager');

async function createItem(itemName, itemType) {
  try {
    // const listId = findMatchingList(itemType);
    const list = await db.List.create({
      type: itemType,
    });

    const listId = list.dataValues.id;

    const item = await db.Item.create({
      name: itemName,
      type: itemType,
      ListId: listId,
    });
    return item;
  } catch (error) {
    console.log(error);
    // throw new Error();
  }
}

module.exports = { createItem };
