import * as types from './../constants/ActionTypes'


export const saveToken = (token) =>{
    return {
        type: types.SAVE_TOKEN,
        token
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
export const saveShopIdSelected = (shopIdSelected) =>{
    return {
        type: types.SAVE_SHOP_ID_SELECTED,
        shopIdSelected
    }
}