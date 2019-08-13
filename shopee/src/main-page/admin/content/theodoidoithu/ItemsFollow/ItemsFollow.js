import React, { Component } from 'react';
import './../items.css';
import StarRatings from 'react-star-ratings';
import imageToy from './../1.jpg';
import { Link } from "react-router-dom";
import Noidung from './itemsFollow_content/noidung';



class ItemsFollow extends Component {
    
    render() {
        return (
            <div>
                <div className="col col-sm-3"><Link to={`${this.props.Theodoidoithu_url.url}`}className="txt7"><i className="fa fa-angle-left"></i> Quay lại trang danh sách</Link></div> 
                <div className=" card overview col-sm-12 m-t-15">   
                    <div className="row ">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                             <img className="img-toy-1" src={imageToy} alt="" />
                        </div>
                        
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="row ">
                                 <label className="form-control-group"><h3>Xe tải đồ chơi thế hệ mới</h3></label>
                                
                            </div>
                            <div className="row ">
                                <label className="form-control-group "><h6>D123456778</h6></label>
                            </div>
                            <div className="row ">
                             <label className="form-control-group "><h6> Cửa hàng: "Nottthing123"</h6></label>
                            </div>
                        </div>
                    </div>
                    <div className="row list">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <Link className="btn btn-outline-info" to={`${this.props.match.url}`}>Đối thủ</Link>
                            <Link className="btn btn-outline-info" to={`${this.props.match.url}/theodoigia`}>Theo dõi giá</Link>
                            <Link className="btn btn-outline-info" to={`${this.props.match.url}/chinhgiatudong`}>Chỉnh giá tự động</Link>
                        </div>
                    </div>
                </div>
                <div className="noidung">
                    
                      {/* <Doithu/> */}
                      <Noidung match = {this.props.match}/>
                 </div>
               </div>
        );
    }
}

export default ItemsFollow ;