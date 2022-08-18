import React, {useEffect, useState} from 'react';
import './main.module.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {createPages} from "../../utils/pagesCreator";
import {Navigate, useNavigate} from "react-router-dom";
import {setCurrentPage} from "../../toolkitRedux/toolkitSliceReposReducer";
import styles from './main.module.less'

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.sliceRepos.items)
    const isFetching = useSelector(state => state.sliceRepos.isFetching)
    const currentPage = useSelector(state => state.sliceRepos.currentPage)
    const totalCount = useSelector(state => state.sliceRepos.totalCount)
    const perPage = useSelector(state => state.sliceRepos.perPage)
    const isFetchError = useSelector(state => state.sliceRepos.isFetchError)
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
            <div className={styles.search}>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text"
                       placeholder="input repo name" className={styles.searchInput}/>
                <button onClick={() => searchHandler()} className={styles.searchBtn}>Search</button>
            </div>
            {
                isFetching === false
                    ?
                    repos.map(repo =>
                        <Repo repo={repo} key={repo.id}/>)
                    :
                    <div className={styles.fetching}>

                    </div>
            }
            <div className={styles.pages}>
                {
                    pages.map((page, index) =>
                        <span
                            className={currentPage === page ? styles.currentPage : styles.page}
                            key={index}
                            onClick={()=> dispatch(setCurrentPage(page))}
                        >{page}</span>)
                }
            </div>
        </div>
    );
};

export default Main;