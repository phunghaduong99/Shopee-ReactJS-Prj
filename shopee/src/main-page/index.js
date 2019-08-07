import React, { Component } from 'react';
import './main-page.css';
import TrangChu from './trang-chu/index';
import Login from './login/FormLogin';
import Admin from './admin/index';
import Register from './login/Register';
import MissPass from './login/MissPass';


import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      responseF: null,
      shop_link: "https://www.facebook.com/?shop_id=1234356"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    let index = this.state.shop_link.search("shop_id=");
    let shop_id = this.state.shop_link.slice(index + 8, index + 15);
    console.log("shop_id la: " + shop_id);


  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  responseFacebook = (response) => {
    console.log(response);
    if (response.userID) {
      this.setState({
        isLoggedInFacebook: true,
        responseF: response,
        // isChangChu: false,
        // isLoGin: false,
        // isAdmin: true
      })
    }
    else {
      this.setState({ responseF: null });
    }
  }
  componentClicked = () => {
    console.log("clicked");
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/"
            render={props =>
              <TrangChu {...props} width={this.state.width} />} exact />
          <Route path="/login"
            render={props =>
              <Login {...props} componentClicked={this.componentClicked}
                responseFacebook={this.responseFacebook} />}
          />
          <Route path="/admin"
            render={props =>
              <Admin {...props}
                responseF={this.state.responseF}
                width={this.state.width}
              />}
          />

          <Route exact path="/forgot-password"
            render={props =>
              <MissPass {...props}  />} />

          <Route exact path="/register"
            render={props =>
              <Register {...props}   />} />
        </div>
      </Router>
    );
  }
}

export default App;


// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import { GoogleLogin } from 'react-google-login';

// fbcontent = (
//   <FacebookLogin
//     appId="365366094167384"
//     autoLoad={false}
//     auto_logout_link={true}
//     fields="name,email,picture"
//     onClick={this.props.componentClicked}
//     callback={this.props.responseFacebook}
//     render={renderProps => (
//       <i className="fa fa-facebook-f" onClick={renderProps.onClick}></i>
//     )}
//   />
// )