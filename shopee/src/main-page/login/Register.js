import React, { Component } from 'react';
import logo from './library/images/logoadmin.png';
import './login.css';
import axios from 'axios';
import { Link } from "react-router-dom";
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
  

class Register extends Component {
    constructor(props) {
        super(props);
        this.state =({
            email : null,
            username:null,
            pass: null,
            confirmPass: null,
            isLogin: false,
            formErrors: {
                email: "",
                username: "",
                pass: "",
                confirmPass: ""
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
          case "email":
            formErrors.email = emailRegex.test(value)
            ? ""
            : "Email không hợp lệ";
              break;
          case "username":
            formErrors.username =
              value.length < 5 ? "Tên đăng kí tối thiểu 5 kí tự" : "";
            break;
          case "pass":
            formErrors.pass =
            value.length < 6 ? "Mật khẩu tối thiểu 6 kí tự" : "";
              break;
          default:
            break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        
      }
      
         
    onSubmit=(event)=>{
        // event.preventDefault();
        if (formValid(this.state)) {
          console.log(`
            --Data--
            username: ${this.state.username}
            Email: ${this.state.email}
            Password: ${this.state.pass}
            confirmPassword: ${this.state.confirmPass}
          `);
     
         
        
          axios({
            method: 'post',
            url: 'http://192.168.36.28:8081/register',
            data:{
              username:  `${ this.state.username}`,
              email: `${this.state.email}`,
              password: `${ this.state.pass}`
            } 
          })
          .then(  (response) => {
             console.log(response);
             console.log('status'+response.status);
             if(response.status === 200){
              this.setState({isLogin: true});
              console.log(this.state.isLogin+ 'true hnha');
              window.location='/admin';
            }

          })
          .catch( (error) =>  {
            console.log(error);
            this.setState({isLogin:false});
            alert("Tài khoản đã tồn tại.")
          });
        

        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
        
    }
    
    render() {
        return (
            <div className="limiter">
                <div className="container-login100" >
                  <div></div>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-55">
                        <form className="login100-form validate-form" onSubmit={this.onSubmit} action = "/admin">
                            <span className="login100-form-title p-b-49">
                                <img src={logo} alt="logo" className="logoLogin"></img>
                            </span>
                            <div className="around-input100  m-b-23 ">
                              <div className="wrap-input100 validate-input m-b-2" data-validate = "Username is reauired">
                                  <span className="label-input100">Email</span>
                                  <input
                                  className="input100"
                                  type="text"
                                    name="email" 
                                    placeholder="Nhập địa chỉ email..."
                                    onChange={this.onChange}
                                    required></input>
                                  <span className="focus-input100" data-symbol="&#xf206;"></span>
                                </div>
                                <span className="errorMessage txt4">{this.state.formErrors.email}</span>
                            </div>
                            <div className="around-input100  m-b-23 ">
                              <div className="wrap-input100 validate-input m-b-2" data-validate = "Username is reauired">
                                  <span className="label-input100">Tên tài khoản</span>
                                  <input
                                  className="input100"
                                  type="text"
                                    name="username" 
                                    placeholder="Nhập tên đăng ký..."
                                    onChange={this.onChange}
                                    required></input>
                                  <span className="focus-input100" data-symbol="&#xf206;"></span>
                              </div>
                              <span className="errorMessage txt4">{this.state.formErrors.username}</span>
                            </div>
                            <div className="around-input100  m-b-23 ">
                              <div className="wrap-input100 validate-input m-b-2" data-validate="Password is required">
                                  <span className="label-input100">Mật Khẩu</span>
                                  <input 
                                      className="input100"
                                      type="password"
                                      name="pass"
                                      placeholder="Nhập mật khẩu..."
                                      onChange={this.onChange}
                                      required></input>
                                  <span className="focus-input100" data-symbol="&#xf190;"></span>
                              </div>
                              <span className="errorMessage txt4">{this.state.formErrors.pass}</span>
                            </div>
                            <div className="around-input100  m-b-23 ">
                              <div className="wrap-input100 validate-input m-b-2" data-validate="Password is required">
                                  <span className="label-input100">Xác nhận mật khẩu</span>
                                  <input 
                                      className="input100"
                                      type="password"
                                      name="confirmPass"
                                      placeholder="Nhập lại mật khẩu..."
                                      onChange={this.onChange}
                                      required></input>
                                  <span className="focus-input100" data-symbol="&#xf190;"></span>    
                              </div> 
                              <span className="errorMessage txt4 m-t-20">{(this.state.confirmPass!== null && this.state.pass!==this.state.confirmPass) ? "Mật khẩu không khớp" : "" }</span>
                            </div>

                            
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn m-b-23 m-t-20">
                                    <div className="login100-form-bgbtn"></div>
                                    <button type="submit"  className="login100-form-btn "   >
                                    {/* <Link to = {this.state.isLogin? '/admin': '#'}> */}
                                        ĐĂNG KÝ
                                        {/* </Link> */}
                                    </button>
                                   
                                    
                                </div>
                                &nbsp;
                                <button type="button" className="txt3" onClick={this.props.onCancelRegister}>HỦY</button>
                            </div>
                            <div className="txt1 text-center p-t-34 p-b-20">
                                <span>
                                    Hoặc đăng ký bằng
                                </span>
                            </div>

                            <div className="flex-c-m">
                                <a href="/" className="login100-social-item bg1">
                                {this.props.fbcontent}
                                </a>
                                <a href="/" className="login100-social-item bg3">
                                {this.props.Ggcontent}    
                                {/* <i className="fab fa-google"></i> */}
                                </a>
                            </div>
                        </form>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Register;