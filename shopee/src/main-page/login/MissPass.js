import React, { Component } from 'react';
import logo from './library/images/logoadmin.png';
import './login.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


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

    onMissPass = () => {
        var timer = 3, // timer in seconds
            isTimerStarted = false;

        (function customSwal() {

            swal({
                title: "Xin chờ một lát !",
                text: "Loading..." + timer,
                timer: !isTimerStarted ? timer * 1000 : undefined,
                buttons: false,
                closeOnClickOutside: false
            });



            isTimerStarted = true;
            if (timer) {
                timer--;
                if(timer === 0) timer = "";
                setTimeout(customSwal, 1000);

            }

        })();
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
        

        if (formValid(this.state)) {
            console.log(`
              --Data--
              username: ${this.state.username}
              Password: ${this.state.pass}
              
            `);
            this.onMissPass();
            axios({
                method: 'put',
                url: 'http://192.168.43.111:8081/forget',
                data: {
                    email: `${this.state.email}`
                }

            })
            .then((response) => {
                console.log(response);
                console.log(response.data);
                //  console.log('status'+response.status);
                //  if(response.status === 200){
                //   this.setState({isLogin: true});
                //   console.log(this.state.isLogin+ 'true hnha');
                //   window.location='/admin';
                // }
                if (response.data === "Đề nghị check mail") {
                    swal("Đã gửi email thành công!", "Vui lòng kiểm tra email!", "success",
                        {
                            closeOnClickOutside: false,
                        }
                    );
                }
                else {

                    setTimeout(() => {
                        swal("Email không khả dụng!", "Vui lòng kiểm tra email!", "error",
                            {
                                closeOnClickOutside: false,
                            }
                        )
                    }
                        , 3000
                    )

                }


            })
            .catch((error) => {
                console.log(error);
                setTimeout(() => {
                    swal("Gửi email thất bại!","Vui lòng thử lại sau", "error",
                        {
                            closeOnClickOutside: false,
                        }
                    )
                }
                    , 3000
                )
            });
        
        
        
        
        }
            
    }

    render() {

        return (
            <div className="app">
                <div className="limiter">
                    <div className="container-login100" >
                        <Link className="back-home" to="/login">
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
                                            required
                                        />
                                        <span className="focus-input100" data-symbol="&#xf206;"></span>
                                    </div>
                                    <span className="errorMessage txt4">{this.state.formErrors.email}</span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn dangnhap" type="submit" >
                                            Gửi
                                    </button>
                                    </div>
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

export default MissPass;