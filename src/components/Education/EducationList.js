import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EducationItem from './EducationItem';
import { faLessThan } from '@fortawesome/fontawesome-free-solid';

const degrees = [
  {
    name: 'Front End Developement ',
    school: 'OpenClassrooms',
    timeline: '2020-2021',
    description:
      'HTML5, CSS3, Javascript, React, JQUERY,,BOOTSTRAP,JASMINE, MySQL, UML, Agile workflow',
    degree: true
  },
  {
    name: 'Mobile Web Develpment',
    school: 'Google Africa Developer Scholarship',
    timeline: '2019-2020',
    description: 'HTML5, CSS,JAVASCRIPT, NODE JS, ANGULAR, JQUERY,MOCHA,SQL,PROGRESSIVE WEB APPS',
    degree: false
  },
  {
    name: 'Certified Investments and Financial Analyst',
    school: "KASNEB",
    timeline: '2015-2019',
    description: 'Financial analysis and investments',
    degree: false
  },
  {
    name: 'Bsc. Financial Engineering',
    school: 'Jomo Kenyatta University of Agriculture and Technology',
    timeline: '2014-2018',
    description:'statistics, business and computer science',
      degree: true
  },
  
];

export default class EducationList extends Component {
  render() {
    const renderItems = degrees.map(
      ({ name, school, timeline, description, degree }) => {
        if (degree !== this.props.degreeFilter) {
          return false;
        }
        return (
          <EducationItem
            name={name}
            school={school}
            timeline={timeline}
            description={description}
            key={name}
          />
        );
      }
    );

    return <div className="row">{renderItems}</div>;
  }
}

EducationList.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
  timeline: PropTypes.string,
  description: PropTypes.string,
  degree: PropTypes.bool,
  degreeFilter: PropTypes.bool
};
