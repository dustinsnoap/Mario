import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Bricks from './assets/blocks/bricks.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg viewBox="0 0 16 16" alt="brick" height="160" width="160">
          <use xlinkHref={Bricks + "#brick"} />
        </svg>
      </div>
    );
  }
}

export default App;
