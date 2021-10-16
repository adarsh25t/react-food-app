import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
                <h1><span>food</span>hub</h1>

                <ul>
                    <li>
                        <Link to='/' className="list">Home </Link>
                    </li>
                    <li>
                        <Link to='About' className="list">About Us </Link>
                    </li>
                    <li>
                        <Link to='FilteredDishes' className="list">Menu </Link> 
                    </li>
                    <li>
                        <Link to='/' className="list">Reviews </Link>  
                    </li>
                    <li>
                        <Link to='/' className="list">Contact </Link>   
                    </li>
                </ul>

            <div className="header-3">
                <Link to='Checkout'><div className="cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h2>0</h2></div>
                    </Link>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;
