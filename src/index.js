import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/Main';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

// Load foundation
import foundation from 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

// CSS
import css from 'style!css!sass!../styles/style.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='timer' component={Timer} />
      <IndexRoute component={Stopwatch} />
    </Route>
  </Router>,
  document.getElementById('app')
);
