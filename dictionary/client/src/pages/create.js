import React from 'react';
import {useState} from 'react';
import '../styles/global.css';
import '../styles/create.css';
import CreateDatabaseForm from '../components/createDatabaseForm';
import ListDatabasesMenu from '../components/listDatabases';
import { deleteDatabase } from '../components/backRequests';

function Create(){
    const [selectedDb, setSelectedDb] = useState("");


    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        console.log(`${selectedDb}`);
        if(selectedDb){
            try{
                const response = await deleteDatabase(selectedDb);
                console.log('Database deleted:', response.data);
                window.location.reload(); 
            }
            catch (error){
                console.error('Error deleting database:', error.message);
            }
        }
        else{
            console.log('No database selected');
        }
    }

    return(
        <div className="container">
            <div className="header">
                <h1>Buttons to go to home, add, review go here</h1>
            </div>

            <div className="content">
                <h1>Create a New Dictionary</h1>
                <CreateDatabaseForm />
                <br></br>
                <h2>Delete a Dictionary</h2>
                <form onSubmit={handleDeleteSubmit}>
                    <ListDatabasesMenu onSelectDb={setSelectedDb}/>
                    <button type="submit">Delete Dictionary</button>
                </form>
            </div>

        </div>

    );
}

export default Create;