import React, { Component } from 'react';
import logo from './library/images/logo.png';
import './login.css';
class FormLogin extends Component {
    constructor(props){
        super(props);
        this.state =({
            username:'',
            pass:''
        });
    }
    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value= target.value;
        this.setState({
            [name]:value
        });
    }
    
    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    } 
    
    render() { 
        return (
             <div className="limiter">
                <div className="container-login100" >
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-55">
                        <form className="login100-form validate-form" onSubmit={this.onSubmit}>
                            <span className="login100-form-title p-b-49">
                            <img src={logo} alt="logo" className="logoLogin"></img>
                            </span> 
                            

                            <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is required">
                                <span className="label-input100">Tên đăng nhập</span>
                                <input
                                 className="input100"
                                 type="text"
                                  name="username" 
                                  placeholder="Nhập tên đăng nhập..."
                                  onChange={this.onChange}
                                  value={this.state.username}
                                  />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Mật khẩu</span>
                                <input 
                                    className="input100"
                                    type="password"
                                    name="pass"
                                    placeholder="Nhập mật khẩu..."
                                    onChange={this.onChange}
                                    value={this.state.pass}
                                    />
                                <span className="focus-input100" data-symbol="&#xf190;"></span>
                            </div>
                            
                            <div className="text-right p-t-8 p-b-31">
                                <a href="/">
                                    Quên mật khẩu?
                                </a>
                            </div>
                            
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn" onClick={this.props.isAdmin}>
                                        ĐĂNG NHẬP
                                    </button>
                                </div>
                            </div>

                            <div className="txt1 text-center p-t-54 p-b-20">
                                <span>
                                    Hoặc đăng nhập bằng
                                </span>
                            </div>

                            <div className="flex-c-m">
                                <a href="/" className="login100-social-item bg1">
                                    {/* <i className="fab fa-facebook-f"></i> */}{this.props.fbcontent}
                                </a>

                                <a href="/" className="login100-social-item bg3">
                                {this.props.Ggcontent} 
                                 {/* <i className="fab fa-google"></i> */}
                                </a>
                            </div>

                            <div className="flex-col-c p-t-55">
                                <span className="txt1 p-b-17">
                                    Bạn chưa có tài khoản?
                                </span>
                                
                                <button type="button" className="txt3" onClick={this.props.onRegister}>ĐĂNG KÝ</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default FormLogin;