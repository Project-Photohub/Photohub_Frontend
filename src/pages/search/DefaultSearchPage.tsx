import {RecommendAdd} from "../../component/body/RecommendAdd";
import {PageBase} from "../PageBase";
import {MockPhotoCards} from "../../component/body/photocard/MockPhotoCards";

export const DefaultSearchPage = () => {
    return (
        <PageBase>
            <MockPhotoCards/>
            <RecommendAdd/>
        </PageBase>
    )
}