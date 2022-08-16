import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../actions/repos";
import './card.less'
const Card = (props) => {
    const navigate = useNavigate()
    const {username, repoName} = useParams()
    const [repo, setRepo] = useState({owner:{}})
    const [contributors, setContributors] = useState([])
    useEffect(()=>{
        getCurrentRepo(username, repoName, setRepo)
        getContributors(username, repoName, setContributors)
    }, [])
    console.log(username, repoName)
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={goBack} className="back-btn">BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt=""/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) =>
                <div>{index + 1}. {c.login}</div>
            )}
        </div>
    );
};

export default Card;