//import React, { Component } from 'react';
import React from 'react';
import '../App.css';

/*class TableTitle extends Component {
    render() {
        return (
                <h2>Films</h2>
        );
    }
}*/

const TableTitle = (props) => (
    <h2>{props.text}</h2>
);

export default TableTitle;