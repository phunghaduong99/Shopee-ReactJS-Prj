import React, { Component } from 'react';
import logo from './library/images/logo.png';
import './login.css';
class Register extends Component {
    constructor(props){
        super(props);
        this.state =({
            gmail :'',
            username:'',
            pass:'',
            confilmPass:''

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
                            <img src={logo} alt="logo" className="logo"></img>
                            </span>
                            <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                                <span className="label-input100">Gmail</span>
                                <input
                                 className="input100"
                                 type="text"
                                  name="gmail" 
                                  placeholder="Type your gmail"
                                  onChange={this.onChange}
                                  value={this.state.gmail}
                                  />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                                <span className="label-input100">Username</span>
                                <input
                                 className="input100"
                                 type="text"
                                  name="username" 
                                  placeholder="Type your username"
                                  onChange={this.onChange}
                                  value={this.state.username}
                                  />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input 
                                    className="input100"
                                    type="password"
                                    name="pass"
                                    placeholder="Type your password"
                                    onChange={this.onChange}
                                    value={this.state.pass}
                                    />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            
                            <div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
                                <span className="label-input100">Confilm Password</span>
                                <input 
                                    className="input100"
                                    type="password"
                                    name="confilmPass"
                                    placeholder="Type your password"
                                    onChange={this.onChange}
                                    value={this.state.confilmPass}
                                    />
                                <span className="focus-input100" data-symbol="&#xf190;"></span>
                            </div> 
                            <br/>
                            
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn m-b-23">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn">
                                        Register
                                    </button>
                                </div>
                                &nbsp;
                                <button type="button" className="txt3" onClick={this.props.onCancelRegister}>CANCEL</button>
                            </div>


                            
                            <div className="txt1 text-center p-t-34 p-b-20">
                                <span>
                                    Or Sign Up Using
                                </span>
                            </div>

                            <div className="flex-c-m">
                                <a href="/" className="login100-social-item bg1">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a href="/" className="login100-social-item bg3">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Register;