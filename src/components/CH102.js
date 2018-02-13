import React, { Component } from 'react';
import TabCompressedCH102 from "./TabCompressedCH102";
import TabCH102 from './TabCH102';
import { Redirect, Route, Switch } from 'react-router-dom';

import Notice from './Notice';
import UsefulLinks from "./UsefulLinks";
import TAContact from "./TAContact";
import Evaluation from './Evaluation';
import SafetyRule from './SafetyRule';
import Schedule from './Schedule';
import MediaQuery from 'react-responsive';

export default class CH102 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.dropDown = this.dropDown.bind(this);
    this.dropUp = this.dropUp.bind(this);
  }

  dropDown() {
    this.setState((prevState) => {
      return {
        clicked: !prevState.clicked
      }
    });
  }

  dropUp() {
    this.setState((prevState) => {
      return {
        clicked: false
      }
    });
  }

  render() {
    return (
      <div style={{backgroundColor: 'white', paddingBottom: 48}}>
        <MediaQuery query="(max-width: 900px)">
          <TabCompressedCH102 onPress={this.dropDown} clicked={this.state.clicked}/>
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <TabCH102 />
        </MediaQuery>

        <MediaQuery query="(max-width: 900px)">
        <div style={{paddingTop: 64}}>
          <Switch>
            <Route path='/ch102/notice' render={() => <Notice subject='ch102' onPress={this.dropUp}/>} />
            <Route path='/ch102/schedule' render={() => <Schedule classnum="ch102"/>} />
            <Route path='/ch102/evaluation' render={() => <Evaluation />} />
            <Route path='/ch102/safety' render={() => <SafetyRule />} />
            <Route path='/ch102/links' render={() => <div style={{minHeight: '100vh'}}><UsefulLinks /></div>} />
            <Route path='/ch102/contact' render={() => <TAContact subject='ch102'/> } />
            <Redirect from='/ch102' to='/ch102/notice' />
          </Switch>
        </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <div style={{paddingTop: 128}}>
            <Switch>
              <Route path='/ch102/notice' render={() => <Notice subject='ch102' onPress={this.dropUp}/>} />
              <Route path='/ch102/schedule' render={() => <Schedule classnum={"ch102"}/>} />
              <Route path='/ch102/evaluation' render={() => <Evaluation />} />
              <Route path='/ch102/safety' render={() => <SafetyRule />} />
              <Route path='/ch102/links' render={() => <div style={{minHeight: '100vh'}}><UsefulLinks /></div>} />
              <Route path='/ch102/contact' render={() => <TAContact subject='ch102'/> } />
              <Redirect from='/ch102' to='/ch102/notice' />
            </Switch>
          </div>
        </MediaQuery>
      </div>
    );
  }
}