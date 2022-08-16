import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitReposReducer from "./toolkitReposReducer";

const rootReducer = combineReducers({
    toolkit: toolkitReposReducer,
})

export const store = configureStore({
    reducer: rootReducer,

})