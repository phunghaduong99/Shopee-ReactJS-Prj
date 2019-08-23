import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Items from './../../1.jpg';
class TabItems extends Component {
 
    render() {
        let eleAuto=null;
        let {auto}=this.props.items;
        if (auto){ eleAuto="Bật"}
        else eleAuto="Tắt";
        
        return (
                <tr>
                    <td >
                        <div className="row">
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <img className="img-toy m-r-7" src={Items} alt="" />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <Link to={`${this.props.match.url}/thongtinsanpham`}>{this.props.items.name} </Link>
                            </div>
                        </div>
                        </td>
                    <td> {this.props.items.id}</td>
                    <td className="text-center"> {this.props.items.amount}</td>
                    <td className="text-center">
                     {eleAuto}
                    </td>
                    <td><button className="button" className="btn btn-danger ">Xóa</button></td>
                </tr>
                
                
        );
    }
}

export default TabItems ;