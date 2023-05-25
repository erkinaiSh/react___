import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

import "./NavbarStyles.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const handleHomeClick = () => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        window.location.reload();
      } else {
        window.location.href = "/";
      }
    }
  };

  const renderNavLinks = () => (
    <ul className="nav-menu">
      <li>
        <div onClick={handleHomeClick}>Home</div>
      </li>
      <li>
        <Link to="button" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          History
        </Link>
      </li>
      <li>
        <Link to="carousel" smooth={true} duration={500}>
          Touristic Places
        </Link>
      </li>
    </ul>
  );

  const renderMobileNavLinks = () => (
    <ul className="mobile-nav">
      <li>
        <div onClick={handleHomeClick}>Home</div>
      </li>
      <li>
        <Link to="button" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          History
        </Link>
      </li>
      <li>
        <Link to="carousel" smooth={true} duration={500}>
          Touristic Places
        </Link>
      </li>
    </ul>
  );

  return (
    <div name="home" className={`navbar ${nav ? "navbar-bg" : ""}`}>
      <div className={`logo ${nav ? "dark" : ""}`}>
        <h2>ROMANIA</h2>
      </div>

      {renderNavLinks()}

      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={`mobile-menu ${nav ? "active" : ""}`}>
        {renderMobileNavLinks()}
      </div>
    </div>
  );
}

export default Navbar;
