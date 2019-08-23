import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NullShop from './../NullShop';
import FollowPrice from './muclucTheoDoiGia/danhsachsanpham/FollowPrice';
import ItemsInfo from './muclucTheoDoiGia/theodoigia/ItemsInfo';

class TheoDoiGia extends Component {
    state = {}
    render() {
        let elelength= this.props.listShop.length;
        let status;
        if(elelength === 0) {status = <Route exact path={this.props.match.url}
                                        render={props =>
                                        <NullShop {...props}/>} />}
        
        else {status=<Route exact path={this.props.match.url}
                         render={props =>
                        <FollowPrice {...props} admin_url = {this.props.admin_url} />} />}
        return (
            <div>
                {status}
                <Route path={`${this.props.match.url}/thongtinsanpham`}
                    render={props =>
                        <ItemsInfo {...props} Theodoigia_url = {this.props.match} />} />
                
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    console.log(state);
    return {
        listShop: state.listShop
    }
}

export default connect(mapStatetoProps, null)(TheoDoiGia);