import * as types from './../constants/ActionTypes'


export const saveToken = (token) =>{
    return {
        type: types.SAVE_TOKEN,
        token
    }
}