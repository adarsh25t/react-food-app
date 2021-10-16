import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './Menu.css'
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import HeaderCard from '../HeaderCard/HeaderCard';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import Allmenu from '../AllMenuContext';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';
import Navbar from '../NavBar/Navbar';

function Menu() {
    let prices = [23,14,18,22,12,7,9,21];
    let star = ['⋆','⋆⋆','⋆⋆⋆','⋆⋆⋆⋆','⋆⋆⋆⋆⋆'];

    
    return (
        <div>
           <Router>
               <Navbar/>
               <Switch>
                    <Route exact path="/">
                        <Header/>
                        <HeaderCard prices = {prices} star = {star}/>
                        <Allmenu>
                            <SpecialDishes /> 
                            <FilteredDishes/>
                        </Allmenu>
                    </Route>
                    <Route path="/FilteredDishes">
                        <FilteredDishes/>
                    </Route>
                    <Route path="/Checkout">
                        <Checkout/>
                    </Route>
               </Switch>
           </Router>
        </div>
    )
}

export default Menu;
