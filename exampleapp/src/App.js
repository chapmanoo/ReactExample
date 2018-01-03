import React, { Component } from 'react';
import logo from './image.png';
import './App.css';
import Table from "./components/Table.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [
        {
          id: '1',
          title: 'Toy Story',
          runTime: 81,
          release: 1995
        }, {
          id: '2',
          title: 'test',
          runTime: 121,
          release: 1994
        }, {
          id: '3',
          title: 'hope',
          runTime: 96,
          release: 2003
        }
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React</h1>
        </header>
        <p className="App-intro">
          Hello there my friend!
        </p>
        <Table films={this.state.films} />
      </div>
    );
  }
}

export default App;
