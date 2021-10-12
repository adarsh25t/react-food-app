import React, { useEffect, useState } from 'react'
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import HeaderCard from '../HeaderCard/HeaderCard';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
function Menu() {

    let [menu_1, setmenu_1] = useState([]);
    let [specialmenu, setspecialmenu] = useState([]);
    let [menucategories,setmenucategories] = useState([]);

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
        setspecialmenu(Data.meals)
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
            <HeaderCard 
                SpeacialMenu = {menu_1}
                prices = {prices}
                star = {star}
            />
            <SpecialDishes specialmenu = {specialmenu}/>
            <FilteredDishes menucategories = {menucategories}/>
        </div>
    )
}

export default Menu;
