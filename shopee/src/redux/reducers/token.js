import * as types from '../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('token'));
var initialState =data? data:  "";

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_TOKEN:
            state = action.token;
            console.log(state);
            sessionStorage.setItem('token' , JSON.stringify(state) );
            return [...state];

        default: return state;
    }
    
}

export default myReducer;