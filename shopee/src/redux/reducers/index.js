import { combineReducers } from 'redux';
import token from './token';
import listShop from './listShop';

const myReducer = combineReducers({
    token: token,
    listShop: listShop
});

export default myReducer;