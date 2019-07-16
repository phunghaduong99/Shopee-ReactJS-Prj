import React, {Component} from 'react';
import FormLogin from './FormLogin';
import Register from './Register';
import './library/vendor/bootstrap/css/bootstrap.min.css';
import './library/fonts/iconic/css/material-design-iconic-font.min.css';
import './library/css/main.css';
import './library/css/util.css';

import './login.css';

class User extends Component {
    state={
        onRegister: false
    }

  onRegister=(event) =>{
    event.preventDefault();
    this.setState({onRegister:true})
  }
  
  onCancelRegister=(event)=>{
    event.preventDefault();
    this.setState({onRegister:false})
}
  render() { 
    let elmRe = null;
    if(this.state.onRegister ) elmRe =  <Register onCancelRegister={this.onCancelRegister}/>;
    else elmRe = <FormLogin onRegister = {this.onRegister} isAdmin = {this.props.isAdmin}/>;
      
    return (
        
      <div className="app">
        {elmRe}
      </div>
    );
  }
}

export default User;
