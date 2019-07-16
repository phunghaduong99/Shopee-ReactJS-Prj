import React, { Component } from 'react';

import Navbar from './navbar/navbar';
import Sidebar from './wrapper/sidebar/sidebar';
import Content from './wrapper/content-wrapper/content';
import './library/vendor/fontawesome-free/css/all.min.css';
import './library/css/sb-admin.css';


class Admin extends Component {
    state = {}
    render() {
        return (
            <div id="page-top">
                <Navbar/>

                <div id="wrapper">
                    <Sidebar/>
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