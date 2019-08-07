import React, { Component } from 'react';
import logo from './library/images/logoadmin.png';
import './login.css';

import './library/fonts/iconic/css/material-design-iconic-font.min.css';
import './library/css/main.css';
import './library/css/util.css';

import { Link } from "react-router-dom";
import axios from 'axios';

import { connect } from 'react-redux';
import * as actions from './../../redux/actions/index';



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

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: "",
            pass: "",
            token: 'Day la token',
            formErrors: {
                username: "",
                pass: "",
            }
        });
    }
    componentDidMount = () => {
        
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
            case "username":
                formErrors.username =
                    value.length < 5 ? "Tên đăng nhập tối thiểu 5 kí tự" : "";
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

    onSubmit = (event) => {
       
        event.preventDefault();
       
        if (formValid(this.state)) {
            console.log(`
              --Data--
              username: ${this.state.username}
              Password: ${this.state.pass}
              
            `);

            axios({
                method: 'post',
                url: 'http://192.168.43.111:8081/login',
                data: {
                    username: `${this.state.username}`,
                    password: `${this.state.pass}`
                }
            })
                .then((response) => {
                    console.log(response);
                   
                    console.log("token+ "+ response.data.token);
                    this.setState({token: response.data.token });
                    window.location = '/admin';
                    this.props.saveToken(this.state.token);

                })
                .catch((error) => {
                    console.log(error);
                    alert("Tài khoản hoặc mật khẩu không đúng.")
                });
        }
        else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
            event.preventDefault();
        }

    }

    render() {
       
        return (
            <div className="app">
                <div className="limiter">
                    <div className="container-login100" >
                        <Link className="back-home" to="/">
                            <button className="back-left">
                                <i className="fa fa-arrow-left m-r-5"></i>
                                Trang chủ
                </button>
                        </Link>

                        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-55">
                            <form className="login100-form validate-form" action="/admin" onSubmit={this.onSubmit}>
                                <span className="login100-form-title p-b-49">
                                    <img src={logo} alt="logo" className="logoLogin"></img>
                                </span>

                                <div className="around-input100  m-b-23 ">
                                    <div className="wrap-input100 validate-input " data-validate="Username is required">
                                        <span className="label-input100">Tên đăng nhập</span>
                                        <input
                                            className="input100"
                                            type="text"
                                            name="username"
                                            placeholder="Nhập tên đăng nhập..."
                                            onChange={this.onChange}
                                            value={this.state.username}
                                            required
                                        />
                                        <span className="focus-input100" data-symbol="&#xf206;"></span>
                                    </div>
                                    <span className="errorMessage txt4">{this.state.formErrors.username}</span>
                                </div>
                                <div className="around-input100  m-b-23 ">
                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <span className="label-input100">Mật khẩu</span>
                                        <input
                                            className="input100"
                                            type="password"
                                            name="pass"
                                            placeholder="Nhập mật khẩu..."
                                            onChange={this.onChange}
                                            value={this.state.pass}
                                            required
                                        />
                                        <span className="focus-input100" data-symbol="&#xf190;"></span>
                                    </div>
                                    <span className="errorMessage txt4">{this.state.formErrors.pass}</span>
                                </div>
                                <div className="text-right p-t-8 p-b-31">

                                    <Link to="/forgot-password">
                                        <button type="button" className="txt5" >Quên mật khẩu?</button>
                                    </Link>
                                </div>

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        {/* <Link to="/admin" className="dangnhap"> */}
                                        <button className="login100-form-btn dangnhap" type="submit" onClick={this.props.isAdmin}>
                                            ĐĂNG NHẬP
                                    </button>
                                        {/* </Link> */}
                                    </div>
                                </div>

                                <div className="txt1 text-center p-t-54 p-b-20">
                                    <span>
                                        Hoặc đăng nhập bằng
                                </span>
                                </div>

                                <div className="flex-c-m">
                                    <a href="/" className="login100-social-item bg1">
                                        {/* {this.props.fbcontent} */}
                                        <i className="fa fa-facebook-f"></i>
                                    </a>

                                    <a href="/" className="login100-social-item bg3">
                                        {/* {this.props.Ggcontent}  */}
                                        <i className="fa fa-google"></i>
                                    </a>
                                </div>

                                <div className="flex-col-c p-t-25">
                                    <span className="txt1 p-b-17">
                                        Bạn chưa có tài khoản?
                                </span>
                                    <Link to="/register">
                                        <button type="button" className="txt3" >ĐĂNG KÝ</button>
                                    </Link>
                                </div>
                            </form>
                        </div>

                        <div className="back-right"></div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStatetoProps = (state) => {
    console.log(state);
    return {
    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        saveToken: (token) => {
            dispatch(actions.saveToken(token));
        }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(FormLogin);