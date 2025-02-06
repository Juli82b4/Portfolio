import React from "react";
import "./about.css";
import profileimg from "../../assets/profileimg.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profileimg} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              As a student at MediaCollege Denmark, I am deeply passionate about
              frontend design and creating visually engaging user experiences.
            </p>

            <p>
              I thrive on turning creative ideas into interactive and responsive
              web designs, ensuring both aesthetics and functionality.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p> JavaScript </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p> React </p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>

          <div className="about-achievments">
            <div className="about-achievement">
              <h1>1</h1>
              <p>YEARS OF EXPERINECE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>4</h1>
              <p>PROJECTS COMPLETED</p>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
