import React from 'react'
import './FilterCardDish.css';

function FilterCardDish({item,showPopup}) {
    return (
        <div className="filtered-card" onClick={()=>showPopup(item)}>
            <img src={item.strMealThumb} alt="" />
            <h2>{item.strMeal}</h2>
        </div>
    )
}

export default FilterCardDish
