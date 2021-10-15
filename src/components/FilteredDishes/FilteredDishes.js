import React, { useContext, useState ,useEffect} from 'react'
import FilterCardDish from '../FilterCardDish/FilterCardDish';
import Pagination from '../Pagination/Pagination';
import Popup from '../Popup/Popup';
import './FilteredDishes.css'
import { AllMenuContext } from '../AllMenuContext';



function FilteredDishes() {
    
    let [menucategories,setmenucategories] = useState([]);
    let [singleDish,setsingleDish] = useState([])
    
    // filter dish state
    let [filteritem,setfilteritem] = useState([]);
    let [activeDish,setactiveDish] = useState('Beef');
    
    // menus take from usecontext
    const Allmenu = useContext(AllMenuContext)
    
    // pagination state
    let [currentPage,setcurrentPage] = useState(1);
    let [itemsPerPage,setitemsPerPage] = useState(4);
   
    // popup states
    let [filterpopup,setfilterpopup] = useState(false)
    let [currentDish,setcurrentDish] = useState();
   
    // pagination
    let indexofLastDish = currentPage * itemsPerPage; 
    let indexofFirstDish = indexofLastDish - itemsPerPage;
    let showTheDishes = filteritem.slice(indexofFirstDish,indexofLastDish);

    // main menu
    async function MenuCategories(){
        const API_URl = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URl);
        let Data = await response.json();
        setmenucategories(Data.categories)
    }
    // get single dish
    async function GetonlyOneDish(){
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URl);
        let Data = await response.json();
        setsingleDish(Data.meals)
    }
    useEffect(()=>{
        MenuCategories();
        GetonlyOneDish();
    },[])

    
    
    // show popup 
    function showPopupHandlers(item){
        setfilterpopup(true)
        setcurrentDish(item);
    }
    // clode popup
    function closePopupHandlers(){
        setfilterpopup(false);
    }
  
    // display one dish item page loading time
    let OneDish = singleDish.filter((item)=>{
        return item.strCategory === 'Beef';
    }).map(item=>{
        return <FilterCardDish item={item} showPopup={showPopupHandlers}/>
    });
   
    // pageination in one dish item page loading time
    let showTheDishesOnly = OneDish.slice(indexofFirstDish,indexofLastDish)

    // filtered dish item display
    function CheckFilteredDish(filterName){
        setactiveDish(filterName);
        setsingleDish([]);

        let FilteredDishesAre = Allmenu.filter((items)=>{
            return filterName === items.strCategory
        }).map((item)=>{
            return <FilterCardDish item={item} showPopup={showPopupHandlers}/>
        })
        setfilteritem(FilteredDishesAre);
    } 

     
    let MenuCategory = menucategories.map((category)=>{
        return(
            <div className="category" onClick={()=>{CheckFilteredDish(category.strCategory)}}>
                <h2 className={category.strCategory === activeDish? "activedish" : ""}>{category.strCategory}</h2>
            </div>
        )
    })


    return (
        <div className="filtered-dishes">
            {filterpopup &&  <Popup currentDish={currentDish} closepopup={closePopupHandlers}/>}
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
