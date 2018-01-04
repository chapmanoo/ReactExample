import React, { Component } from "react";
import "../App.css";
import Button from "../components/Button.js";
import EditButton from "../components/EditButton.js";

class RowData extends Component {    
    render() {
        if (!this.props.toEdit) {
            return (
                <tbody id={this.props.id}>
                    {
                        this.props.films.map((film) => (
                            <tr key={film.id.toString()}>
                                <td> <Button method={this.props.deleteMethod} filmIndex={film.id} text={"X"} /> </td>
                                <td> {film.title}</td>
                                <td> {film.runTime}</td>
                                <td> {film.release}</td>
                                <td> <Button method={this.props.editMethod} text={"Edit"} /> </td>
                            </tr>
                        ))
                    }
                </tbody>
            );
        } else {
            return (
                <tbody id={this.props.id}>
                    {
                        this.props.films.map((film) => (
                            <tr key={film.id.toString()}>
                                <td> <Button method={this.props.deleteMethod} filmIndex={film.id} text={"X"} /> </td>
                                <td> <input type="text" value={film.title} onChange={this.props.changed} /> </td>
                                <td> <input type="text" value={film.runTime} onChange={this.props.changed} /></td>
                                <td> <input type="text" value={film.release} onChange={this.props.changed} /></td>
                                <td> <EditButton method={this.props.editMethod} text={"Edit"} /> </td>
                            </tr>
                        ))
                    }
                </tbody>
            );
        }
    }
}

// const RowData = (props) => (
//     <tbody id={props.id}>
//         {
//             props.films.map((film) => (
//                 <tr key={film.id.toString()}>
//                     <td> <Button method={props.deleteMethod} filmIndex={film.id} text={'X'} /> </td>
//                     <td> <input type="text" value={film.title} onChange={props.changed} /> </td>
//                     <td> <input type="text" value={film.runTime} onChange={props.changed}/></td>
//                     <td> <input type="text" value={film.release} onChange={props.changed} /></td>
//                     <td> <Button method={props.editMethod(this)} filmIndex={film.id} text={'Edit'}/> </td>
//                 </tr>
//             ))
//         }
//     </tbody>
// );

export default RowData;