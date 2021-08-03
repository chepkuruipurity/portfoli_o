import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUrl, checkTopButton } from '../../actions';
import { Link, scroller } from 'react-scroll';
import Sticky from 'react-stickynode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faMapMarkerAlt
} from '@fortawesome/fontawesome-free-solid';
import '../../css/styles.css';
import purity from '../../img/purity.jpg';
import SocialLinks from './SocialLinks';
import LinksList from './LinksList';

class Header extends Component {
  componentDidMount = () => {
    switch (this.props.history.location.pathname) {
      case '/about':
        return this.changeUrlTo('about');
      case '/education':
        return this.changeUrlTo('education');
      case '/experiences':
        return this.changeUrlTo('experiences');
      case '/skills':
        return this.changeUrlTo('skills');
      case '/projects':
        return this.changeUrlTo('projects');
      case '/contact':
        return this.changeUrlTo('contact');
      default:
        return this.changeUrlTo('');
    }
  };

  changeUrlTo = url => {
    scroller.scrollTo(url, {
      duration: 180,
      smooth: true,
      offset: -80
    });
  };

  handleSetActive = to => {
    this.props.setUrl(to);
  };

  handleStickyChange = ({ status }) => {
    const { checkTopButton } = this.props;
    if (status === Sticky.STATUS_FIXED) {
      checkTopButton(true);
    } else {
      checkTopButton(false);
    }
  };

  render() {
    return (
      <header id="top" className="header">
        <div className="top-bar container-fluid">
          <div className="actions">
            <Link
              className="nav-link btn d-none d-md-inline-block"
              to="contact"
              spy={false}
              smooth={true}
              offset={-80}
              duration={180}
              onSetActive={this.handleSetActive}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: '5px' }}
              />{' '}
              Contact me
            </Link>
          </div>
          <SocialLinks keyPrefix="header" />
        </div>

        <div className="intro">
          <div className="container text-center">
            <img
              className="profile-image img-thumbnail rounded-circle"
              src={purity}
              alt=""
            />
            <h1 className="name">Purity Chepkurui</h1>
            <div className="title">Data scientist and software developer</div>
            <div className="profile">
              <p>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ marginRight: '10px' }}
                />
                Kenya
              </p>
            </div>
          </div>
        </div>

        <Sticky
          enabled={true}
          innerZ={180}
          onStateChange={this.handleStickyChange}
        >
          <div className="page-nav-space-holder d-none d-md-block">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
              <div className="container br">
                <LinksList />
              </div>
            </div>
          </div>
        </Sticky>
      </header>
    );
  }
}

function mapStateToProps({ topButton }) {
  return { topButton };
}

export default withRouter(
  connect(
    mapStateToProps,
    { setUrl, checkTopButton }
  )(Header)
);

Header.propTypes = {
  history: PropTypes.object,
  setUrl: PropTypes.func,
  checkTopButton: PropTypes.func
};
