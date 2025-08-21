import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <h3>Juliya</h3>
      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#mywork">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hero-connect">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Juliya.dian@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me
        </a>
      </div>
    </div>
  );
};

export default NavBar;
