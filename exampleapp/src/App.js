import React, { Component } from "react";
import logo from "./image.png";
import "./App.css";
import Table from "./components/Table.js";

class App extends Component {

  constructor() {
    super()

    let baseURL = "http://localhost:3001/";
    this.url = baseURL + "api/film";
    this.loadData();

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

  deleteFilmHandler = (id) => {
    const request = new Request(this.url + `/${id}`, {
      method: "DELETE"
    });
    fetch(request)

    const filmIndex = this.state.films.findIndex(f => {
      return f.id === id;
    });
    const films = [...this.state.films];

    films.splice(filmIndex, 1);
    this.setState({ films: films });

  }

  handleSubmitInParent = (dataFromChild) => { //receive param from child
    const films = [...this.state.films];  //copy films not by reference
    films.push(dataFromChild); //push received data to copied films
    this.setState({films : films}); //set state films as new films

  }


  editFilmHandler = (idToEdit, newContents) => {
    //Edit a film
    const filmToEdit = this.state.films.findIndex((film) => film.id === idToEdit)
    const arrayToEdit = [...this.state.films];
    arrayToEdit[filmToEdit].release = newContents.release;
    arrayToEdit[filmToEdit].runTime = newContents.runTime;
    arrayToEdit[filmToEdit].title = newContents.title;

    const request = new Request(this.url + `/${idToEdit}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arrayToEdit[filmToEdit])
    });

    fetch(request); //.then((response) => alert(response))
    this.setState({
      films: arrayToEdit,
      toEdit: !this.state.toEdit
    })

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
        <Table
          films={this.state.films}
          deleteMethod={this.deleteFilmHandler}
          editMethod={this.editFilmHandler}
          toEdit={this.state.toEdit} 
          onSubmit = {this.handleSubmitInParent}/>
      </div>
    );
  }

}

export default App;
