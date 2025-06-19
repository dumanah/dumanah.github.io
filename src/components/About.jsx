import React from 'react';
import './About.css';
import { useEffect } from 'react';


const About = () => {
  
  useEffect(() => {
    document.title = "About - Ahmet Hakan Duman";
  }, []);
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="quote-container">
          <blockquote className="drucker-quote">
            "The best way to predict the future is to create it."
            <footer>— Peter Drucker</footer>
          </blockquote>
        </div>

        <h1>About Me</h1>
        
        <div className="about-section">
          <h2>Background</h2>
          <p>
            I am a Control Systems Engineer with a Master's degree from RWTH Aachen University, 
            specializing in Systems and Automation. My academic journey has equipped me with 
            strong theoretical foundations in modeling, simulation, and control of dynamic systems.
          </p>
        </div>

        <div className="about-section">
          <h2>Personal Interests</h2>
          <p>
            Beyond my professional work, I am an enthusiastic maker and hobbyist. I enjoy working 
            on DIY projects, from building custom electric guitars to 3D printing. I'm also an 
            active sports enthusiast, playing table tennis and football, and have been playing 
            electric guitar for over a decade.
          </p>
        </div>

        <div className="about-section">
          <h2>Current Goals</h2>
          <p>
            I am currently seeking opportunities to apply my expertise in innovative projects 
            within the fields of control systems, robotics, and embedded systems. I'm particularly 
            interested in developing solutions that can make a meaningful impact in industrial 
            automation and smart systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;