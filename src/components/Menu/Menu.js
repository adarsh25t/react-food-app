
import React, { useEffect, useState } from 'react'
import HeaderCard from '../HeaderCard/HeaderCard';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
function Menu() {

    let [menu_1, setmenu_1] = useState([]);

    let prices = [23,14,18,22,12,7,9,21];
    let star = ['⋆','⋆⋆','⋆⋆⋆','⋆⋆⋆⋆','⋆⋆⋆⋆⋆']

    async function  SpeacialMenu(){
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        let response = await fetch(API_URl)
        let Data = await response.json()
        setmenu_1(Data.meals)
    }

    useEffect(()=>{
        SpeacialMenu();
    },[])

    return (
        <div>
            <HeaderCard 
                SpeacialMenu = {menu_1}
                prices = {prices}
                star = {star}
            />
            <SpecialDishes/>
        </div>
    )
}

export default Menu;
