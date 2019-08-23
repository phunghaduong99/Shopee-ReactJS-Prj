import React, { Component } from 'react';
import Aside from './aside/aside';
import Header from './header/header';
import Content from './content/content';
import axios from 'axios';
import * as actions from '../../redux/actions/index';
import './index.css';

// import './assets/js/main';

import './assets/css/style.css';
import './assets/css/cs-skin-elastic.css';

import { connect } from 'react-redux';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, };
    }

    open = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open,
        });

    }
    
    
        
    render() {

        return (

            <div className={this.props.width < 1010 ? "small-device" : (this.state.open ? "body open" : "body")}>
                <Aside
                    width={this.props.width}
                    open={this.state.open}
                    match={this.props.match}
                />
                {/* <!-- Right Panel -->  */}
                <div id="right-panel" className="right-panel">
                    <Header open={this.open} responseF={this.props.responseF} width={this.props.width} />
                    {/* <!-- Content --> */}
                    <div className="content">
                        <Content match={this.props.match} />
                    </div>
                </div>
            </div>

        );
    }
}


const mapStatetoProps = (state) => {
    return {
        token: state.token,
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        saveUserInfo: (info) => {
        dispatch(actions.saveUserInfo(info));
      }
    }
  }
export default connect(mapStatetoProps, mapDispatchtoProps)(Admin);