import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Aside extends Component {
    state = {}
    render() {
        
        let leftpanel;
        let width = this.props.width;
        let display = {};
        if(width < 992){
            if(width<768){
                    
                    leftpanel = "collapse left-panel";
            }
            else {
                if(this.props.open){
                    leftpanel = "left-panel open-menu";
                   
                } 
                else{
                    leftpanel = "left-panel";
                } 
            }
        }
        else {
            leftpanel= "left-panel";
        }

        return (
            // <!-- Left Panel -->
            <aside id="left-panel" className={leftpanel}  >
                <nav className="navbar navbar-expand-sm navbar-default" style = {display} >
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link className="dropdown-toggle" to={`${this.props.match.url}`}><i className="menu-icon fa fa-laptop "></i>Tổng Quan</Link>
                            </li>
                            <li className="menu-title">Chức Năng</li>
                            {/* <!-- /.menu-title --> */}
                            <li className="menu-item-has-children dropdown ">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-cogs"></i>Quản lý tài khoản</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li> <i className="menu-icon fa fa-user"></i><Link to={`${this.props.match.url}/quanlytaikhoan`}>Thông tin tài khoản</Link></li>
                                    <li> <i className="menu-icon fa  fa-home"></i><Link to={`${this.props.match.url}/quanlycuahang`}>Quản lý cửa hàng</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown ">
                            <Link className="dropdown-toggle" to={`${this.props.match.url}/quanlysanpham`}><i className="menu-icon fa fa-table "></i>Quản lý sản phẩm</Link>
                                {/* <a href="/" className="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Quản lý sản phẩm</a>
                                 <ul className="sub-menu children dropdown-menu">
                                   <li><i className="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                                   <li><i className="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                                </ul>  */}
                            </li>
                            <li className="menu-item-has-children dropdown">
                            <Link className="dropdown-toggle" to={`${this.props.match.url}/theodoigia`}><i className="menu-icon fa fa-bar-chart "></i>Theo dõi giá</Link>
                                {/* <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Theo dõi giá</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                                    <li><i className="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                                    <li><i className="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                                </ul> */}
                            </li>
                            <li className="menu-item-has-children dropdown">
                            <Link className="dropdown-toggle" to={`${this.props.match.url}/theodoidoithu`}><i className="menu-icon fa fa-eye "></i>Theo dõi đối thủ</Link>
                                {/* <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-eye"></i>Theo dõi đối thủ</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                                </ul> */}
                            </li>

                        </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </nav>
            </aside>
            // <!-- /#left-panel -->
        );
    }
}

export default Aside;