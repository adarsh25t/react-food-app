import React, { useState } from 'react'
import FilterCardDish from '../FilterCardDish/FilterCardDish';
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
  
    // display one dish item page loading time
    let OneDish = props.singleDish.filter((item)=>{
        return item.strCategory === 'Beef';
    }).map(item=>{
        return <FilterCardDish item={item}/>
    });
   
    // pageination in one dish item page loading time
    let showTheDishesOnly = OneDish.slice(indexofFirstDish,indexofLastDish)

    // filtered dish item display
    function CheckFilteredDish(filterName){
        setactiveDish(filterName);
        props.setsingleDish([]);

        let FilteredDishesAre = allmenus.filter((items)=>{
            return filterName === items.strCategory
        }).map((item)=>{
            return <FilterCardDish item={item}/>
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
                {showTheDishesOnly} 
                {showTheDishesOnly.length !=0 ||filteritem.length !=0 ? showTheDishes : <div className="no-item"><h1 >No item found!</h1></div>}
            </div>
            <Pagination filteritem={filteritem} itemsPerPage={itemsPerPage}
                        setcurrentPage={setcurrentPage}
                        OneDish={OneDish}/>
        </div>
    )
}

export default FilteredDishes;
