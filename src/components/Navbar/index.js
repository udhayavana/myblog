// components/Navbar/index.js

import React from "react";
// import { useNavigate } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {

   /*  const [loginText,setLoginText] = useState("Sign in");
    const clickSignIn = useNavigate();

    const handleLogin = () =>{

        setLoginText((loginText)=>{
            
            if(loginText==="Sign in"){
                clickSignIn("/dashboard");
            }
            else{
                clickSignIn("/home");
            }

            return loginText=(loginText==="Sign in")?"Sign out":"Sign in";
        });
    } */

    return (

<nav className="navbar">
<div className="collapse navbar-collapse single-page-nav">
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/home"><span className="icn"><i className="fas fa-2x fa-air-freshener"></i></span>Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about"><span className="icn"><i className="fab fa-2x fa-battle-net"></i></span> About me</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/counter"><span className="icn"><i className="far fa-2x fa-images"></i></span> Gallery</Link>
        </li>
    </ul>
</div>
</nav>
    );
};

export default Navbar;