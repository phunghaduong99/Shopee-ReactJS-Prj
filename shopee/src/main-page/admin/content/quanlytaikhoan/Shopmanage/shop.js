import React, { Component } from 'react';

class Shop extends Component {
    state = {
        status: "",
    }
    
    changeStatus = () => {
        this.props.changeStatus(this.props.index);
    }
    render() {
        let status;
        if(this.props.isActive)
            status = <td style= {{color: "#0aec1c "}}>Đang hoạt động</td> ;
        else 
            status =  <td> Không hoạt động </td>;
        return (
            <tr>
                <th scope="row">{this.props.name}</th>
                <td>{this.props.id}</td>
                {status}
                <td>
                    <button className="btn btn-primary" onClick={this.changeStatus}> Chuyển trạng thái</button>
                </td>
            </tr>
        );
    }
}

export default Shop;