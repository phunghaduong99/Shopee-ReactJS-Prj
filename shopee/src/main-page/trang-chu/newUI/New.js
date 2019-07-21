import React, { Component } from 'react';
import spa from './../../../images/S-logo.png';
import image1 from './image/portfolio/01-thumbnail.jpg';
import image2 from './image/portfolio/02-thumbnail.jpg';
import image3 from './image/portfolio/03-thumbnail.jpg';
import image4 from './image/portfolio/04-thumbnail.jpg';
import image5 from './image/portfolio/05-thumbnail.jpg';
import image6 from './image/portfolio/06-thumbnail.jpg';
import team1 from './image/team/1.jpg';
import team2 from './image/team/2.png';
import  team3 from './image/team/3.jpg';
import team4 from './image/team/4.jpg';
import team5 from './image/team/5.jpg';
import  team6 from './image/team/6.jpeg';
import logo1 from './image/logos/envato.jpg';
import logo2 from './image/logos/designmodo.jpg';
import logo3 from './image/logos/themeforest.jpg';
import logo4 from './image/logos/creative-market.jpg';
import service1 from './image/services/services1.jpg';
import service2 from './image/services/services2.jpg';
import service3 from './image/services/services3.jpg';
import './agency.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.css';
class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false,
            services: false,
            portfolio: false,
            team: false,
            contact: false
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
        let scrollTop = Math.max(scrollTop1,scrollTop2);
        console.log(scrollTop);
        if(scrollTop>100){
            this.setState({
                scrolling: true,
               
            });
        }
        else {
            this.setState({
                scrolling: false,
               
            });
        }
        if(scrollTop <600){
            this.setState({
                services: false,
                portfolio: false,
                team: false,
                contact: false  
            });
        }
        else if( scrollTop <1500 ){
            this.setState({
                services: true,
                portfolio: false,
                team: false,
                contact: false
            });
        }
        else if(scrollTop <2710   ){
            this.setState({
                services: false,
                portfolio: true,
                team: false,
                contact: false
            });
        }
        else if(scrollTop <4220){
            this.setState({
                services: false,
                portfolio: false,
                team: true,
                contact: false
            });
        }
        else if(scrollTop >=4220){
            this.setState({
                services: false,
                portfolio: false,
                team: false,
                contact: true
            });
        }
        
    }
    render() { 
        return (
            <div>
                  <nav className={this.state.scrolling ?'navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink': 'navbar navbar-expand-lg navbar-dark fixed-top' } id="mainNav">
                        <div className="container" >
                            <div className="logohome">
                                <a href="/">
                                    <img src={spa} alt="spa" className="img-ficon"/>
                                </a>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                    <a  className={this.state.services? "nav-link js-scroll-trigger active text-center oneline" : "nav-link js-scroll-trigger text-center oneline"} href="#services" >Dịch Vụ</a>
                                </li>
                                <li className="nav-item">
                                    <a  className={this.state.portfolio? "nav-link js-scroll-trigger active text-center" : "nav-link js-scroll-trigger text-center"} href="#portfolio" >Danh mục cửa hàng</a>
                                </li>
                                <li className="nav-item">
                                    <a  className={this.state.team? "nav-link js-scroll-trigger active text-center" : "nav-link js-scroll-trigger text-center"} href="#team" >Đội phát triển</a>
                                </li>
                                <li className="nav-item">
                                    <a className={this.state.contact? "nav-link js-scroll-trigger active  oneline" : "nav-link js-scroll-trigger oneline"} href="#contact">Liên hệ</a>
                                </li>
                                </ul>
                                <div className="menu-buttons">
                                        <a className="btn btn-outline" href="/" onClick = {this.props.isLoGin}>Đăng nhập</a>
                                </div>
                             </div>
                        </div>
                    </nav>
         
                    <header className="masthead">
                        <div className="container">
                            <div className="intro-text">
                            <div className="intro-lead-in">Chào mừng đến với Shopee Price Analytics</div>
                            <div className="intro-heading text-uppercase">Kênh so sánh và điều chỉnh giá đối thủ trên sàn TMĐT Shopee</div>
                            {<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Xem thêm</a> }
                            </div>
                        </div>
                    </header>
                
                    <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Dịch Vụ</h2>
                            <h3 className="section-subheading text-muted">SPA – Shopee Price Asisstance được xây dựng với mục tiêu cuối cùng là giúp các chủ cửa hàng bán hàng trên sàn TMĐT Shopee <br/> có cái nhìn tổng thể về các sản phẩm tương tự sản phẩm trong shop đang cùng được rao bán trên sàn.</h3>
                        </div>
                        </div>
                        <div className="row text-center">
                        <div className="col-md-4">
                            <img className="img-services" src={service1} alt=""/>
                            <h4 className="service-heading">Quản lý bán hàng</h4>
                            <p className=" text-muteded ">Quản lý hàng hóa không giới hạn. Dễ dàng tìm kiếm thông tin sản phẩm. Cập nhập thông tin hàng hóa tức thời mọi lúc mọi nơi</p>
                        </div>
                        <div className="col-md-4">
                            <img className="img-services" src={service2} alt=""/> 
                            <h4 className="service-heading">Làm chủ thị trường</h4>
                            <p className="text-muteded">Theo dõi sát diễn biến giá cả thị trường. Tính toán mức độ và thời điểm điều chỉnh phù hợp giúp kiểm kiểm soát mặt bằng giá chung</p>
                        </div>
                        <div className="col-md-4">
                            <img className="img-services" src={service3} alt=""/>
                            <h4 className="service-heading">Điều chỉnh giá đối thủ</h4>
                            <p className="text-muteded">Xác định và theo dõi biến động giá của đối thủ trên sàn TMĐT Shopee. Cho phép điều chỉnh giá của sản phầm cho phù hợp nâng cao sức cạnh tranh</p>
                        </div>
                        </div>
                    </div>
                    </section>
                
                    <section className="bg-light page-section" id="portfolio">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase m-b-20">Danh mục cửa hàng</h2>
                                <h3 className="section-subheading text-muted"> </h3>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="/portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image1} alt=""/>
                                </a>
                                <div className="portfolio-caption">
                                <h4>Threads</h4>
                                <p className="text-muted">Illustration</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="/portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image2} alt=""/>
                                </a>
                                <div className="portfolio-caption">
                                <h4>Explore</h4>
                                <p className="text-muted">Graphic Design</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="/portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image3} alt=""/>
                                </a>
                                <div className="portfolio-caption">
                                <h4>Finish</h4>
                                <p className="text-muted">Identity</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="/portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image4} alt=""/>
                                </a>
                                <div className="portfolio-caption">
                                <h4>Lines</h4>
                                <p className="text-muted">Branding</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="/portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image5} alt=""/>
                                </a>
                                <div className="portfolio-caption">
                                <h4>Southwest</h4>
                                <p className="text-muted">Website Design</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="/portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={image6} alt=""/>
                                </a>
                                <div className="portfolio-caption">
                                <h4>Window</h4>
                                <p className="text-muted">Photography</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                
                    <section className="bg-warning page-section" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Đội Phát Triển</h2>
                                <h3 className="section-subheading text-muted">Vì mục tiêu muốn giúp các khách hàng và đối tác khai thác tối đa tài nguyên dữ liệu để bán hàng thông minh và hiệu quả hơn</h3>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-4">
                            <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team1} alt=""/>
                            <h4>Trương Thành Duy</h4>
                            <p className="text-Job">Lead Deverloper</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                <a href="/">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="/">
                                    <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team2} alt=""/>
                            <h4>Đỗ Linh Nam</h4>
                            <p className="text-Job">Lead BA</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                <a href="/">
                                     <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="/">
                                    <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team3} alt=""/>
                            <h4>Nguyễn Trọng Cảnh</h4>
                            <p className="text-Job">Lead Back-End</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                <a href="/">
                                     <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="/">
                                     <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-4">
                            <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team4} alt=""/>
                            <h4>Phùng Hà Dương</h4>
                            <p className="text-Job">Lead Front-End</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                <a href="/">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="/">
                                     <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team5} alt=""/>
                            <h4>Phạm Ngọc Minh</h4>
                            <p className="text-Job">Lead IOS</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                <a href="/">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="/">
                                    <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                            <img className="mx-auto rounded-circle" src={team6} alt=""/>
                            <h4>Bùi Thị Kim Anh</h4>
                            <p className="text-Job">Developer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                <a href="/">
                                     <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="/">
                                  <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                            </div>
                        </div>
                    </div>
                    </section>
                
                    <section className="py-5">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="/">
                            <img className="img-fluid d-block mx-auto" src={logo1} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="/">
                            <img className="img-fluid d-block mx-auto" src={logo2} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="/">
                            <img className="img-fluid d-block mx-auto" src={logo3} alt=""/>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="/">
                            <img className="img-fluid d-block mx-auto" src={logo4} alt=""/>
                            </a>
                        </div>
                        </div>
                    </div>
                    </section>
                
                    <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                </div>
                            </div>
                            </form>
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
                                 <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="list-inline-item" id="gm">
                                <a href="/">
                                    <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="list-inline-item" id="tw">
                                <a href="/">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/">Terms of Use</a>
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
 
export default New ;