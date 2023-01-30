import React from "react";
import resume from "/assets/Janelle Cikanek Resume 1.pdf";
import "/src/components/css/Resume.css";

export default function Resume() {
  return (
    <div>
      <div className="card-resume1">
        <div className="card-body">
          <h4 className="card-title">Skills</h4>
          <p className="card-text">
            HTML, CSS, Git, Javascript, Web APIs, Third Party APIs, Server Side
            APIs, Node.js, OOP, Express.js, SQL, NoSQL, ORM, MVD, PWAs, React,
            MERN, State
          </p>
        </div>
      </div>
      <div className="card-resume2">
        <div className="card-body">
          <h4 className="card-title">Downloadable Resume</h4>
          <a target="_blank" rel="noopener noreferrer" href={resume}>
            <button className="resume">
              <b>Resume</b>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
