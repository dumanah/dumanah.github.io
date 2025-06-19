export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  githubLink?: string;
  demoLink?: string;
  details: {
    challenge: string;
    solution: string;
    keyFeatures: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'compact-actuator',
    title: 'Compact Robotic Actuator',
    description: 'Budget-oriented compact robotic actuator using cycloidal gearbox and 5010 BLDC motor, featuring 3D printed components for cost-effective robotics applications.',
    technologies: [
      'SolidWorks',
      'FDM 3D Printing',
      'BLDC Motor Control',
      'Embedded C++',
      'STM32',
    ],
    images: [
      '/images/projects/actuator-cad.jpg',
      '/images/projects/actuator-assembly.jpg',
      '/images/projects/actuator-testing.jpg'
    ],
    details: {
      challenge: 'Developing a cost-effective yet precise robotic actuator solution while maintaining compact form factor and reasonable torque output.',
      solution: 'Implemented cycloidal gearbox design with 3D printed components and BLDC motor control system for optimal performance-to-cost ratio.',
      keyFeatures: [
        'Custom cycloidal gearbox design',
        '5010 BLDC motor integration',
        'Optimized 3D printed components',
        'Closed-loop position control',
        'Compact form factor',
        'Cost-effective solution'
      ]
    }
  },
  {
    id: 'snooker-vision',
    title: 'Snooker Vision Analytics',
    description: 'Computer vision system for snooker game analysis, tracking ball positions and movements to generate shot statistics and predict pot success probability.',
    technologies: [
      'Python',
      'OpenCV',
      'TensorFlow',
      'NumPy',
      'Pandas',
      'Statistical Analysis'
    ],
    images: [
      '/images/projects/snooker-detection.jpg',
      '/images/projects/snooker-tracking.jpg',
      '/images/projects/snooker-analysis.jpg'
    ],
    details: {
      challenge: 'Creating accurate real-time ball detection and tracking system while handling occlusions and varying lighting conditions.',
      solution: 'Developed robust computer vision pipeline with deep learning-based object detection and custom tracking algorithms.',
      keyFeatures: [
        'Real-time ball detection and tracking',
        'Shot trajectory analysis',
        'Pot success probability calculation',
        'Historical game analysis',
        'Statistical reporting',
        'Performance metrics visualization'
      ]
    }
  }
]; 