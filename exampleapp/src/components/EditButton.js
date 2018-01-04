import React from 'react';
import '../App.css';

const EditButton = (props) => (
    <button onClick={() => props.method()}> {props.text} </button>
);

export default EditButton;