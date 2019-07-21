import React, { Component } from 'react';
import './main-page.css';
import TrangChu from './trang-chu/index';
import Login from './login/index';
import Admin from './admin/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    responseF: null
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
    // let status = null;
    // if (this.state.isChangChu) status = <TrangChu isLoGin={this.isLoGin} />
    // else if (this.state.isLoGin) status =
    //   <Login isAdmin={this.isAdmin}
    //     componentClicked={this.componentClicked}
    //     responseFacebook={this.responseFacebook}
    //   />;
    // else if (this.state.isAdmin) status = <Admin responseF={this.state.responseF} />;


    return (

      <Router>
        <div className="App">
          <Route path="/" component={TrangChu} exact />
          <Route path="/login"
            render={props =>
              <Login {...props} componentClicked={this.componentClicked}
                responseFacebook={this.responseFacebook} />}
          />
          <Route path="/admin"
            render={props =>
              <Admin {...props} responseF={this.state.responseF} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

