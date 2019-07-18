import React, {Component} from 'react';
import './main-page.css';
import TrangChu from './trang-chu/index';
import Login from './login/index';
import Admin from './admin/index';
class App extends Component {
  state = {
    isChangChu: true,
    isLoGin: false,
    isAdmin: false
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
  render() { 
    let status = null;
    if(this.state.isChangChu) status = <TrangChu  isLoGin = {this.isLoGin}/>
    else if(this.state.isLoGin) status =  <Login isAdmin = {this.isAdmin} />;
    else if(this.state.isAdmin)  status =  <Admin />;
    

    return (
      <div className="App">
       {status}
      </div>
      );
  }
}
 
export default App;

