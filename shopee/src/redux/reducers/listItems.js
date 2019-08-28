import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('listItems'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LIST_ITEMS:
            state = action.listItems
            localStorage.setItem('listItems', JSON.stringify(state));
            return [...state];

        case types.CHANGE_PRICE_ITEM:
            let newState = state;
            newState.map((c) => {
                if (c.itemid === action.itemid) {
                    c.price = action.price;
                }
                return c
            })
            state = newState;
            localStorage.setItem('listItems', JSON.stringify(state));
            return [...state];

        case types.ADD_ITEM:
            let listNew = state;
            listNew.map((c) => {
                if (c.itemid === action.itemIdAdded) {
                    c.isChosen = true;
                }
                return c
            })
            state = listNew;
            localStorage.setItem('listItems', JSON.stringify(state));
            return [...state];
        
            case types.DELETE_ITEM:
                    let listNew2 = state;
                    listNew2.map((c) => {
                        if (c.itemid === action.itemIdDeleted) {
                            c.isChosen = false;
                        }
                        return c
                    })
                    state = listNew2;
                    localStorage.setItem('listItems', JSON.stringify(state));
                    return [...state];

        case types.REMOVE_LIST_ITEMS:
            state = []
            localStorage.removeItem('listItems')
            return [...state];
        default: return state;
    }

}

export default myReducer;