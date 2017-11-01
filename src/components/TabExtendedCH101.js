import React, { Component } from 'react';

import Section from './Section';
import { NavLink, Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';


export default class TabExtendedCH101 extends Component {
  render () {
    return (
      <div style={{position: 'absolute', top:0, right:0, left: 0, zIndex: 103, minWidth: 700}}>
        <div className="row" style={{position: 'absolute', top: 0, right: 0, left: 0}}>
          <NavLink to="/ch101/notice">
            <div className="col span-1-of-4" style={{textAlign: 'center'}}>NOTICE</div>
          </NavLink>
          <NavLink to="/ch101/schedule">
            <div className="col span-1-of-4" style={{textAlign: 'center'}}>Schedule</div>
          </NavLink>
          <NavLink to="/ch101/download">
            <div className="col span-1-of-4" style={{textAlign: 'center'}}>Download</div>
          </NavLink>
          <NavLink to="/ch101/contact">
            <div className="col span-1-of-4" style={{textAlign: 'center'}}>TA Contact</div>
          </NavLink>
        </div>
      </div>
    );
  }
}