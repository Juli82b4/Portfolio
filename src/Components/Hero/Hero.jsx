import React from "react";
import "./hero.css";
import profileimg from "../../assets/profileimg.jpg";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profileimg} alt="profilepic" />
      <h1><span>Im Juliya Christendian Sriraj,</span>Frontend developer based in Denmark</h1>
      <p>I am a frontend developer from vibor currently going to finish my education</p>
      <div className="hero-action">
      <div className="hero-connect"><a href="mailto:Juliya.dian@gmail.com">Connect with me</a></div>
      <div className="hero-resume">
  <a
    href="/Portfolio/assets/juliya-cv-2025.pdf"
    download="juliya-cv-2025.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Download Resume
  </a>
</div>

      </div>
    </div>
  );
};

export default Hero;
