import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../components/homeButton';
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

    return(
        <div className="container">
            <div className="header">
                <p>Dict Select: 
                <select>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
                </select>
                </p>
            </div>

            <div className="card">
                <div id="new-dict" >
                    <Button text="Option to create new dict" onClick={() => homeClick('create')}/>
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