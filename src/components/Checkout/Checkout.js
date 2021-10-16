import React from "react"
import './Checkout.css'
function Checkout() {
    return (
        <div className="checkout-wrapper">
            <div className="left">
            <div className="checkout-titles">
                <h2>Cart</h2>
                <h3><span>5</span>Items</h3>
            </div>
           <div className="cart-title">
                <div className="first">PRODUCT DETAILS</div>
                <div>QUANTITY </div>
                <div>PRICE</div>
                <div>TOTAL</div>
           </div>
            <div className="cart-items">
                <div className="product-details">
                    <img src="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg" alt="" />
                    <div className="checkout-details">
                        <h3>Chicken Enchilada Casserole</h3>
                        <h4>Category</h4>
                        <button>Remove</button>
                    </div>
                </div>

                <div className="price-price">
                    <h4>-</h4><input type="number" name="" id="" /><h4>+</h4>
                </div>

                <div className="price">
                    <h2>1000</h2>
                </div>

                <div className="total-price">
                    <h2>1000</h2>
                </div>
            </div>

            <div className="cart-items">
                <div className="product-details">
                    <img src="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg" alt="" />
                    <div className="checkout-details">
                        <h3>Chicken Enchilada Casserole</h3>
                        <h4>Category</h4>
                        <button>Remove</button>
                    </div>
                </div>

                <div className="price-price">
                    <h4>-</h4><input type="number" name="" id="" /><h4>+</h4>
                </div>

                <div className="price">
                    <h2>1000</h2>
                </div>

                <div className="total-price">
                    <h2>1000</h2>
                </div>
            </div>

            <div className="cart-items">
                <div className="product-details">
                    <img src="https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg" alt="" />
                    <div className="checkout-details">
                        <h3>Chicken Enchilada Casserole</h3>
                        <h4>Category</h4>
                        <button>Remove</button>
                    </div>
                </div>

                <div className="price-price">
                    <h4>-</h4><input type="number" name="" id="" /><h4>+</h4>
                </div>

                <div className="price">
                    <h2>1000</h2>
                </div>

                <div className="total-price">
                    <h2>1000</h2>
                </div>
            </div>
         </div>
            <div className="right">
                <h2>Order Summary</h2>
                <div className="order-i">
                    <div className="item-coust">
                    <h3>Items<span>5</span></h3>
                    <h3>1000</h3>
                    </div>
                    <div className="shipping">
                        <h4>SHIPPING ADDRESS</h4>
                        <input type="text" placeholder="ENTER YOUR SHIPPING ADDRESS" id="" />
                    </div>
                    <div className="promocode">
                        <h4>PROMO CODE</h4>
                        <input type="text" placeholder="ENTER YOUR CODE" id="" />
                    </div>
                    <button className="apply">APPLY</button>

                    <div className="total-cost">
                    <h3>TOTAL COST</h3>
                    <h3>1000</h3>
                    </div>
                </div>
               <h3 className="checkout-all">CHECKOUT</h3>
            </div>
        </div>
    )
}

export default Checkout;
