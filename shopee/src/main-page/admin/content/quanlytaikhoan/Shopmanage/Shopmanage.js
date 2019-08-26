import React, { Component } from 'react';

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


  changeStatus = (index) => {
    let newlistShop = this.props.listShop.map(
      (c) => {
        c.isActive = false;
        return c;
      })
  
      let  newlist = newlistShop.map(
        (c, indexx) => {
          if (indexx === index) {
            c.isActive = true;
            this.props.saveShopIdSelected(c.shopid);
            this.props.saveShopNameSelected(c.name);
            if(this.props.shopIdSelected !== c.shopid){
              this.props.removeListItems();
              this.props.removeListRivalsItem();
              this.props.removeListRivalsShop();
              this.props.removeListRivalsShopFollowing();
              this.props.removeListChosenItems();

            }
          }
          return c;
        }
      )
      this.props.saveListShop(newlist);
   
  }

  onSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    let number_shop = this.props.listShop.length;
    let tableshop = this.props.listShop.map((c, index) =>
      <Shop
        name={c.name}
        index={index}
        key={index}
        shopid={c.shopid}
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
  return {
    listShop: state.listShop,
    token: state.token,
    shopIdSelected: state.shopIdSelected,

  }
}
const mapDispatchtoProps = (dispatch, props) => {
  return {
    saveListShop: (listShop) => {
      dispatch(actions.saveListShop(listShop));
    },
    saveShopIdSelected: (shopIdSelected) => {
      dispatch(actions.saveShopIdSelected(shopIdSelected));
    },
    saveShopNameSelected: (shopNameSelected) => {
      dispatch(actions.saveShopNameSelected(shopNameSelected));
    },

    removeListItems: () => {
      dispatch(actions.removeListItems());
    },
    removeListRivalsItem: () => {
      dispatch(actions.removeListRivalsItem());
    },
    removeListRivalsShop: () => {
      dispatch(actions.removeListRivalsShop());
    },
    removeListRivalsShopFollowing: () => {
      dispatch(actions.removeListRivalsShopFollowing());
    },
    removeListChosenItems: () => {
      dispatch(actions.removeListChosenItems());
    },



  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(ShopManage);