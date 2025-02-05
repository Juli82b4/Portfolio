import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>
           Love to create websites and learn new technologies. I also have
          a passion for photography and love to travel.
        </p><br/>
        <div className="subscribe">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me on LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Juliya. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
