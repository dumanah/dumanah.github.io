import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects - Ahmet Hakan Duman";
  }, []);
  const projects = [
    {
      id: 'robotic-actuator',
      title: "Compact Robotic Actuator",
      description: "Budget-oriented robotic actuator design using cycloidal gearbox and 5010 BLDC motor. Features include 3D printed components for cost-effectiveness and easy maintenance.",
      technologies: ["CAD Design", "3D Printing", "Motor Control", "Embedded Systems"],
      details: [
        "Custom cycloidal gearbox design for high torque density",
        "5010 BLDC motor integration with custom driver",
        "Optimized 3D printed parts for durability",
        "Cost-effective alternative to commercial actuators"
      ],
      imageUrl: "/images/actuator.jpg"
    },
    {
      id: 'snooker-vision',
      title: "Snooker Vision Analytics",
      description: "Computer vision system for snooker game analysis, tracking ball positions and shot statistics to provide predictive analytics for pot success rates.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Data Analysis"],
      details: [
        "Real-time ball position detection and tracking",
        "Shot trajectory analysis and reconstruction",
        "Historical game data analysis for pot probability",
        "Performance statistics and visualization"
      ],
      imageUrl: "/images/snooker-vision.jpg"
    },
    {
      id: 'ddp-jax',
      title: "Differential Dynamic Programming",
      description: "Implementation of the DDP algorithm using JAX library for efficient automatic differentiation in motion planning applications.",
      technologies: ["Python", "JAX", "Optimal Control", "Numerical Optimization"],
      details: [
        "Implemented DDP algorithm with automatic differentiation",
        "Applied to cart-pole and double inverted pendulum systems",
        "Optimized trajectory generation for complex dynamics",
        "Performance comparison with traditional optimization methods"
      ],
      imageUrl: "/images/ddp-project.jpg",
      githubLink: "https://github.com/dumanah/ddp-jax"
    },
    {
      id: 'itu-rover',
      title: "ITU ROVER - Robot Arm",
      description: "Development of control systems for an autonomous mobile robot as part of the ITU Rover Team.",
      technologies: ["STM32", "C/C++", "Motor Control", "Embedded Systems"],
      details: [
        "Programmed STM32 microcontrollers for speed and position control",
        "Implemented communication protocols (UART, I2C, SPI)",
        "Collaborated with interdisciplinary team members",
        "Integrated various sensors and actuators"
      ],
      imageUrl: "/images/rover-project.jpg"
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <Link 
            to={`/projects/${project.id}`} 
            className="project-card-link" 
            key={project.id}
          >
            <article className="project-card">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;