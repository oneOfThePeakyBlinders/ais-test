import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="App">
            <div className="">
                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'/main'} element={<Main/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
