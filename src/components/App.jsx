import React from 'react';
import "./app.less"
import {useDispatch} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Main from "./main/Main";
import Card from "./card/card";

const App = () => {
    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/card/:username/:reponame" element={<Card/>}/>
                    <Route path="*" element={<Navigate to="/" replace />}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
};

export default App;