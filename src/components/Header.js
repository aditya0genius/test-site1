import React from "react";
import "./HeaderComponent.css";

import "./NavbarComponent.css";
import { Link } from "react-router-dom";

 function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  function logout() {
    localStorage.removeItem('currentuser');
    window.location.href="/login";
  }
    
    return (
      
      <>
        <div className="header">
          <div className="navbarTop">
            <div className="hamburger">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
            <Link to="/">
              <img
                src="\myVenue-Logo(Golden).png"
                className="mobileNavLogo"
                alt="TechnoHub White Logo"
              />
            </Link>
            <ul
            >
              <Link to="/home">
                <img src="\myVenue-Logo(Golden).png" alt="TechnoHub White Logo" height="30px" width="200px" />
              </Link>
              <div className="header_search">
               <input type="text" className="header_searchInput" placeholder="Search for Venues.."/>
               <div className='header_searchIcon'></div>
    
               </div>
              <Link to="/services">Our Services</Link>
              <Link to="/aboutus">Reach Us</Link>
                <h1>Welcome !</h1>
                <Link to="/loginpage">LogIn</Link>
            
          
            </ul>
          </div>
        </div>
      </ >
    );
  }

export default Navbar;
