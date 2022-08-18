import {createSlice} from "@reduxjs/toolkit";



const sliceReposReducer = createSlice({
    name: 'toolkit',
    initialState: {
        items: [],
        isFetching: true,
        count: 0,
        perPage: 10,
        totalCount: 0,
        currentPage: 1,
        isFetchError: false,
    },
    reducers: {
        setRepos(state, action) {
            state.items = action.payload.items;
            state.totalCount = action.payload.total_count;
            state.isFetching = false;
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFetchError(state, action) {
            state.isFetchError = action.payload
        }
    },

})

export default sliceReposReducer.reducer
export const {setRepos,setIsFetching,setCurrentPage, setFetchError} = sliceReposReducer.actions