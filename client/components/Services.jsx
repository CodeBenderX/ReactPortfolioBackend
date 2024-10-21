/*File Name: ReactPortfolio 
  Student’s Name: Angelo Tiquio 
  StudentID: 301343280
  Date: September 21, 2024*/

import React from 'react';
import service1 from '/src/assets/webDevImage.jpg'
import service2 from '/src/assets/dataManagement.jpg'
import service3 from '/src/assets/UIUX.png'
/* 
  =============================
  JavaScript Functions Section
  =============================
*/

const Services = () => {
  return (
    <section className="services-section">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-item">
          <img 
            src={service1} 
            alt="Web Development" 
            className="service-image" 
          />
          <h3>Web Development</h3>
          <p>I design and build responsive and high-performing websites tailored to your needs.</p>
        </div>

        <div className="service-item">
          <img 
            src={service2} 
            alt="Database Management" 
            className="service-image" 
          />
          <h3>Database Management</h3>
          <p>I offer secure and scalable database management solutions for seamless data handling.</p>
        </div>

        <div className="service-item">
          <img 
            src={service3} 
            alt="UI/UX Design" 
            className="service-image" 
          />
          <h3>UI/UX Design</h3>
          <p>I create intuitive and engaging designs to enhance user experience across platforms.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
