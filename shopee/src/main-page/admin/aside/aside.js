import React, { Component } from 'react';

class Aside extends Component {
    state = {}
    render() {
        
        let leftpanel;
        let width = this.props.width;
        let display = {};
        if(width < 1010){
            if(width<760){
                    display = {display : 'inline-block'};
                    leftpanel = "collapse";
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
                                <a href="index.html"><i className="menu-icon fa fa-laptop"></i>Tổng quan </a>
                            </li>
                            <li className="menu-title">UI elements</li>
                            {/* <!-- /.menu-title --> */}
                            <li className="menu-item-has-children dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-cogs"></i>Quản lý tài khoản</a>
                                <ul className="sub-menu children dropdown-menu">                            <li><i className="fa fa-puzzle-piece"></i><a href="ui-buttons.html">Buttons</a></li>
                                    <li><i className="fa fa-id-badge"></i><a href="ui-badges.html">Badges</a></li>
                                    <li><i className="fa fa-bars"></i><a href="ui-tabs.html">Tabs</a></li>

                                    <li><i className="fa fa-id-card-o"></i><a href="ui-cards.html">Cards</a></li>
                                    <li><i className="fa fa-exclamation-triangle"></i><a href="ui-alerts.html">Alerts</a></li>
                                    <li><i className="fa fa-spinner"></i><a href="ui-progressbar.html">Progress Bars</a></li>
                                    <li><i className="fa fa-fire"></i><a href="ui-modals.html">Modals</a></li>
                                    <li><i className="fa fa-book"></i><a href="ui-switches.html">Switches</a></li>
                                    <li><i className="fa fa-th"></i><a href="ui-grids.html">Grids</a></li>
                                    <li><i className="fa fa-file-word-o"></i><a href="ui-typgraphy.html">Typography</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Quản lý sản phẩm</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                                    <li><i className="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Theo dõi giá</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                                    <li><i className="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                                    <li><i className="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-eye"></i>Theo dõi đối thủ</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                                </ul>
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