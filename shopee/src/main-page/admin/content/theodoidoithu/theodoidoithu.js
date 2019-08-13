import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import FollowCompetitor from './FollowCompetitor/FollowCompetitor';
import ItemsFollow from './ItemsFollow/ItemsFollow';
import AddProduct from './AddProduct/AddProduct';
import ItemsDetailAdd from './ItemsDetail/ItemsDetail';

class Theodoidoithu extends Component {
    state = {}
    render() {
        
        return (
            <div>
                <Route exact path={this.props.match.url}
                    render={props =>
                        <FollowCompetitor {...props} admin_url = {this.props.admin_url} />} />
                <Route path={`${this.props.match.url}/AddProduct`}
                    render={props =>
                        <AddProduct {...props} Theodoidoithu_url = {this.props.match} />} />
                <Route path={`${this.props.match.url}/itemsFollow`}
                    render={props =>
                        <ItemsFollow {...props}  Theodoidoithu_url = {this.props.match}/>} />
                <Route path={`${this.props.match.url}/itemsDetail`}
                    render={props =>
                        <ItemsDetailAdd {...props}  Theodoidoithu_url = {this.props.match}  />} />
            </div>
        );
    }
}

export default Theodoidoithu;