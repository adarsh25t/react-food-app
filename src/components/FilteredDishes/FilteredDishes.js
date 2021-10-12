import React from 'react'
import './FilteredDishes.css'
function FilteredDishes(props) {
    

    let MenuCategory = props.menucategories.map((category)=>{
        return(
            
            <div className="category">
                <h2>{category.strCategory}</h2>
            </div>
        )
    })
    return (
        <div className="filtered-dishes">
            <h1 className="heading">Choose your dishes</h1>
            <p className="heading-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia asperiores provident itaque?</p>
            <div className="menucategory">
                {MenuCategory}
            </div>
        </div>
    )
}

export default FilteredDishes;
