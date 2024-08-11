import React from 'react'

function Button({ text, onClick}){
    return(
        <button onClick={onClick} className={"home-button"}>
            <div id='button-text'>{text}</div>
        </button>
    );
}

export default Button;