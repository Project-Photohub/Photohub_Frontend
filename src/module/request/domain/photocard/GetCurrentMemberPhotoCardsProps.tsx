import axios from "axios";
import {HttpMethod} from "../../ServerInfo";
import {PhotoCardListResponse} from "./PhotoCardResponse";
import {PhotoCardsProps} from "../../../../component/body/photocard/PhotoCards";

export const GetCurrentMemberPhotoCardsProps = async () => {

    // eslint-disable-next-line no-restricted-globals
    const paths = location.href.split("/")

    // /search/group/{groupId}/{memberId}
    // eslint-disable-next-line no-restricted-globals
    const currentMemberId = paths[paths.length - 1]

    const response =
        (await axios.request({
            method: HttpMethod.GET,
            url: `/photo-cards/member/${currentMemberId}`,
        })).data as PhotoCardListResponse

    return {
        photoCardProps: response.photoCards
    } as unknown as PhotoCardsProps
}