import React from 'react'
import {useState} from 'react';
import {createDatabase} from './backRequests';

function CreateDatabaseForm({create}){
    const [dbName, setDbName] = useState("");

    const Submit = async (e) => {
        e.preventDefault();
        if (dbName) {
            try {
                const response = await createDatabase(dbName);
                console.log('Database created:', response.data);
            } catch (error) {
                console.error('Error creating database:', error.message);
            }
        }
    };

    return(
        <form onSubmit={Submit}>
            <label htmlFor="dbName">Name of Dictionary: </label>
            <input type="text" placeholder="Dictionary Name" id="dbName" value={dbName} onChange={(e) => setDbName(e.target.value)} required/><br/>
            <button type="submit">Create Dictionary</button>
        </form>
    );
}

export default CreateDatabaseForm;