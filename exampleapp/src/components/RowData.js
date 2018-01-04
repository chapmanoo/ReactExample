import React, { Component } from "react";
import "../App.css";
import Button from "../components/Button.js";
import EditButton from "../components/EditButton.js";
import CellData from "../components/CellData.js";

class RowData extends Component {
    constructor() {
        super();
        this.state = {
            toEdit: false
        }

        this.flipflop = (filmID) => {
            //flag row of FilmID to textboxes
            this.setState({ toEdit: !this.state.toEdit })
        }

    }
    render() {
        if (!this.state.toEdit) {
            return (
                <tbody id={this.props.id}>
                    {
                        this.props.films.map((film) => (
                            <tr key={film.id.toString()}>
                                <td> <Button method={this.props.deleteMethod} filmIndex={film.id} text={"X"} /> </td>
                                <td> <CellData data={film.title} toEdit={false}/> </td>
                                <td> <CellData data={film.runTime} toEdit={false}/> </td>
                                <td> <CellData data={film.release} toEdit={false}/> </td>
                                <td> <button onClick={() => this.flipflop()}> Edit </button> </td>
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
                                {/* <td> <input type="text" value={film.title} onChange={this.props.changed} /> </td>
                                <td> <input type="text" value={film.runTime} onChange={this.props.changed} /></td>
                                <td> <input type="text" value={film.release} onChange={this.props.changed} /></td> */}
                                <td> <CellData data={film.title} toEdit={true}/> </td>
                                <td> <CellData data={film.runTime} toEdit={true}/> </td>
                                <td> <CellData data={film.release} toEdit={true}/> </td>
                                <td> <button onClick={() => this.flipflop(film.id)}> Edit </button> </td>
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