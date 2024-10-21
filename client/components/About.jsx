/*File Name: ReactPortfolio 
  Student’s Name: Angelo Tiquio 
  StudentID: 301343280
  Date: September 21, 2024*/

import React, { useState } from "react";
import aboutPicture from "C:/Users/Angelo Tiquio/Desktop/Github/ReactPortfolio2/ReactPortfolio/src/assets/aboutMeProfile.png";
import resume from "/src/assets/AngeloTiquio_Porfolio.pdf"

/* 
  =============================
  JavaScript Functions Section
  =============================
*/
export default function About() {
  // Use state to track whether the collapsible content is visible
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the collapsible content visibility
  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="about-me-section" id="about">
      <div className="about-me-content">
        <h2>About Me</h2>
        <div className="about-me-flex-container">
          <div className="about-me-image">
            <img src={aboutPicture} alt="Profile" />
            <h4><a href={resume} target="_blank">Download my Resume</a></h4>
          </div>
          <div className="about-me-text">
            <p>
              Hello! I'm <span className="about-me-span">Angelo Tiquio</span>, a
              dedicated <span className="about-me-span">Software Engineer</span>{" "}
              with a unique background in education. With 9 years of experience
              as a junior high school teacher, I served as an Information
              Communication Technology (ICT) Coordinator, where I managed
              student data, oversaw information systems, trained fellow
              educators on emerging technologies, and led initiatives during
              faculty meetings. My passion for technology and education drives
              me to bridge the gap between the two, creating impactful solutions
              that enhance learning experiences.
            </p>
            <h3>Background</h3>
            <p>
              I have spent several years in education, combining my technical
              expertise with my love for teaching. This blend of skills has
              allowed me to take on roles that require both deep technical
              knowledge and the ability to communicate complex ideas in an
              understandable way.
            </p>
          </div>
        </div>

        <div className="details">
          <div className="spaceBetween">
            <h3>Skills and Interest</h3>
            <ul>
              <li>
                {/* This button will toggle the collapsible skills */}
                <button className="collapsible" onClick={toggleCollapsible}>
                  Software Engineering
                </button>
                {/* These are the skills to be toggled */}
                <div
                  className="content"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Google Colab</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </li>
              <li>Educational Technology</li>
              <li>Information Systems</li>
              <li>Teacher Training & Development</li>
            </ul>
          </div>
          <div className="spaceBetween">
            <h3>Passions & Interests</h3>
            <p>
              I’m passionate about integrating technology into education, making
              learning more accessible and engaging for everyone. Outside of
              work, I enjoy exploring new software development trends and
              volunteering in community tech education programs.
            </p>
          </div>
          <div className="spaceBetween">
            <h3>Values & Philosophy</h3>
            <p>I believe in the power of technology to transform education and improve lives. My approach is centered on continuous learning, collaboration, and innovation to create solutions that make a meaningful impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
