import {Header} from "../component/header/Header";
import {RecommendAdd} from "../component/body/RecommendAdd";
import {GroupComponent} from "../component/body/group/GroupComponent";

export const GroupSearchPage = () => {
    return (
        <div className={"flex flex-col gap-[50px]"}>
            <Header/>
            <GroupComponent/>
            <RecommendAdd/>
        </div>
    )
}