import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello there my friend <code>src/App.js</code> and save to reload.
        </p>
        {
          this.state.films.map((film) => (
            <p key={film.id.toString()}> Film title: {film.title}, Film runtime: {film.runTime}, Film release: {film.release} </p>))
        }
      </div>
    );
  }
}

export default App;
