import * as types from '../../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('listChosenItems'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LIST_CHOSEN_ITEMS:
            state = action.listChosenItems
            sessionStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.ADD_LIST_CHOSEN_ITEM:
            state.push(action.chosenItem)
            sessionStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.ADD_NUMBER_RIVALS_CHOSEN_ITEM:
            let itemid = action.itemid;
            let newList = state;
            newList = newList.map((c) => {
                if (c.itemid === itemid) c.chosen = c.chosen + 1;
                return c
            })
            state = newList;
            sessionStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.SUBTRACT_NUMBER_RIVALS_CHOSEN_ITEM:
            let itemid2 = action.itemid;
            let newList2 = state;
            newList2 = newList2.map((c) => {
                if (c.itemid === itemid2) c.chosen = c.chosen - 1;
                return c
            })
            state = newList2;
            sessionStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        default: return state;
    }

}

export default myReducer;