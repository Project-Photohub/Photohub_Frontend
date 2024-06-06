import {RecommendAdd} from "../../component/body/RecommendAdd";
import {GroupComponent} from "../../component/body/group/GroupComponent";
import {PageBase} from "../PageBase";

export const GroupSearchPage = () => {
    return (
        <PageBase>
            <GroupComponent/>
            <RecommendAdd/>
        </PageBase>
    )
}