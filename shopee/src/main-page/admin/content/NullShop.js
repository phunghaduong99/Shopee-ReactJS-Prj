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
                        <h6> Hãy thực hiện kết nối shop <a className="link-to-shopeee" href="https://partner.uat.shopeemobile.com/api/v1/shop/auth_partner?id=840386&token=d0f934508cadbf365ddd5518dc191848a7651fe908e4b42dcc1e8f6fb836ab78&redirect=http%3A%2F%2F192.168.36.27%3A3000%2Fadmin%2Fquanlycuahang%2FContactShopee"> tại đây</a></h6>
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default NullShop;