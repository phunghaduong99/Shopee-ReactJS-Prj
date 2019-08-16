import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ItemsDetail from './itemContent/ItemsDetail';
import Product from './itemContent/Product';


class Item extends Component {

    render() {
        return (
            <div>
                <Route exact path={this.props.match.url}
                    render={props =>
                        <Product {...props} />} />

                <Route exact path={`${this.props.match.url}/itemsDetail`}
                    render={props =>
                        <ItemsDetail {...props} />} />
                
            </div>
        );
    }
}

export default Item;