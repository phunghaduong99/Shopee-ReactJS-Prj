import { combineReducers } from 'redux';
import token from './token';
import listShop from './listShop';
import shopIdSelected from './shopIdSelected';
import shopNameSelected from './shopNameSelected';

import itemIdSelected from './itemIdSelected';


import listItems from './listItems';
import listSearchItems from './listSearchItems';
import userInfo from './userInfo';

import listChosenItems from './chosenItems/listChosenItems';

import listRivalsShop from './theodoidoithu/listRivalsShop';
import listRivalsItem from './theodoidoithu/listRivalsItem';

import followingItemSelected from './chosenItems/followingItemSelected';

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

    listChosenItems: listChosenItems,

    listRivalsShop: listRivalsShop,
    listRivalsItem: listRivalsItem,
    followingItemSelected: followingItemSelected,
    listRivalsShopFollowing: listRivalsShopFollowing
});

export default myReducer;