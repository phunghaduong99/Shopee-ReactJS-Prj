import React, { Component } from 'react';
import './main-page.css';
import TrangChu from './trang-chu/index';
import Login from './login/index';
import Admin from './admin/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      responseF: null
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    
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
              <TrangChu {...props} width= {this.state.width} />} exact />
          <Route path="/login"
            render={props =>
              <Login {...props} componentClicked={this.componentClicked}
                responseFacebook={this.responseFacebook} />}
          />
          <Route path="/admin"
            render={props =>
              <Admin {...props} 
                responseF={this.state.responseF}
                width= {this.state.width}
                />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

