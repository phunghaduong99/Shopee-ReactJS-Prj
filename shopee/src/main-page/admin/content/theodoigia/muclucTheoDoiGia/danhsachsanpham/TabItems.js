import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Items from './../../1.jpg';
import StarRatings from 'react-star-ratings';
class TabItems extends Component {
 
    render() {
        return (
            <tr>
                <td >
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img className="img-toy m-r-7" src={Items} alt="" />
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <Link  to={`${this.props.match.url}/thongtinsanpham`}>{this.props.items.name} </Link>
                        </div>
                    </div>
                </td>
                <td> {this.props.items.id}</td>
                <td> {this.props.items.price}</td>
                <td>
                    <StarRatings
                        starRatedColor="#FFD203"
                        rating={4}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                </td>
                <td className="text-left">
                    <button className="button" className="btn btn-primary " >Xem thống kê</button>
                </td>
                </tr>
                
                
        );
    }
}

export default TabItems ;