import React from "react";
import github from "../assets/github.png";
import "./../components/css/Project.css"

export default function Project() {
  return (
    <div>
      <h1 className="project-header">Projects</h1>
      <div className="wrapper">

      <div className="project">
          <h2>Helping Hands</h2>
          <a
            href="https://github.com/mjkonkel/helping-hands"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://github.com/mjkonkel/helping-hands"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section><figure className="handsImg"></figure></section>
          </a>
        </div>
        <div className="project">
          <h2>It Takes a Village</h2>
          <a
            href="https://github.com/wolfjfly/Project-2-group-K"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://github.com/wolfjfly/Project-2-group-K'"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section>
              <figure className="villageImg"></figure>
            </section>
          </a>
        </div>

        <div className="project">
          <h2>Campsite Finder</h2>
          <a
            href="https://github.com/sophiekedrowski/prj1-grp-j"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://sophiekedrowski.github.io/prj1-grp-j/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section><figure className="campImg"></figure></section>
          </a>
        </div>

        <div className="project">
          <h2>Weather Dashboard</h2>
          <a
            href="https://github.com/janellecikanek/ApiWeatherDashboard"
            target="_blank"
            rel="noreferrer noopener"
          >
           <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://janellecikanek.github.io/ApiWeatherDashboard/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section>
              <figure className="weatherImg"></figure>
            </section>
          </a>
        </div>

        <div className="project">
          <h2>Work Day Scheduler</h2>
          <a
            href="https://github.com/janellecikanek/Work-Day-Scheduler"
            target="_blank"
            rel="noreferrer noopener"
          >
       <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://janellecikanek.github.io/Work-Day-Scheduler/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section><figure className="workdayImg"></figure></section>
          </a>
        </div>

        <div className="project">
          <h2>E-Commerce Back-End</h2>
          <a
            href="https://github.com/janellecikanek/E-commerce-Back-End"
            target="_blank"
            rel="noreferrer noopener"
          >
          <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://drive.google.com/file/d/14fFkYCK9ortifkfIxm6s-hJOnxIaozpv/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section><figure className="ecommerceImg"></figure></section>
          </a>
        </div>

        <div className="project">
          <h2>Social Network API</h2>
          <a
            href="https://github.com/janellecikanek/Social-Network-API"
            target="_blank"
            rel="noreferrer noopener"
          >
          <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://drive.google.com/file/d/1jGZO9VYzAsEkoHo6iiTM3HYrZDhFjDyE/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section><figure className="socialImg"></figure></section>
          </a>
        </div>

        <div className="project">
          <h2>Password Generator</h2>
          <a
            href="https://github.com/janellecikanek/Password-Generator"
            target="_blank"
            rel="noreferrer noopener"
          >
          <img className='github' src={github} alt='GitHub Icon'/>
          </a>
          <a
            href="https://janellecikanek.github.io/Password-Generator/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <section><figure className="passwordImg"></figure></section>
          </a>
        </div>
      </div>
    </div>
  );
}
