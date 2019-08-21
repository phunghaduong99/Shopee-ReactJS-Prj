import * as types from '../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('shopNameSelected'));
var initialState =data? data:  "";

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_SHOP_NAME_SELECTED:
            state = action.shopNameSelected;
            sessionStorage.setItem('shopNameSelected' , JSON.stringify(state) );
            return state;

        default: return state;
    }
    
}

export default myReducer;