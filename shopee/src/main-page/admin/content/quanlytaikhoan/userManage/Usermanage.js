import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import User from './user';
import ChangePass from './changePass';


class Usermanage extends Component {

    render() {
        return (
            <div>
                <Route exact path={this.props.match.url}
                    render={props =>
                        <User  {...props} />} />

                <Route exact path={`${this.props.match.url}/changePass`}
                    render={props =>
                        <ChangePass {...props} />} />
                
            </div>
        );
    }
}

export default Usermanage;