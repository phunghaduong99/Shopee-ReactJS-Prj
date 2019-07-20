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
                    <h2>Xin chào Phùng Hà Dương</h2>
                </div>
                {/* <!-- To Do and Live Chat --> */}
                <div className="col-sm-8">
                    <div id="demo" class="carousel slide" data-ride="carousel">

                        {/* <!-- Indicators --> */}
                        <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                        {/* <!-- The slideshow --> */}
                        <div class="carousel-inner" >
                            <div class="carousel-item active">
                                <img src={carousel1} alt="Los Angeles" width="1100" height="500" />
                                <div class="carousel-caption">
                                    <h4>Quản lý sản phẩm</h4>
                                    <p>Xem danh sách, tìm kiếm nhanh và chỉnh sửa dữ liệu ngay trong cửa hàng của bạn</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={carousel2} alt="Chicago" width="1100" height="500" />
                                <div class="carousel-caption">
                                    <h4>Theo dõi giá</h4>
                                    <p>Theo dõi giá đối thủ cạnh tranh với các sản phẩm trong cửa hàng của bạn</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={carousel3} alt="New York" width="1100" height="500" />
                                <div class="carousel-caption">
                                    <h4>Los Angeles</h4>
                                    <p>We had such a great time in LA!</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <h4 className=" box-title">Hãy thực hiện kết nối shop <a href="/"> tại đây</a></h4>
                    </div>
                    <div>
                    <div className="card">
                        <h2 className=" box-title text-left">Cửa hàng của bạn</h2>
                        <select>
                            <option value=""></option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <button className="btn btn-primary"></button>
                    </div>
                   
                    </div>
                    {/* <!-- /.card --> */}
                </div>
                {/* <!-- /To Do and Live Chat --> */}
            </div>

        );
    }
}

export default TongQuan;