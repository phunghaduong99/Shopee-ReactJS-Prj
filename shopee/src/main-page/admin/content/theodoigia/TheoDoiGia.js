import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import NullShop from './../NullShop';
import NullListItems from './../NullListItems';
import FollowPrice from './muclucTheoDoiGia/danhsachsanpham/FollowPrice';
import ItemsInfo from './muclucTheoDoiGia/theodoigia/ItemsInfo';
import { connect } from 'react-redux';
class TheoDoiGia extends Component {
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
            else{ status=<Route exact path={this.props.match.url}
                         render={props =>
                        <FollowPrice {...props} admin_url = {this.props.admin_url} />} />}
                         }
        return (
            <div>
                {status}
                <Route path={`${this.props.match.url}/itemsInformation/:id`}
                    render={props =>
                        <ItemsInfo {...props} Theodoigia_url = {this.props.match} />} />
                
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        listShop: state.listShop,
        listItems : state.listItems
    }
}
export default connect(mapStatetoProps, null)(TheoDoiGia);