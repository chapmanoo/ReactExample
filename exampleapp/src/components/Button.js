import React from 'react';
import '../App.css';

const Button = (props) => (
    <button onClick={() => props.method(props.filmIndex)}> {props.text} </button>
);

export default Button;

