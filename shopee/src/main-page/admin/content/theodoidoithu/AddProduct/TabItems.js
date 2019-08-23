import React, { Component } from 'react';
import './../items.css';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import imageToy from './../1.jpg';



class TabItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            add: false 
        };
    }
    openAdd=(e)=> {
        e.preventDefault();
        this.setState({ add: true });
      }

    addItem = (e) => {
        e.preventDefault();
        let itemid = this.props.itemid;
        this.props.addItem(itemid);
    }
    render() {
        let {add}=this.state;
        
        let Theodoidoithu_url = "";
        if(this.props.Theodoidoithu_url !== undefined)  Theodoidoithu_url = this.props.Theodoidoithu_url.url;
        
        return (
                <tr>
                    <td >
                        <div className="row">
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <img className="img-toy m-r-7" src={this.props.images} alt="" />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <Link to={`${Theodoidoithu_url}/itemsDetail`}>{this.props.name} </Link>
                            </div>
                        </div>
                    </td>
                    <td> {this.props.itemid}</td>
                    <td> {this.props.price}</td>
                    <td>
                    <StarRatings
                        starRatedColor="#FFD203"
                        rating={4}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                    {this.props.isChosen ? <label className="text-primary m-l-35"> Đã thêm</label>:<button className="button" className="btn btn-primary m-l-35" onClick={this.addItem} >Thêm</button>}
                    
                        
                   
                    </td>
                   
                </tr>
                
                
        );
    }
}

export default TabItems ;