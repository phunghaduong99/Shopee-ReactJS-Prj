import { combineReducers } from 'redux';
import token from './token';
import listShop from './listShop';
import shopIdSelected from './shopIdSelected';
import itemIdSelected from './itemIdSelected';
import listItems from './listItems';
import listSearchItems from './listSearchItems';

const myReducer = combineReducers({
    token: token,
    listShop: listShop,
    shopIdSelected: shopIdSelected,
    itemIdSelected: itemIdSelected,
    listItems: listItems,
    listSearchItems: listSearchItems
});

export default myReducer;