import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';

function CreateDatabaseForm({create}){
    const [dbName, setDbName] = useState("");
    const [port, setPort] = useState("");

    // fetch port number backend is running on
    useEffect(() => {
        const fetchPort = async () => {
            try {
                const response = await fetch('/create-database');
                //const text = await response.text(); // Get response as text first
                //console.log('Response text: ', text);
                const data = await response.json();
                setPort(data.port);
                console.log(`Backend on port: ${data.port}`);
            } catch (error) {
                console.error('Error fetching port: ', error.message);
            }
        };
    
        fetchPort();
    }, []);
    

    const Submit = async (e) => {
        e.preventDefault(); // Prevent default form submit
        if(dbName){
            try{
                await create(dbName);
                console.log('SuccessFul Submit :)');
            }
            catch (error){
                console.error('Error creating database: ', error.message);
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