// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// (add cors, pg, and morgan...)

// Database Client
// (create and connect using DATABASE_URL)
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();


// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
// (add middleware utils: logging, cors, static files from public)
// app.use(...)


// API Routes
// http method and path...
app.get ('/api/cities', async (req, res) => {

    try {
        const result = await client.query(`
        SELECT
            id,
            name,
            year,
            is_westcoast as "isWestcoast",
            nickname,
            region
        FROM CITIES;
            `);
        
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});
   


// Start the server
// (use PORT from .env!)

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});