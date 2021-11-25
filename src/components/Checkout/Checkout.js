import React, {useContext } from "react"
import { StateContext } from "../../Context/AppProvider";

import './Checkout.css'
function Checkout() {
    
    const cartPackage = useContext(StateContext); 
   console.log(cartPackage.cartItem);

   let cartItems = cartPackage.cartItem.map(item=>{
       return(
           <div>
               <img src={item.images} alt="" />
               <h4>{item.title}</h4>
           </div>
       )
   })
    return (
        <div className="checkout-wrapper">
            {cartItems}
        </div>
    )
}

export default Checkout;
