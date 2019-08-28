import React, { Component } from 'react';
import './quanlysanpham/itemContent/items.css';
class NullShop extends Component {
    state = {}
    render() {
        return (
            <div className="row classNull">
                <div className="col-md-4 offset-md-4 card nullShop ">
                    <div className="m-t-10">
                        <h6>Bạn chưa có shop nào được kết nối.</h6>
                        <h6> Hãy thực hiện kết nối shop <a className="link-to-shopeee" href="https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=842939&token=a6070d4151efb6f5f0d6b47de0ddc2e338e7e2e60546b5d1c7cbcc654c3e4572&redirect=http%3A%2F%2F172.104.173.222%3A3000%2Fadmin%2FshopManagement%2FContactShopee"> tại đây</a></h6>
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default NullShop;