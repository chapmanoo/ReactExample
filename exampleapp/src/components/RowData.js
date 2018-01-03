import React, { Component } from 'react';
import '../App.css';

class RowData extends Component {
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
}

export default RowData;