const express = require('express')
require('dotenv').config();
const { sequelize, testDatabaseConnection } = require('./config/db')
const app = express()
const port = process.env.PORT

try { 
  testDatabaseConnection();   
} catch (error) {
  console.log(error);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})