import { combineReducers } from "@reduxjs/toolkit";
import mainReducer from './mainReducer'
export const reducer = combineReducers({
    main: mainReducer,
})