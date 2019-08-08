import React, { Component } from 'react';
import './items.css';
import StarRatings from 'react-star-ratings';

class TabItems extends Component {

    render() {
        // var {items}=this.props;
        return (
                <tr>
                    <td className="text-primary" >{this.props.items.name}</td>
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
                    <td><button type="button" className="btn btn-primary ">Sửa giá</button></td>
                        
                </tr>
        );
    }
}

export default TabItems ;