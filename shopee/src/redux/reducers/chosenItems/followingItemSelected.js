import * as types from '../../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('followingItemSelected'));
var initialState =data? data:  "";

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.Following_Item_Selected:
            state = action.followingItemSelected;
            sessionStorage.setItem('followingItemSelected' , JSON.stringify(state) );
            return state;

        default: return state;
    }
    
}

export default myReducer;