import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortfolioItem extends Component {
  render() {
    const {
      name,
      context,
      githubUrl,
      githubLink,
      stack,
      image,
      projectUrl,
      description,
    } = this.props;

    /*const renderStack = stack.map(item => {
      return <li key={item}>{item}</li>
    });*/

    return (
      <div className="item col-lg-4 col-6">
        <div className="item-inner">
          <div className="overlay">
            <div className="action text-center">
              <div className="btn-grp" style={{ top: '35%', left: '27%' }}>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn mb-1"
                >
                  {githubLink}
                </a>
                <br />
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn"
                >
                  Preview
                </a>
              </div>
            </div>
            <figure className="figure">
              <div className="card h-100 ">
              <img className=" card-img-top ir " src={image} alt="" />
              </div>
            </figure>
            <div className="content text-left">
              <h3 className="sub-title">{name}</h3>
              <div className="meta">{context}</div>
              <div className="portfolio-body mt-3 mb-1">
              {description}
    {(description) ? (<br />) : "" }
                {stack.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;

PortfolioItem.propTypes = {
  name: PropTypes.string,
  context: PropTypes.string,
  githubUrl: PropTypes.string,
  githubLink: PropTypes.string,
  projectUrl: PropTypes.string,
  stack: PropTypes.array,
  image: PropTypes.string,
  description: PropTypes.string,
};
