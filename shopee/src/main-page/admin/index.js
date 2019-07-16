import React, { Component } from 'react';

import Navbar from './navbar/navbar';
import Sidebar from './wrapper/sidebar/sidebar';
import Content from './wrapper/content-wrapper/content';
import './library/vendor/fontawesome-free/css/all.min.css';
import './library/css/sb-admin.css';


class Admin extends Component {
    state = {OpenSidebar: true}

    OpenSidebar=(e)=> {
        e.preventDefault();
        this.setState({OpenSidebar: !this.state.OpenSidebar});
    }
    render() {
        return (
            <div id="page-top" >
                <Navbar OpenSidebar = {this.OpenSidebar}/>

                <div id="wrapper">
                    <Sidebar OpenSidebar = {this.state.OpenSidebar}/>
                    <Content/>
                </div>
                   
                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
                
            </div>

        );
    }
}

export default Admin;