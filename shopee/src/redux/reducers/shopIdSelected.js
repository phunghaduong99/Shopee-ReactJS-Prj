import * as types from '../constants/ActionTypes';

// var data = JSON.parse(localStorage.getItem('token'));
var initialState =  "";

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_SHOP_ID_SELECTED:
            state = action.shopIdSelected;
            return state;

        default: return state;
    }
    
}

export default myReducer;