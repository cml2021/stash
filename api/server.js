const express = require('express');
require('dotenv').config();

const { testDatabaseConnection } = require('./models/index');
const items = require('./routes/items');

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
try {
  testDatabaseConnection();
} catch (error) {
  console.log(error);
}

// Routes
app.use('/items', items);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
