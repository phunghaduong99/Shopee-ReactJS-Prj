import React, { Component } from 'react';
import { Link } from "react-router-dom";
import carousel1 from './1.jpg';
import carousel2 from './2.png';
import carousel3 from './3.png';
import './tongquan.css';

import axios from 'axios';
import * as actions from '../../../../redux/actions/index';
import { connect } from 'react-redux';
class TongQuan extends Component {
    state = {}
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/infor',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                this.props.saveUserInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Không lấy được thông tin tài khoản");
            });
        if (this.props.listShop.length === 0) {
            this.callApi();
        }

    }

    callApi = () => {
        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/shop',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                let neww = response.data;

                let newlistShop = neww.map(
                    (c, index) => {
                        if (index === 0) {
                            c.isActive = true;

                            this.props.saveShopIdSelected(c.shopid);
                            this.props.saveShopNameSelected(c.name);
                        }
                        else {
                            c.isActive = false;
                        }
                        return c
                    }
                )
                this.props.saveListShop(newlistShop);

            })
            .catch((error) => {
                console.log(error);
                alert("Không lấy được cửa hàng");
            });
    }
    render() {
        let userInfo = this.props.userInfo;
        return (
            <div className="row">
                <div className="col-sm-12">

                    <div className="welcome">
                        <h4 className=" text-center connect-shoppee ">Xin chào <span className="welcome-name-user"> {userInfo.username} </span> </h4>
                        <h4 className=" text-center  ">Chào mừng bạn đến với Shopee Price Analytics</h4>
                        <h6 className=" text-center  connect-shoppee ">Hãy thực hiện kết nối với Shopee <a className="link-to-shopeee" href="https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=842939&token=a6070d4151efb6f5f0d6b47de0ddc2e338e7e2e60546b5d1c7cbcc654c3e4572&redirect=http%3A%2F%2F172.104.173.222%3A3000%2Fadmin%2FshopManagement%2FContactShopee"> tại đây</a></h6>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="card ">
                        <div className="card-header"><h4>Tất cả đã sẵn sàng! Bắt đầu sử dụng tính năng hấp dẫn của SPA</h4></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 funcsion-service">
                                    <div className="img-overview">
                                        <img src={carousel1} alt="quản lý sản phẩm" />
                                    </div>
                                    <Link to={`${this.props.match.url}/productManagement`}>
                                        <h5 className="text-black text-center m-t-10">1. Quản lý sản phẩm</h5>
                                    </Link>
                                    <p className="text-center">Xem danh sách, tìm kiếm nhanh và chỉnh sửa dữ liệu ngay trong cửa hàng của bạn</p>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 funcsion-service">
                                    <div className="img-overview">
                                        <img src={carousel2} alt="theo dõi giá" />
                                    </div>
                                    <Link to={`${this.props.match.url}/priceFollows`}>
                                        <h5 className="text-black text-center m-t-10">2. Theo dõi giá</h5>
                                    </Link>
                                    <p className="text-center">Theo dõi giá các sản phẩm trong cửa hàng của bạn trên thị trường  </p>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                                    <div className="img-overview">
                                        <img src={carousel3} alt="theo dõi đối thủ" />
                                    </div>
                                    <Link to={`${this.props.match.url}/competitorFollows`}>
                                        <h5 className="text-black text-center m-t-10">3. Theo dõi đối thủ</h5>
                                    </Link>
                                    <p className="text-center">Theo dõi gia của đối thủ trực tiếp và chỉnh sửa giá tự động!</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="col-sm-12">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
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
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div> */}
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
const mapStatetoProps = (state) => {
    console.log(state);
    return {
        userInfo: state.userInfo,
        token: state.token,
        listShop: state.listShop,
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        saveUserInfo: (info) => {
            dispatch(actions.saveUserInfo(info));
        },
        saveListShop: (listShop) => {
            dispatch(actions.saveListShop(listShop));
        },
        saveShopIdSelected: (shopIdSelected) => {
            dispatch(actions.saveShopIdSelected(shopIdSelected));
        },
        saveShopNameSelected: (shopNameSelected) => {
            dispatch(actions.saveShopNameSelected(shopNameSelected));
        },
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(TongQuan);
