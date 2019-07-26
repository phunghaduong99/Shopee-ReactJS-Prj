import React, { Component } from 'react';
import FormLogin from './FormLogin';
import Register from './Register';
import MissPass from './MissPass';
import './library/vendor/bootstrap/css/bootstrap.min.css';
import './library/fonts/iconic/css/material-design-iconic-font.min.css';
import './library/css/main.css';
import './library/css/util.css';

import './login.css';


import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

class User extends Component {
  state = {
    onRegister: false,
    onMissPass: false,
    userIDF: '',
    nameF: '',
    emailF: '',
    pictureF: '',
    isLoggedInFacebook: false,
    isLoggedGoogle: false
  }

  onRegister = (event) => {
    event.preventDefault();
    this.setState({ onRegister: true })
  }
  
  onMissPass = (event) => {
    event.preventDefault();
    this.setState({ onMissPass: true })
  }
  offMissPass = (event) => {
    event.preventDefault();
    this.setState({ onMissPass: false })
  }
  onCancelRegister = (event) => {
    event.preventDefault();
    this.setState({ onRegister: false })
  }


  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedInFacebook: true,
      userIDF: response.userID,
      nameF: response.name,
      emailF: response.email,
      // pictureF: response.picture.data.url
    })
  }
  componentClicked = () => {
    console.log("clicked");
  }

  responseGoogle = (response) => {
    console.log(response);
  }
  render() {

    let fbcontent = null;
    // if (this.state.isLoggedInFacebook) {
    //   fbcontent = <i className="fab fa-facebook-f"></i>
    // }
    // else {
      fbcontent = (
        <FacebookLogin
          appId="365366094167384"
          autoLoad={true}
          auto_logout_link={true}
          fields="name,email,picture"
          onClick={this.props.componentClicked}
          callback={this.props.responseFacebook}
          render={renderProps => (
            <i className="fa fa-facebook-f" onClick={renderProps.onClick}></i>
          )}
        />
      )
    // }

    let Ggcontent = null;
    if (this.state.isLoggedGoogle) {
      Ggcontent = <i className="fab fa-google"></i>
    }
    else {
      Ggcontent  = <GoogleLogin
        clientId="94719664507-ha2lgivg66lnr4jhm182n627u9hf9299.apps.googleusercontent.com"
        render={renderProps => (
          <i className="fa fa-google" onClick={renderProps.onClick} disabled={renderProps.disabled} ></i>
          
        )}
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> 
      
    }


    let elmRe = null;
    if (this.state.onRegister) elmRe = <Register onCancelRegister={this.onCancelRegister} fbcontent={fbcontent} Ggcontent={Ggcontent} />;
    else  if(this.state.onMissPass) {elmRe = <MissPass offMissPass={this.offMissPass}/>;}
        else {elmRe = <FormLogin onRegister={this.onRegister}  onMissPass={this.onMissPass} isAdmin={this.props.isAdmin} fbcontent={fbcontent} Ggcontent={Ggcontent} />;}
      
    return (

      <div className="app">
        {elmRe}
      </div>
    );
  }
}

export default User;
