import * as types from '../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('itemId_thongke'));
var initialState =data? data:  "";

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_ITEM_ID_THONGKE:
            state = action.itemId_thongke;
            sessionStorage.setItem('itemId_thongke' , JSON.stringify(state) );
            return state;

        default: return state;
    }
    
}

export default myReducer;