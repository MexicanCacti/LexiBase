import React from 'react';
import {useState} from 'react';
import NavigateButton from '../components/navigateButton';
import { fetchWordData } from '../components/api';
import '../styles/global.css'
import '../styles/add.css'


function Add({selectedDb, setSelectedDb}){
    console.log(selectedDb);
    const [word, setWord] = useState("");

    const handleFetchWord = async (event) => {
        event.preventDefault();

        if(word.trim() === ""){
            return;
        }

        try{
            const wordData = await fetchWordData(word);
            console.log(wordData);
        }
        catch (error){
            console.error('Error fetching word data: ', error);
        }
    }
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
                    <form onSubmit={handleFetchWord}>
                        <input type="text" id="addWord" value = {word} onChange={(event) => setWord(event.target.value)}></input>
                        <button type="submit">Search Word</button>
                    </form>
                    
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