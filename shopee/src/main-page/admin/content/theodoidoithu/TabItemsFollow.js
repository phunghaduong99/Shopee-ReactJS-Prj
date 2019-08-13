import React, { Component } from 'react';
import './items.css';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import imageToy from './1.jpg';
import Popup from "reactjs-popup";



class TabItemsFollow extends Component {
 
    render() {
        let eleAuto=null;
        let {auto}=this.props.items;
        if (auto){ eleAuto="Bật"}
        else eleAuto="Tắt";
        
        return (
                <tr>
                    <td >
                        <img className="img-toy m-r-7" src={imageToy} alt="" />
                        <Link to={`${this.props.match.url}/theodoidoithu/itemsFollow`}>{this.props.items.name} </Link>
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

export default TabItemsFollow ;