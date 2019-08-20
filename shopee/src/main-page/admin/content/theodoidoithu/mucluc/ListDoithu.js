import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import imageToy from './1.jpg';
class ListDoithu  extends Component {
    constructor(props){
        super(props);
        this.state = ({
            choose:false
        });
    }
    onChoose=(e)=>{
        e.preventDefault();
        this.setState( {
            choose:true
        });
    }
    render() {
        let {choose}=this.state;
        return (
                <tr>
                    <td> {this.props.conpetitor.name}</td>
                    <td className="text-center"> {this.props.conpetitor.rating}</td>
                    <td className="text-center"> {this.props.conpetitor.follow}</td>
                    <td >
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <img className="img-toy3 m-r-7" src={imageToy}  />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {this.props.conpetitor.namePro}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div><span className="text-danger">{this.props.conpetitor.rating}</span>/5</div>
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                 <div className="text-right"><span className="text-danger">{this.props.conpetitor.buy}</span> đã bán</div>
                            </div>
                        </div>
                    </td>
                    <td> {this.props.conpetitor.price}</td>
                    <td>
                        {this.state.choose? <label className="text-primary m-l-5" >Đã chọn</label>:<button className="button" className="btn btn-primary m-l-5" onClick={this.onChoose} >Chọn</button>}
                        
                    </td>
                </tr>
                
                
        );
    }
}

export default ListDoithu  ;