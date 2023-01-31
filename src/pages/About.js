import React from "react";
import "./../components/css/AboutMe.css";
import Tulips from "./../assets/Tulips.jpg";
import headShot from "../assets/headShot.jpg";

function AboutMe() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={headShot} alt="headshot" className="headshot"></img>
      <p className="text">
        I'm excited to make the transition into development using the skills
        I've learned with my Full Stack Web Development certification. My love
        for problem solving and working with a team are just some of the assets
        I will lean on to be sucessful in this field.
      </p>
      <div>
        <img src={Tulips} alt="Tulips" className="Tulips"></img>
      </div>
    </div>
  );
}

export default AboutMe;
