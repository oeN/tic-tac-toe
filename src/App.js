import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './components/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tic Tac Toe</h2>
        </div>
        <Grid />
      </div>
    );
  }
}

export default App;
