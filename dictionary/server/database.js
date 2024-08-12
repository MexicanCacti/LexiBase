const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const cors = require('cors');


(async () => {
    const {default : getPort } = await import('get-port');
    const app = express();
    app.use(cors());
    const port = await getPort({port:3002});

    // parse JSON requests
    app.use(express.json());

    // Expose the port for retrival from frontend
    app.get('/create-database', (req, res) => {
        res.json({port});
    });

    app.post('/create-database', (req, res) => {
        const {dbName} = req.body;

        if(!dbName){
            return res.status(400).json({message: 'Database name required'});
        }
        try{
            const db = CreateDatabase(dbName);
            if(db){
                res.json({message: `${dbName} created successfully`});
            }
            else{
                res.status(500).json({message: 'Error creating database'});
            }
        }
        catch (error){
            console.error('Error: ', error.message);
            res.status(500).json({message: 'Internal server error'});
        }
    });

    app.listen(port, () => {
        console.log(`Backend listening on port ${port}`);
    });
})();

function CreateDatabase(dbName){
    const dbDir = path.resolve(__dirname, '..', 'databases');

    // check if database folder exists, create if it doesn't
    if (!fs.existsSync(dbDir)){
        fs.mkdirSync(dbDir);
    }

    const dbPath = path.join(dbDir, `${dbName}.sqlite`);

    // check if database exists already
    if(fs.existsSync(dbPath)){
        console.log(`${dbName} already exists as a database`);
        return null;
    }

    const db = new sqlite3.Database(dbPath, (err) => {
        if (err){
            console.log('Error on creation of database: ', err.message);
        }
        else{
            console.log(`${dbName} sucessfully created`);
            InitTable(db);
        }
    });

    return db;
}

function InitTable(db){
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS words(
        word TEXT PRIMARY KEY,
        definition TEXT,
        synonyms TEXT,
        antonyms TEXT)`;

    db.run(createTableQuery, (err) => {
        if(err){
            console.log('Error creating table: ', err.message);
        }
        else{
            console.log('Table created sucessfully.');
        }
    });
}