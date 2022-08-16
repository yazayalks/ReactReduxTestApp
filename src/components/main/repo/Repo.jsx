import React from 'react';
import './repo.less'
import {Link, NavLink} from "react-router-dom";
const Repo = (props) => {
    const repo = props.repo
/*    console.log(repo.owner.login, repo.name)*/
    return (
        <div className="repo">
        <div className="repo-header">
            <div className="repo-header-name">
                <Link
                    to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}
                </Link>
                </div>

            <div className="repo-header-stars">{repo.stargazers_count}</div>
        </div>
            <div className="repo-last-commit">{repo.updated_at}</div>
            <div>Ссылка на репозиторий: <a href={repo.html_url} className="repo-link">{repo.html_url}</a></div>
        </div>
    );
};

export default Repo;