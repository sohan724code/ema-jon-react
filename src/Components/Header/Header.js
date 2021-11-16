import React from 'react';
import "./Header.css"
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className= "header">
            <div className="logo">
            <img src={logo} alt="" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orderreview">Order Review</a>
                <a href="/manageinventory">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;