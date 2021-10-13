import React from 'react';
import './cardDish.css'
function CardDish(props) {
    
    function showPopupHandler(){
        console.log();
    }

    return (
        <div className="dish-card">
            <img src={props.dish.strMealThumb} alt="" onClick={showPopupHandler}/>
            <h2>{props.dish.strMeal}</h2>
        </div>
    )
}

export default CardDish;
