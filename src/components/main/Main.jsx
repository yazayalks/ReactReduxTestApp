import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
/*import {setCurrentPage} from "../../redux/reposReducer";*/
import {createPages} from "../../utils/pagesCreator";
import {Navigate, useNavigate} from "react-router-dom";
import {setCurrentPage} from "../../toolkitRedux/toolkitReposReducer";

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.toolkit.items)
    const isFetching = useSelector(state => state.toolkit.isFetching)
    const currentPage = useSelector(state => state.toolkit.currentPage)
    const totalCount = useSelector(state => state.toolkit.totalCount)
    const perPage = useSelector(state => state.toolkit.perPage)
    const isFetchError = useSelector(state => state.toolkit.isFetchError)
    const [searchValue, setSearchValue] = useState("")
    const pagesCount = Math.ceil(totalCount / perPage)

    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue))
    }


        if (isFetchError) {
            console.log("Navigate to error")
            return <Navigate to="/error"/>
        }



    return (
        <div>
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text"
                       placeholder="input repo name" className="search-input"/>
                <button onClick={() => searchHandler()} className="search-btn">Search</button>
            </div>
            {
                isFetching === false
                    ?
                    repos.map(repo =>
                        <Repo repo={repo} key={repo.id}/>)
                    :
                    <div className="fetching">

                    </div>
            }
            <div className="pages">
                {
                    pages.map((page, index) =>
                        <span
                            className={currentPage === page ? "current-page" : "page"}
                            key={index}
                            onClick={()=> dispatch(setCurrentPage(page))}
                        >{page}</span>)
                }
            </div>
        </div>
    );
};

export default Main;