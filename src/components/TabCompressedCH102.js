import React, { Component } from 'react';

import Section from './Section';
import { NavLink, Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';


export default class TabCompressedCH102 extends Component {

  render () {
    return (
      <div style={{position: 'fixed', minWidth: 300, width: '100%'}}>
        <div style={{position: 'relative',  width: '100%'}}>
          <NavLink className="tab" activeClassName="active-tab" to="/ch102/notice" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="NOTICE" style={{backgroundColor: '#FFDD33', color: '#000000'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch102/schedule" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="Schedule" style={{backgroundColor: '#FFDD33', color: '#000000'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch102/evaluation" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="Evaluation" style={{backgroundColor: '#FFDD33', color: '#000000'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch102/safety" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="Safety Rule" style={{backgroundColor: '#FFDD33', color: '#000000'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch102/links" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="Useful Links" style={{backgroundColor: '#FFDD33', color: '#000000'}} />
          </NavLink>
          <NavLink className="tab" activeClassName="active-tab" to="/ch102/contact" style={{display: this.props.clicked ? 'block' : 'none'}}>
            <Section onPress={this.props.onPress} title="TA Contact" style={{backgroundColor: '#FFDD33', color: '#000000'}} />
          </NavLink>
        </div>
        <Section arrow={true} arrowUp={this.props.clicked} arrowColor='#000000' style={{position: 'absolute', top: 0, right: 0, left: 0, pointerEvents: this.props.clicked ? 'none' : 'none', zIndex: 100, backgroundColor: 'rgba(0,0,0,0)'}} />
        <div style={{position: 'absolute', top: 0, right: 0, left: '2%', height: 64, display: 'table', zIndex: 200}}>
          <div style={{display: 'table-cell', verticalAlign: 'middle', color: '#000000', fontWeight: 'bold'}}>
            <Link to="/">
              <div style={{display: 'inline-block', verticalAlign: 'middle'}}><Ionicon icon='ion-chevron-left' color='#000000' fontSize="24px"/></div>
              <div style={{display: 'inline-block', color: '#000000', fontSize: 28, verticalAlign: 'middle'}}>CH102</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}