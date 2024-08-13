import React from 'react';
import {useState, useEffect} from 'react';
import { listDatabases } from './backRequests'

function ListDatabasesMenu ({onSelectDb}) {
    const [databases, setDatabases] = useState([]);

    useEffect(() => {
        const fetchDatabases = async () => {
            try{
                const dbList = await listDatabases();
                setDatabases(dbList);
            }
            catch (error){
                console.error('Error fetching databases: ', error.message);
            }
        };

        fetchDatabases();
    }, []);

    const handleChange = (event) => {
        onSelectDb(event.target.value);
    };

    return (
        <p>
            Dict Select: 
            <select onChange={handleChange}>
                <option value="">Select a dictionary</option>
                {databases.length > 0 ? (
                    databases.map((db) => (
                        <option key={db} value={db}>
                            {db}
                        </option>
                    ))
                ) : (
                    <option value="">No databases available</option>
                )}
            </select>
        </p>
    );
}


export default ListDatabasesMenu;