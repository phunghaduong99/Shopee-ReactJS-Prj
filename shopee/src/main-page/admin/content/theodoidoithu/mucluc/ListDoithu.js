import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import imageToy from './1.jpg';
class ListDoithu  extends Component {
    constructor(props){
        super(props);
       
    }
    isOnFollowing = (event) => {
        event.preventDefault();
        let indexItem = this.props.indexItem;
        this.props.isOnFollowing(indexItem);
    }
    render() {
   
        let rating_star = Math.round(this.props.rating_star * 100) / 100;
        return (
                <tr>
                    <td> {this.props.nameRival}</td>
                    <td className="text-center"> {this.props.rating_star_rival_shop}</td>
                    <td className="text-center"> {this.props.follower_count}</td>
                    <td >
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <img className="img-toy3 m-r-7" src={this.props.images}  />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {this.props.name}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div><span className="text-danger">{rating_star}</span>/5</div>
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 <div className="text-right"><span className="text-danger">{this.props.sold}</span> đã bán</div>
                            </div>
                        </div>
                    </td>
                    <td> {this.props.price}</td>
                    <td>
                        <button className="button" className="btn btn-primary m-l-5" onClick={this.isOnFollowing} >Chọn</button>
                    </td>
                </tr>
                
                
        );
    }
}

export default ListDoithu  ;