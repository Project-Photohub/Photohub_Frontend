import React from 'react';
import {Header} from "./component/header/Header";
import {RecommendAdd} from "./component/body/RecommendAdd";
import {GroupComponent} from "./component/body/group/GroupComponent";
import {CurrentPageInitializer} from "./info/CurrentPage";

export const App = () => {
    return (<div className={"flex flex-col gap-[50px]"}>
        <CurrentPageInitializer/>
        <Header/>
        <GroupComponent/>
        <RecommendAdd/>
    </div>);
}
