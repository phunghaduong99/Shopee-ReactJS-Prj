import React, {Component} from 'react';
import './body.css';
class Body extends Component {
    state = {  }
    render() { 
        return (
            <div className="content">
                <section className="section" id="main-section">
                    <div className="bg section-bg fill bg-fill bg-loaded"></div>
                    <div className="section-content relative text-center">
                        <div className="row">
                            <div className="col">
                                <h2 className="title2">Bộ Công Cụ Shopee – Kiếm Tiền Ngay Cả Khi Đang Ngủ</h2>
                                <h2 className="title2">Tự Động Hóa Bán Hàng Shopee Với Vài Click Chuột!!!</h2>
                                <p>
                                    <span className="subtitle text-white">
                                    Công cụ tăng like sub – Công cụ sao chép hàng ngàn sản phẩm – Quản lí hàng ngàn tài khoản Shopee
                                    </span>
                                </p>
                                <div className="btn-block">
                                    <a className="btn btn-outline is-larger box-shadow-1-hover white" href="/register?next=/dashboard">
                                        Dùng thử miễn phí
                                    </a>
                                    <a href="/" target="_blank" className="btn btn-outline is-larger">Xem Video Demo
                                    </a>
                                </div>
                                <div>
                                    <img src="/images/macbook.png?e9d34a048d88c85a9cefba8410a18dc6" alt="" className="image-demo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          );
    }
}
 
export default  Body;
