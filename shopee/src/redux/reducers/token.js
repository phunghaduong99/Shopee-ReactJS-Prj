import * as types from '../constants/ActionTypes';

// var data = JSON.parse(localStorage.getItem('token'));
var initialState =  [];

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_TOKEN:
            state.push(action.token) ;
            console.log(state);
            localStorage.setItem('token' , JSON.stringify(state) );
            return [...state];

        default: return state;
    }
    
}

export default myReducer;