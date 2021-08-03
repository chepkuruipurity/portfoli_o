import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import brooklyn from '../../img/brooklyn.PNG';
import review from '../../img/review.png';
import translate from '../../img/translate.png';
import todo from '../../img/todo.png';
import quote from '../../img/quote.PNG';
import farmer from '../../img/farmer.jpg';
import board from '../../img/board.PNG';
import loan from '../../img/loan.PNG';
const items = [
  {
    name: '2 Player board game',
    context: 'Board game',
    githubUrl: 'https://github.com/chepkuruipurity/2-players-board-game',
    githubLink: 'View on Github',
    projectUrl: 'https://chepkuruipurity.github.io/2-players-board-game/',
    stack: [
      
      'JavaScript',
      'HTML5',
      'CSS3',
      'JQUERY',
      
    ],
    description: '',
    image: board
  },

  {
    name: 'Restaurant Review',
    context: 'Restaurant Reviews App',
    githubUrl: 'https://github.com/chepkuruipurity/Restaurant-Review',
    githubLink: 'View on Github',
    projectUrl: '',
    stack: [
      'HTML5',
      'React',
      'CSS3',
      'JavaScript',
      'JQUERY',
      'Google Maps API'
      
    ],
    description: '',
    image: review
  },
  {
    name: 'Google Translator',
    context: 'Python google translator',
    githubUrl: 'https://github.com/chepkuruipurity/Week-3-Assessment/blob/main/Purity%20Chepkurui%20-%20WT-21-210/language_translator.ipynb',
    githubLink: 'View on Github',
    projectUrl: '',
    stack: [
      'Python',
      
    ],
    description: '',
    image: translate
  },
  
  {
    name: 'Brooklyn Outdoor Film Festival',
    context: 'Film festival movie viewing app',
    githubUrl: 'https://github.com/chepkuruipurity/film-festival',
    githubLink: 'View on Github',
    projectUrl: 'https://chepkuruipurity.github.io/film-festival/films.html',
    stack: ['HTML5, CSS3',, 'Bootstrap 4', 'jQuery', ],
    description: '',
    image: brooklyn
  },
  {
    name: 'Quote Generator',
    context: '',
    githubUrl: 'https://github.com/chepkuruipurity/Quote-generator',
    githubLink: 'View on Github',
    projectUrl:
      'https://chepkuruipurity.github.io/Quote-generator/',
    stack: [
      'HTML5',
      'CSS3',
      'JS',
     
    ],
    description: '',
    image: quote
  },
  {
    name: 'Build4SDG',
    context: 'Backend Farmers Market',
    githubUrl: 'https://github.com/BuildForSDG/team-133-backend',
    githubLink: 'View on Github',
    projectUrl:null,
    stack: ['Node js', 'Express','MongoDb','Mocha','Multer'],
    description: '',
    image: farmer
  },
  {
    name: 'TodoList',
    context: 'Todolist app',
    githubUrl: 'https://github.com/chepkuruipurity/TodoList',
    githubLink: 'View on Github',
    projectUrl:null,
    stack: ['Node js', 'Express','PostgresSql','React'],
    description: '',
    image: todo
  },
  {
    name: 'Loan Prediction',
    context: 'Loan Prediction with machine learning app',
    githubUrl: 'https://github.com/Women-Techsters-Fellowship-2021/Loan-Prediction-Model/',
    githubLink: 'View on Github',
    projectUrl:null,
    stack: ['python','Machine learning','random forest','Logistic Regression'],
    description: '',
    image: loan
  }

];

class PortfolioList extends Component {
  render() {
    const renderItems = items.map(
      ({
        name,
        context,
        githubUrl,
        githubLink,
        stack,
        image,
        projectUrl,
        description
      }) => {
        return (
          <PortfolioItem
            name={name}
            context={context}
            githubUrl={githubUrl}
            githubLink={githubLink}
            projectUrl={projectUrl}
            stack={stack}
            image={image}
            description={description}
            key={name}
          />
        );
      }
    );
    return <div className="items-wrapper row">{renderItems}</div>;
  }
}

export default PortfolioList;
