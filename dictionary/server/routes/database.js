
const express = require('express');
const {createDatabase, retrieveWords, listDatabases, deleteDatabase} = require('../services/databaseServices');

const router = express.Router();

router.post('/create-database', async (req, res) => {
    const { dbName } = req.body;

    if (!dbName) {
        return res.status(400).json({ message: 'Database name required' });
    }
    try {
        const db = await createDatabase(dbName);
        if(db.success){
            res.json(db);   // Database created
        }
        else{
            res.status(400).json(db); // Database already exists
        }
    } catch (error) {
        console.error('Error: ', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.post('/delete-database', async (req, res) => {
    const {dbName} = req.body;

    if(!dbName){
        return res.status(400).json({message: 'Database name required'});
    }

    try{
        const result = await deleteDatabase(dbName);
        res.json(result);
    }
    catch (error){
        console.error('Error: ', error.message);
        res.status(500).json({ success: false, message: 'Internal server error'});
    }

})

router.get('/get-words', async (req, res) => {
    const { dbName } = req.query;

    if (!dbName) {
        return res.status(400).json({ message: 'Database name is required' });
    }

    try {
        const words = await retrieveWords(dbName);
        res.json(words);
    } catch (error) {
        res.status(500).json({message: err.message});
    }
});

router.get('/list-databases', async (req, res) => {
    try {
        const databases = await listDatabases();
        res.json({ databases });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;