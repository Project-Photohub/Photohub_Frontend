import React from 'react';
import {CurrentPageInitializer} from "./initializer/CurrentPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultPageController} from "./initializer/DefaultPageController";
import {GroupSearchPage} from "./pages/GroupSearchPage";
import {DefaultSearchPage} from "./pages/DefaultSearchPage";
import {TailwindUtilitesLoader} from "./initializer/TailwindUtilitesLoader";

export const App = () => {
    return (
        <BrowserRouter>
            <CurrentPageInitializer/>
            <DefaultPageController/>
            <TailwindUtilitesLoader/>
            <Routes>
                <Route path={"/search/group/*"} element={<GroupSearchPage/>}/>
                <Route path={"/search/*"} element={<DefaultSearchPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
