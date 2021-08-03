import React, { Component } from 'react';
import ExperiencesItem from './ExperiencesItem';

const works = [
 
  {
    place: 'OpenClassrooms',
    location: 'Remote',
    title: 'Front-end developer Apprentice',
    timeline: '2020 - 2021',
    description: `<p>Frontend development.Developed websites such as:</p>
    <ul>
    <li> -real estate website with WordPress</li>
    <li> films festival app with html and bootstrap</li>
    <li> food delivery uml diagram and database design</li>
    <li>random quote generator optimizing clean code principles. </li>
   <li>two player board game app with html css javascript and jquery optimizingobject oriented programming</li>
    <li> restaurant reviews app using Google maps, Google places, geolocation builtwith html css javascript jquery and react js</li><li> todolist app unit testing with jasmine</li>
          
            
          </ul>`
  },
  {
    place: 'Tech4Dev',
    location: 'Women Techsters',
    title: 'Data science and AI fellow',
    timeline: 'May 2021 - present',
    description: `
    <p>Projects:</p>
    <ul>
    <li>web scraping data from a website using beautifulSoup</li>
    <li> banking app with python</li>
    <li> language translator app using Google translate apis to translate and detectlanguage built with python </li>
    <li> loan prediction model to determine whether someone should be given a loan:built using machine learning models such as logistic regression and randomforest models</li>
    <li>Other minor projects with databases with python such as mongodb, sql,xampp,excel,</li>
  </ul>`
  },
  
];

class ExperiencesList extends Component {
  render() {
    const renderItems = works.map(
      ({ place, location, title, timeline, description }) => {
        return (
          <ExperiencesItem
            place={place}
            location={location}
            key={place}
            title={title}
            timeline={timeline}
            description={description}
          />
        );
      }
    );
    return <div>{renderItems}</div>;
  }
}

export default ExperiencesList;
