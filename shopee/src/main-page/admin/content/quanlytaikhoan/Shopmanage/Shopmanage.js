import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions/index';
import Shop from './shop';
import Tooltip from "react-simple-tooltip"

class ShopManage extends Component {
  state = {
    shop_id_selected: "",
    listShop: [

    ],
  }

  componentDidMount() {
    if(this.props.listShop.length === 0){
      axios({
        method: 'get',
        url: 'http://192.168.10.8:8081/shop',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':  `${this.props.token}`
        },
      })
        .then((response) => {
          console.log(response);
          this.setState({ listShop: response.data });

          let newlistShop = this.state.listShop.map(
            (c, index) => {
              if (index === 0) {
                c.isActive = true;
                this.setState({ shop_id_selected: c.id });
                this.props.saveShopIdSelected(c.id);
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
    else {
      this.setState({listShop: this.props.listShop});
    }
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
            this.props.saveShopIdSelected(c.id);
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
    let tableshop = this.props.listShop.map((c, index) =>
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
              <a href="https://partner.uat.shopeemobile.com/api/v1/shop/auth_partner?id=840386&token=325764591290d0844604564dc15fe8a05b0bed2baed4f61d0308a5ab5a685bd6&redirect=http%3A%2F%2F192.168.36.34%3A3000%2Fadmin%2Fquanlycuahang%2FContactShopee" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết Nối </a>
              {/* <button type="button" className="btn btn-primary"><i className="fa fa-plus-square mr-10"></i>Kết nối</button> */}
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tên cửa hàng</th>
                <th scope="col">ID cửa hàng</th>
                <th scope="col">Trạng thái
                  <Tooltip content="Đây là trạng thái của cửa hàng trên phẩn mềm SPA. Tại một thời điểm chỉ duy nhất một cửa hàng được hoạt động" fontSize="11px"  >
                      <span className="fa fa-info-circle red text-left m-l-5" ></span>
                  </Tooltip>
                </th>
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
  console.log(state);
  return {
    listShop: state.listShop,
    token: state.token,
    shopIdSelected: state.shopIdSelected
  }
}
const mapDispatchtoProps = (dispatch, props) => {
  return {
    saveListShop: (listShop) => {
      dispatch(actions.saveListShop(listShop));
    },
    saveShopIdSelected: (shopIdSelected) => {
      dispatch(actions.saveShopIdSelected(shopIdSelected));
    }
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ShopManage);