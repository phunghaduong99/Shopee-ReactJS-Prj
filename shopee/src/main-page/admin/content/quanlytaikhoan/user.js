import React, { Component } from 'react';
import './user.css';
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
                    <div className=" overview col-sm-12">
                        <h2>Thông tin tài khoản</h2>
                    </div>
                <div className="col-md-12 .col-lg-12 .col-xl-12 infoUser">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className=" input-group ">
                            <label className="col-sm-4 col-form-label">Tên người dùng </label>
                            <input 
                                className="form-control"
                                name="username" 
                                placeholder="Nhập tên" 
                                type="text"
                                onChange={this.onChange}
                              />
                        </div>
                        <span className="col-sm-6 errorMessage txt4 text-right">{this.state.formErrors.username}</span>
                        <div className="input-group">
                            <label className="col-sm-4 col-form-label">Số điện thoại </label>
                            <input 
                                className="form-control" 
                                name="phone" 
                                placeholder="Nhập số điện thoại" 
                                type="text"
                                onChange={this.onChange}
                            />
                        </div>
                        <span className="col-sm-6 errorMessage txt4 text-right">{this.state.formErrors.phone}</span>
                        <div className="input-group">
                            <label className="col-sm-4 col-form-label">Email </label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                required="required" 
                                placeholder="Nhập địa chỉ email" 
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="input-group">
                            <label className="col-sm-4 col-form-label">Mật khẩu </label>
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                required="required" 
                                placeholder="Mật Khẩu" 
                                onChange={this.onChange}
                            />
                            <label className="col-sm-4 col-form-label-pass" > Đổi mật khẩu?</label>
                        </div>
                        <div className="buttonUpdate">
                             <button type="submit" className="btn btn-primary text-right">Lưu thay đổi </button>
                        </div>
                     </div>
                </div>
            </div>
            
        );
    }
}

export default user ;