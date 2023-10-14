const express = require('express')
require('dotenv').config();
const initializeDatabase = require('./utilities/db_setup')
const app = express()
const port = process.env.PORT

initializeDatabase

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})