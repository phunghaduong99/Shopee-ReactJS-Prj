import React, { Component } from 'react';
import spa from './../../../images/newlogo2.png';
import './header.css';
class Header extends Component {
    state = {  }
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <div className="logo">
                        <a href="/">
                            <img src={spa} alt="spa" className="img-ficon"/>
                        </a>
                    </div>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#team">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                    </ul>
                    <div className="menu-buttons">
                            <a className="btn btn-outline" href="/" onClick = {this.props.isLoGin}>Đăng nhập</a>
                        </div>
                </div>
                </div>
            </nav>
        );
    }
}
 
export default Header;