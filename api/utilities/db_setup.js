require('dotenv').config();
const { Pool } = require('pg')

function initializeDatabase() {

  const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  })
  
  return pool;
}

module.exports.initializeDatabase = initializeDatabase()