const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'Trybe@12345',
  database: 'mvc_example'});

module.exports = connection;