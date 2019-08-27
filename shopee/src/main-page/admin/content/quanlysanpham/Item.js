import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ItemsDetail from './itemContent/ItemsDetail';
import Product from './itemContent/Product';
import { connect } from 'react-redux';
import NullShop from './../NullShop';

class Item extends Component {

    render() {
        let elelength= this.props.listShop.length;
        let status;
        if(elelength === 0) {status = <Route exact path={this.props.match.url}
        render={props =>
         <NullShop {...props}/>} />}
        
        else {status=<Route exact path={this.props.match.url}
        render={props =>
         <Product {...props}/>} />}
        return (
            <div>
                
                {status}
                <Route exact path={`${this.props.match.url}/itemsDetail/:id`}
                    render={props =>
                        <ItemsDetail {...props} quanlysanpham_url  = {this.props.match.url}/>} />
                
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
export default connect(mapStatetoProps, null)(Item);
