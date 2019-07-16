import React, { Component } from 'react';
import ficon from './../../../images/FIcon.png';
import './header.css';
class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="header-main">
                <div className= "header transparent has-transparent">
                    <div className= "header-wrap container">
                        <div className="logo">
                            <a href="/">
                                <img src={ficon} alt="FIcon" className="img-ficon"/>
                            </a>
                        </div>
                        <div className="menu-buttons">
                            <a className="btn btn-outline" href="/" onClick = {this.props.isLoGin}>Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
 
export default Header;