import React, { Component } from 'react';

class RivalChosen extends Component {
    constructor(props) {
        super(props);

    }
    DeleteFollowing = (e) => {
        e.preventDefault();
        let indexItem = this.props.indexItem;
        this.props.DeleteFollowing(indexItem);
    }
    render() {
        return (
            <tr>
                <td>{this.props.nameRival}</td>
                <td className="text-right"><button className="button" className="btn btn-danger " onClick = {this.DeleteFollowing}>Xóa</button></td>
            </tr>
        );
    }
}

export default RivalChosen;