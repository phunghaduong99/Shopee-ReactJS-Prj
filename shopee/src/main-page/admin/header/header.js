import React, { Component } from 'react';
import admin from  './../images/admin.jpg';
import logo from './../images/logoadmin.png';
import './header.css';
import { Link } from "react-router-dom";
class Header extends Component {
    state = {}
    render() {
        let responseF = this.props.responseF;
        let name = null;
        if(responseF)   name = responseF.name;

        let width = this.props.width;
        

        return (
            < header id="header" className="header" >
                <div className="top-left">
                    <div className="navbar-header">
                        <a className="navbar-brand logo" href="/"><img className="logo" src={logo} alt="Logo" /></a>
                        <a className="navbar-brand hidden" href="/"><img src="./../images/logo2.png" alt="Logo" /></a>
                        <a id="menuToggle" className="menutoggle" 
                        href={width <768? '#left-panel' :'/' } 
                        data-toggle= {this.props.width <768? 'collapse' :'' }
                        onClick= {this.props.open} ><i className="fa fa-bars"></i></a>
                    </div>
                </div>
                <div className="top-right">
                    <div className="header-menu">
                        

                        <div className="user-area dropdown float-right">
                            <button href="/" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="username">{name}</span>
                                <img className="user-avatar rounded-circle" src={responseF?responseF.picture.data.url: admin} alt="User Avatar" />
                            </button>

                            <div className="user-menu dropdown-menu">

                                <Link className="nav-link" to="/"><i className="fa fa-power -off"></i>Logout</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </header >

        );
    }
}

export default Header;