import React, { Component } from 'react';

import Section from './Section';
import './tabbox.css'
import { NavLink, Link } from 'react-router-dom';


export default class Tabunder extends Component {

  render () {
    return (
			<div className="boxtab">
        <ul style={{margin: 0, listStyleType: 'none', display: 'table-cell', verticalAlign: 'middle', fontSize: 24, paddingLeft: 0}}>
          <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
            <NavLink activeClassName="active-thick-tab" to="/ch101/notice">
              <span style={{color:'#FFFFFF',}}>NOTICE</span>
            </NavLink>
          </li>
          <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
            <NavLink activeClassName="active-thick-tab" to="/ch101/schedule">
              <span style={{color:'#FFFFFF',}}>Schedule</span>
            </NavLink>
          </li>
          <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
            <NavLink activeClassName="active-thick-tab" to="/ch101/download">
              <span style={{color:'#FFFFFF',}}>Download</span>
            </NavLink>
          </li>
          <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
            <NavLink activeClassName="active-thick-tab" to="/ch101/contact">
              <span style={{color:'#FFFFFF',}}>TA Contact</span>
            </NavLink>
          </li>
        </ul>
        <div className="boxtab2">
          <ul style={{margin: 0, listStyleType: 'none', display: 'table-cell', verticalAlign: 'middle', fontSize: 24, paddingLeft: 0}}>
            <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
              <NavLink activeClassName="active-thick-tab" to="/ch102/notice">
                NOTICE
              </NavLink>
            </li>
            <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
              <NavLink activeClassName="active-thick-tab" to="/ch102/schedule">
                Schedule
              </NavLink>
            </li>
            <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
              <NavLink activeClassName="active-thick-tab" to="/ch102/evaluation">
                Evaluation
              </NavLink>
            </li>
            <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
              <NavLink activeClassName="active-thick-tab" to="/ch102/safety">
                Safety Rule
              </NavLink>
            </li>
            <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
              <NavLink activeClassName="active-thick-tab" to="/ch102/links">
                Useful Links
              </NavLink>
            </li>
            <li style={{display: 'inline', marginLeft: '2%', marginRight: '2%'}}>
              <NavLink activeClassName="active-thick-tab" to="/ch102/contact">
                TA Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
 }

