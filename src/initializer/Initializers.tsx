import {CurrentPageInitializer} from "./CurrentPage";
import {DefaultPageController} from "./DefaultPageController";
import {TailwindUtilitesLoader} from "./TailwindUtilitesLoader";
import React from "react";

export const Initializers = () => {
    return [
        <CurrentPageInitializer key={"current-page-initializer"}/>,
        <DefaultPageController key={"default-page-controller"}/>,
        <TailwindUtilitesLoader key={"tailwind-utilities-loader"}/>
    ]
}