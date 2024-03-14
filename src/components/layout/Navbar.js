import React from "react";
import logo from "../../assets/svg/logo.svg";
import NavbarStyles from "../../assets/css/Navbar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';

function Navbar(props) {

  const location = useLocation();
  const homeClass = location.pathname === "/" ? `${NavbarStyles.active}` : "";
  const portfolioClass = location.pathname.match(/^\/portfolio/) ? `${NavbarStyles.active}` : "";
  const resumeClass = location.pathname.match(/^\/resume/) ? `${NavbarStyles.active}` : "";

  return (
    <nav className={NavbarStyles.navbar}>
    <div className={NavbarStyles.logo}>
      <img src={logo} alt="Logo" className={NavbarStyles.logo} />
    </div>
    
    <ul className={NavbarStyles.navLinks}  >
      <li className={`${homeClass}`} >
      <Link to="/">Home</Link>
      </li>
      <li className={`${portfolioClass}`}> 
      <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className={`${resumeClass}`}>
      <Link to="/resume">My Resume</Link>
      </li>
    </ul>
    </nav>

  );
}

export default Navbar;
