import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <br />
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <br />
          <p>📧 Juliya.dian@gmail.com</p>
          <p>📞 +91 61 42 38</p>
          <p>📍 Viborg,Denmark</p>
        </div>
        <div className="subscribe">
    <a
      href="https://www.linkedin.com/in/juliya-sriraj-533067322/"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-link"
    >
      Connect with me on LinkedIn
    </a>
  </div>
      </div>
    </section>
  );
};

export default Contact;
