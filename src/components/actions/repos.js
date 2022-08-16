import axios from "axios";
import {setFetchError, setIsFetching, setRepos} from "../../reducers/reposReducer";

const baseUrl = 'https://api.github.com/'
const instance = axios.create({

})

export const getRepos = (searchQuery = "A", currentPage, perPage) => {
    if (searchQuery === "")
    {
        searchQuery = "A"
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await instance.get(baseUrl + 'search/repositories',
                {
                    params: {
                        q: searchQuery,
                        sort: "stars",
                        per_page: perPage,
                        page: currentPage,
                    }
                })
            dispatch(setRepos(response.data))
        } catch (e) {
            console.log("Error")
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
        }

    }
}

export const getCurrentRepo = async (username, repoName, setRepo) => {
    console.log(username, repoName)
    const response = await instance.get(baseUrl + 'repos/' + username+ '/' + repoName)
    setRepo(response.data)
}

export const getContributors = async (username, repoName, setContributors) => {
    console.log(username, repoName)
    const response = await instance.get(baseUrl + 'repos/' + username+ '/' + repoName + '/contributors',
        {
            params: {
                page: 1,
                per_page: 10,
            }
        })
    setContributors(response.data)
}