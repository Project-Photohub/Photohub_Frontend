import {CurrentPageInitializer} from "./CurrentPage";
import {DefaultPageController} from "./DefaultPageController";
import {TailwindUtilitesLoader} from "./TailwindUtilitesLoader";
import React from "react";

export const Initializers = () => {
    return <>
        <CurrentPageInitializer/>
        <DefaultPageController/>
        <TailwindUtilitesLoader/>
    </>
}