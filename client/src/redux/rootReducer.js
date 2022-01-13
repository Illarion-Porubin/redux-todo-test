// корневой reduce в котором будут собираться все reduce

import { combineReducers } from "redux";

import { inputReducer } from "../redux/inputReducer";
import { appReducer } from "../redux/appReducer";
import { itemsReducer } from "../redux/itemsReducer";



// эта функция combineReducers объединяет 
// все редюсеры для компонентов


export const rootReducer = combineReducers({
    inputReducer,
    itemsReducer,
    appReducer
})