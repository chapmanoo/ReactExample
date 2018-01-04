import React from "react";
//import React, { Component } from "react";
import "../App.css";

// class Button extends Component {
//     constructor(props) {
//         super(props);

//         this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

//         this.handleSubmit = (e) => {
//             e.preventDefault();
//             this.props.onSubmit(this.state);
//             this.setState({
//                 title: "",
//                 runTime: "",
//                 release: ""
//             });
//         }

//         this.state = {
//             title: "",
//             runTime: "",
//             release: ""
//         };
//     }

//     render() {
//         return (
//             <button onClick={() => this.handleChange(this.props.name)}> {this.props.text} </button>
//         )
//     }
// }


 const Button = (props) => (
     <button onClick={() => props.method(props.filmIndex)}> {props.text} </button>
 );

export default Button;

