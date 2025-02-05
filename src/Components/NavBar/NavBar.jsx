import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default NavBar;
