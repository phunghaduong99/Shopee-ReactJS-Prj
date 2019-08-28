import * as types from '../../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('listRivalsItem'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LIST_RIVALS_ITEM:
            state = action.listRivalsItem
           
            localStorage.setItem('listRivalsItem', JSON.stringify(state));
            return [...state];
        case types.CHOOSE_RIVALS_ITEM:
            let indexx = action.index;
            let newlist = state.map(
                (c, index) => {
                    if (index === indexx) {
                        c.isFollowing = true;
                    }
                    return c
                }
            );
            state = newlist;
           
            localStorage.setItem('listRivalsItem', JSON.stringify(state));
            return [...state];
        case types.DELETE_RIVALS_ITEM:
            let index3 = action.index;
            let newlist3 = state.map(
                (c, index) => {
                    if (index === index3) {
                        c.isFollowing = false;
                    }
                    return c
                }
            );
            state = newlist3;
          
            localStorage.setItem('listRivalsItem', JSON.stringify(state));
            return [...state];

        case types.REMOVE_LIST_RIVALS_ITEM:
            state = []
            localStorage.removeItem('listRivalsItem')
            return [...state];
        default: return state;
    }

}

export default myReducer;