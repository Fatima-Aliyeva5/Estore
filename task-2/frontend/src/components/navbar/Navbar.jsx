import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="nav align-items-center">
      <div className="logo">
        <h2>
          <Link to="/">
            <img
              src="	https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png"
              alt=""
            />
          </Link>
        </h2>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/latest">Latest</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <ul>
          <li><Link to="/wishlist"><FaRegHeart /></Link></li>
          <li><Link to="/basket"><FaBasketShopping /></Link> <sup>0</sup></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
