import {RecommendAdd} from "../../component/body/RecommendAdd";
import {AnchorGroupMemberSelectionComponent} from "../../component/body/group/AnchorGroupMemberSelectionComponent";
import {PageBase} from "../PageBase";
import {PhotoCardComponent} from "../../component/body/photocard/PhotoCardComponent";

export const GroupSearchPage = () => {
    return (
        <PageBase>
            <AnchorGroupMemberSelectionComponent/>
            <PhotoCardComponent/>
            <RecommendAdd/>
        </PageBase>
    )
}