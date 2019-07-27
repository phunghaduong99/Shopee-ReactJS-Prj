import React, { Component } from 'react';
import TongQuan from './tongquan/tongquan';
import User from './quanlytaikhoan/user';
import {  Route } from 'react-router-dom';
import ChangePass from './quanlytaikhoan/changePass';

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

                    <Route exact path={`${this.props.match.url}/quanlytaikhoan`}
                        render={props =>
                        <User {...props} onUser={this.onUser} />}   />
                    <Route path={`${this.props.match.url}/quanlytaikhoan/changePass`}
                        render={props =>
                        <ChangePass {...props} />}   />
                </div>

          );
    }
}
 
export default Content;