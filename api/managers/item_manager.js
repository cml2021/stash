const { db } = require('../models/index');
const { findOrCreateMatchingList } = require('./list_manager');

async function createItem(itemName, itemType) {
  // Creates a new item and adds it to the appropriate list
  try {
    const listId = await findOrCreateMatchingList(itemType);

    const item = await db.Item.create({
      name: itemName,
      type: itemType,
      ListId: listId,
    });
    return item;
  } catch (error) {
    console.log('Item could not be created', error);
    return null;
  }
}

module.exports = { createItem };
