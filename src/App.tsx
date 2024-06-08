import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Initializers} from "./initializer/Initializers";
import {DispatcherRouter} from "./pages/DispatcherRouter";

export const App = () => {
    return (
        <BrowserRouter>

            <Initializers/>

            <DispatcherRouter/>

        </BrowserRouter>
    );
}
