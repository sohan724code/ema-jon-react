import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../Context/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/orderreview">Order Review</NavLink>
        <NavLink to="/manageinventory">Manage Inventory Here</NavLink>
        {user.email ? (
          <button onClick={logOut}>LogOut</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
