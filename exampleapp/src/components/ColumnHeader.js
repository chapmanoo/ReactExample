import React, { Component } from 'react';
import '../App.css';

class ColumnHeader extends Component {
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
}

export default ColumnHeader;