import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Items from './../../1.jpg';
import './../../items.css';
import ChartFollow from './ChartFollow';
import CircleChart from './CircleChart';
class ItemsInfo extends Component {
    render() {
        return (
            <div>
                <div className="col col-sm-3"><Link to={`${this.props.Theodoigia_url.url}`}className="txt7"><i className="fa fa-angle-left"></i> Quay lại trang danh sách</Link></div> 
                <div className=" card overview col-sm-12 m-t-15 ">   
                    <div className="row ">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                             <img className="img-toy-1" src={Items} alt="" />
                        </div>
                        
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="row ">
                                 <label className="form-control-group"><h3>Xe tải đồ chơi thế hệ mới</h3></label>
                            </div>
                             <div className="form-control-group "><h6>D123456778</h6></div>
                             <div className="form-control-group "><h6> Cửa hàng: "nottthing123"</h6></div>
                             <div className="form-control-group "><h6> Giá: 100,000đ </h6></div>
                        </div>
                    </div>
                 </div>
                 <div className="card">
                     <div className="card-body">
                         <h5>Biểu đồ thống kê giá</h5>
                         <div className="row">
                              <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <ChartFollow/>
                              </div>
                              <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                              </div>
                              <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <CircleChart/>
                              </div>
                         </div>
                         
                     </div>

                 </div>
                 <div className="card">
                    <div className="card-body">
                        <h5>Thống kê chi tiết</h5>
                        <div className="row m-t-30">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                <table className="table table-bordered ">
                                    <thead>
                                    <tr >
                                            <th className="text-center success"><h6>Giá</h6></th>
                                            <td className="text-center ">50-60</td>
                                            <td className=" text-center">60-70</td>
                                            <td className="text-center">70-80</td>
                                            <td className="text-center">80-90</td>
                                            <td className="text-center">90-100</td>
                                            <td className="text-center">100-110</td>
                                            <td className="text-center">110-120</td>
                                            <td className="text-center">120-130</td>
                                            <td className="text-center">130-140</td>
                                            <td className="text-center">140-150</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="text-center success"><h6>Số Lượng</h6></th>
                                            <td className="text-center">8</td>
                                            <td className=" text-center">6</td>
                                            <td className="text-center">7</td>
                                            <td className="text-center">8</td>
                                            <td className="text-center">9</td>
                                            <td className="text-center">10</td>
                                            <td className="text-center">11</td>
                                            <td className="text-center">12</td>
                                            <td className="text-center">13</td>
                                            <td className="text-center">14</td>
                                        </tr>
                                        <tr>
                                            <th className="text-center success"><h6>Tỉ lệ phần trăm (%)</h6></th>
                                            <td className="text-center">8</td>
                                            <td className=" text-center">6</td>
                                            <td className="text-center">7</td>
                                            <td className="text-center">8</td>
                                            <td className="text-center">9</td>
                                            <td className="text-center">10</td>
                                            <td className="text-center">11</td>
                                            <td className="text-center">12</td>
                                            <td className="text-center">13</td>
                                            <td className="text-center">14</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="col-md-10 offset-md-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Tổng số đối thủ :</h6>
                                                    </div>
                                                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        <label> 100</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                        <h6>Giá trung bình :</h6>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <label> 105,000đ</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Khoảng giá thấp hơn:</h6>
                                                    </div>
                                                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        <label> 29 (chiếm 29%)</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                        <h6>Giá xuất hiện nhiều nhất:</h6>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <label> 116,000đ</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Khoảng giá tương đương:</h6>
                                                    </div>
                                                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        <label>17% (chiếm 17%)</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="row">
                                                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                        <h6>Khoảng giá cao hơn :</h6>
                                                    </div>
                                                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                        <label> 54 (chiếm 54%)</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
export default ItemsInfo;
