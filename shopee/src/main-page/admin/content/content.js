import React, { Component } from 'react';
import TongQuan from './tongquan/tongquan';
import User from './quanlytaikhoan/user';

import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          );
    }
}
 
export default Content;