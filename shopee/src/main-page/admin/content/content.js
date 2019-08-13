import React, { Component } from 'react';
import TongQuan from './tongquan/tongquan';
import User from './quanlytaikhoan/user';
import ShopManage from './quanlytaikhoan/Shopmanage/Shopmanage';
import {  Route } from 'react-router-dom';
import ChangePass from './quanlytaikhoan/changePass';
import ContactShopee from './quanlytaikhoan/ContactShopee';
import Product from './quanlysanpham/Product';
import ItemsDetail from './quanlysanpham/ItemsDetail';

import TheoDoiDoiThu from './theodoidoithu/theodoidoithu';
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
                    <Route path={`${this.props.match.url}/quanlytaikhoan/changePass`}
                        render={props =>
                        <ChangePass {...props} />}   />
                    <Route path={`${this.props.match.url}/quanlycuahang`}
                        render={props =>
                        <ShopManage {...props} />}   />
                    <Route path={`${this.props.match.url}/quanlycuahang/ContactShopee`}
                        render={props =>
                        <ContactShopee {...props} />}   />
                    <Route path={`${this.props.match.url}/quanlysanpham`}
                    render={props =>
                    <Product {...props} match={this.props.match} />}   />
                    <Route path={`${this.props.match.url}/quanlysanpham/itemsDetail`}
                    render={props =>
                    <ItemsDetail {...props} />}   />
                    <Route path={`${this.props.match.url}/theodoidoithu`}
                    render={props =>
                    <TheoDoiDoiThu {...props} admin_url = {this.props.match} />}   />
                    
                </div>

          );
    }
}
 
export default Content;