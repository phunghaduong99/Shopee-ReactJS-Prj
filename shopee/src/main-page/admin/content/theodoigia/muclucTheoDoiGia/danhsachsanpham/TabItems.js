import React, { Component } from 'react';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import * as actions from '../../../../../../redux/actions/index';
import { connect } from 'react-redux';
class TabItems extends Component {
    
    saveItemId_ThongKe = () =>{
        let itemid = this.props.itemid;
        this.props.saveItemId_ThongKe(itemid);
    }
    render() {
        return (
            <tr>
                <td >
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img className="img-toy m-r-7" src={this.props.images} alt="" />
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            {this.props.name}
                        </div>
                    </div>
                </td>
                <td className="cot2"> {this.props.itemid}</td>
                <td className="cot3"> {this.props.price}</td>
                <td className="cot4">
                    <StarRatings
                        starRatedColor="#FFD203"
                        rating={this.props.rating_star}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                </td>
                <td className="cot5">
                    
                <Link  to={`${this.props.match.url}/itemsInformation/${this.props.itemid}`} className="btn btn-primary" onClick= {this.saveItemId_ThongKe} >Xem thống kê </Link>
                </td>
                </tr>
                
                
        );
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        saveItemId_ThongKe: (listItems) => {
            dispatch(actions.saveItemId_ThongKe(listItems));
        },

    }
}
export default connect(null, mapDispatchtoProps)(TabItems);