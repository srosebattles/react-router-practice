import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import App from './App';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import StoresPage from './StoresPage';
import FailPage from './FailPage';
import OneStore from './OneStore'
import './index.css';

ReactDOM.render((


  <Router history={browserHistory}>
    <Route path="/" component={App} >,
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="stores" component={StoresPage} />
      <Route path="/stores/:id" component={OneStore}/>
      <Route path="*" component={FailPage} />
    </Route>

  </Router>

),
  document.getElementById('root')
);
