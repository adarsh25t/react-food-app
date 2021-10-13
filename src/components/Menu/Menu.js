import React, { useEffect, useState } from 'react';
import './Menu.css'
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import HeaderCard from '../HeaderCard/HeaderCard';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import Loader from '../Loader/Loader';
function Menu() {

    let [menu_1, setmenu_1] = useState([]);
    let [specialmenu, setspecialmenu] = useState([]);
    let [menucategories,setmenucategories] = useState([]);
    let [singleDish,setsingleDish] = useState([])
    let [loading,setloading] = useState(false);

    let prices = [23,14,18,22,12,7,9,21];
    let star = ['⋆','⋆⋆','⋆⋆⋆','⋆⋆⋆⋆','⋆⋆⋆⋆⋆']
    
    // speacial menu card
    async function  SpeacialMenu(){
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        let response = await fetch(API_URl)
        let Data = await response.json()
        setmenu_1(Data.meals)
    }
     // speacial dish list
    async function SpecialDish(){
        setloading(true);
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URl);
        let Data = await response.json();
        setspecialmenu(Data.meals);
        setloading(false);
        
    }
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
        SpeacialMenu();
        SpecialDish();
        MenuCategories();
        GetonlyOneDish();
    },[])

    return (
        <div>
            <HeaderCard SpeacialMenu = {menu_1} prices = {prices} star = {star}/>
            {!loading ? <SpecialDishes specialmenu = {specialmenu}/> : <Loader/>}
            {!loading ? <FilteredDishes menucategories = {menucategories} 
                        specialmenu = {specialmenu} singleDish = {singleDish}
                        setsingleDish = {setsingleDish}/> : null}
        </div>
    )
}

export default Menu;
