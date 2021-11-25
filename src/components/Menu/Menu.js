import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './Menu.css'
import FilteredDishes from '../FilteredDishes/FilteredDishes';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import Allmenu from '../AllMenuContext';
import Checkout from '../Checkout/Checkout';
import Navbar from '../NavBar/Navbar';
import { AppProvider } from '../../Context/AppProvider';
import Header from '../Header/Header';


function Menu() {
    
    let [cartItem,setcartItem] = useState([])

    return (
        <div>
           <Router>
               <AppProvider>
               <Navbar/>
               <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Allmenu>
                            <SpecialDishes setcartItem={setcartItem}/> 
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
               </AppProvider>
           </Router>
        </div>
    )
}

export default Menu;
