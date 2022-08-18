import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitReposReducer from "./_toolkitReposReducer";
import sliceReposReducer from './toolkitSliceReposReducer'

const rootReducer = combineReducers({
    sliceRepos: sliceReposReducer
})

export const store = configureStore({
    reducer: rootReducer,

})