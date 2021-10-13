import React from 'react'
import './FilterCardDish.css';

function FilterCardDish(props) {
    return (
        <div className="filter-item">
            <img src={props.item.strMealThumb} alt="" />
            <h2>{props.item.strMeal}</h2>
            <div><button>add to cart</button> <button>View More</button></div>
        </div>
    )
}

export default FilterCardDish
