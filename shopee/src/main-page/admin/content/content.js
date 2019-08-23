import React, { Component } from 'react';
import TongQuan from './tongquan/tongquan';
import {  Route } from 'react-router-dom';
import TheoDoiDoiThu from './theodoidoithu/theodoidoithu';
import Usermanage from './quanlytaikhoan/userManage/Usermanage';
import ShopContent from './quanlytaikhoan/Shopmanage/ShopContent';
import Items from './quanlysanpham/Item';
import TheoDoiGia from './theodoigia/TheoDoiGia';
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
                        <Usermanage {...props} onUser={this.onUser} admin_url ={this.props.match} />}   />
                    <Route path={`${this.props.match.url}/quanlycuahang`}
                        render={props =>
                        <ShopContent {...props} admin_url ={this.props.match}/>}   />
                    <Route path={`${this.props.match.url}/quanlysanpham`}
                        render={props =>
                        <Items {...props} admin_url ={this.props.match}/>}   />
                    <Route path={`${this.props.match.url}/theodoidoithu`}
                        render={props =>
                        <TheoDoiDoiThu {...props} admin_url = {this.props.match} />}   />
                    <Route path={`${this.props.match.url}/theodoigia`}
                        render={props =>
                        <TheoDoiGia {...props} admin_url = {this.props.match} />}   />
                </div>

          );
    }
}
 
export default Content;