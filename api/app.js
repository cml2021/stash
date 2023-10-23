const express = require('express');
const { testDatabaseConnection } = require('./models/index');
const items = require('./routes/items');

const app = express();
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

module.exports = { app };
