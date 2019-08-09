import React, { Component } from 'react';
import './../user.css';

import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions/index';
import Shop from './shop';
class ShopManage extends Component {
  state = {
    shop_id_selected: "",
    listShop: [
      {
        "id": 205134,
        "name": "Apiseller"
      },
      {
        "id": 205135,
        "name": "Apisellesdr"
      },
      {
        "id": 205335,
        "name": "Đồ chơi"
      }
    ],
  }

  componentDidMount() {

    axios({
      method: 'get',
      url: 'http://192.168.0.102:8081/shop',
      // data: {
      //   id: `${this.state.shop_id}`,
      //   name: `${this.state.nameShop}`
      // },
      // headers: {'application/json': `${token}`},
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `${token}`

      // },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    let newlistShop = this.state.listShop.map(
      (c, index) => {
        if (index === 0) {
          c.isActive = true;
          this.setState({ shop_id_selected: c.id });
        }
        else {
          c.isActive = false;
        }

        return c
      }

    )
    this.props.saveListShop(newlistShop);
  }
  changeStatus = (index) => {
    let newlistShop = this.state.listShop.map(
      (c) => {
        c.isActive = false;
        return c;
      })
    this.setState({
      listShop: newlistShop.map(
        (c, indexx) => {
          if (indexx === index) {
            c.isActive = true;
            this.setState({ shop_id_selected: c.id })
          }
          return c;
        }
      )
    })

  }

  onSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    let number_shop = this.state.listShop.length;
    let tableshop = this.state.listShop.map((c, index) =>
      <Shop
        name={c.name}
        index={index}
        key={index}
        id={c.id}
        isActive={c.isActive}
        changeStatus={this.changeStatus}
      />)

    return (
     
      <div onSubmit={this.onSubmit} >
        <div className=" card overview col-sm-12">
          <h2>Quản lý cửa hàng</h2>
        </div>
        <div className="manage">
          <div className="row ">
            <div className="col-md-10">
              <h5> Bạn đã kết nối {number_shop} cửa hàng </h5>
            </div>
            <div className="col-md-2 offset-md-2 mr-0 ml-0">
              <a href="https://partner.uat.shopeemobile.com/api/v1/shop/auth_partner?id=840386&token=d0f934508cadbf365ddd5518dc191848a7651fe908e4b42dcc1e8f6fb836ab78&redirect=http%3A%2F%2F192.168.36.27%3A3000%2Fadmin%2Fquanlycuahang%2FContactShopee" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết Nối </a>
              {/* <button type="button" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết nối</button> */}
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tên cửa hàng</th>
                <th scope="col">ID cửa hàng</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {tableshop}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state)
  return {
    listShop: state.listShop
  }
}
const mapDispatchtoProps = (dispatch, props) => {
  return {
    saveListShop: (listShop) => {
      dispatch(actions.saveListShop(listShop));
    }
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ShopManage);