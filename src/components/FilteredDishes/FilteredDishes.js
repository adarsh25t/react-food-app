import React, { useState } from 'react'
import Pagination from '../Pagination/Pagination';
import './FilteredDishes.css'
function FilteredDishes(props) {

   let [allmenus,setallmenus] = useState(props.specialmenu);
   let [filteritem,setfilteritem] = useState([]);
   let [activeDish,setactiveDish] = useState('Beef');

   let [currentPage,setcurrentPage] = useState(1);
   let [itemsPerPage,setitemsPerPage] = useState(4);
   
   
   let indexofLastDish = currentPage * itemsPerPage; 

   let indexofFirstDish = indexofLastDish - itemsPerPage;
   
   
   let showTheDishes = filteritem.slice(indexofFirstDish,indexofLastDish);

   let OneDish = props.singleDish.filter((item)=>{
       return item.strCategory === 'Beef'
   }).map(item=>{
    return(
        <div className="filter-item">
            <img src={item.strMealThumb} alt="" />
            <h2>{item.strMeal}</h2>
            <div><button>add to cart</button> <h3>$32</h3></div>
        </div>
 )
   })

  
   function CheckFilteredDish(filterName){
        setactiveDish(filterName);
        props.setsingleDish([])
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
            <div className="category" onClick={()=>{CheckFilteredDish(category.strCategory)}}>
                <h2 className={category.strCategory === activeDish? "activedish" : ""}>{category.strCategory}</h2>
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
                {OneDish}
                {filteritem.length !=0 ? showTheDishes : <div className="no-item"><h1 >No item found!</h1></div>}
            </div>
            <Pagination filteritem={filteritem} itemsPerPage={itemsPerPage}
                        setcurrentPage={setcurrentPage}/>
        </div>
    )
}

export default FilteredDishes;
