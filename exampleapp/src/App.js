import React, { Component } from "react";
import logo from "./image.png";
import "./App.css";
import Table from "./components/Table.js";

class App extends Component {
  constructor() {
    super()

    let baseURL = "http://localhost:3001/";
    this.url = baseURL + "api/film";
    this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

    this.handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({
        myData: ""
      });
    }
  }



  state = {
    films: [
      {
        id: 1,
        title: "Toy Story",
        runTime: 81,
        release: 1995
      }, {
        id: 2,
        title: "test",
        runTime: 121,
        release: 1994
      }, {
        id: 3,
        title: "hope",
        runTime: 96,
        release: 2003
      }
    ],
    showFilms: false,
    toEdit: false,
    title: "",
    runTime: "",
    release: ""
  }

  loadData() {
    fetch(this.url)
      .then((res) => res.json().then((json) => {
        this.setState({
          films: json
        });
      }))
  }

  // editData(id) {
  //   fetch(this.url + `/${id}`)
  //     .then((res) => res.json().then((json) => {
  //       this.setState({
  //         films : newfilm
  //       });
  //     }))
  // }

  // titleChangedHandler = (event, id) => {
  //   //find the film object index via ID
  //   const filmIndex = this.state.films.findIndex((f) => {
  //     return f.id === id;
  //   });
  //   //use spread operator to copy the object, not by reference
  //   const film = {
  //     ...this.state.films[filmIndex]
  //   };
  //   //update title with new value from textbox
  //   film.title = event.target.value;
  //   //copy films array
  //   const films = [...this.state.films];
  //   //update old object with new object
  //   films[filmIndex] = film;
  //   //update state with copied array
  //   this.setState({ films: films });
  // }

  deleteFilmHandler = (id) => {
    // const filmIndex = this.state.films.findIndex(f => {
    //   return f.id === id;
    // });
    // const films = [...this.state.films];

    // films.splice(filmIndex, 1);
    // this.setState({ films: films });


    const request = new Request(this.url + `/${id}`, {
      method: "DELETE"
    });
    return fetch(request);
  }

  editFilmHandler = () => {
    this.handleChange();
    this.setState({ toEdit: !this.state.toEdit })
  }


  render() {
    this.loadData();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React</h1>
        </header>
        <p className="App-intro">
          Hello there my friend!
        </p>
        <Table
          films={this.state.films}
          deleteMethod={this.deleteFilmHandler}
          editMethod={this.editFilmHandler}
          changed={this.ChangedHandler}
          toEdit={this.state.toEdit} />
      </div>
    );
  }

}

export default App;
