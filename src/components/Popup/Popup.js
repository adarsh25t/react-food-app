import React from 'react';
import './Popup.css';
function Popup({closepopup,currentDish,AddToCart}) {
    return (
        <div className="popup">
            <div className="popup-details">
                <i class="far fa-window-close" onClick={closepopup}></i>
                <h2>Dish details</h2>
                <img src={currentDish.strMealThumb} alt="" />
                <h3>{currentDish.strMeal}</h3>
                <h1>{currentDish.strCategory}</h1>
                <p>{currentDish.strInstructions}</p>
                <h4><span>{currentDish.strIngredient1}</span><span>{currentDish.strIngredient2}</span>
                <span>{currentDish.strIngredient3}</span><span>{currentDish.strIngredient4}</span>
                <span>{currentDish.strIngredient5}</span><span>{currentDish.strIngredient6}</span></h4>
                <button onClick={()=>AddToCart(currentDish.strMealThumb, currentDish.strMeal)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Popup;
