import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const Error = (props) => {
    const navigate = useNavigate()
    const goMain = () => {
        navigate("/")
    }
    return (
        <div style={{textAlign: "center"}}>
            <button onClick={goMain}>GO TO MAIN PAGE</button>
            ERROR
        </div>
    );
};

export default Error;