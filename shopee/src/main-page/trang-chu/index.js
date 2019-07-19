import React, { Component } from 'react';
import New from './newUI/New';
import './index.css';
class TrangChu extends Component {
    state = {  }
    render() { 
        return (
            <div id="app">
                <New isLoGin = {this.props.isLoGin}/>
                
            </div>
        );
    }
}
 
export default TrangChu;