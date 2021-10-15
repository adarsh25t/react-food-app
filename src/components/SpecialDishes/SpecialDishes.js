import React, { useState } from 'react'
import CardDish from '../CardDish/CardDish';
import Popup from '../Popup/Popup';
import './Specialdishes.css'
function SpecialDishes(props) {
    let [showpopup,setshowpopup]  = useState(false);
    let [currentDish,setcurrentDish] = useState();
    
    // let show the popup
    function showPopupHandler(dish){
        setshowpopup(true);
        setcurrentDish(dish);
    }
   

    function closePopupHandler(){
        setshowpopup(false);
    }


    let dishItemlength = 8;
    let specialDish = props.specialmenu.map((dish,index)=>{
        if(index<dishItemlength){
            return <CardDish dish={dish} showpopup={showPopupHandler} />
        }
    })
    return (
        <div className="special-dishes">
            {showpopup && <Popup closepopup={closePopupHandler} currentDish={currentDish}/>}
            <h1 className="heading">Our Special Dishes</h1>
            <p className="heading-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia asperiores provident itaque?</p>
            <div className="special-dish">
                {specialDish}
            </div>
        </div>
    )
}

export default SpecialDishes;
