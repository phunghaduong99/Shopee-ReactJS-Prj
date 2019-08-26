import React, { Component } from 'react';
import './../items.css';
import StarRatings from 'react-star-ratings';


class TabItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            add: false 
        };
    }

    addItem = (e) => {
        e.preventDefault();
        let itemid = this.props.itemid;
        this.props.addItem(itemid);
    }
    render() {
        let status ;
        if(this.props.isChosen) status =  <label className="text-primary m-l-35"> Đã thêm</label>
        else status = <button className="button" className="btn btn-primary m-l-35" onClick={this.addItem} >Thêm</button>
        
        return (
                <tr>
                    <td >
                        <div className="row">
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <img className="img-toy m-r-7" src={this.props.images} alt="" />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                <label className="text-primary">{this.props.name}</label>
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
                    <td>
                    {status}
                    </td>
                   
                </tr>
                
                
        );
    }
}

export default TabItems ;