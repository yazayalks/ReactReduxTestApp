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

export const getCurrentRepo = async (username, reponame, setRepo) => {
    console.log(username, reponame)
    const response = await axios.get('https://api.github.com/repos/' + username+ '/' + reponame)
    setRepo(response.data)
}

export const getContributors = async (username, reponame, setContributors) => {
    console.log(username, reponame)
    const response = await axios.get('https://api.github.com/repos/' + username+ '/' + reponame + '/contributors',
        {
            params: {
                page: 1,
                per_page: 10,
            }
        })
    setContributors(response.data)
}