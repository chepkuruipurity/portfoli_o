import React, { Component } from 'react';
import SkillsList from './SkillsList';
import SkillsTags from './SkillsTags';

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills-section section text-center">
        <h2 className="section-title">Skills</h2>
        <div className="top-skills">
      
          <SkillsTags />
        </div>

        <div className="other-skills">
          <h3 className="subtitle mt-5">Languages</h3>
          <span className="skill-tag">English</span>
          <span className="skill-tag">Kiswahili</span>
        </div>
      </section>
    );
  }
}

export default Skills;
