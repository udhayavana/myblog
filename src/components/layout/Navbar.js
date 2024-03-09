import React from "react";
import logo from "../../assets/svg/logo.svg";
import NavbarStyles from "../../assets/css/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar(props) {

const navigate = useNavigate();

const handleNavClick =()=>  {
navigate("/");
}
  return (
    <nav className={NavbarStyles.navbar}>
    <div className={NavbarStyles.logo}>
      <img src={logo} alt="Logo" className={NavbarStyles.logo} />
    </div>
    <ul className={NavbarStyles.navLinks}>
      <li>
        <button onClick={handleNavClick}>Home</button>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
    </ul>
    </nav>

  );
}

export default Navbar;
