import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './quanlysanpham/itemContent/items.css';
class NullShop extends Component {
    state = {}
    render() {
        return (
            <div className="row classList">
                <div className="col-md-6 offset-md-3 card nullListItems ">
                    <div className="m-t-10">
                        <h6>Bạn chưa kết nối vào danh sách sản phẩm của cửa hàng.</h6>
                        <h6> Hãy thực hiện kết nối vào trang quản lý sản phẩm <Link className="text-primary" style={{fontSize:"1rem"}}  to ={`./quanlysanpham`}>tại đây</Link></h6>
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default NullShop;