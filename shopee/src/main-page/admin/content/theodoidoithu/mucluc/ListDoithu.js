import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import imageToy from './1.jpg';
class ListDoithu  extends Component {
    
    render() {
        let eleCho=null;
        if (this.props.conpetitor.choose){
            eleCho="đã chọn"
        };
        
        return (
                <tr>
                    <td> {this.props.conpetitor.name}</td>
                    <td className="text-center"> {this.props.conpetitor.rating}</td>
                    <td className="text-center"> {this.props.conpetitor.follow}</td>
                    <td >
                        <div className="row">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <img className="img-toy3 m-r-7" src={imageToy}  />
                            </div>
                            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {this.props.conpetitor.namePro}
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div><span className="text-danger">{this.props.conpetitor.rating}</span>/5</div>
                            </div>
                            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 <div className="text-right"><span className="text-danger">{this.props.conpetitor.buy}</span> đã bán</div>
                            </div>
                        </div>
                    </td>
                    <td> {this.props.conpetitor.price}</td>
                    <td>
                        <button className="button" className="btn btn-primary m-l-5" onClick={this.props.onChoose} >Chọn</button>
                        {eleCho}
                    </td>
                   
                </tr>
                
                
        );
    }
}

export default ListDoithu  ;