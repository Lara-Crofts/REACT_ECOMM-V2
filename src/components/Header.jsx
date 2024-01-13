// import React from "react";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import "../styles/Header.css";
import PathConstants from "../routes/pathConstants";
import Wovenlogo from '../images/wov-logo.png'; 

export default function Header() {
  return (
    <header>
      <div className="header_menu">
        <div className="left-side">
          <ul className="navbar_left">
            {/* Uncomment the next line if you want to include an image */}
            {/* <img className="logo_image" src="../src/images/wov-logo.png" alt="" /> */}
            <img className="logo_image" src ={Wovenlogo} alt = ""/>

    
            <a href="/home" className="logo_name"> wovenstrings</a>

          </ul>
        </div>

        <div className="middle-side">
          <ul className="navbar_middle">
            <Link to={PathConstants.HOME} className="item">Home</Link>
            <Link to={PathConstants.PRODUCTS} className="item">Products</Link>
            <Link to={PathConstants.CONTACT} className="item">Contact</Link>
          </ul>
        </div>

        <div className="right-side">
          <ul className="navbar_right">
            {/* Uncomment the next lines if you want to include these links */}
            {/* <li className="item_icon"><a href="#">Log In</a></li>
            <li className="item_secondicon"><a href="#">Sign Up</a></li> */}
            <a href="/" className="search-link">
              <IoIosSearch />
            </a>
            <a href="/" className="cart-link">
              <IoCartSharp />
            </a>
            <a href="/" className="purchase-link">
              <GiShoppingBag />
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
