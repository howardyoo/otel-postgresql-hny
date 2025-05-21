const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

console.log('process.env.POSTGRES_USER', process.env.POSTGRES_USER);
console.log('process.env.POSTGRES_HOST', process.env.POSTGRES_HOST);
console.log('process.env.POSTGRES_DB', process.env.POSTGRES_DB);
console.log('process.env.POSTGRES_PASSWORD', process.env.POSTGRES_PASSWORD);
console.log('process.env.POSTGRES_SERVER_PORT', process.env.POSTGRES_SERVER_PORT);

// PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  database: process.env.POSTGRES_DB || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.POSTGRES_SERVER_PORT || 5432,
});

// Test endpoint
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      message: 'Database connection successful',
      timestamp: result.rows[0].now 
    });
  } catch (err) {
    console.error('Database connection error:', err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
}); 