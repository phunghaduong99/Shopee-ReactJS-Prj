import React, { Component } from 'react';
import spa from './../../../images/S-logo1.png';
import image1 from './image/portfolio/01-thumbnail.jpg';
import image2 from './image/portfolio/02-thumbnail.jpg';
import image3 from './image/portfolio/03-thumbnail.jpg';
import image4 from './image/portfolio/04-thumbnail.jpg';
import image5 from './image/portfolio/05-thumbnail.jpg';
import image6 from './image/portfolio/06-thumbnail.jpg';
import team1 from './image/team/1.jpg';
import team2 from './image/team/2.png';
import team3 from './image/team/3.jpg';
import team4 from './image/team/4.jpg';
import team5 from './image/team/5.jpg';
import team6 from './image/team/6.jpeg';
import logo1 from './image/logos/envato.jpg';
import logo2 from './image/logos/designmodo.jpg';
import logo3 from './image/logos/themeforest.jpg';
import logo4 from './image/logos/creative-market.jpg';
import service1 from './image/services/services1.jpg';
import service2 from './image/services/services2.jpg';
import service3 from './image/services/services3.jpg';
import './css/agency.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.css';


import { Link } from "react-router-dom";

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false,
            services: false,
            portfolio: false,
            team: false,
            contact: false,
            width: null,
            
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
     
    handleScroll = (event) => {
        let scrollTop1 = event.target.body.scrollTop;
        let scrollTop2 = event.target.documentElement.scrollTop;
        let scrollTop = Math.max(scrollTop1, scrollTop2);
        let  width = this.props.width;
       
        
        if(width >=992){
            if (scrollTop > 100) {
                this.setState({
                    scrolling: true,
                });
            }
            else {
                this.setState({
                    scrolling: false,
    
                });
            }
            if (scrollTop < 645) {
                this.setState({
                    services: false,
                    portfolio: false,
                    team: false,
                    contact: false
                });
            }
            else if (scrollTop < 1442) {
                this.setState({
                    services: true,
                    portfolio: false,
                    team: false,
                    contact: false
                });
            }
            else if (scrollTop < 2544) {
                this.setState({
                    services: false,
                    portfolio: true,
                    team: false,
                    contact: false
                });
            }
            else if (scrollTop < 3960) {
                this.setState({
                    services: false,
                    portfolio: false,
                    team: true,
                    contact: false
                });
            }
            else if (scrollTop >= 3960) {
                this.setState({
                    services: false,
                    portfolio: false,
                    team: false,
                    contact: true
                });
            }
        }
        else {
            this.setState({
                services: false,
                portfolio: false,
                team: false,
                contact: false
            });
        }
        

    }
    render() {
        return (
            <div>
                <nav className={this.state.scrolling ? 'navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink' : 'navbar navbar-expand-lg navbar-dark fixed-top'} id="mainNav">
                    <div className="container row m-t-10" >
                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>
                        <div className="logohome col-md-4 ">
                            <a href="/">
                                <img src={spa} alt="spa" className="img-ficon" />
                            </a>
                        </div>
                        <button className="navbar-toggler navbar-toggler-right  " type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fa fa-bars m-l-4"></i>
                        </button>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"> </div>
                        <div className="collapse navbar-collapse col-md-2" id="navbarResponsive">
                            {/* <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                    <a className={this.state.services ? "nav-link js-scroll-trigger active nav-link-center oneline" : "nav-link js-scroll-trigger nav-link-center oneline"} href="#services" >Dịch Vụ</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.portfolio ? "nav-link js-scroll-trigger active nav-link-center" : "nav-link js-scroll-trigger nav-link-center"} href="#portfolio" >Danh mục cửa hàng</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.team ? "nav-link js-scroll-trigger active nav-link-center" : "nav-link js-scroll-trigger nav-link-center"} href="#team" >Đội phát triển</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.contact ? "nav-link js-scroll-trigger active  oneline" : "nav-link js-scroll-trigger oneline"} href="#contact">Liên hệ</a>
                                </li>
                            </ul> */}
                            <div className="menu-buttons ">
                                <Link className="btn btn-outline" to="/login" onClick={this.props.isLoGin}>Đăng nhập</Link>
                            </div>
                        </div>

                    </div>
                </nav>

                <header className="masthead">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Chào mừng đến với Shopee Price Analytics</div>
                            <div className="intro-heading text-uppercase">Kênh so sánh và điều chỉnh giá đối thủ trên sàn TMĐT Shopee</div>
                            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Xem thêm</a>
                        </div>
                    </div>
                </header>

                <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Dịch Vụ</h2>
                                <h3 className="section-subheading text-muted">
                                    <div>SPA – Shopee Price Asisstance được xây dựng với mục tiêu cuối cùng là giúp các chủ cửa hàng bán hàng trên sàn TMĐT Shopee </div>
                                  có cái nhìn tổng thể về các sản phẩm tương tự sản phẩm trong shop đang cùng được rao bán trên sàn.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <img className="img-services" src={service1} alt="" />
                                <h4 className="service-heading">Quản lý bán hàng</h4>
                                <p className=" text-muteded ">Quản lý hàng hóa không giới hạn. Dễ dàng tìm kiếm thông tin sản phẩm. Cập nhập thông tin hàng hóa tức thời mọi lúc mọi nơi</p>
                            </div>
                            <div className="col-md-4">
                                <img className="img-services" src={service2} alt="" />
                                <h4 className="service-heading">Làm chủ thị trường</h4>
                                <p className="text-muteded">Theo dõi sát diễn biến giá cả thị trường. Tính toán mức độ và thời điểm điều chỉnh phù hợp giúp kiểm kiểm soát mặt bằng giá chung</p>
                            </div>
                            <div className="col-md-4">
                                <img className="img-services" src={service3} alt="" />
                                <h4 className="service-heading">Điều chỉnh giá đối thủ</h4>
                                <p className="text-muteded">Xác định và theo dõi biến động giá của đối thủ trên sàn TMĐT Shopee. Cho phép điều chỉnh giá của sản phầm cho phù hợp nâng cao sức cạnh tranh</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Your Website 2019</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item" >
                                        <a href="/" id="fb">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item" id="gm">
                                        <a href="/">
                                            <i className="fa fa-google" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item" id="tw">
                                        <a href="/">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline quicklinks">
                                    <li className="list-inline-item">
                                        <a className=" text-white"href="/">Privacy Policy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className=" text-white" href="/">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default New;