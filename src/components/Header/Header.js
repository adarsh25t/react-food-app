import React from "react";
import './Header.css'
import Image_1 from '../../images/food-1.png'
import Image_2 from '../../images/image-2.png'
import Image_3 from '../../images/image-3.png'
function Header(){


        function FirstSlide(){
            document.querySelector('.wrapper-1').style.opacity = 1;
            document.querySelector('.wrapper-2').style.opacity = 0
            document.querySelector('.wrapper-3').style.opacity = 0;
        }
        function SecondSlide(){
            document.querySelector('.wrapper-1').style.opacity = 0;
            document.querySelector('.wrapper-2').style.opacity = 1
            document.querySelector('.wrapper-3').style.opacity = 0;
        }
        function ThirdSlide(){
            document.querySelector('.wrapper-1').style.opacity = 0;
            document.querySelector('.wrapper-2').style.opacity = 0
            document.querySelector('.wrapper-3').style.opacity = 1;
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
                <div className="wrapper1 wrapper-1">
                    <div className="contents">
                        <h1 className="content-1">Order Tasty & </h1>
                        <h1 className="content-1">Fresh Food</h1>
                        <h1 className="content-1-sub">anytime!</h1>
                        <p>Just confirm your order and enjoy our delicious fastest delivery</p>
                        <button>Explore Our Menu</button>
                    </div>
                    <div className="images">
                        <img src={Image_1} alt="" />
                    </div>
                </div>

                <div className="wrapper1 wrapper-2">
                    <div className="contents">
                        <h1 className="content-1">We deliver</h1>
                        <h1 className="content-1">the faste, As</h1>
                        <h1 className="content-1-sub">You like</h1>
                        <p>We deliver the delicious food for you.</p>
                        <button>Explore Our Menu</button>
                    </div>
                    <div className="images">
                        <img src={Image_2} alt=""  className="images-2"/>
                    </div>
                </div>

                <div className="wrapper1 wrapper-3">
                    <div className="contents">
                        <h1 className="content-1">Order Healthy &</h1>
                        <h1 className="content-1">Fresh Food</h1>
                        <h1 className="content-1-sub">anytime!</h1>
                        <p>Just confirm your order and enjoy our delicious fastest delivery</p>
                        <button>Explore Our Menu</button>
                    </div>
                    <div className="images">
                        <img src={Image_3} alt=""  className="images-2"/>
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