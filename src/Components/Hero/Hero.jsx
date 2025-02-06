import React from "react";
import "./hero.css";
import profileimg from "../../assets/profileimg.jpg";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profileimg} alt="profilepic" />
      <h1><span>Im Juliya Christendian Sriraj,</span>Frontend developer based in Denmark</h1>
      <p>I am frontned developer from viborg currently going to finish my education</p>
      <div className="hero-action">
      <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">Resume</div>
      </div>
    </div>
  );
};

export default Hero;
