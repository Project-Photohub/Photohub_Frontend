import {RecommendAdd} from "../../component/body/RecommendAdd";
import {GroupComponent} from "../../component/body/group/GroupComponent";
import {PageBase} from "../PageBase";
import {MemberPhotoCardComponent} from "../../component/body/photocard/MemberPhotoCardComponent";

export const GroupSearchPage = () => {
    return (
        <PageBase>
            <GroupComponent/>
            <MemberPhotoCardComponent/>
            <RecommendAdd/>
        </PageBase>
    )
}