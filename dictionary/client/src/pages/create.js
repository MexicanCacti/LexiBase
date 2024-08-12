import React from 'react';

import '../styles/create.css'
import CreateDatabaseForm from '../components/createDatabaseForm';


function Create(){
    const handleCreateDatabase = async (dbName) => {
        try{
            const response = await fetch('/create-database', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({dbName}),
            });

            if(response.ok){
                const result = await response.json();
                console.log(result.message);
            }
            else{
                console.error('Failed to create the database');
            }
        }
        catch (error){
            console.error('Error:', error);
        }
    };

    return(
        <div className="container">
            <div className="header">
                <h1>Header</h1>
            </div>

            <div className="content">
                <h1>Create a New Database</h1>
                <CreateDatabaseForm create={handleCreateDatabase} />
            </div>

        </div>

    );
}

export default Create;