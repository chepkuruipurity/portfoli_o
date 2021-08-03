import React, { Component } from 'react';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Git',
  'SQL',
  'MySQL',
  'PostgreSQL',
  'jQuery',
  'Bootstrap',
  'Excel',
  'VBA',
  'Tableau',
  'Machine Learning',
  'Python',
  'R',
  'REST APIS',
  'MongoDB',
  'Agile',
  'Webscrapping',
  'Mocha',
  'Jasmine'
  
];

export default class SkillsTags extends Component {
  render() {
    const renderTags = skills.map(skill => {
      return (
        <span className="skill-tag" key={skill}>
          {skill}
        </span>
      );
    });

    return <div className="misc-skills">{renderTags}</div>;
  }
}
