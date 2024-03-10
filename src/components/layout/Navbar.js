import React from "react";
import logo from "../../assets/svg/logo.svg";
import NavbarStyles from "../../assets/css/Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar(props) {

  return (
    <nav className={NavbarStyles.navbar}>
    <div className={NavbarStyles.logo}>
      <img src={logo} alt="Logo" className={NavbarStyles.logo} />
    </div>
    <ul className={NavbarStyles.navLinks}>
      <li className="active" >
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/resume">My Resume</Link>
      </li>
    </ul>
    </nav>

  );
}

export default Navbar;
