import React, { Component } from 'react';
import logo from './image.png';
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
          <h1 className="App-title">Welcome to my React</h1>
        </header>
        <p className="App-intro">
          Hello there my friend!
        </p>

        {/* {
          this.state.films.map((film) => (
            <p key={film.id.toString()}> Film title: {film.title}, Film runtime: {film.runTime}, Film release: {film.release} </p>))
        } */}

        <table className="filmTable">
          <h2>Films</h2>
          <br></br>
          <table>
            <thead>
              <th>&nbsp;</th>
              <th>Title</th>
              <th>Run Time</th>
              <th>Release Year</th>
              <th>&nbsp;</th>
            </thead>
            <tbody id="filmDetails">
              {
                this.state.films.map((film) => (
                  <tr key={film.id.toString()}>
                    <td> <button class="deleteFilm"> X </button> </td>
                    <td> {film.title}</td>
                    <td> {film.runTime}</td>
                    <td> {film.release}</td>
                    <td> <button class="editFilm"> Edit </button> </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </table>
      </div>
    );
  }
}

export default App;
