//import React, { Component } from 'react';
import React from 'react';
import '../App.css';

/*class ColumnHeader extends Component {
    render() {
        return (
            <thead>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Run Time</th>
                <th>Release Year</th>
                <th>&nbsp;</th>
            </thead>
        );
    }
}*/

const ColumnHeader = (props) => (
    <thead>
        <th>&nbsp;</th>
        <th>{props.header1}</th>
        <th>{props.header2}</th>
        <th>{props.header3}</th>
        <th>&nbsp;</th>
    </thead>
);

export default ColumnHeader;