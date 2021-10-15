import React from 'react';
import './cardDish.css'
function CardDish({showpopup,dish}) {
    
  
    return (
        <div className="dish-card">
            <img src={dish.strMealThumb} alt="" onClick={()=>showpopup(dish)}/>
            <h2>{dish.strMeal}</h2>
        </div>
    )
}

export default CardDish;
