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
    render() {
        let {add}=this.state;
        return (
                <tr>
                    <td >
                        <img className="img-toy m-r-7" src={imageToy} alt="" />
                        <Link to={`${this.props.Theodoidoithu_url.url}/itemsDetail`}>{this.props.items.name} </Link>
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
                    {this.state.add ? <label className="text-primary m-l-35"> Đã thêm</label>:<button className="button" className="btn btn-primary m-l-35" onClick={this.openAdd} >Thêm</button>}
                    
                        
                   
                    </td>
                   
                </tr>
                
                
        );
    }
}

export default TabItems ;