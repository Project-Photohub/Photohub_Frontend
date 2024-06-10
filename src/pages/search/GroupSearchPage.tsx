import {RecommendAdd} from "../../component/body/RecommendAdd";
import {GroupComponent} from "../../component/body/group/GroupComponent";
import {PageBase} from "../PageBase";
import {PhotoCardComponent} from "../../component/body/photocard/PhotoCardComponent";

export const GroupSearchPage = () => {
    return (
        <PageBase>
            <GroupComponent/>
            <PhotoCardComponent/>
            <RecommendAdd/>
        </PageBase>
    )
}