import React, { Component } from 'react';

import Section from './Section';
import { NavLink, Link } from 'react-router-dom';


export default class TabCH102 extends Component {

  render () {
    return (
      <div style={{position: 'fixed', minWidth: 300, width: '100%', zIndex: 100}}>
        <div style={{width: '100%', maxHeight: 64}}>
          <NavLink to="/ch101" style={{height: 0}}>
          <div style={{width: '50%', height: 64, backgroundColor: '#F4862C', display: 'inline-block'}}>
            <div style={{width: '100%', height: '100%', display: 'table', textAlign: 'center'}}>
              <span style={{display: 'table-cell', verticalAlign: 'middle', color: 'white', fontSize: 38, fontWeight: '600'}}>CH101</span>
            </div>
          </div>
          </NavLink>
          <NavLink to="/ch102">
          <div style={{width: '50%', height: 64, backgroundColor: '#FFDD33', display: 'inline-block'}}>
            <div style={{width: '100%', height: '100%', display: 'table', textAlign: 'center'}}>
              <span style={{display: 'table-cell', verticalAlign: 'middle', fontSize:  38, fontWeight: '600'}}>CH102</span>
            </div>
          </div>
          </NavLink>
        </div>
        <div style={{width: '100%', height: 64, backgroundColor: '#FFDD33', textAlign: 'center', display: 'table'}}>
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