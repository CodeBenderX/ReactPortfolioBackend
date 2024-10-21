//File Name: ReactPortfolio 
//Student’s Name: Angelo Tiquio 
//StudentID: 301343280
//Date: September 21, 2024

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "C:/Users/Angelo Tiquio/Desktop/Github/ReactPortfolio2/ReactPortfolio/src/assets/logo.png";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <div className="navLayout">
        <img id="logo" src={logo} alt="My Logo" />
        <button className="burger-menu" onClick={toggleMenu}>
          &#9776; {/* Burger icon */}
        </button>
        <nav className={isMenuOpen ? "nav-menu show" : "nav-menu hidden"}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/project" onClick={handleLinkClick}>Project</Link>
          <Link to="/services" onClick={handleLinkClick}>Services</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
