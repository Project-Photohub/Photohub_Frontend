import {RecommendAdd} from "../../component/body/RecommendAdd";
import {GroupComponent} from "../../component/body/group/GroupComponent";
import {PageBase} from "../PageBase";
import {MockPhotoCards} from "../../component/body/photocard/MockPhotoCards";

export const GroupSearchPage = () => {
    return (
        <PageBase>
            <GroupComponent/>
            <MockPhotoCards/>
            <RecommendAdd/>
        </PageBase>
    )
}