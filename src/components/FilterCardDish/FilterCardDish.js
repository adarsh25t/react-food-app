import React from 'react'
import './FilterCardDish.css';

function FilterCardDish({item,showPopup}) {
    return (
        <div className="filter-item">
            <img src={item.strMealThumb} alt="" />
            <h2>{item.strMeal}</h2>
            <div><button>add to cart</button> <button onClick={()=>showPopup(item)}>View More</button></div>
        </div>
    )
}

export default FilterCardDish
