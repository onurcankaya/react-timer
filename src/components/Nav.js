import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

export default () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to='/' activeClassName='active-link' activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink>
            </li>
            <li>
              <Link to='/' activeClassName='active-link' activeStyle={{ fontWeight: 'bold' }}>Stopwatch</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"><a href="http://github.com/onurcankaya" target="_blank">Onur Çankaya</a></li>
          </ul>
        </div>
      </div>
    );
}
