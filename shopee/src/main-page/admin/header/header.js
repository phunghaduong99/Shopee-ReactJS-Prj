import React, { Component } from 'react';
import admin from  './../images/admin.jpg';
import logo from './../images/logoadmin.png';
import './header.css';
import { Link } from "react-router-dom";
import avatar from './1.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
class Header extends Component {
    state = {}
    onClick = () => {
        sessionStorage.clear();
    }
    render() {
        let responseF = this.props.responseF;
        let name = null;
        if(responseF)   name = responseF.name;

        let width = this.props.width;
        let userInfo = this.props.userInfo;
        console.log(userInfo);

        return (
            < header id="header" className="header" >
                <div className="top-left">
                    <div className="navbar-header">
                        <a className="navbar-brand logo" href="/"><img className="logo" src={logo} alt="Logo" /></a>
                        <a className="navbar-brand hidden" href="/"><img src="./../images/logo2.png" alt="Logo" /></a>
                        <a id="menuToggle" className="menutoggle" 
                        href={width <768? '#left-panel' :'/' } 
                        data-toggle= {width <768? 'collapse' :'' }
                        onClick= {this.props.open} ><i className="fa fa-bars"></i></a>
                    </div>
                </div>
                <div className="top-right">
                    <div className="header-menu">
                        <div className="user-area dropdown float-right">
                            <button href="/" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="user-avatar rounded-circle" src={avatar} alt="User Avatar" />
                                <span className="username">{userInfo.username}</span>
                                <i className="fa fa-angle-down m-l-10"></i>
                            </button>
                            <ul className="user-menu dropdown-menu">
                                
                                <li>
                                    <span className="nav-link">
                                        <i className="fa fa-phone"></i>
                                        <span> Hotline 1800 6751</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="nav-link">
                                        <i className="fa fa-life-ring"></i>
                                        <span> Trợ giúp</span>
                                    </span>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/login" onClick = {this.onClick}>
                                        <i className="fa fa-sign-out"></i>
                                        <span>Đăng xuất</span>
                                     </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header >

        );
    }
}
const mapStatetoProps = (state) => {
    return {
      token: state.token,
      userInfo: state.userInfo
    }
  }

  export default connect(mapStatetoProps, null)(Header);