import React from 'react';

import '../styles/create.css'
import CreateDatabaseForm from '../components/createDatabaseForm';

function Create(){
    return(
        <div className="container">
            <div className="header">
                <h1>Header</h1>
            </div>

            <div className="content">
                <h1>Create a New Database</h1>
                <CreateDatabaseForm />
            </div>

        </div>

    );
}

export default Create;