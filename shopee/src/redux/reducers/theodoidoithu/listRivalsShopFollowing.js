import * as types from '../../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('listRivalsShopFollowing'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LIST_RIVALS_SHOP_FOLLOWING:
            state.push(action.listRivalsShopFollowing)
            sessionStorage.setItem('listRivalsShopFollowing', JSON.stringify(state));
            return [...state]

        case types.DELETE_LIST_RIVALS_SHOP_FOLLOWING:
            console.log(action)
            let itemid = action.itemId;
            let newListFollowing = state.filter((c) => c.itemid !== itemid);
            state = newListFollowing;
            sessionStorage.setItem('listRivalsShopFollowing', JSON.stringify(state));
            return [...state]

        case types.REMOVE_LIST_RIVALS_SHOP_FOLLOWING:
            state = []
            sessionStorage.removeItem('listRivalsShopFollowing')
            return [...state];
        default: return [...state];
    }

}

export default myReducer;