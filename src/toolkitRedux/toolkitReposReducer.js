import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isFetching: true,
    count: 0,
    perPage: 10,
    totalCount: 0,
    currentPage: 1,
    isFetchError: false,
}

export const setRepos = createAction('SET_REPOS')
export const setIsFetching = createAction('SET_IS_FETCHING')
export const setCurrentPage = createAction('SET_CURRENT_PAGE')
export const setFetchError = createAction('SET_FETCH_ERROR')

export default createReducer(initialState, {
    [setRepos]: (state, action) => {
        state.items = action.payload.items;
        state.totalCount = action.payload.total_count;
        state.isFetching = false;
    },
    [setIsFetching]: (state, action) => {
        state.isFetching = action.payload;
    },
    [setCurrentPage]: (state, action) => {
        state.currentPage = action.payload;
    },
    [setFetchError]: (state, action) => {
        state.isFetchError = action.payload;
    },
})

