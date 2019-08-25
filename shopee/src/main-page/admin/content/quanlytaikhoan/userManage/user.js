import React, { Component } from 'react';
import './user.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions/index';


import swal from 'sweetalert';
import Popup from "reactjs-popup";
const phoneRegex = RegExp(
  /\(*\d{3}\)*( |-)*\d{3}( |-)*\d{4}/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
class user extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: null,
      isSubmit: false,
      formErrors: {
        // username: "",
        phone: ""
      },
      phone: this.props.userInfo.phone
    });

  }

  onChange = e => {
    e.preventDefault();
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
      phone: value
    });
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      // case "username":
      //   formErrors.username =
      //     value.length < 5 ? "Tên đăng kí tối thiểu 5 kí tự" : "";
      //   break;
      case "phone":
        formErrors.phone = phoneRegex.test(value)
          ? ""
          : "Số điện thoại không hợp lệ";
        if (phoneRegex.test(value)) {
          this.setState({ isSubmit: true })
        }
        else this.setState({ isSubmit: false })

        break;
      default:
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };




  onSubmit = (event) => {
    event.preventDefault();
    // if (formValid(this.state)) {
    //   console.log(`
    //         --Data--

    //         phone: ${this.state.phone}
    //       `);
    // } else {
    //   console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    // }
    
    if (this.state.isSubmit) {
      console.log('aa')
      this.callApi();
    }
  }

  callApi = () => {
    console.log(this.state.phone)
    axios({
      method: 'put',
      url: 'http://172.104.173.222:8081/updateInfor',
      data: {
        'phone': `${this.state.phone}`
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.props.token}`
      },
    })
      .then((response) => {
        console.log(response);
        this.props.saveUserInfo(response.data);
        swal("Cập nhật tài khoản thành công!", "", "success",
        );
      })
      .catch((error) => {
        console.log(error);
        alert("Không cập nhật được thông tin tài khoản");
      });
  }
  render() {
    let userInfo = this.props.userInfo;
    console.log(userInfo);
    if(this.state.phone ===null)  this.setState({
      phone: ""
    })
    return (
      <div >
        <div className=" card overview col-sm-12">
          <h2>Thông tin tài khoản</h2>
        </div>
        <form className="form-horizontal" onSubmit={this.onSubmit} >
          <div className="col-md-8 offset-md-3 mr-auto ml-auto ">
            <div className=" row form-group ">
              <div className="col-md-4 aline">
                <label className="col-form-label"><h6>Tên người dùng <span className="red">*</span></h6> </label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  name="username"
                  type="text"
                  disabled
                  value={userInfo.username}
                  required
                />
                <span className="errorMessage txt4">{this.state.formErrors.username}</span>
              </div>

            </div>
            <div className=" row form-group ">
              <div className="col-md-4 aline">
                <label className="col-form-label"><h6>Số điện thoại </h6></label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  type="text"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
                <span className="errorMessage txt4">{this.state.formErrors.phone}</span>
              </div>
            </div>
            <div className=" row form-group ">
              <div className="col-md-4 aline">
                <label className="col-form-label"><h6>Email <span className="red">*</span></h6></label>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control"
                  name="email"
                  type="text"
                  value={userInfo.email}
                  disabled
                />
              </div>
            </div>
            <div className=" row form-group ">
              <div className="col-md-4 aline">
                <label className="col-form-label"><h6>Mật khẩu </h6> </label>
              </div>
              <div className="col-md-4">
                <label className="col-form-label-content">******** </label>
              </div>
              <div className="col-md-4">
                {/* <button type="button" className="btn btn-link" >Đổi mật khẩu</button> */}
                <Link to={`${this.props.match.url}/changePass`} className="btn btn-link">Đổi mật khẩu </Link>
              </div>
            </div>
            <div className=" row form-group ">
              <div className="col-md-3 offset-md-9 col-sm-6 ml-auto text-right">
                <button type="submit" className="btn btn-primary ">Lưu thay đổi </button>
              </div>
            </div>
          </div>
        </form>
      </div>


    );
  }
}
const mapStatetoProps = (state) => {
  return {
    token: state.token,
    userInfo: state.userInfo
  }
}
const mapDispatchtoProps = (dispatch, props) => {
  return {
    saveUserInfo: (info) => {
      dispatch(actions.saveUserInfo(info));
    }
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(user);