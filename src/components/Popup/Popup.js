import React, { useContext } from "react";
import { DispatchContext } from "../../Context/AppProvider";
import "./Popup.css";

function Popup({ closepopup, currentDish, AddToCart }) {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="popup">
      <div className="popup-details">
        <i class="far fa-window-close" onClick={closepopup}></i>
        <h2>
          Dish <span>details</span>
        </h2>
        <div className="pop-details">
          <img src={currentDish.strMealThumb} alt="" className="details-img" />
          <div className="detail">
            <h3>{currentDish.strMeal}</h3>
            <h1>{currentDish.strCategory}</h1>
            <p>{currentDish.strInstructions}</p>
          </div>
        </div>
        <h4>
          <span>{currentDish.strIngredient1}</span>
          <span>{currentDish.strIngredient2}</span>
          <span>{currentDish.strIngredient3}</span>
          <span>{currentDish.strIngredient4}</span>
          <span>{currentDish.strIngredient5}</span>
          <span>{currentDish.strIngredient6}</span>
        </h4>
        <button
          onClick={() =>
            dispatch({
              type: "Add_To_Cart",
              payload: {
                title: currentDish.strMeal,
                images: currentDish.strMealThumb,
              },
            })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Popup;
