import axios from "axios";
import {setRepos} from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "10") => {
    return async (dispatch) => {
        const response = await axios.get('https://api.github.com/search/repositories',
            //https://api.github.com/users/schacon/repos
            {
                params: {
                    q: searchQuery,
                    sort: "stars"
                }
            })
        dispatch(setRepos(response.data))
    }
}