import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../components/homeButton';
import ListDatabasesMenu from '../components/listDatabases';
import '../styles/global.css';
import '../styles/home.css';

function Home(){
    const navigate = useNavigate();
    const homeClick = (page) => {
        if(page === 'create'){
            navigate('/create');
        }
        else if(page ==='review'){
            navigate('/review');
        }
        else if(page === 'add'){
            navigate('/add');
        }
        else{
            alert('No page added');
        }
      };

      const [selectedDb, setSelectedDb] = useState("");

    return(
        <div className="container">
            <div className="header">
                <ListDatabasesMenu onSelectDb={setSelectedDb} />
            </div>

            <div className="card">
                <div id="new-dict" >
                    <Button text="Create or Delete a Dictionary" onClick={() => homeClick('create')}/>
                </div>

                <div id="review-dict">
                    <Button text="Option to review selected dict" onClick={() => homeClick('review')}/>
                </div>

                <div id="add-to-dict">
                    <Button text="Option to add to selected dict" onClick={() => homeClick('add')}/>
                </div>


            </div>

        </div>
    );
}

export default Home;