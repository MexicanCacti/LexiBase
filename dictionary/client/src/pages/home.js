import React from 'react';
import NavigateButton from '../components/navigateButton';
import ListDatabasesMenu from '../components/listDatabases';
import '../styles/global.css';
import '../styles/home.css';

function Home({selectedDb, setSelectedDb}){

    return(
        <div className="container">
            <div className="header">
                <ListDatabasesMenu onSelectDb={setSelectedDb} />
            </div>

            <div className="card">
                <div id="new-dict" >
                    <NavigateButton page="create" text="Create or Delete a Dictionary" className="home-button"/>
                </div>

                <div id="review-dict">
                    <NavigateButton page="review" text="Option to review selected dict" className="home-button"/>
                </div>

                <div id="add-to-dict">
                    <NavigateButton page="add" text="Option to add to selected dict" className="home-button"/>
                </div>


            </div>

        </div>
    );
}

export default Home;