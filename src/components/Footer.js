import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <a href="http://sparcs.org" style={{color: 'white'}}>
      <div className='footer'>
        <span className='footer-text-title'>General Chemistry/Lab Course Information</span>
        <span className='footer-text-semester'> -&nbsp;2017 Spring</span>
        <span className='footer-text-brand'>Made by SPARCS</span>
      </div>
      </a>
    );
  }
}

export default Footer;