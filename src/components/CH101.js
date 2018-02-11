import React, { Component } from 'react';
import TabCompressedCH101 from "./TabCompressedCH101";
import TabCH101 from './TabCH101';
import { Redirect,Route, Switch } from 'react-router-dom';

import Notice from './Notice';
import Schedule from './Schedule';
import Download from './Download';
import TAContact from "./TAContact";
import MediaQuery from 'react-responsive';

export default class CH101 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.dropDown = this.dropDown.bind(this);
    this.dropUp = this.dropUp.bind(this);
  }

  componentDidMount() {
    console.log('hi');
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
          <TabCompressedCH101 onPress={this.dropDown} clicked={this.state.clicked}/>
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <TabCH101 />
        </MediaQuery>

        <MediaQuery query="(max-width: 900px)">
          <div style={{paddingTop: 64}}>
            <Switch>
              <Route path='/ch101/notice' render={() => <Notice onPress={this.dropUp}/>} />
              <Route path='/ch101/schedule' render={() => <Schedule />} />
              <Route path='/ch101/download' render={() => <Download />} />
              <Route path='/ch101/contact' render={() => <TAContact /> } />
              <Redirect from='/ch101' to='/ch101/notice' />
            </Switch>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 900px)">
          <div style={{paddingTop: 128}}>
            <Switch>
              <Route path='/ch101/notice' render={() => <Notice onPress={this.dropUp}/>} />
              <Route path='/ch101/schedule' render={() => <Schedule classnum={"ch101"}/>} />
              <Route path='/ch101/download' render={() => <Download />} />
              <Route path='/ch101/contact' render={() => <TAContact /> } />
              <Redirect from='/ch101' to='/ch101/notice' />
            </Switch>
          </div>
        </MediaQuery>
      </div>
    )
  }
}