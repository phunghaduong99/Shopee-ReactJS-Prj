import React, { Component } from 'react';
import './items.css';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import imageToy from './1.jpg';

class TabItems extends Component {

    render() {
        return (
                <tr>
                    <td >
                        <img className="img-toy m-r-7" src={imageToy} alt="" />
                        <Link to={`${this.props.match.url}/quanlysanpham/itemsDetail`}>{this.props.items.name} </Link>
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
                    <td><button type="button" class="btn btn-primary ">Sửa giá</button></td>
                        
                </tr>
        );
    }
}

export default TabItems ;