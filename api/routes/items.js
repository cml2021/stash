const express = require('express');
const asyncHandler = require('express-async-handler');

const { createItem } = require('../managers/item_manager');
const { ITEM_TYPES } = require('../constants');
const { InstanceError } = require('sequelize');

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
  const data = req.body;
  const { name, type } = data;

  /* Validate request params */
  if (name == null || name === '') {
    res.status(400)
      .send('Item name cannot be empty');
  } else if (name.length > 255) {
    res.status(400)
      .send('Item name must be 255 characters or less');
  } else if (!ITEM_TYPES.includes(type)) {
    res.status(400)
      .send('Item type not recognized');
  }

  // /* Create new Item instance */
  const response = await createItem(name, type);
  if (response instanceof Error) {
    res.status(500)
      .send('Item could not be created');
  } else {
    res.status(201)
      .json(response.dataValues);
  }
}));

module.exports = router;
