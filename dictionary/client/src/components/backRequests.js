import axios from 'axios';

const fetchBackendPort = async () => {
    try{
        const response = await axios.get('/create-database');
        const { port } = response.data;
        return port;
    }
    catch (error){
        console.log('Error fetching backend port:', error.message);
        return 3002; // default port
    }
};


const backendRequest = async (endpoint, options = {}) => {
    const port = await fetchBackendPort();
    const url = `http://localhost:${port}${endpoint}`;
    return axios({url, ...options});
};

// Function to create a database
export const createDatabase = async (dbName) => {
    return backendRequest('/create-database', {
        method: 'POST',
        data: { dbName },
        headers: {
            'Content-Type': 'application/json',
        },
    });
};