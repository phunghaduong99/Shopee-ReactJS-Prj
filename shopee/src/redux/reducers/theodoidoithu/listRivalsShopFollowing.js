import * as types from '../../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('listRivalsShopFollowing'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LIST_RIVALS_SHOP_FOLLOWING:
            state.push(action.listRivalsShopFollowing)
            localStorage.setItem('listRivalsShopFollowing', JSON.stringify(state));
            return [...state]

        case types.DELETE_LIST_RIVALS_SHOP_FOLLOWING:
            let itemid = action.itemId;
            let newListFollowing = state.filter((c) => c.itemid !== itemid);
            state = newListFollowing;
            localStorage.setItem('listRivalsShopFollowing', JSON.stringify(state));
            return [...state]

        case types.REMOVE_LIST_RIVALS_SHOP_FOLLOWING:
            state = []
            localStorage.removeItem('listRivalsShopFollowing')
            return [...state];
        default: return [...state];
    }

}

export default myReducer;