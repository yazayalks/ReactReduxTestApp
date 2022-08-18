import React from 'react';
import styles from './repo.module.less'
import {Link, NavLink} from "react-router-dom";
const Repo = (props) => {
    const repo = props.repo
/*    console.log(repo.owner.login, repo.name)*/
    return (
        <div className={styles.repo}>
        <div className={styles.repoHeader}>
            <div className={styles.repoHeaderName}>
                <Link
                    to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}
                </Link>
                </div>

            <div className={styles.repoHeaderStars}>{repo.stargazers_count}</div>
        </div>
            <div className={styles.repoLastCommit}>{repo.updated_at}</div>
            <div>Ссылка на репозиторий:
                <a href={repo.html_url} className={styles.repoLink}>{repo.html_url}</a>
            </div>
        </div>
    );
};

export default Repo;