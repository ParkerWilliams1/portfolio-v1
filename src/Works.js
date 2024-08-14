import React from 'react';

const projects = [
  {
    title: 'Stonk Market',
    description: 'Technologies Used: React, REST API, ChartJS',
    image: '/assets/images/stonks.PNG',
    details: [
      'Completely built with hooks and functional components',
      'Emulates time passage, and stock prices update randomly as each "day" passes',
      'Real-time updates on stock and portfolio performance, visualized with interactive charts',
    ],
    liveLink: 'https://alexcalia.com/stonks',
    repoLink: 'https://github.com/alexcalia/stonks',
  },
  // Add other projects similarly
];

const Works = () => {
  return (
    <section className="worksSection" id="works">
      <div className="sectionHead">
        <span>TAKE A LOOK AT MY</span>
        <h2>PROJECTS</h2>
      </div>
      <div className="worksContainer sectionContainer">
        {projects.map((project, index) => (
          <article className="workBox" key={index}>
            <div className="workImageContainer">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="workDescribeContainer">
              <h3>{project.title}</h3>
              <h4>{project.description}</h4>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="workLinks">
                <a href={project.liveLink} className="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                <a href={project.repoLink} className="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Works;
