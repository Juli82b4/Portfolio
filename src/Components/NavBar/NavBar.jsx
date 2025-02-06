import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#mywork">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default NavBar;
