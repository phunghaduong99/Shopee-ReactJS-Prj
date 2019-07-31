import React, { Component } from 'react';
import carousel1 from './../../images/carousel_images/chicago.jpg';
import carousel2 from './../../images/carousel_images/la.jpg';
import carousel3 from './../../images/carousel_images/ny.jpg';
import './tongquan.css';


class TongQuan extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    
                    <div className="welcome">
                    <h2   className=" text-center connect-shoppee ">Xin chào <span className= "welcome-name-user">  Phùng Hà Dương </span> </h2>
                    <h2   className=" text-center connect-shoppee ">Chào mừng bạn đến với Shopee Price Analytics</h2>
                    <h4 className=" text-center  connect-shoppee ">Hãy thực hiện kết nối với Shopee <a className="link-to-shopeee" href="/"> tại đây</a></h4>
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
                                <img src={carousel1} alt="Los Angeles" width="1100" height="500" />
                                <div className="carousel-caption">
                                    <h4>Quản lý sản phẩm</h4>
                                    <p>Xem danh sách, tìm kiếm nhanh và chỉnh sửa dữ liệu ngay trong cửa hàng của bạn</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel2} alt="Chicago" width="1100" height="500" />
                                <div className="carousel-caption">
                                    <h4>Theo dõi giá</h4>
                                    <p>Theo dõi giá đối thủ cạnh tranh với các sản phẩm trong cửa hàng của bạn</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel3} alt="New York" width="1100" height="500" />
                                <div className="carousel-caption">
                                    <h4>Los Angeles</h4>
                                    <p>We had such a great time in LA!</p>
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
                <div className="col-sm-6">
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