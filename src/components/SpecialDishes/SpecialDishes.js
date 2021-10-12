import React from 'react'
import DishDetails from '../DishDetails/DishDetails';
import './Specialdishes.css'
function SpecialDishes(props) {
     
    let dishItemlength = 8;
    let specialDish = props.specialmenu.map((dish,index)=>{
        if(index<dishItemlength){
            return(
                <div className="dish-card">
                    <img src={dish.strMealThumb} alt=""/>
                    <h2>{dish.strMeal}</h2>
                </div>
            )
        }
    })
    return (
        <div className="special-dishes">
            <h1 className="heading">Our Special Dishes</h1>
            <p className="heading-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia asperiores provident itaque?</p>
            <div className="special-dish">
                {specialDish}
            </div>
        </div>
    )
}

export default SpecialDishes;
