const { Pool } = require('pg');

const pool = new Pool({
  user: 'deniz',
  password: 'postgres',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'AtiDB'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};