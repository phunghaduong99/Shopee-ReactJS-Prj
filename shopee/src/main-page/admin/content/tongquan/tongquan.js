import React, { Component } from 'react';
import { Link } from "react-router-dom";
import carousel1 from './1.png';
import carousel2 from './../../images/carousel_images/chicago.jpg';
import carousel3 from './../../images/carousel_images/chicago.jpg';
import './tongquan.css';


class TongQuan extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    
                    <div className="welcome">
                    <h4   className=" text-center connect-shoppee ">Xin chào <span className= "welcome-name-user">  Phùng Hà Dương </span> </h4>
                    <h4   className=" text-center  ">Chào mừng bạn đến với Shopee Price Analytics</h4>
                    <h6 className=" text-center  connect-shoppee ">Hãy thực hiện kết nối với Shopee <a className="link-to-shopeee" href="https://partner.uat.shopeemobile.com/api/v1/shop/auth_partner?id=840386&token=d0f934508cadbf365ddd5518dc191848a7651fe908e4b42dcc1e8f6fb836ab78&redirect=http%3A%2F%2F192.168.36.27%3A3000%2Fadmin%2Fquanlycuahang%2FContactShopee"> tại đây</a></h6>
                    </div>
                </div>
                {/* <!-- To Do and Live Chat --> */}
                <div className="col-sm-12">
                    <div id="demo" className="carousel slide" data-ride="carousel">

                        {/* <!-- Indicators --> */}
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                        {/* <!-- The slideshow --> */}
                        <div className="carousel-inner" >
                            <div className="carousel-item active">
                                <img src={carousel1} alt="Quản lý sản phẩm" className="imgtongquan" />
                                <div className="carousel-caption">
                                    <Link to={`${this.props.match.url}/quanlysanpham`}><h4 className="text-white">Quản lý sản phẩm</h4></Link>
                                    <p>Xem danh sách, tìm kiếm nhanh và chỉnh sửa dữ liệu ngay trong cửa hàng của bạn</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel2} alt="Chicago" width="1100" height="500" />
                                <div className="carousel-caption">
                                <Link to={`${this.props.match.url}/theodoigia`}><h4 className="text-white">Theo dõi giá thị trường</h4></Link>
                                    <p>Theo dõi giá các sản phẩm trong cửa hàng của bạn trên thị trường  </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel3} alt="New York" width="1100" height="500" />
                                <div className="carousel-caption">
                                    <Link to={`${this.props.match.url}/theodoidoithu`}><h4 className="text-white">Theo dõi giá đối thủ</h4></Link>
                                    <p>Theo dõi gia của đối thủ trực tiếp và chỉnh sửa giá tự động!</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6 text-right">
                    <div className="how-to-use-parent ">
                        <h4 className=" how-to-use ">Tìm hiểu cách sử dụng Shopee Price Analytics <a className="link-to-shopeee" href="/"> tại đây</a></h4>
                    </div>
                    
                </div>
                {/* <div className="col-sm-4">
                    <div className="card ">
                        <h4 className=" box-title connect-shoppee ">Hãy thực hiện kết nối shop <a href="/"> tại đây</a></h4>
                    </div>
                    <div>
                        <div className="card">
                            <h2 className=" box-title connect-shoppee">Cửa hàng của bạn</h2>
                            <select className="form-control form control-sm connect-shoppee">
                                <option value=""></option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                            <li>
                                <div className="connect-submit">
                                    <button className="btn btn-primary ">Xác nhận</button>
                                </div>
                            </li>
                        </div>

                    </div>
                </div> */}
            </div>

        );
    }
}

export default TongQuan;