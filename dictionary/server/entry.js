const express = require('express');
const cors = require('cors');
const databaseRoutes = require('./routes/database');

(async () => {
    console.log('Starting backend...');
    const {default : getPort } = await import('get-port');
    const app = express();
    app.use(cors());
    const port = await getPort({port:3002});

    // parse JSON requests
    app.use(express.json());

    // Expose the port for retrival from frontend
    app.get('/get-port', (req, res) => {
        res.json({port});
    });

    // database routes
    app.use('/databases', databaseRoutes);

    app.listen(port, () => {
        console.log(`Backend listening on port ${port}`);
    });
})();