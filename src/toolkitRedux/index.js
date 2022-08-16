import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitReposReducer from "./toolkitReposReducer";

const rootReducer = combineReducers({
    toolkitRepos: toolkitReposReducer,
})

export const store = configureStore({
    reducer: rootReducer,

})