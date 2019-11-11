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
app.use(express.json());
// (add middleware utils: logging, cors, static files from public)
// app.use(...)


// API Routes
// http method and path...
app.get ('/api/cities', async (req, res) => {

    try {
        const result = await client.query(`
        SELECT
                c.*,
                r.name as region
            FROM cities c
            JOIN regions r
            ON c.region_id = r.id
            ORDER BY c.year;
            `);

        
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});

app.get('/api/cats/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await client.query(`
                SELECT
                c.*,
                r.name as region
            FROM cities c
            JOIN regions r
            ON c.region_id = r.id
            WHERE c.id = $1;
        `,
        [id]);

        const city = result.rows[0];
        if (!city) {
            res.status(404).json({
                error: `City id ${id} does not exist`
            });
        }
        else {
            res.json(result.rows[0]);
        }

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }

});
   
app.post('/api/cities', async (req, res) => {
    const city = req.body;

    try {
        const result = await client.query (`
            INSERT INTO cities (name, year, westcoast, nickname, region_id, url)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
            `,
        [city.name, city.year, city.isWestcoast, city.nickname, city.region, city.url]
        );
        res.json(result.rows[0]);    
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.get('/api/region', async (req, res) => {

    try {
        const result = await client.query(`
            SELECT *
            FROM regions
            ORDER BY name;
        `);
        res.json(result.rows);
    }
    catch (err) {
        console.log(err);
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