import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TabItems from './TabItems';
import imageToy from './../../1.jpg';

class FollowPrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:{
                image : {imageToy},
                name: 'Xe tải đồ chơi',
                id: 'D123456778',
                amount:'2',
                auto: true
            }
        };
    }
    
    render() {
        var {items}=this.state;
        return (
            <div  onSubmit={this.onSubmit} >
                    <div className=" card overview col-sm-12">
                        <h2>Sản phẩm </h2>
                    </div>
                    <div className="manage">
                      <div className="row ">
                        <div className="col-md-10">
                          <h5> Cửa hàng đang chọn: nottthing123 </h5>
                        </div>
                        <div className="col-md-2 offset-md-2 mr-0 ml-0">
                          <Link to={`${this.props.admin_url.url}/quanlycuahang`} className="btn btn-link">Đổi cửa hàng </Link>
                          {/* <button type="button" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết nối</button> */}
                        </div>
                      </div>
                      
                      <div className="border"> 
                                <table className="table">
                                    <thead>
                                    <tr >
                                            <th className="cot1">Sản phẩm</th>
                                            <th className="cot2">Mã sản phẩm</th>
                                            <th className="cot3 text-center">Số lượng đối thủ đang theo dõi</th>
                                            <th className="cot4 text-center">Chỉnh giá tự động</th>
                                            <th className="cot5"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <TabItems items={items} match={this.props.match}/>
                                    </tbody>
                                </table>
                      </div>
                    </div>
                </div>
        );
    }
}

export default FollowPrice ;