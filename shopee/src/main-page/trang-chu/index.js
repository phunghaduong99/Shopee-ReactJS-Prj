import React, { Component } from 'react';
import Header from './header/header';
import Body from './body/body';
import './index.css';
class TrangChu extends Component {
    state = {  }
    render() { 
        return (
            <div id="app">
                <Header isLoGin = {this.props.isLoGin}/>
                <Body/>
            </div>
        );
    }
}
 
export default TrangChu;