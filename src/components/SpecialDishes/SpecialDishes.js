import React, { useContext, useState } from 'react'
import CardDish from '../CardDish/CardDish';
import Popup from '../Popup/Popup';
import './Specialdishes.css';
import {AllMenuContext} from '../AllMenuContext';
import Checkout from '../Checkout/Checkout';



function SpecialDishes({setcartItem}) {

    let [showpopup,setshowpopup]  = useState(false);
    let [currentDish,setcurrentDish] = useState();
    let [cart,setcart] = useState([])

    const Allmenu = useContext(AllMenuContext);

    // let show the popup
    function showPopupHandler(dish){
        setshowpopup(true);
        setcurrentDish(dish);
    }
   

    function closePopupHandler(){
        setshowpopup(false);
    }

    function AddToCart(Images,Name,Category){
        setcart([
            ...cart,{
                'Image' : Images,
                'Name' : Name,
                'Category' : Category  
            }
        ])
    }
    setcartItem(cart)

    let dishItemlength = 8;
    let specialDish = Allmenu.map((dish,index)=>{
        if(index<dishItemlength){
            return <CardDish dish={dish} showpopup={showPopupHandler} />
        }
    })
    return (
        <div className="special-dishes container">
            {showpopup && <Popup closepopup={closePopupHandler} currentDish={currentDish} AddToCart={AddToCart}/>}
            <h1 className="headings">Our Special Dishes</h1>
            <p className="heading-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia asperiores provident itaque?</p>
            <div className="special-dish">
                {specialDish}
            </div>
        </div>
    )
}

export default SpecialDishes;
