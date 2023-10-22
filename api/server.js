const express = require('express');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const { testDatabaseConnection } = require('./config/db');
const { ITEM_TYPES } = require('./constants')
const { createItem } = require('./managers/item_manager')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

try { 
  testDatabaseConnection();   
} catch (error) {
  console.log(error);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/items', asyncHandler(async (req, res) => {
  const data = req.body;
  const name = data['name'];
  const type = data['type'];
  /* TODO: figure out how to recognize when db responds with an error */

  /* Validate request params */
  if (name == null || name == '') {
    res.status(400)
    .send('Item name cannot be empty')
  } else if (typeof(name) != 'string') {
    res.status(400)
    .send('Item name must be a string')
  } else if (name.length > 255) {
    res.status(400)
    .send('Item name must be 255 characters or less')
  } else if (!ITEM_TYPES.includes(type)) {
    res.status(400)
    .send('Item type not recognized')
  }

  // /* Create new Item instance */
  const response = await createItem(name, type);
  if (response instanceof Error) {
    res.status(500)
    .send('Item could not be created')
  } else {
    res.body = response;
    res.status(500)
    .send(201, 'Item created successfully')
  }
}))

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})