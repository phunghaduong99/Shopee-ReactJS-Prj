import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Shopmanage from './Shopmanage';
import ContactShopee from './ContactShopee';


class ShopContent extends Component {

    render() {
        return (
            <div>
                <Route exact path={this.props.match.url}
                    render={props =>
                        <Shopmanage  {...props} />} />

                <Route exact path={`${this.props.match.url}/ContactShopee`}
                    render={props =>
                        <ContactShopee {...props} />} />
                
            </div>
        );
    }
}

export default ShopContent;