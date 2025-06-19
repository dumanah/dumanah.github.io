import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projectsData = {
    'robotic-actuator': {
      title: "Compact Robotic Actuator",
      description: "Budget-oriented robotic actuator design using cycloidal gearbox and 5010 BLDC motor.",
      fullDescription: `
        This project focuses on developing a cost-effective robotic actuator solution
        using a combination of custom-designed cycloidal gearbox and a 5010 BLDC motor.
        The design emphasizes accessibility and maintainability while delivering
        professional-grade performance.
      `,
      technologies: ["CAD Design", "3D Printing", "Motor Control", "Embedded Systems"],
      features: [
        "Custom cycloidal gearbox design for high torque density",
        "5010 BLDC motor integration with custom driver",
        "Optimized 3D printed parts for durability",
        "Cost-effective alternative to commercial actuators"
      ],
      technicalSpecs: {
        "Gear Ratio": "1:14 (~Quasi Direct Drive)",
        "Max Torque": "~10Nm",
        "Motor Type": "5010 BLDC",
        "Control Interface": "CAN Bus / UART ",
        "Power Supply": "12-30V DC"
      },
      images: [
        "/images/actuator-exploded.gif"
      ]
    },
    'snooker-vision': {
      title: "Snooker Vision Analytics",
      description: "Computer vision system for snooker game analysis and prediction.",
      fullDescription: `
        A sophisticated computer vision system designed to analyze snooker games in real-time.
        The system tracks ball positions, analyzes shot patterns, and provides statistical
        insights for predicting successful pot probability based on historical data.
      `,
      technologies: ["Python", "OpenCV", "Machine Learning", "Data Analysis"],
      features: [
        "Real-time ball position detection and tracking",
        "Shot trajectory analysis and reconstruction",
        "Historical game data analysis for pot probability",
        "Performance statistics and visualization"
      ],
      technicalSpecs: {
        "Framework": "Python + OpenCV + Roboflow-Supervision",
        "ML Model": "Custom CNN for ball detection",
        "Dataset": "Various public sources + own videos + Distilled frames using DINO",
        "Model Training": "Supervised learning YOLO models"
      },
      images: [
        "/images/snooker-vision.gif",
      ]
    },
    'ddp-jax': {
      title: "Differential Dynamic Programming",
      description: "Implementation of DDP algorithm using JAX for efficient automatic differentiation.",
      fullDescription: `
        This project implements the Differential Dynamic Programming (DDP) algorithm using the JAX library
        to leverage automatic differentiation for optimal control problems. The implementation focuses on
        solving complex motion planning tasks for nonlinear dynamical systems, demonstrating the
        algorithm's effectiveness in generating optimal trajectories.
      `,
      technologies: ["Python", "JAX", "Optimal Control", "Numerical Optimization"],
      features: [
        "Efficient implementation using JAX's automatic differentiation",
        "Application to cart-pole and double inverted pendulum systems",
        "Visualization of optimal trajectories and control inputs",
      ],
      technicalSpecs: {
        "Framework": "Python + JAX",
        "Optimization": "DDP Algorithm",
        "Systems Tested": "Cart-pole, Double pendulum",
        "Code Structure": "Object-oriented design"
      },
      images: [
        "/images/cart_pole.gif",
      ],
      githubLink: "https://github.com/dumanah/ddp-jax"
    },
    'itu-rover': {
      title: "ITU ROVER - Robot Arm",
      description: "Development of control systems for an autonomous mobile robot.",
      fullDescription: `
        As part of the ITU Rover Team, this project involved developing comprehensive control systems
        for an autonomous mobile robot. The work encompassed both low-level motor control and high-level
        autonomous navigation capabilities, implementing various communication protocols and sensor
        integrations for robust operation.
      `,
      technologies: ["STM32", "C/C++", "Motor Control", "Embedded Systems"],
      features: [
        "STM32 microcontroller programming for precise motor control",
        "Implementation of multiple communication protocols (UART, I2C, SPI)",
        "Sensor integration for position and speed feedback",
        "Development of robust control algorithms",
        "Cross-team collaboration for system integration"
      ],
      technicalSpecs: {
        "Controller": "STM32 Microcontroller",
        "Motors": "Brushed DC Motors",
        "Protocols": "UART, I2C, SPI",
        "Sensors": "Encoders",
      },
      images: [
        "/images/rover-arm.gif",
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="project-detail">
      <Link to="/projects" className="back-button">← Back to Projects</Link>
      
      <header className="project-detail-header">
        <h1>{project.title}</h1>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </header>

      <section className="project-detail-content">
        <div className="project-images">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.title} - view ${index + 1}`} />
          ))}
        </div>

        <div className="project-description">
          <h2>Overview</h2>
          <p>{project.fullDescription}</p>
        </div>

        <div className="project-features">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="technical-specs">
          <h2>Technical Specifications</h2>
          <div className="specs-grid">
            {Object.entries(project.technicalSpecs).map(([key, value]) => (
              <div key={key} className="spec-item">
                <span className="spec-label">{key}:</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {project.githubLink && (
          <div className="project-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        )}
      </section>
    </article>
  );
};

export default ProjectDetail; 