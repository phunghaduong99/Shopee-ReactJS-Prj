import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

import swal from 'sweetalert';
class changePass extends Component {
    constructor(props) {
        super(props);
        this.state =({
            pass:null,
            newPass:null,
            confirmNew:null,
            formErrors: {
                pass:null,
                newPass:null,
                confirmNew:null,
                errorMessage:null
                
              },
              open:false
            
        });
        
    }
    
    onChange = e => {
        e.preventDefault();
        var target = e.target;
        var name = target.name;
        var value= target.value;
        this.setState({
          [name]:value
       });
        let formErrors = {...this.state.formErrors };
        
        switch (name) {
            case "pass":
            formErrors.pass =
              value.length < 6 ? "Mật khẩu cũ không đúng" : null;
            break;
            case "newPass":
            formErrors.newPass =
              value.length < 6 ? "Mật khẩu tối thiểu 6 kí tự" : null;
            break;
            
            default:
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        
    
      };
     closeModal=()=>{
      this.setState({ open: false });
     }
    offSubmit=(event)=>{
      event.preventDefault();
      this.setState({ errorMessage:"Cần nhập chính xác các thông tin" });
    }
    onSubmit=(event)=>{
        event.preventDefault();
        this.callApi();
        this.setState({ open: true });
        console.log(`
            --Data--
            newPass: ${this.state.newPass}
          `); 
    }
    callApi = () => {
      axios({
        method: 'put',
        url: 'http://192.168.1.141:8081/updateInfor',
        data: {
          'password': `${this.state.newPass}`
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${this.props.token}`
        },
      })
        .then((response) => {
          console.log(response);
          swal("Đổi mật khẩu thành công!", "", "success",
          );
        })
        .catch((error) => {
          console.log(error);
          swal("Đổi mật khẩu thất bại!", "", "error");
        });
    }
    render() {
      let a=this.state.formErrors.pass;
      let b=null;
      let c=null;
      if ((this.state.newPass=== null)||(this.state.newPass!==this.state.pass) )
      {b= this.state.formErrors.newPass;}
      else{
        b="Mật khẩu mới trùng mật khẩu cũ"
      };
      if(this.state.confirmNew!== null && this.state.newPass!==this.state.confirmNew) 
      {c="Mật khẩu không khớp"} else{c=null} ; 

        return (
            <div onSubmit={(a===null&&b===null&& c===null)?this.onSubmit:this.offSubmit} >
                    <div className=" card overview col-sm-12">
                        <h2>Đổi mật khẩu</h2>
                    </div>
                    <form className="form-horizontal">
                      <div className="col-md-6 offset-md-3 mr-auto ml-auto ">
                          <div className=" row form-group ">
                            <div className="col-md-5 aline">
                              <label className="col-form-label">Mật khẩu hiện tại </label>
                            </div>
                            <div className="col-md-7">
                                <input 
                                    className="form-control"
                                    name="pass" 
                                    placeholder="Nhập mật khẩu cũ" 
                                    type="password"
                                    onChange={this.onChange}
                                    required
                                  />
                                  <span className="errorMessage txt4">{a}</span>
                            </div>
                            
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-5 aline">
                              <label className="col-form-label">Mật khẩu mới</label>
                            </div>
                            <div className="col-md-7">
                              <input 
                                    className="form-control" 
                                    name="newPass" 
                                    placeholder="Nhập mật khẩu mới" 
                                    type="password"
                                    onChange={this.onChange}
                                    required
                                />
                              <span className="errorMessage txt4">{b}</span>
                            </div>
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-5 aline">
                              <label className="col-form-label">Nhập lại mật khẩu mới</label>
                            </div>
                            <div className="col-md-7">
                              <input 
                                    className="form-control" 
                                    name="confirmNew" 
                                    placeholder="Nhập lại mật khẩu mới" 
                                    type="password"
                                    onChange={this.onChange}
                                    required
                                />
                              <span className="errorMessage txt4 m-t-20">{c}</span>
                            </div>
                            
                          </div>
                          <div className="col-md-6 offset-md-9 col-sm-6 ml-auto text-right">
                            <Link to={`/admin/quanlytaikhoan`}><button className="btn btn-danger m-r-10 ">Hủy Bỏ </button></Link>
                            <button type="submit" className="btn btn-primary ">Lưu Lại </button>
                          </div>
                          <Popup
                                open={this.state.open}
                                closeOnDocumentClick
                                onClose={this.closeModal}
                            >
                              <div className="update">
                                <h5>Đổi mật khẩu thành công</h5>
                              </div>
                            </Popup>
                      </div>
                     </form>
                </div>
                
            
        );
    }
}
const mapStatetoProps = (state) => {
  console.log(state);
  return {
    token: state.token,
  }
}
export default connect(mapStatetoProps, null)(changePass);