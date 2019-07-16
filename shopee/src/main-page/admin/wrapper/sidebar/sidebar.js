import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  state = {}
  render() {
    let status = null;
    let OpenSidebar = this.props.OpenSidebar;
    if (OpenSidebar)
      status = 
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-home m-r-15"></i>
            <span>Tổng quan</span>
          </a>
        </li>

        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="/" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user  m-r-15"></i>
            <span>Quản lý tài khoản</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" href="login.html">Login</a>
            <a className="dropdown-item" href="register.html">Register</a>
            <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
          </div>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Quản lý sản phẩm</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>
      </ul>

    else status = 
    <ul className="navbar-nav sidebarshorter">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-home"></i>
          </a>
        </li>

        <li className="nav-item ">
          <a className="nav-link dropdown-toggle" href="/" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user"></i>
          </a>
          
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
           </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
           </a>
        </li>
      </ul>

    return (
      <div>{status}</div>

    );
  }
}

export default Sidebar;