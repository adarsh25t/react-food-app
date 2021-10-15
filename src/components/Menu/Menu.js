import React, { useEffect, useState } from 'react';
import './Menu.css'
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import HeaderCard from '../HeaderCard/HeaderCard';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import Allmenu from '../AllMenuContext';

function Menu() {
    let prices = [23,14,18,22,12,7,9,21];
    let star = ['⋆','⋆⋆','⋆⋆⋆','⋆⋆⋆⋆','⋆⋆⋆⋆⋆'];

    
    return (
        <div>
            <HeaderCard prices = {prices} star = {star}/>
            <Allmenu>
                <SpecialDishes /> 
                <FilteredDishes/>
            </Allmenu>
        </div>
    )
}

export default Menu;
