import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import Footer from './components/Footer';
import CH101 from './components/CH101';
import CH102 from './components/CH102';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch key={1}>
          <Route exact path='/' component={Header}/>
          <Route path='/ch101' render={() => {
            return (
              <CH101 />
            )
          }}/>
          <Route path='/ch102' render={() => {
            return (
              <CH102 />
            );
          }}/>
          <Route path='/'>
            <Redirect to='/'/>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}




export default App;
