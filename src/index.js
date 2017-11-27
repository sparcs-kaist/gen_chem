import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import './Nanum.css';
import './'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const browserHistory = createBrowserHistory();
//
// browserHistory.listen((location, action) => {
//   window.scrollTo(0, 0);
// });

ReactDOM.render(
  (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();
