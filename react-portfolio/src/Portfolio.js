import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';


const Portfolio = ({ exclude }) => {
  const projects = [
    {
        title: 'AI Admin Tool',
        subtitle: 'Product Design @ Toast',
        description: 'Designed a tool to allow finetuning of AI agents by non-engineers.',
        image: '/admin-tool.png',
        link: '/admin-tool',
      },
    {
      title: 'Manager Close Out',
      subtitle: 'Product Design @ Toast',
      description: 'Completely redesigned the end-of-day experience on Point of Sale devices.',
      image: '/manager-close-out.png',
      link: '/manager-close-out',
    },
    {
      title: 'Gifting Program',
      subtitle: 'Product Design @ Drizly',
      description: "Led design on Drizly's gifting program ($2 million impact).",
      image: '/gifting.png',
      link: '/gifting-program',
    },
   
  ];

  // Filter out the project to exclude
  const filteredProjects = exclude
    ? projects.filter((project) => project.link !== exclude)
    : projects;

  return (
    <div className="portfolio-container">
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

export default Portfolio;
