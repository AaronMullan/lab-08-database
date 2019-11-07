require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const cities = require('./cities.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            cities.map(city => {

                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                return client.query(`
                    INSERT INTO cities (name, year, is_westcoast, nickname)
                    VALUES ($1, $2, $3, $4);

                `,
                [city.name, city.year, city.is_westcoast, city.nickname]);



            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}
