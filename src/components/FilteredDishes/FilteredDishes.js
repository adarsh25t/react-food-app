import React, { useState } from 'react'
import './FilteredDishes.css'
function FilteredDishes(props) {
    
  
   let [allmenus,setallmenus] = useState(props.specialmenu);
   let [filteritem,setfilteritem] = useState([]);
  



   function CheckFilteredDish(filterName){

        let FilteredDishesAre = allmenus.filter((items)=>{
            return filterName === items.strCategory
        }).map((items)=>{
            return(
                <div className="filter-item">
                    <img src={items.strMealThumb} alt="" />
                    <h2>{items.strMeal}</h2>
                    <div><button>add to cart</button> <h3>$32</h3></div>
                </div>
         )
      })
      setfilteritem(FilteredDishesAre);
     
   }
   

   
   
    let MenuCategory = props.menucategories.map((category)=>{
        return(
            
            <div className="category" onClick={()=>{
                CheckFilteredDish(category.strCategory)
            }}>
                <h2 >{category.strCategory}</h2>
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
            <div className="filtered-dishes-list">
             {filteritem}
            </div>
        </div>
    )
}

export default FilteredDishes;
