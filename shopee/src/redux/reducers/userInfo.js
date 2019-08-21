import * as types from '../constants/ActionTypes';

var data3 = sessionStorage.getItem('userInfo');
var data;
if(data3 !== undefined)  data = JSON.parse(data3)
var initialState =data? data:  {};

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SAVE_USER_INFO:
            state = action.userInfo;
            sessionStorage.setItem('userInfo' , JSON.stringify(state) );
            return state;
        default: return state;
    }
    
}

export default myReducer;