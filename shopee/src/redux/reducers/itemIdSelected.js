import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('itemIdSelected'));
var initialState =data? data:  "";

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_ITEM_ID_SELECTED:
            state = action.itemIdSelected;
            localStorage.setItem('itemIdSelected' , JSON.stringify(state) );
            return state;

        default: return state;
    }
    
}

export default myReducer;