import React from 'react';
import './Portfolio.css';

const Portfolio = ({ exclude }) => {
  const projects = [
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
      description: "Led design on Drizly's gifting program across the entire funnel.",
      image: '/gifting.png',
      link: '/gifting-program',
    },
    {
      title: 'Streamlined Checkout',
      subtitle: 'Product Design @ Drizly',
      description: 'Designed web flow for checkout at Drizly, resulting in a $2 million impact.',
      image: '/streamlined-checkout.png',
      link: '/streamlined-checkout',
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
            <a href={project.link} className="read-more">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
