import { combineReducers } from 'redux';
import token from './token';

const myReducer = combineReducers({
    token: token
});

export default myReducer;