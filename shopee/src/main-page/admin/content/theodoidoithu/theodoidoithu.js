import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import FollowCompetitor from './FollowCompetitor/FollowCompetitor';
import ItemsFollow from './ItemsFollow/ItemsFollow';
import AddProduct from './AddProduct/AddProduct';
import { connect } from 'react-redux';
import NullShop from './../NullShop';
import NullListItems from './../NullListItems';

class Theodoidoithu extends Component {
    state = {}
    render() {
        let elelength= this.props.listShop.length;
        let eleListItems=this.props.listItems.length;
        let status;
        if(elelength === 0) {status = <Route exact path={this.props.match.url}
                                        render={props =>
                                        <NullShop {...props}/>} />}
        
        else { if(eleListItems===0){
            status = <Route exact path={this.props.match.url}
                                        render={props =>
                                        <NullListItems {...props}/>} />
             }
             else{status=<Route exact path={this.props.match.url}
                         render={props =>
                        <FollowCompetitor {...props} admin_url = {this.props.admin_url} />} />}
                         }
        return (
            <div>
                {status}
                <Route path={`${this.props.match.url}/AddProduct`}
                    render={props =>
                        <AddProduct {...props} Theodoidoithu_url = {this.props.match} />} />
                <Route path={`${this.props.match.url}/itemsFollow`}
                    render={props =>
                        <ItemsFollow {...props}  Theodoidoithu_url = {this.props.match}/>} />
                
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    console.log(state);
    return {
        listShop: state.listShop,
        listItems : state.listItems
    }
}

export default connect(mapStatetoProps, null)(Theodoidoithu);