import React, { Component } from 'react';
import '../App.css';
import ColumnHeader from "../components/ColumnHeader.js";
import RowData from "../components/RowData.js";
import TableTitle from "../components/TableTitle.js";

class Table extends Component {
    render() {
        return (
            <table className="filmTable">
                <TableTitle />
                <br></br>
                <table>
                    <ColumnHeader />
                    <RowData films={this.props.films} />
                </table>
            </table>
        );
    }
}

export default Table;