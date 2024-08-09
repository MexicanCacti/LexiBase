import React from 'react'

function Button({ text, onClick}){
    return(
        <button onClick={onClick} className={"home-button"}>
            {text}
        </button>
    );
}

export default Button;