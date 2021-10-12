import React, { useState } from "react";
import './Header.css';
import { headerDetails } from "./Headerdetails";

function Header(){
    let [slider,setslider] = useState(0)

   
    function FirstSlide(){
        setslider(0)
    }
    function SecondSlide(){
        setslider(1)
    }
    function ThirdSlide(){
        setslider(2)
    }
    
       
    return(
        
        <div className="header">
            <div className="navbar">
                <h1><span>food</span>hub</h1>

                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Menu</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                </ul>

                <div className="header-3">
                    <div className="cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h2>0</h2>
                    </div>
                    <button>Sign Up</button>
                </div>
            </div>

            <div className="wrapper">
                <div className="slider-wrapper">
                <div className="wrapper1">
                    <div className="contents">
                        <h1 className="content-1">{headerDetails[slider].Title_one}</h1>
                        <h1 className="content-1">{headerDetails[slider].Title_Two}</h1>
                        <h1 className="content-1-sub">{headerDetails[slider].Title_Three}</h1>
                        <p>{headerDetails[slider].Paragraph}</p>
                        <button>Explore Our Menu</button>
                    </div>
                    <div className="images">
                        <img src={headerDetails[slider].Image} alt="" />
                    </div>
                </div>
                </div>
                <div className="btns">
                    <div className="one" onClick={FirstSlide}></div>
                    <div className="two" onClick={SecondSlide}></div>
                    <div className="three" onClick={ThirdSlide}></div>
                </div>
            </div>
        </div>
        
        
    )
}
export default Header;