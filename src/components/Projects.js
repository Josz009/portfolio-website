
import React from 'react';

function Projects() {
  const projectData = [
    {
      name: 'Weather App',
      description: 'A sleek React-based app fetching real-time weather data using OpenWeather API. Features include responsive design and multi-city search.',
      tech: ['React', 'API Integration', 'CSS'],
      link: 'https://github.com/josz009/weather-app',
      image: 'https://via.placeholder.com/300x200?text=Weather+App'
    },
    {
      name: 'Cybersecurity Dashboard',
      description: 'A dashboard mockup simulating security alerts, vulnerability scans, and reports to demonstrate cybersecurity expertise.',
      tech: ['React', 'Data Visualization', 'CSS'],
      link: 'https://github.com/josz009/cybersecurity-dashboard',
      image: 'https://via.placeholder.com/300x200?text=Cybersecurity+Dashboard'
    },
    {
      name: 'Portfolio Website',
      description: 'An interactive portfolio showcasing projects, skills, and experience, built with React and styled using TailwindCSS.',
      tech: ['React', 'TailwindCSS', 'Responsive Design'],
      link: 'https://github.com/josz009/portfolio-website',
      image: 'https://via.placeholder.com/300x200?text=Portfolio+Website'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-gallery">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.tech.join(', ')}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
