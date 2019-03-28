import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Bricks from './assets/blocks/bricks.svg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      screen: [],
    }
  }
  componentDidMount() {
    let col = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0];
    let screen = [col,col,col,col,col,col,col,col,col,col,col,col,col,col,col,col,]
    let test = this.fillScreen(screen)
    this.setState({screen: test})
  }
  fillScreen = screenArray => {
    return screenArray.map(row => row.map(blockID => this.getBlock(blockID)))
  }
  getBlock = blockID => {
    let blockName = ''
    switch(blockID) {
      case 0: blockName = 'ground'; break
      case 1: blockName = 'brick'; break
      case 2: blockName = 'question'; break
      default: blockName = 'none'; break
    }
    return (
      <svg viewBox="0 0 16 16" alt="brick" height="160" width="160">
        <use xlinkHref={Bricks + '#' + blockName} />
      </svg>
    )
  }
  render() {
    return (
      <div className="App">
        {this.state.screen.map(row => 
          <div>{row.map(block => block)}</div>)}
      </div>
    );
  }
}

export default App;
