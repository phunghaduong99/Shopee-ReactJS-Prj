import React, { Component } from 'react';
import TongQuan from './tongquan/tongquan';
import User from './quanlytaikhoan/user';
<<<<<<< Updated upstream

import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
import ChangePass from './quanlytaikhoan/changePass';
import {  Route } from 'react-router-dom';
>>>>>>> Stashed changes
class Content extends Component {
    state = { 
        onUser: false
     }
    onUser=(e)=>{
        e.preventDefault();
        this.setState({
            onUser:true
        });
    }
    render() { 
        return (
<<<<<<< Updated upstream
        //     <Router >
        //         <switch>
        //         <Route path="/admin/" component={TongQuan} exact/>
        //         <Route path="/admin/username"
        //              render={props =>
        //             <User {...props} onUser={this.onUser} />} 
        //         />
        //         </switch>
        //     </Router>
        <User/>
=======
                <div>
                    <Route exact path={this.props.match.url}
                        render={props =>
                        <TongQuan {...props}  />}  />
                    <Route exact path={`${this.props.match.url}/quanlytaikhoan`}
                        render={props =>
                        <User {...props} onUser={this.onUser} />}   />
                    <Route path={`${this.props.match.url}/quanlytaikhoan/changePass`}
                        render={props =>
                        <ChangePass {...props} />}   />
                </div>
        
>>>>>>> Stashed changes
          );
    }
}
 
export default Content;