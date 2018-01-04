// import React, { Component } from 'react';
import React from 'react';
import '../App.css';
import ColumnHeader from "../components/ColumnHeader.js";
import RowData from "../components/RowData.js";
import TableTitle from "../components/TableTitle.js";

/*class Table extends Component {
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
}*/

const Table = (props) => (
    <table className="filmTable">
        <TableTitle text={'Films'} />
        <br></br>
        <table>
            <ColumnHeader 
                header1={'Title'}
                header2={'Runtime'}
                header3={'Release'}
            />
            <RowData
                films={props.films}
                deleteMethod={props.deleteMethod}
                editMethod={props.editMethod}
                id={'filmDetails'} />
        </table>
    </table>
);

export default Table;