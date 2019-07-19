import React, {Component} from 'react';
import './main-page.css';
import TrangChu from './trang-chu/index';
import Login from './login/index';
import Admin from './admin/index';
class App extends Component {
  state = {
    isChangChu: true,
    isLoGin: false,
    isAdmin: true,
    responseF: null
    }


   
  isLoGin = (e) => {
    e.preventDefault();
    this.setState({
      isChangChu: false,
      isLoGin: true,
      isAdmin: false
    });
  }

  isAdmin = (e) => {
    e.preventDefault();
    this.setState({
      isChangChu: false,
      isLoGin: false,
      isAdmin: true
    })
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedInFacebook: true,
      responseF: response,
      isChangChu: false,
      isLoGin: false,
      isAdmin: true
    })
  }
  componentClicked = () => {
    console.log("clicked");
  }


  render() { 
    let status = null;
    if(this.state.isChangChu) status = <TrangChu  isLoGin = {this.isLoGin} />
    else if(this.state.isLoGin) status =  
    <Login isAdmin = {this.isAdmin} 
    componentClicked = {this.componentClicked} 
    responseFacebook = {this.responseFacebook} 
    />;
    else if(this.state.isAdmin)  status =  <Admin responseF= {this.state.responseF} />;
    

    return (
      <div className="App">
       {status}
      </div>
      );
  }
}
 
export default App;

