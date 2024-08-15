import React from 'react';

import NavigateButton from '../components/navigateButton';
import '../styles/global.css';
import '../styles/review.css';


function Review({selectedDb, setSelectedDb}){
    return(
        <div className="container">
            <div className="header">
                <NavigateButton page="home" text="Home" className="header-button"/>
                <NavigateButton page="create" text="Create" className="header-button"/>
                <NavigateButton page="add" text="Add" className="header-button"/>
            </div>

            <div className="content">
                <div className="type-word">
                    <p>Input word to search: </p>
                </div>

                <div className="results">

                </div>

                <div className="listWords">

                </div>
            </div>

        </div>

    );
}

export default Review;