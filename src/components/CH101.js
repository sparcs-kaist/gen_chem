import React, { Component } from 'react';
import TabCompressedCH101 from "./TabCompressedCH101";
import TabExtendedCH101 from "./TabExtendedCH101";
import { Redirect,Route, Switch } from 'react-router-dom';

import Notice from './Notice';

export default class CH101 extends Component {
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
      <div style={{backgroundColor: 'white',}}>
        <TabCompressedCH101 />
        <div style={{paddingTop: 64}}>
          <Switch>
            <Route path='/ch101/notice' render={() => <Notice onPress={this.dropUp}/>} />
            <Route path='/ch101/schedule' render={() => <div style={{height: 1080}}>Hi2</div>} />
            <Route path='/ch101/download' render={() => <div style={{height: 1080}}>Hi3</div>} />
            <Route path='/ch101/contact' render={() => <div style={{height: 1080}}>Hi4</div>} />
            <Redirect from='/ch101' to='/ch101/notice' />
          </Switch>
        </div>
      </div>
    );
  }
}