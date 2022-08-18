import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import _reposReducer from "./_reposReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: _reposReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))