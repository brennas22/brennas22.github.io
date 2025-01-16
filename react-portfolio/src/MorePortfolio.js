import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import projects from './Projects'; // import the projects data

const MorePortfolio = ({ exclude }) => {
  // Filter out the project to exclude
  const filteredProjects = exclude
    ? projects.filter((project) => project.link !== exclude)
    : projects;

  return (
    <div className="more-portfolio-container">
      {filteredProjects.map((project, index) => (
        <div className="portfolio-card" key={index}>
          <div className="portfolio-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="portfolio-content">
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <p>{project.description}</p>
            <Link to={project.link} className="read-more">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MorePortfolio;
