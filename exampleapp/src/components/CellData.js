import React, { Component } from "react";
import "../App.css";

class CellData extends Component {

    render() {
        if (!this.props.toEdit) {
            return (
                <td> {this.props.data}</td>
            );
        } else {
            return (
                <td> <input type="text" name="title" value={this.props.data} /> </td>
            );
        }
    }

}

export default CellData;