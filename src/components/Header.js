import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../iconFont.css';

class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link to='/'>
        <div className='navbar-ch101'>
          <div className='subject-container'>
            <div className='upper-bar-ch101' />
            <h1 className='subject-code'>CH101</h1>
            <h3 className='subject-title'>General<span className='subject-space'>&nbsp;</span></h3>
            <h3 className='subject-title'>Chemistry</h3>
          </div>
          <div className='icon icon-down-open-big arrow-ch101' />
        </div>
        </Link>
        <Link to='/roster'>
        <div className='navbar-ch102'>
          <div className='subject-container'>
            <div className='upper-bar-ch102' />
            <h1 className='subject-code'>CH102</h1>
            <h3 className='subject-title'>General<span className='subject-space'>&nbsp;</span></h3>
            <h3 className='subject-title'>Chemistry Lab</h3>
          </div>
          <div className='icon icon-down-open-big arrow-ch102' />
        </div>
        </Link>
      </div>
    );
  }
}

export default Header;