// like recuer

import { INPUT_TEXT } from "./types";

const initialState = {
    text: ''
}


export const inputReducer = (state = initialState, action) => {
    console.log('comments reducer > ', action)
    
    switch(action.type) {
        case INPUT_TEXT:
            return {
                ...state, // через оператор ... разворачиваем и возвращаем новый state
                text: action.text
            }
        default:
            return state;
    }
}