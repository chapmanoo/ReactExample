import React, { Component } from 'react';
import "../App.css";
import ColumnHeader from "../components/ColumnHeader.js";
import RowData from "../components/RowData.js";
import TableTitle from "../components/TableTitle.js";

class Table extends Component {

    constructor() {
        super()
        let baseURL = "http://localhost:3001/";
        this.url = baseURL + "api/film";

        this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

        this.handleSubmit = (e) => {
            let newFilm = this.makeFilmFromInputs(); //get new object built from the inputs

            e.preventDefault();
            this.setState({
                title: newFilm.title,
                runTime: newFilm.runTime,
                release: newFilm.release,
                id: newFilm.id
            }); //states have been set to that of new object

            const request = new Request(this.url, { //create post request
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)    //object to be added
            });
            fetch(request).then((response) => {
                //add response to state
                //const films = [...this.props.films];
                response.json().then(actualResponse=>{
                    this.props.onSubmit(actualResponse);
                });
                // this.props.onSubmit(this.state);
            })
        }

        this.state = {

            title: "",
            runTime: 0,
            release: 0,
            id: -1

        }
    }

    makeFilmFromInputs = () => {
        return {
            id: this.state.id, //id from field
            title: this.state.title, //id from field
            runTime: this.state.runTime, //id from field
            release: this.state.release//id from field
        }
    }

    render(props) {
        return (
            <table className="filmTable">
                <TableTitle text={"Films"} />
                <br></br>
                <table>
                    <ColumnHeader
                        header1={"Title"}
                        header2={"Runtime"}
                        header3={"Release"}
                    />
                    <tr id="createRow">
                        <td> <input type="number" placeholder="Enter ID" onChange={this.handleChange("id")} />  </td>
                        <td> <input type="text" placeholder="Enter title" onChange={this.handleChange("title")} /> </td>
                        <td> <input type="number" placeholder="Enter Run Time" onChange={this.handleChange("runTime")} /></td>
                        <td> <input type="number" placeholder="Enter Release" onChange={this.handleChange("release")} /></td>
                        <td> <button onClick={this.handleSubmit}> Create  </button> </td>
                    </tr>
                    {
                        this.props.films.map(film => {
                            return <RowData film={film} deleteMethod={this.props.deleteMethod}
                                editMethod={this.props.editMethod} toEdit={this.props.toEdit} />
                        })
                    }
                </table>
            </table>
        );
    }
}

// const Table = (props) => (
//     <table className="filmTable">
//         <TableTitle text={"Films"} />
//         <br></br>
//         <table>
//             <ColumnHeader
//                 header1={"Title"}
//                 header2={"Runtime"}
//                 header3={"Release"}
//             />
//             <tr id="createRow">
//                 <td> <input type="text" placeholder="Enter ID"/>  </td>
//                 <td> <input type="text" placeholder="Enter title"/> </td>
//                 <td> <input type="text" placeholder="Enter Run Time"/></td>
//                 <td> <input type="text" placeholder="Enter Release"/></td>
//                 <td> <button> Create </button> </td>
//             </tr>
//             {
//                 props.films.map(film => {
//                     return <RowData film={film} deleteMethod={props.deleteMethod}
//                         editMethod={props.editMethod} toEdit={props.toEdit} />
//                 })
//             }
//         </table>
//     </table>
// );

export default Table;