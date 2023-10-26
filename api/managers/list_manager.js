const { db } = require('../models/index');

async function findOrCreateMatchingList(itemType) {
  // finds or creates a list matching the item's type
  try {
    const [list, created] = await db.List.findOrCreate(
      {
        where: { type: itemType },
        defaults: {
          type: itemType,
        },
      },
    );
    if (created) console.log(`New list ${itemType} created`);
    const listId = list.dataValues.id;
    return listId;
  } catch (error) {
    console.log('Matching list could not be found or created', error);
    return null;
  }
}

module.exports = { findOrCreateMatchingList };
