import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, Link, browserHistory} from 'react-router';
import App from './App';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import StoresPage from './StoresPage';
import FailPage from './FailPage';
import './index.css';

let storeList = [{}]

ReactDOM.render((
  
  <Router history={browserHistory}>
    <Route path="/" component={App} >,
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="stores" component={StoresPage} />
      <Route path="*" component={FailPage} />
    </Route>

  </Router>
),
  document.getElementById('root')
);
