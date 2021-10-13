import React, { useEffect, useState } from 'react';
import './Menu.css'
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import HeaderCard from '../HeaderCard/HeaderCard';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
function Menu() {

    let [menu_1, setmenu_1] = useState([]);
    let [specialmenu, setspecialmenu] = useState([]);
    let [menucategories,setmenucategories] = useState([]);
    let [loading,setloading] = useState(true)

    let prices = [23,14,18,22,12,7,9,21];
    let star = ['⋆','⋆⋆','⋆⋆⋆','⋆⋆⋆⋆','⋆⋆⋆⋆⋆']

    async function  SpeacialMenu(){
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        let response = await fetch(API_URl)
        let Data = await response.json()
        setmenu_1(Data.meals)
    }

    async function SpecialDish(){
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URl);
        let Data = await response.json();
        setspecialmenu(Data.meals);
        setloading(false);
    }

    async function MenuCategories(){
        const API_URl = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URl);
        let Data = await response.json();
        setmenucategories(Data.categories)
    }
    useEffect(()=>{
        SpeacialMenu();
        SpecialDish();
        MenuCategories();
    },[])



    return (
        <div>
            <HeaderCard SpeacialMenu = {menu_1} prices = {prices} star = {star}/>
            {!loading ? <SpecialDishes specialmenu = {specialmenu}/> : <div className="loader"><div className="ripple"><h1>loading...</h1></div></div>}
            {!loading ?    <FilteredDishes menucategories = {menucategories} specialmenu = {specialmenu}/> : null}
         
        </div>
    )
}

export default Menu;
