import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/fontawesome-free-brands';

const items = [
  {
    key: 'li',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/purity-chepkurui-4a7563177/'
  },
  {
    key: 'gh',
    icon: faGithub,
    url: 'https://github.com/chepkuruipurity'
  },
  {
    key: 'so',
    icon: faTwitter,
    url: 'https://twitter.com/purityChepkuru4'
  }
];

class SocialLinks extends Component {
  render() {
    const renderItems = items.map(item => {
      return (
        <li className="list-inline-item" key={this.props.keyPrefix + item.key}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      );
    });
    return <ul className="social list-inline">{renderItems}</ul>;
  }
}
export default SocialLinks;

SocialLinks.propTypes = {
  keyPrefix: PropTypes.string
};
