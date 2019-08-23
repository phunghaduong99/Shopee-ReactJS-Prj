import * as types from '../../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('listRivalsShop'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LIST_RIVALS_SHOP:
            state = action.listRivalsShop
            sessionStorage.setItem('listRivalsShop', JSON.stringify(state));
            return [...state];

        case types.REMOVE_LIST_RIVALS_SHOP:
            state = []
            sessionStorage.removeItem('listRivalsShop')
            return [...state];
        default: return state;
    }

}

export default myReducer;