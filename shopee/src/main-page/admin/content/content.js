import React, { Component } from 'react';
import TongQuan from './tongquan/tongquan';
import User from './quanlytaikhoan/user';

import {  Route } from 'react-router-dom';
class Content extends Component {
    state = { 
        onUser: false
     }
    onUser=(e)=>{
        e.preventDefault();
        this.setState({
            onUser:true
        });
    }
    render() { 
        return (
                <div>
                    <Route exact path={this.props.match.url}
                        render={props =>
                        <TongQuan {...props}  />}  />
                    <Route path={`${this.props.match.url}/quanlytaikhoan`}
                        render={props =>
                        <User {...props} onUser={this.onUser} />}   />
                </div>
        
          );
    }
}
 
export default Content;