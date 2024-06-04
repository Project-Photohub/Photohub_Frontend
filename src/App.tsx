import React from 'react';
import {CurrentPageInitializer} from "./info/CurrentPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPageController} from "./info/DefaultPageController";
import {GroupSearchPage} from "./pages/GroupSearchPage";
import {DefaultSearchPage} from "./pages/DefaultSearchPage";

export const App = () => {
    return (
        <BrowserRouter>
            <CurrentPageInitializer/>
            <DefaultPageController/>
            <Routes>
                <Route path={"/search/group/*"} element={<GroupSearchPage/>}/>
                <Route path={"/search/*"} element={<DefaultSearchPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
