import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="title">Get in <span>touch</span></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's talk</h3><br />
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on.
            You can contact me anytime.
          </p><br />
          <p>📧 Juliya.dian@gmail.com</p>
          <p>📞 +91 61 42 38</p>
          <p>📍 Viborg,Denmark</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Enter your message"></textarea>
          <div className="captcha-container">
            <input type="checkbox" id="human-check" />
            <label htmlFor="human-check">I am human</label>
          </div>
          <button type="submit" className="submit-btn">Submit now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
