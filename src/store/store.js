import { configureStore } from "@reduxjs/toolkit";
import  cityReducer  from './reducers/cityReducers.js'
import userReducer from "./reducers/userReducer.js";


export const store = configureStore({
    reducer: {
        cityReducer: cityReducer,
        userReducer: userReducer
    }
})