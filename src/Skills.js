import React from 'react';

const skills = [
  { name: 'HTML', image: '/assets/skills/html.svg' },
  { name: 'CSS', image: '/assets/skills/css.svg' },
  { name: 'SASS', image: '/assets/skills/sass.svg' },
  { name: 'JavaScript', image: '/assets/skills/javascript.svg' },
  { name: 'jQuery', image: '/assets/skills/jquery.svg' },
  { name: 'React', image: '/assets/skills/react.svg' },
  { name: 'REST API', image: '/assets/skills/api.svg' },
  { name: 'Git', image: '/assets/skills/git.svg' },
  { name: 'Firebase', image: '/assets/skills/firebase.svg' },
  { name: 'VS Code', image: '/assets/skills/vscode.svg' },
  { name: 'Windows', image: '/assets/skills/microsoftWindows.svg' },
  { name: 'M365', image: '/assets/skills/microsoft.svg' },
  { name: 'DNS', image: '/assets/skills/dns.svg' },
  { name: 'Networks', image: '/assets/skills/network.svg' },
];

const Skills = () => {
  return (
    <section className="skillsSection" id="skills">
      <div className="sectionHead">
        <span>CHECK OUT MY</span>
        <h2>SKILLS</h2>
      </div>
      <div className="skillsContainer sectionContainer">
        <ul className="skillsGrid">
          {skills.map((skill) => (
            <li key={skill.name}>
              <div className="itemContainer">
                <img src={skill.image} alt={`${skill.name} icon`} />
                <p>{skill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
