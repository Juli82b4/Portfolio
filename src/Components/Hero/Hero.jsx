import React from "react";
import "./hero.css";
import profileimg from "../../assets/RoundPic.jpg";
import CV from "../../assets/CV-DANISH.pdf";

const Hero = () => {
  return (
     <div className="hero-bgg">
  <div className="hero" id="home">
    <img src={profileimg} alt="profilepic" />
    <h1>
      <span>I'm Juliya Christendian,</span> Frontend Developer
    </h1>
    <p>
      “I am a Web Designer based in Aarhus. I have recently finished my
      education as web developer and I am now looking for job opportunities.”
    </p>

    <div className="hero-action">
      <div className="hero-resume">
        <a href={CV} download="CV-ENGLISH.pdf" target="_blank" rel="noopener noreferrer">
          CV (ENGLISH)
        </a>
      </div>
      <div className="hero-resume">
        <a href={CV} download="CV-DANISH.pdf" target="_blank" rel="noopener noreferrer">
          CV (DANSK)
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;
