import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => {
          return null;
      }}/>
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path='/roster' render={() => {
          return null;
        }}/>
        <Route path='/schedule' render={() => {
          return null;
        }}/>
      </Switch>
    );
  }
}

export default Main;