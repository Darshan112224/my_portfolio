const { Pool } = require('pg');

// Create a connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'portfolio_db',
    password: 'Darshan@1611',
    port: 5432, // Default PostgreSQL port
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error:', err));

module.exports = { pool };
