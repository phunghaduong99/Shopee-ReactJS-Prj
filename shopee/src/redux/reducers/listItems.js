import * as types from '../constants/ActionTypes';

// var data = JSON.parse(localStorage.getItem('token'));
var initialState =  [];

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SAVE_LIST_ITEMS:
            state = action.listItems
            return [...state];
        case types.CHANGE_PRICE_ITEM:
                let newState = state;
                newState.map((c) =>{
                    if(c.itemid === action.itemid){
                        c.price = action.price;
                    }
                })
                return [...state];
            console.log(action)
        default: return state;
    }
    
}

export default myReducer;