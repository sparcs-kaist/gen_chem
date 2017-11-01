import React, { Component } from 'react';

import Section from './Section';
import { NavLink, Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';


export default class TabCompressedCH101 extends Component {
  render () {
    return (
      <div style={{position: 'fixed', minWidth: 300, width: '100%'}}>
        <div style={{position: 'absolute', top: 0, width: '100%'}}>
          <NavLink className="tab" activeClassName="active-tab" to="/ch101/notice" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="NOTICE" style={{backgroundColor: '#F4862C', color: '#FFFFFF'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch101/schedule" style={{position: 'absolute', display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="Schedule" style={{backgroundColor: '#F4862C', color: '#FFFFFF'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch101/download" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="Download" style={{backgroundColor: '#F4862C', color: '#FFFFFF'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch101/contact" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="TA Contact" style={{backgroundColor: '#F4862C', color: '#FFFFFF'}} />
          </NavLink>
        </div>
        <Section arrow={true} arrowUp={this.props.clicked} arrowColor='#FFFFFF' style={{position: 'absolute', top: 0, right: 0, left: 0, pointerEvents: this.props.clicked ? 'none' : 'none', zIndex: 100, backgroundColor: 'rgba(0,0,0,0)'}} />
        <div style={{position: 'absolute', top: 0, right: 0, left: '2%', height: 64, display: 'table', zIndex: 200}}>
            <div style={{display: 'table-cell', verticalAlign: 'middle', color: '#FFFFFF', fontWeight: 'bold'}}>
              <Link to="/">
              <div style={{display: 'inline-block', verticalAlign: 'middle'}}><Ionicon icon='ion-chevron-left' color='#FFFFFF' fontSize="24px"/></div>
              <div style={{display: 'inline-block', color: '#FFFFFF', fontSize: 28, verticalAlign: 'middle'}}>CH101</div>
              </Link>
            </div>
        </div>
      </div>
    );
  }
}