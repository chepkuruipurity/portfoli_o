import React, { Component } from 'react';
import { connect } from 'react-redux';


import purity from '../../img/purity.jpg';

import ContactForm from './ContactForm';
import SocialLinks from '../layouts/SocialLinks';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-section section">
        <h2 className="section-title">Contact</h2>
        <div className="intro">
          <img
            className="profile-image rounded-circle img-thumbnail"
            src={purity}
            alt=""
          />
          
        </div>
        <ContactForm
     
        />
        <SocialLinks keyPrefix="contact" />
      </section>
    );
  }
}

function mapStateToProps({ contact }) {
  return { contact };
}

export default connect(
  mapStateToProps,
  null
)(Contact);
