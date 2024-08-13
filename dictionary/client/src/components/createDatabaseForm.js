import React from 'react'
import {useState} from 'react';
import {createDatabase} from './backRequests';

function CreateDatabaseForm(){
    const [dbName, setDbName] = useState("");
    const [message, setMessage] = useState("");

    const Submit = async (e) => {
        e.preventDefault();
        if (dbName) {
            try {
                const response = await createDatabase(dbName);
                if(response.data.success){
                    setMessage(`Database "${dbName}" successfully created`);
                    window.location.reload();    
                }
                else{
                    setMessage(response.data.message);
                }
            } catch (error) {
                console.error('Error creating database:', error.message);
                setMessage('An error occurred while creating the database.');
            }
        }
    };

    return(
        <form onSubmit={Submit}>
            <label htmlFor="dbName">Name of Dictionary: </label>
            <input type="text" placeholder="Dictionary Name" id="dbName" value={dbName} onChange={(e) => setDbName(e.target.value)} required/><br/>
            <button type="submit">Create Dictionary</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default CreateDatabaseForm;