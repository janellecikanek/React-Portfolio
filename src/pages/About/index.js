import React from "react";
import ".../css/AboutMe";
import "/src/components/css/AboutMe.css";
import coverImage from "/assets/Tulips.jpg";
import headShot from "/assets/facejanelle.jpg";
import { auto } from "@popperjs/core";

const styles = {
  h1: {
    color: rgb(2, 48, 71),
  },
  p: {
    marginTop: 40,
    marginLeft: auto,
    marginRight: auto,
    textAlign: "center",
    border: "solid",
  },
  card: {
    width: auto,
  },
};

function About() {
  return (
    <section>
      <div clasName="headerHomePage" style={styles.headerHomePage}>
        {" "}
      </div>
      <h2 style={styles.h2}>About Me</h2>

      <div className="container">
        <div className="card col imgCard" styles={styles.card}>
          <div className="card-img">
            <div className="headShotImgContainer">
              <img src={headShot} alt="headshot" className="headshot"></img>
            </div>
          </div>
        </div>
        <div className="card col" styles={styles.card}>
          <div className="card-body">
            <p className="card-text">
              I'm excited to make the transition into development using the
              skills I've learned with my Full Stack Web Development
              certification. My love for problem solving and working with a team
              are just some of the assets I will lean on to be sucessful in this
              field..
            </p>
            <div className="imgContainer">
              <img src={Tulips} alt="Tulips" className="Tulips"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
