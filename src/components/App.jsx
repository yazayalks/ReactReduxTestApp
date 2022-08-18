import React from 'react';
import styles from"./app.module.less"
import {useDispatch} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/Error";

const App = () => {

    return (
        <BrowserRouter>
            <div className={styles.container}>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/card/:username/:repoName" element={<Card/>}/>
                    <Route path="/error" element={<Error/>}/>
                    <Route path="*" element={<Navigate to="/" replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;