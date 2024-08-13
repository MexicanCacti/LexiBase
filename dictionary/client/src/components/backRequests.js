import axios from 'axios';

const fetchBackendPort = async () => {
    try{
        const response = await axios.get('/get-port');
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

export const createDatabase = async (dbName) => {
    return backendRequest('/databases/create-database', {
        method: 'POST',
        data: { dbName },
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const listDatabases = async() => {
    try{
        const response = await backendRequest('/databases/list-databases', {
            method: 'GET',
        });
        return response.data.databases; // An array of databases
    }
    catch (error) {
        console.error('Error fetching database names:', error.message);
        throw error; // handle error elsewhere
    }
};

export const deleteDatabase = async (dbName) => {
    return backendRequest('/databases/delete-database', {
        method: 'POST',
        data: {dbName},
        headers: {
            'Content-Type' : 'application/json',
        },
    });
};
/*
export const getDatabaseWords = async (dbName) => {
    return backendRequest('/databases/get-words', {
        method: 'POST',
        data: { dbName },
        headers: {
            'Content-Type' : 'application/json',
        },
    });
};

export const editDatabase = async (dbName, word) => {
    return backendRequest('/edit-database', {

    });
};

export const deleteDatabase = async (dbName, word) => {
    return backendRequest('/delete-database', {

    });
};

export const getWordFromDatabase = async(dbName, word) => {
    return backendRequest('/get-word-from-database', {

    });
};
*/