import React, { Component } from "react";
import "../App.css";
import Button from "../components/Button.js";

class RowData extends Component {
    constructor() {
        super();
        this.state = {
            toEdit: false,
            title: "",
            runTime: 0,
            release: 0,
            id: 0
        }

        this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.editMethod(this.state.id, this.state);
            this.setState({
                title: "",
                runTime: 0,
                release: 0,
                id: 0
            });
            this.flipFlop();
        }

        this.flipFlop = (filmID) => {
            //flag row of FilmID to textboxes
            this.setState({ toEdit: !this.state.toEdit })
        }

        this.turnEditable = (idToEdit) => {
            return (event) => {
                this.flipFlop();
                this.setState({
                    title: this.props.film.title,
                    id: this.props.film.id,
                    release: this.props.film.release,
                    runTime: this.props.film.runTime
                })
            };
        }
    }
    render() {
        if (!this.state.toEdit) {
            return (
                <tbody id={this.props.film.id}>
                    <tr key={this.props.film.id.toString()}>
                        <td> <Button method={this.props.deleteMethod} filmIndex={this.props.film.id} text={"X"} /> </td>
                        <td handleChange={this.handleChange("title")} > {this.props.film.title}</td>
                        <td handleChange={this.handleChange("runTime")} > {this.props.film.runTime}</td>
                        <td handleChange={this.handleChange("release")} > {this.props.film.release}</td>
                        <td> <button onClick={this.turnEditable(this.props.film.id)}> Edit </button> </td>
                    </tr>
                </tbody>
            );
        } else {
            return (
                <tbody id={this.props.film.id}>
                    <tr key={this.state.id}>
                        <td> <Button method={this.props.deleteMethod} filmIndex={this.state.id} text={"X"} /> </td>
                        <td> <input type="text" onChange={this.handleChange("title")} value={this.state.title} /></td>
                        <td> <input type="text" onChange={this.handleChange("runTime")} value={this.state.runTime} /></td>
                        <td> <input type="text" onChange={this.handleChange("release")} value={this.state.release} /></td>
                        <td> <button onClick={this.handleSubmit}> Save </button> </td>
                    </tr>
                </tbody >)
        }
    }
}


export default RowData;