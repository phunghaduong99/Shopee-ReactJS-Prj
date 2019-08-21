import * as types from '../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('listItems'));
var initialState =data? data:  [];

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SAVE_LIST_ITEMS:
            state = action.listItems
            sessionStorage.setItem('listItems' , JSON.stringify(state) );
            return [...state];
        case types.CHANGE_PRICE_ITEM:
                let newState = state;
                newState.map((c) =>{
                    if(c.itemid === action.itemid){
                        c.price = action.price;
                    }
                })
                return [...state];
        case types.REMOVE_LIST_ITEMS:
                state = []
                sessionStorage.removeItem('listItems')
                return [...state];
        default: return state;
    }
    
}

export default myReducer;