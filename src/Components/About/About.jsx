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
              I am a frontend developer based in Aarhus with a strong foundation
              in HTML, CSS, JavaScript, and React. Having recently completed my
              education, I am eager to apply my skills in real-world projects
              and continue growing as a developer. <br/><br/>
              In addition to coding, I have
              basic experience in UI/UX design, having designed websites and
              interfaces using Adobe XD, Illustrator, and Photoshop. This allows
              me to bridge the gap between design and development, ensuring both
              functionality and great user experience. <br/><br/>
              I am a highly motivated
              and curious individual, always eager to learn new technologies,
              improve my craft, and explore creative solutions in both coding
              and design. My goal is to contribute to innovative projects while
              continuously expanding my knowledge in frontend development and
              digital design.<br/><br/>
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
