import React from "react";
import "./css/Footer.css";
import "./css/style.css";
import github from "./../assets/github.png";
import gmail from "./../assets/gmail.png";
import linkedin from "./../assets/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/janellecikanek"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="icon" src={github} alt="GitHub Icon" />
        </a>

        <a
          href="mailto:janellecikanek@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="icon" src={gmail} alt="Gmail Icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/janelle-cikanek-3746b58/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="icon" src={linkedin} alt="LinkedIn Icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
