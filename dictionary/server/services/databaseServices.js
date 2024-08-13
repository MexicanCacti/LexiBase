/* Anything that has to do with with the SQLite tables goes here */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

async function createDatabase(dbName) {
    const dbDir = path.resolve(__dirname, '..', '..', 'databases');

    // Check if database folder exists; create if it doesn't
    if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir);
    }

    const dbPath = path.join(dbDir, `${dbName}.sqlite`);

    // Check if database already exists
    if (fs.existsSync(dbPath)) {
        console.log(`${dbName} already exists as a database`);
        return { success: false, message: `${dbName} already exists` };
    }

    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error creating database:', err.message);
                return reject({ success: false, message: 'Error creating database' });
            }

            console.log(`${dbName} successfully created`);

            InitTable(db)
                .then(() => {
                    db.close((err) => {
                        if (err) {
                            console.error('Error closing database:', err.message);
                        }
                    });
                    resolve({ success: true, message: `${dbName} created successfully` });
                })
                .catch((err) => {
                    db.close((err) => {
                        if (err) {
                            console.error('Error closing database:', err.message);
                        }
                    });
                    reject({ success: false, message: 'Error initializing table' });
                });
        });
    });
}

async function InitTable(db) {
    return new Promise((resolve, reject) => {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS words(
                word TEXT PRIMARY KEY,
                definition TEXT,
                synonyms TEXT,
                antonyms TEXT)`;

        db.run(createTableQuery, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
                return reject(err);
            } else {
                console.log('Table created successfully.');
                resolve();
            }
        });
    });
}

async function deleteDatabase(dbName){
    const dbPath = path.join(__dirname, '..', '..', 'databases', `${dbName}.sqlite`);

    if (!fs.existsSync(dbPath)) {
        throw new Error('Database not found');
    }

    return new Promise((resolve, reject) => {
        fs.unlink(dbPath, (err) => {
            if(err){
                console.error('Error deleting database:', err.message);
                return reject(err);
            }
            console.log(`${dbName} database deleted successfully`);
            resolve({success: true, message: `${dbName} database deleted`});
        });
    });
}

async function retrieveWords(dbName) {
    const dbPath = path.join(__dirname, '..', '..', 'databases', `${dbName}.sqlite`);

    if (!fs.existsSync(dbPath)) {
        throw new Error('Database not found');
    }

    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(dbPath);
        const query = 'SELECT * FROM words';
        db.all(query, [], (err, rows) => {
            db.close();
            if (err) {
                console.error('Error retrieving words:', err.message);
                return reject(err);
            }
            resolve(rows);
        });
    });
}

async function listDatabases() {
    const dbDir = path.resolve(__dirname, '..', '..', 'databases');

    return new Promise((resolve, reject) => {
        fs.readdir(dbDir, (err, files) => {
            if (err) {
                return reject(err);
            }

            const databases = files.filter(file => file.endsWith('.sqlite'))
                .map(db => path.basename(db, '.sqlite'));

            resolve(databases);
        });
    });
}

module.exports = { createDatabase, retrieveWords, listDatabases, deleteDatabase};