import axios from "axios";
import {setIsFetching, setRepos} from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "A", currentPage, perPage) => {
    if (searchQuery === "")
    {
        searchQuery = "A"
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get('https://api.github.com/search/repositories',
            //https://api.github.com/users/schacon/repos
            {
                params: {
                    q: searchQuery,
                    sort: "stars",
                    per_page: perPage,
                    page: currentPage,
                }
            })
        dispatch(setRepos(response.data))
    }
}