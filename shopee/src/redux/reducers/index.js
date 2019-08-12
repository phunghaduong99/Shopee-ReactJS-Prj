import { combineReducers } from 'redux';
import token from './token';
import listShop from './listShop';
import shopIdSelected from './shopIdSelected';
import listItems from './listItems';

const myReducer = combineReducers({
    token: token,
    listShop: listShop,
    shopIdSelected: shopIdSelected,
    listItems: listItems
});

export default myReducer;