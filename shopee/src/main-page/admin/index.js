import React, { Component } from 'react';
import Aside from './aside/aside';
import Header from './header/header';
import './index.css';

// import './assets/js/main';


import './assets/css/style.css';
import './assets/css/cs-skin-elastic.css';
class Admin extends Component {
    state = {
        open: false,
    }
    open = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        return (
            <div className= {this.state.open? "body open": "body"}>
            <Aside />
             {/* <!-- Right Panel -->  */}
            <div id="right-panel" className="right-panel">
                <Header open = {this.open} />
                {/* <!-- Content --> */}
                <div className="content">

                </div>
                {/* <!-- /.content --> */}
                <div className="clearfix"></div>
                {/* <!-- Footer --> */}
                <footer className="site-footer">
                    <div className="footer-inner bg-white">
                        <div className="row">
                            <div className="col-sm-6">
                                Copyright &copy; 2018 Ela Admin
                    </div>
                            <div className="col-sm-6 text-right">
                                Designed by <a href="https://colorlib.com">Colorlib</a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- /.site-footer --> */}
            </div>
            </div>
  
         );
    }
}

export default Admin;