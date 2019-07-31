import React, { Component } from 'react';
import logo from './library/images/logoadmin.png';
import './login.css';
import { Link } from "react-router-dom";
import axios from 'axios';
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class MissPass extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            formErrors: {
                email: ""
            }
        });
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        let formErrors = { ...this.state.formErrors };


        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Email không hợp lệ";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }

    onSubmit = (event) => {
        event.preventDefault();
       
        axios({
            method: 'put',
            url: 'http://192.168.36.28:8081/forget',
            data:{
                email: `${ this.state.email}`
              } 

          })
          .then(  (response) => {
            console.log(response);
           //  console.log('status'+response.status);
           //  if(response.status === 200){
           //   this.setState({isLogin: true});
           //   console.log(this.state.isLogin+ 'true hnha');
           //   window.location='/admin';
           // }

         })
         .catch( (error) =>  {
           console.log(error);
           // this.setState({isLogin:false});
           // alert("Tài khoản đã tồn tại.")
         });
    }

    render() {
        // axios({
        //     method: 'post',
        //     url: 'http://192.168.36.28:8081/home',
        //     data: null,

        //   }).then (res=>{
        //       console.log(res);
        //   }).catch (err=>{
        //       console.log(err);
        //   });
        return (
            <div className="limiter">
                <div className="container-login100" >
                    <Link className="back-home" to="/">
                        <button className="back-left" type="button" onClick={this.props.offMissPass}>
                            <i className="fa fa-arrow-left m-r-5"></i>
                            Đăng nhập
                        </button>
                    </Link>
                    
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-55">
                        <form className="login100-form validate-form" onSubmit={this.onSubmit}>
                            <span className="login100-form-title p-b-49">
                                <img src={logo} alt="logo" className="logoLogin"></img>
                            </span>

                            <div className="around-input100  m-b-23 ">
                                <div className="wrap-input100 validate-input m-b-2" data-validate="Username is required">
                                    <span className="label-input100">Email xác nhận</span>
                                    <input
                                        className="input100"
                                        type="text"
                                        name="email"
                                        placeholder="Nhập email..."
                                        onChange={this.onChange}
                                        value={this.state.mail}
                                    />
                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                                </div>
                                <span className="errorMessage txt4">{this.state.formErrors.email}</span>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn dangnhap" type = "submit" >
                                        Gửi
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="back-right"></div>
                </div>
            </div>

        );
    }
}

export default MissPass;