import { combineReducers } from 'redux';
import token from './token';
import listShop from './listShop';
import shopIdSelected from './shopIdSelected';
import shopNameSelected from './shopNameSelected';

import itemIdSelected from './itemIdSelected';


import listItems from './listItems';
import listSearchItems from './listSearchItems';
import userInfo from './userInfo';

import listRivalsShop from './theodoidoithu/listRivalsShop';
import listRivalsItem from './theodoidoithu/listRivalsItem';

import listRivalsShopFollowing from './theodoidoithu/listRivalsShopFollowing'
const myReducer = combineReducers({
    token: token,
    listShop: listShop,
    shopIdSelected: shopIdSelected,
    shopNameSelected: shopNameSelected,
    itemIdSelected: itemIdSelected,
    listItems: listItems,
    listSearchItems: listSearchItems,
    userInfo: userInfo,

    listRivalsShop: listRivalsShop,
    listRivalsItem: listRivalsItem,

    listRivalsShopFollowing: listRivalsShopFollowing
});

export default myReducer;