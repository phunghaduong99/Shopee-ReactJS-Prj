import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class ContactShopee extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      ShopID: null,
      nameShop: null,
      shop_link: window.location.href,
      shop_id: null,
      thongBao: null
    });

  }
  componentDidMount() {
    let index = this.state.shop_link.search("shop_id=");
    let shop_id = 0;
    if (index > 0) {
      shop_id = this.state.shop_link.slice(index + 8, this.state.shop_link.length);
    }
    if (shop_id !== null) {
      this.setState({ shop_id: shop_id });
    }
    console.log("shop_id la: " + shop_id);
    if (shop_id !== 0) {
      axios({
        method: 'post',
        url: 'http://172.104.173.222:8081/shop/' + shop_id,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${this.props.token}`
        },
      })
        .then((response) => {
          console.log(response);
          if (response.data === "Shop đã được thêm cho tài khoản khác") {
            this.setState({
              thongBao: "Kết nối không thành công. Cửa hàng đã được kết nối với tài khoản khác"
            })
          }
          else {
            this.callApi();
            this.setState({
              thongBao: "Kết nối thành công. Shop_id của cửa hàng vừa kết nối"
            })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

  }

  callApi = () => {
    axios({
      method: 'get',
      url: 'http://172.104.173.222:8081/shop',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.props.token}`
      },
    })
      .then((response) => {
        console.log(response);
        let neww = response.data;

        let newlistShop = neww.map(
          (c, index) => {
            if (index === 0) {
              c.isActive = true;

              this.props.saveShopIdSelected(c.shopid);
              this.props.saveShopNameSelected(c.name);
            }
            else {
              c.isActive = false;
            }
            return c
          }
        )
        this.props.saveListShop(newlistShop);

      })
      .catch((error) => {
        console.log(error);
        alert("Không lấy được cửa hàng");
      });
  }




  onChange = (event) => {

    var name = event.target.value;

    this.setState({
      nameShop: name
    });



  }
  render() {

    let status = null;
    if (this.state.thongBao !== null) {
      if (this.state.thongBao === "Kết nối không thành công. Cửa hàng đã được kết nối với tài khoản khác") {
        status = <h5 className="text-center m-b-15"> {this.state.thongBao}</h5>
      }
      else {
        status =
          <div>
            <h5 className="text-center m-b-15"> {this.state.thongBao}</h5>
            <h3 style={{ fontWeight: "bold" }} className="text-center m-b-20">{this.state.shop_id} </h3>
          </div>
      }

    }
    
    return (
      <div  >
        <div className=" card overview col-sm-12">
          <h2>Kết nối cửa hàng</h2>
        </div>
        <div className="col-md-8 offset-md-2 mr-auto ml-auto m-t-100">
          {status}
          <div className="col-md-3 offset-md-5" >
            <Link to="/admin/shopManagement"><button className="btn btn-primary text-center "> {this.state.thongBao === "Kết nối thành công. Shop_id của cửa hàng vừa kết nối" ? "Xong" : "Quay lại"}     </button> </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  console.log(state);
  return {
    token: state.token
  }
}
export default connect(mapStatetoProps, null)(ContactShopee);
