import React from 'react';
import './CV.css';
import { useEffect } from 'react';

const CV = () => {

  useEffect(() => {
    document.title = "CV - Ahmet Hakan Duman";
  }, []);
  const cvData = {
    name: "Ahmet Hakan Duman",
    title: "Control Systems Engineer",
    contact: {
      linkedin: "linkedin.com/in/ahduman",
      github: "github.com/dumanah"
    },
    summary: "Highly motivated recent master's graduate from RWTH Aachen with expertise in advanced control systems and a strong theoretical background in modeling, simulation, and control of dynamic systems. Seeking a challenging role as a Research Engineer in the field of dynamic systems and control, robotics, embedded systems with a focus on innovative applications.",
    education: [
      {
        degree: "M.Sc. Elec. Eng., Information Tech. and Computer Eng.",
        institution: "RWTH Aachen University",
        details: [
          "Major: Systems and Automation",
          "Thesis: A structure-exploiting SDP solver for discrete LTV robust controller synthesis",
          "Relevant Coursework: Optimal Control, Modern Control Systems, Embedded Systems, Robotics"
        ]
      },
      {
        degree: "B.Sc. Control and Automation Eng.",
        institution: "Istanbul Technical University",
        details: [
          "Final Project: Trajectory Tracking with Model Predictive Control for a Wheeled Mobile Robot"
        ]
      }
    ],
    experience: [
      {
        title: "Student Assistant",
        company: "RWTH Aachen University",
        location: "Aachen, Germany",
        details: [
          "Conducted simulations using Simulink on a condor computer cluster, analyzing complex control systems"
        ]
      },
      {
        title: "Internship",
        company: "STIHL",
        location: "Stuttgart, Germany",
        details: [
          "Developed a sensor box to measure environmental values, relevant to autonomous systems",
          "Programmed microcontrollers and Raspberry Pi for sensor data acquisition and processing",
          "Created Python scripts for automated data analysis and visualization"
        ]
      },
      {
        title: "Internship",
        company: "Baykar Technologies",
        location: "Istanbul, Türkiye",
        details: [
          "Programmed microcontrollers for smart systems, developing skills applicable to vehicle control units"
        ]
      }
    ],
    skills: {
      programming: ["MATLAB", "Python", "C", "C++"],
      software: ["Linux", "MS Office"],
      controlSystems: ["Control Theory", "Model Predictive Control", "Robust Control"],
      embeddedSystems: ["STM32", "Communication Protocols: UART,I2C,SPI", "Encoders"],
      languages: ["English (Fluent)", "German (A2-B1)", "Turkish (Mother tongue)"]
    },
    interests: {
      sports: "Table tennis, Amateur licensed football player, Snooker enthusiast",
      music: "Electric guitar player over 10 years",
      diyProjects: "Custom Electric Guitar, 3D Printer, Smart LED table lamp"
    }
  };

  return (
    <section className="cv-container">
      <header className="cv-header">
        <h1>{cvData.name}</h1>
        <h2>{cvData.title}</h2>
        <div className="contact-info">
          <a href={`https://${cvData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
          </a>
          <a href={`https://${cvData.contact.github}`} target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </header>

      <section className="cv-section">
        <h2>Summary</h2>
        <p>{cvData.summary}</p>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="period">{edu.period}</p>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company} - {exp.location}</p>
            <p className="period">{exp.period}</p>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming</h3>
            <p>{cvData.skills.programming.join(", ")}</p>
          </div>
          <div className="skill-category">
            <h3>Software</h3>
            <p>{cvData.skills.software.join(", ")}</p>
          </div>
          <div className="skill-category">
            <h3>Control Systems</h3>
            <p>{cvData.skills.controlSystems.join(", ")}</p>
          </div>
          <div className="skill-category">
            <h3>Embedded Systems</h3>
            <p>{cvData.skills.embeddedSystems.join(", ")}</p>
          </div>
          <div className="skill-category">
            <h3>Languages</h3>
            <p>{cvData.skills.languages.join(", ")}</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Interests</h2>
        <div className="interests-grid">
          <div className="interest-item">
            <h3>Sports</h3>
            <p>{cvData.interests.sports}</p>
          </div>
          <div className="interest-item">
            <h3>Music</h3>
            <p>{cvData.interests.music}</p>
          </div>
          <div className="interest-item">
            <h3>DIY Projects</h3>
            <p>{cvData.interests.diyProjects}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CV;