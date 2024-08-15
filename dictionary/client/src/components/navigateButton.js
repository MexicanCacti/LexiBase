import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavigateButton({ page, text, className}){
    const navigate = useNavigate();

    const handleClick = () => {
        if(page === 'home'){
            navigate('/');
        }
        else if(page === 'create'){
            navigate('/create');
        }
        else if(page === 'review'){
            navigate('/review');
        }
        else if(page === 'add'){
            navigate('/add');
        }
        else{}
    };

    return(
        <button onClick={handleClick} className={className}>
            <p>{text}</p>
        </button>
    );
}

export default NavigateButton;