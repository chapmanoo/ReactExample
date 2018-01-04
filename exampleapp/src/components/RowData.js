// import React, { Component } from 'react';
import React from 'react';
import '../App.css';
import Button from "../components/Button.js";

/*class RowData extends Component {
    render() {
        return (
            <tbody id="filmDetails">
                {
                    this.props.films.map((film) => (
                        <tr key={film.id.toString()}>
                            <td> <button class="deleteFilm"> X </button> </td>
                            <td> {film.title}</td>
                            <td> {film.runTime}</td>
                            <td> {film.release}</td>
                            <td> <button class="editFilm"> Edit </button> </td>
                        </tr>
                    ))
                }
            </tbody>
        );
    }
}*/

const RowData = (props) => (
    <tbody id={props.id}>
        {
            props.films.map((film) => (
                <tr key={film.id.toString()}>
                    <td> <Button method={props.deleteMethod} filmIndex={film.id} text={'X'} /> </td>
                    <td> <input type="text" value={film.title} onChange={props.changed} /> </td>
                    <td> <input type="text" value={film.runTime} onChange={props.changed}/></td>
                    <td> <input type="text" value={film.release} onChange={props.changed} /></td>
                    <td> <Button method={props.editMethod} filmIndex={film.id} text={'Edit'}/> </td>
                </tr>
            ))
        }
    </tbody>
);

export default RowData;