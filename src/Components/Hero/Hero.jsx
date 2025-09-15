import React from "react";
import "./hero.css";
import profileimg from "../../assets/RoundPic.jpg";
import CV from "../../assets/Juliya-CV.pdf";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profileimg} alt="profilepic" />
      <h1>
        <span>I'm Juliya Christendian Sriraj,</span>Frontend developer based in
        Denmark
      </h1>
      <p>
        “I am a frontend developer from <b>Aarhus</b>. I have recently finished
        my education and I am now looking for job opportunities.”
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Juliya.dian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me
          </a>
        </div>

        <div className="hero-resume">
          <a
            href={CV}
            download="juliya-cv-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Danish Version Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
