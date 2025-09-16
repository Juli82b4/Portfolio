import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import CV from "../../assets/Resume.pdf";

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
      <div className="hero-resume">
               <a
                 href={CV}
                 download="juliya-cv-2025.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Download English Version Resume
               </a>
             </div>
    </div>
  );
};

export default NavBar;
