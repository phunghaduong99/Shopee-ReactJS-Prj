import React, { Component } from 'react';
import './user.css';
import { Link } from "react-router-dom";
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
        this.state =({
            username:null,
            sdt:null,
            formErrors: {
                username: null,
                phone:null,
                error:null
              },
              open: false
            
        });
        
    }
     closeModal=()=>{
      this.setState({ open: false });
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
            case "username":
            formErrors.username =
              value.length < 5 ? "Tên đăng kí tối thiểu 5 kí tự" : null;
            break;
            case "phone":
                formErrors.phone = phoneRegex.test(value)
                ? null
                : "Số điện thoại không hợp lệ";
            break;
             case "error":
                formErrors.error =((this.state.username=== null)&&(this.state.phone===null))
                ? "Chưa chỉnh sửa thông tin gì?"
                :null;
            break;
            default:
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        
    
      };
      offSubmit=(event)=>{
        event.preventDefault();
      }
         
    onSubmit=(event)=>{
        event.preventDefault();
        this.setState({ open: true });
        console.log(`
            --Data--
            username: ${this.state.username}
            phone: ${this.state.phone}
          `); 
    }
    render() {
      let a=this.state.formErrors.username;
      let b=this.state.formErrors.phone;
      let c=this.state.formErrors.error;
        return (
            <div onSubmit={(a===null&&b===null&&c===null)?this.onSubmit:this.offSubmit} >
                    <div className=" card overview col-sm-12">
                        <h2>Thông tin tài khoản</h2>
                    </div>
                    <form className="form-horizontal">
                      <div className="col-md-8 offset-md-3 mr-auto ml-auto ">
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                              <label className="col-form-label"><h6>Tên người dùng <span className="red">*</span></h6> </label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    className="form-control"
                                    name="username" 
                                    placeholder="Nhập tên" 
                                    type="text"
                                    onChange={this.onChange}
                                  />
                                  <span className="errorMessage txt4">{a}</span>
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
                                    onChange={this.onChange}
                                />
                              <span className="errorMessage txt4">{b}</span>
                            </div>
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                              <label className="col-form-label"><h6>Email <span className="red">*</span></h6></label>
                            </div>
                            <div className="col-md-8">
                              <label className="col-form-label-content">Buithikimanh@gmail.com </label>
                            </div>
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                              <label className="col-form-label"><h6>Mật khẩu </h6> </label>
                            </div>
                            <div className="col-md-4">
                              <label className="col-form-label-content">###### </label>
                            </div>
                            <div className="col-md-4">
                              {/* <button type="button" className="btn btn-link" >Đổi mật khẩu</button> */}
                              <Link to={`${this.props.match.url}/changePass`}className="btn btn-link">Đổi mật khẩu </Link>
                            </div>
                            
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                            </div>
                            <div className="col-md-5 ">
                              <span className="errorMessage txt4">{c}</span>
                            </div>
                            <div className="col-md-3  text-right">
                                <button type="submit" className="btn btn-primary ">Lưu thay đổi </button>
                            </div>
                            <Popup
                                open={this.state.open}
                                closeOnDocumentClick
                                onClose={this.closeModal}
                            >
                              <div className="update">
                                <h5>Đã lưu thay đổi</h5>
                              </div>
                            </Popup>
                          </div>
                      </div>
                     </form>
                </div>
                
            
        );
    }
}

export default user ;