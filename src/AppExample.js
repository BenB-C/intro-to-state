import React from 'react';
import logo from './logo.svg';
import './AppExample.css';

function AppExample() {
  return (
    <div className="AppExample">
      <header className="AppExample-header">
        <img src={logo} className="AppExample-logo" alt="logo" />
        <p>
          Edit <code>src/AppExample.js</code> and save to reload.
        </p>
        <a
          className="AppExample-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppExample;
