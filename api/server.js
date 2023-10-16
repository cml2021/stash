const express = require('express')
require('dotenv').config();
const { testDbConnection } = require('./config/db')
const app = express()
const port = process.env.PORT

testDbConnection()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})