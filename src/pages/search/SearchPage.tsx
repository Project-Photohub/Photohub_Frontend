import {RecommendAdd} from "../../component/body/RecommendAdd";
import {PageBase} from "../PageBase";
import {PhotoCardComponent} from "../../component/body/photocard/PhotoCardComponent";

export const SearchPage = () => {
    return (
        <PageBase>
            <PhotoCardComponent/>
            <RecommendAdd/>
        </PageBase>
    )
}