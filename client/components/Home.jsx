/*File Name: ReactPortfolio 
  Student’s Name: Angelo Tiquio 
  StudentID: 301343280
  Date: September 21, 2024*/

import React from "react";
import { Link } from "react-router-dom";
import profilePicture from "C:/Users/Angelo Tiquio/Desktop/Portfolio/client/src/assets/profile_picture.png";

/* 
  =============================
  JavaScript Functions Section
  =============================
*/

export default function Home() {
  return (
    <section className="hero-section">
      <div className="name-content">
        <h1>
          Hello, It's me <br />
          <span>Angelo Tiquio</span>
        </h1>
      </div>
      <div className="image-content">
        <img src={profilePicture} alt="Profile Picture" />
        <div className="label">Software Engineer</div>
      </div>
      <div className="text-container">
        <div className="text-content">
          <div className="mission-statement">
            <h2>Building Tomorrow’s Technology Today</h2>
            <p>
              My mission is to leverage my technical expertise and educational
              background to create innovative and impactful software solutions
              that enhance learning experiences, drive business success, and
              foster community development. I am committed to continuous
              learning, collaboration, and delivering high-quality results.
            </p>
          </div>
          <div className="links">
            <Link to="/about">About</Link>{" "}|{" "}
            <Link to="/contact">Contact Me</Link>
          </div>
          <div className="actions">
          <Link to="/project" className="portfolio-btn">My Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
