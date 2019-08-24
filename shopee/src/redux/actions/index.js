import * as types from './../constants/ActionTypes'


export const saveToken = (token) =>{
    return {
        type: types.SAVE_TOKEN,
        token
    }
}
export const saveUserInfo = (userInfo) =>{
    return {
        type: types.SAVE_USER_INFO,
        userInfo
    }
}
export const saveListShop = (listShop) =>{
    return {
        type: types.SAVE_LIST_SHOP,
        listShop
    }
}

export const saveListItems = (listItems) =>{
    return {
        type: types.SAVE_LIST_ITEMS,
        listItems
    }
}



export const addItem = (itemIdAdded) =>{
    return {
        type: types.ADD_ITEM,
        itemIdAdded
    }
}
export const deleteItem = (itemIdDeleted) =>{
    return {
        type: types.DELETE_ITEM,
        itemIdDeleted
    }
}
export const saveListSearchItems = (listSearchItems) =>{
    return {
        type: types.SAVE_LIST_SEARCH_ITEMS,
        listSearchItems
    }
}
export const saveShopIdSelected = (shopIdSelected) =>{
    return {
        type: types.SAVE_SHOP_ID_SELECTED,
        shopIdSelected
    }
}
export const saveShopNameSelected = (shopNameSelected) =>{
    return {
        type: types.SAVE_SHOP_NAME_SELECTED,
        shopNameSelected
    }
}
export const saveItemIdSelected = (itemIdSelected) =>{
    return {
        type: types.SAVE_ITEM_ID_SELECTED,
        itemIdSelected
    }
}

export const changePriceItem = (itemid, price) =>{
    return {
        type: types.CHANGE_PRICE_ITEM,
        itemid: itemid,
        price:price
    }
}

export const saveListChosenItems = (listChosenItems) =>{
    return {
        type: types.SAVE_LIST_CHOSEN_ITEMS,
        listChosenItems
    }
}
export const addListChosenItem = (chosenItem) =>{
    return {
        type: types.ADD_LIST_CHOSEN_ITEM,
        chosenItem
    }
}

export const deleteListChosenItem = (itemId) =>{
    return {
        type: types.DELETE_LIST_CHOSEN_ITEM,
        itemId
    }
}

export const saveListRivalsItem = (listRivalsItem) =>{
    return {
        type: types.SAVE_LIST_RIVALS_ITEM,
        listRivalsItem
    }
}


export const saveListRivalsShop = (listRivalsShop) =>{
    return {
        type: types.SAVE_LIST_RIVALS_SHOP,
        listRivalsShop
    }
}
export const saveListRivalsShopFollowing = (listRivalsShopFollowing) =>{
    return {
        type: types.SAVE_LIST_RIVALS_SHOP_FOLLOWING,
        listRivalsShopFollowing
    }
}
export const deleteListRivalsShopFollowing = (itemId) =>{
    return {
        type: types.DELETE_LIST_RIVALS_SHOP_FOLLOWING,
        itemId
    }
}

export const chooseRivalsItem = (index) =>{
    return {
        type: types.CHOOSE_RIVALS_ITEM,
        index: index
 
    }
}



export const deleteRivalsItem = (index) =>{
    return {
        type: types.DELETE_RIVALS_ITEM,
        index
    }
}

export const addNumberRivalsChosenItem = (itemid) =>{
    return {
        type: types.ADD_NUMBER_RIVALS_CHOSEN_ITEM,
        itemid
    }
}
export const subtractNumberRivalsChosenItem = (itemid) =>{
    return {
        type: types.SUBTRACT_NUMBER_RIVALS_CHOSEN_ITEM,
        itemid
    }
}

export const followingItemSelected = (followingItemSelected) =>{
    return {
        type: types.Following_Item_Selected,
        followingItemSelected
    }
}


export const removeListItems = () =>{
    return {
        type: types.REMOVE_LIST_ITEMS,
    }
}
export const removeListRivalsItem = () =>{
    return {
        type: types.REMOVE_LIST_RIVALS_ITEM,
    }
}
export const removeListRivalsShop = () =>{
    return {
        type: types.REMOVE_LIST_RIVALS_SHOP,
    }
}
export const removeListRivalsShopFollowing  = () =>{
    return {
        type: types.REMOVE_LIST_RIVALS_SHOP_FOLLOWING,
    }
}
export const removeListChosenItems = () =>{
    return {
        type: types.REMOVE_LIST_CHOSEN_ITEMS,
    }
}

