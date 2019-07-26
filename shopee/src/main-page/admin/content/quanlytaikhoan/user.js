import React, { Component } from 'react';
import './user.css';
import { Link } from "react-router-dom";
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
                username: "",
                phone:""
              }
            
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
            case "username":
            formErrors.username =
              value.length < 5 ? "Tên đăng kí tối thiểu 5 kí tự" : "";
            break;
            case "phone":
                formErrors.phone = phoneRegex.test(value)
                ? ""
                : "Số điện thoại không hợp lệ";
            break;
            default:
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        
    
      };
      
         
    onSubmit=(event)=>{
        event.preventDefault();
        if (formValid(this.state)) {
          console.log(`
            --Data--
            username: ${this.state.username}
            phone: ${this.state.phone}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }
    render() {
        return (
            <div onSubmit={this.onSubmit} >
                    <div className=" card overview col-sm-12">
                        <h2>Thông tin tài khoản</h2>
                    </div>
                    <form className="form-horizontal">
                      <div className="col-md-6 offset-md-3 mr-auto ml-auto ">
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                              <label className="col-form-label">Tên người dùng </label>
                            </div>
                            <div className="col-md-8">
                                <input 
                                    className="form-control"
                                    name="username" 
                                    placeholder="Nhập tên" 
                                    type="text"
                                    onChange={this.onChange}
                                    required
                                  />
                                  <span className="errorMessage txt4">{this.state.formErrors.username}</span>
                            </div>
                            
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                              <label className="col-form-label">Số điện thoại </label>
                            </div>
                            <div className="col-md-8">
                              <input 
                                    className="form-control" 
                                    name="phone" 
                                    placeholder="Nhập số điện thoại" 
                                    type="text"
                                    onChange={this.onChange}
                                    required
                                />
                              <span className="errorMessage txt4">{this.state.formErrors.phone}</span>
                            </div>
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                              <label className="col-form-label">Email</label>
                            </div>
                            <div className="col-md-8">
                              <label className="col-form-label-content">Buithikimanh@gmail.com </label>
                            </div>
                          </div>
                          <div className=" row form-group ">
                            <div className="col-md-4 aline">
                              <label className="col-form-label">Mật khẩu </label>
                            </div>
                            <div className="col-md-4">
                              <label className="col-form-label-content">###### </label>
                            </div>
                            <div className="col-md-4">
                              <button type="button" class="btn btn-link ">Đổi mật khẩu</button>
                              {/* <button type="button" className="btn btn-link" >Đổi mật khẩu</button> */}
                              <Link to={`${this.props.match.url}/changePass`}className="btn btn-link">Đổi mật khẩu </Link>
                            </div>
                          </div>
                          <div className="col-md-3 offset-md-9 col-sm-6 ml-auto">
                              <button type="submit" className="btn btn-primary ">Lưu thay đổi </button>
                          </div>
                      </div>
                     </form>
                </div>
                
            
        );
    }
}

export default user ;