/*File Name: ReactPortfolio 
  Student’s Name: Angelo Tiquio 
  StudentID: 301343280
  Date: September 21, 2024*/

import React from "react";
import project2 from "/src/assets/dragAndDropCover.png";
import project1 from "/src/assets/RealEstateWebsite.png"
import project3 from "/src/assets/focusFlow.png"
/* 
  =============================
  JavaScript Functions Section
  =============================
*/
const Project = () => {
  return (
    <section class="portfolio" id="portfolio">
      <div class="portfolioContainer">
        <h2>My Portfolio</h2>
        <p>Here are some of the projects I have worked on:</p>

        <div class="portfolio-items">
          <div class="portfolio-item">
            <img src={project1} alt="Project 1" />
            <h3>Project 1</h3>
            <p>
              This Real Estate Website project showcases properties with an
              intuitive layout using HTML and CSS for seamless navigation. It
              includes responsive design elements, allowing users to view
              listings, images, and property details across various devices.
            </p>
            <ul>
              <li>Technologies: HTML, CSS</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <a
              href="https://github.com/CodeBenderX/RealEstatePortfolio"
              target="_blank"
            >
              View Code
            </a>
            <a href="http://studentweb.cencol.ca/atiquio/home.html" target="_blank">
              View Live Project
            </a>
          </div>

          <div class="portfolio-item">
            <img src={project2} alt="Project 2" />
            <h3>Project 2</h3>
            <p>
              This is interactive web application designed to help users explore
              different game genres. Users can drag and drop images representing
              various game types into designated areas, where dynamic
              descriptions of each game genre are displayed. This project
              provides an engaging and user-friendly way to learn about
              different game categories.
            </p>
            <ul>
              <li>Technologies: HTML, CSS, JavaScript</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <a
              href="https://github.com/CodeBenderX/game-type-selector"
              target="_blank"
            >
              View Code
            </a>
            <a
              href="http://studentweb.cencol.ca/atiquio/Assignment4/index.html"
              target="_blank"
            >
              View Live Project
            </a>
          </div>

          <div class="portfolio-item">
            <img src={project3} alt="Project 3" />
            <h3>Project 3</h3>
            <p>
              FocusFlow is an all-in-one productivity app that combines a
              customizable to-do list, integrated reminders, daily inspirational
              quotes, a built-in calendar, and a Pomodoro timer to help you stay
              organized, motivated, and focused. With these powerful tools, you
              can effectively manage your time, track your progress, and
              maintain a balanced, productive lifestyle.
            </p>
            <ul>
              <li>Technologies: ReactJS, JS, HTML, CSS</li>
              <li>Role: Frontend Developer</li>
            </ul>
            <a
              href="https://github.com/CodeBenderX/ReactJS-FocusFlow"
              target="_blank"
            >
              View Code
            </a>
            <a href="https://codebenderx-focusflow.netlify.app" target="_blank">
              View Live Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
