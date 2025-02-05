import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="title">Get in touch</h2>
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
        <a href="mailto:Juliya.dian@gmail.com">
          {" "}
          <h3>📧 Let's talk</h3>
        </a>
      </div>
    </section>
  );
};

export default Contact;
