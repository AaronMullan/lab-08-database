require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const cities = require('./cities');
const regions = require('./regions');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        const savedRegions = await Promise.all(
            regions.map(async region => {
                const result = await client.query(`
                    INSERT INTO regions (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [region]);

                return result.rows[0];
            })
        );
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            cities.map(city => {
                
                const region = savedRegions.find(region => {
                    return region.name === city.region;
                });
                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
               
                return client.query(`
                    INSERT INTO cities (name, year, is_westcoast, nickname, region_id)
                    VALUES ($1, $2, $3, $4, $5);
                `,
                [city.name, city.year, city.isWestcoast, city.nickname, region.id]);
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

