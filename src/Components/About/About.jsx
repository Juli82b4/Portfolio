import React from "react";
import "./about.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeindesign,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 100 },
  { name: "CSS", icon: <FaCss3Alt />, level: 100 },
  { name: "JavaScript", icon: <FaJs />, level: 80 },
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "Adobe XD", icon: <SiAdobexd />, level: 80 },
  { name: "Illustrator", icon: <SiAdobeillustrator />, level: 70 },
  { name: "Photoshop", icon: <SiAdobephotoshop />, level: 70 },
  { name: "InDesign", icon: <SiAdobeindesign />, level: 70 },
  { name: "Figma", icon: <FaFigma />, level: 60 },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* LEFT SIDE */}
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            <br />
            <b>👋Hello!</b> <b></b>
            <br /> <br />
            My name is Juliya and I live in Aarhus, Denmark with my family. I
            recently completed my education as a web developer and am passionate
            about building user-friendly, responsive websites. I am currently looking for a
            full-time [entry-level position] where I can contribute, learn, and further
            improve my skills.
          </p>
          <p>
            I love being creative, and in my free time, I enjoy photography and
            photo editing. Recently, I have been working with Figma to learn
            more about UX and UI design a field I am deeply interested in
            combining both design and coding.
          </p>{" "}
          <br />
          <p>
            <b>🔎My Guiding Principle</b>
            <br />I believe that hard work and dedication are the keys to
            achieving the best results.
          </p>
          <p>
            <b>😁Personality</b>
            <br />I am positive, friendly, honest, and a great team player. I am
            ambitious and always strive forhigh-quality results without
            compromising on standards.
          </p>
          <p>
            <b>💻Professional Approach</b>
            <br />I enjoy working in a collaborative and pleasant environment,
            where everyone shares the same goals and strives for success
            together.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <h3>Skills & Tools</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
