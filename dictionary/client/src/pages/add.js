import React from 'react';

import NavigateButton from '../components/navigateButton';
import '../styles/global.css'
import '../styles/add.css'


function Add(){

    return(
        <div className="container">
            <div className="header">
                <NavigateButton page="home" text="Home" className="header-button"/>
                <NavigateButton page="create" text="Create" className="header-button"/>
                <NavigateButton page="review" text="Review" className="header-button"/>
            </div>

            <div className="content">
                <div className="type-word">
                    
                    <h2>Input word to add: </h2>
                    <input type="text" id="addWord"></input>
                </div>

                <div className="results">
                    <h2>Search Results:</h2>
                </div>

                <div className="listWords">
                <h2>List of Words: </h2>
                <input type="textbox" id="wordList" disabled></input>
                </div>
            </div>

        </div>

    );
}

export default Add;