const { db } = require('../models/index');

async function createItem(itemName, itemType) {
  try {
    const item = await db.Item.create({
      name: itemName,
      type: itemType,
    });
    return item;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

module.exports = { createItem };
