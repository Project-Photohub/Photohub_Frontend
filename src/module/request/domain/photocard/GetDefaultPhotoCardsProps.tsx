import axios from "axios";
import {HttpMethod} from "../../ServerInfo";
import {PhotoCardListResponse} from "./PhotoCardResponse";
import {PhotoCardsProps} from "../../../../component/body/photocard/PhotoCards";
import {CurrentPage} from "../../../../initializer/CurrentPage";

export const GetDefaultPhotoCardsProps = async () => {
    const response =
        (await axios.request({
            method: HttpMethod.GET,
            url: `/photo-cards/${CurrentPage.getCurrentPage()}`,
        })).data as PhotoCardListResponse

    return {
        photoCardProps: response.photoCards
    } as unknown as PhotoCardsProps
}