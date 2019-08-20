import React, { Component } from 'react';
import './../items.css';
import StarRatings from 'react-star-ratings';
import imageToy from './../1.jpg';
import { Link } from "react-router-dom";

class ItemsDetail extends Component {

    render() {
        return (
            <div>
                <div className="col col-sm-3"><Link to={`${this.props.Theodoidoithu_url.url}`} className="txt7"><i className="fa fa-angle-left"></i> Quay lại trang danh sách</Link></div> 
               <div className="row ">
                    <div className="col col-sm-7">
                        <h1 className="m-t-15 m-b-25 p-l-15">Xe tải đồ chơi thế hệ mới</h1>
                     </div>
                    <div className="col col-sm-5">
                        <h6 className="btn btn-link m-t-15 m-b-25"> Thêm sản phẩm vào danh sách theo dõi</h6>
                    </div>
                </div>
                <div className="row ">
                    <div className="col col-sm-7">
                        <div className="card infor">
                            <div className="card-header"><h6>Thông tin chung</h6></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <img className="img-toy-2" src={imageToy} alt="" />
                                    </div>
                                    
                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label className="form-control-group"><h6>Tên sản phẩm</h6></label>
                                            </div>
                                            <div className="col-md-7 aline">
                                                <label className="form-control-group "><h7>Xe tải đồ chơi thế hệ mới</h7></label>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label className="form-control-group"><h6>Mã sản phẩm</h6></label>
                                            </div>
                                            <div className="col-md-7 aline">
                                             <label className="form-control-group "><h7>D123456778</h7></label>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label className="form-control-group"><h6>Cửa hàng</h6></label>
                                            </div>
                                            <div className="col-md-7 aline">
                                                <label className="form-control-group "><h7>nottthing123</h7></label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header"><h6>Thông tin chi tiết sản phẩm</h6></div>
                            <div className="card-body">
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Danh mục</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h7>Đồ chơi> Đồ chơi trẻ em> Đồ chơi trong nhà</h7></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Thương hiệu</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h7>No brand</h7></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Đã bán</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h7>150</h7></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-4">
                                        <label className="form-control-group"><h6>Tồn kho</h6></label>
                                    </div>
                                    <div className="col-md-8 aline">
                                        <label className="form-control-group "><h7>120</h7></label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Rating</h6></label>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <div className="row">
                                            <div className="col-sm-7 ">
                                                 <h2>3,6/5</h2>
                                                 <label className="">50 đánh giá</label>
                                            </div>
                                            <div className=" col-sm-5">
                                            <div className="row rating-a ">
                                                <div className="colStart">
                                                    <StarRatings
                                                        starRatedColor="#FFD203"
                                                        rating={5}
                                                        starDimension="13px"
                                                        starSpacing="1px"
                                                        />
                                                </div>
                                                <div className="colNum">
                                                    <label className="txt8">20</label>
                                                </div>
                                            </div>
                                            <div className="row rating-a ">
                                                <div className="colStart">
                                                    <StarRatings
                                                        starRatedColor="#FFD203"
                                                        rating={4}
                                                        starDimension="13px"
                                                        starSpacing="1px"
                                                        />
                                                </div>
                                                <div className="colNum">
                                                    <label className="txt8">20</label>
                                                </div>
                                            </div>
                                            <div className="row rating-a ">
                                                <div className="colStart">
                                                    <StarRatings
                                                        starRatedColor="#FFD203"
                                                        rating={3}
                                                        starDimension="13px"
                                                        starSpacing="1px"
                                                        />
                                                </div>
                                                <div className="colNum">
                                                    <label className="txt8">20</label>
                                                </div>
                                            </div>
                                            <div className="row rating-a ">
                                                <div className="colStart">
                                                    <StarRatings
                                                        starRatedColor="#FFD203"
                                                        rating={2}
                                                        starDimension="13px"
                                                        starSpacing="1px"
                                                        />
                                                </div>
                                                <div className="colNum">
                                                    <label className="txt8">20</label>
                                                </div>
                                            </div>
                                            <div className="row rating-a ">
                                                <div className="colStart">
                                                    <StarRatings
                                                        starRatedColor="#FFD203"
                                                        rating={1}
                                                        starDimension="13px"
                                                        starSpacing="1px"
                                                        />
                                                </div>
                                                <div className="colNum">
                                                    <label className="txt8">20</label>
                                                </div>
                                            </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-5">
                        <div className="card infor">
                            <div className="card-header"><h6>Thông tin chung</h6></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giá bán (VNĐ)</h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h7>70,000</h7></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giá cao nhất (VNĐ)</h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h7>70,000</h7></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giá thấp nhất (VNĐ)</h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h7>70,000</h7></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-group"><h6>Giảm giá (%)</h6></label>
                                    </div>
                                    <div className="col-md-6 aline">
                                        <label className="form-control-group "><h7>80</h7></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default ItemsDetail ;