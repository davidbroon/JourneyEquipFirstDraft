import React, { useState } from "react";
import Logo from "../assets/Journey-Logo-White.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="jccLogo"/>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/course"> The Course </Link>
        <Link to="/contact"> Contact </Link>
      
      </div>
    </div>
  );
}

export default Navbar;
