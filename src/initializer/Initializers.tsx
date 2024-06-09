import {CurrentPageInitializer} from "./CurrentPage";
import {DefaultPageController} from "./DefaultPageController";
import {TailwindUtilitesLoader} from "./TailwindUtilitesLoader";
import React from "react";
import {AxiosConfigure} from "./AxiosConfigure";

export const Initializers = () => {
    return <>
        <CurrentPageInitializer/>
        <AxiosConfigure/>
        <DefaultPageController/>
        <TailwindUtilitesLoader/>
    </>
}