import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './items.css';
import TabItems from './TabItems';
import imageToy from './1.jpg';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:{
                image : {imageToy},
                name: 'Xe tải đồ chơi',
                id: 'D123456778',
                price:'70,000đ',
                rating:''
            }
        };
    }
    
    render() {
        var {items}=this.state;
        return (
            <div  onSubmit={this.onSubmit} >

                    <div className=" card overview col-sm-12">
                        <h2>Sản phẩm</h2>
                    </div>
                    <div className="manage">
                      <div className="row ">
                        <div className="col-md-10">
                          <h5> Cửa hàng đang chọn: nottthing123 </h5>
                          
                        </div>
                        <div className="col-md-2 offset-md-2 mr-0 ml-0">
                          <Link to={`${this.props.match.url}/quanlycuahang`} className="btn btn-link">Đổi cửa hàng </Link>
                          {/* <button type="button" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết nối</button> */}
                        </div>
                      </div>
                      <div className="border"> 
                                    <div className="form-group"> 
                                            <div className="input-group ">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text purple lighten-3" id="basic-text1"><i className="fa fa-search text-white"
                                                        aria-hidden="true"></i></span>
                                                </div>
                                                <input 
                                                    className="form-control my-0 py-1" 
                                                    type="text" 
                                                    placeholder="Search" 
                                                    aria-label="Search"
                                                />
                                             </div>
                                     </div>
                                 
                                <table className="table">
                                    <thead>
                                    <tr >
                                            <th className="cot1">Sản phẩm</th>
                                            <th className="cot2">Mã sản phẩm</th>
                                            <th className="cot3">Giá bán</th>
                                            <th className="cot4">Rating</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <TabItems items={items} match={this.props.match}/>
                                        <TabItems items={items}match={this.props.match}/>
                                        <TabItems items={items}match={this.props.match}/>
                                        <TabItems items={items}match={this.props.match}/>
                                        <TabItems items={items}match={this.props.match}/>
                                        <TabItems items={items}match={this.props.match}/>
                                        <TabItems items={items}match={this.props.match}/>
                                        <TabItems items={items}match={this.props.match}/>
                                    </tbody>
                                </table>
                      </div>
                    </div>
                </div>
        );
    }
}

export default Product ;