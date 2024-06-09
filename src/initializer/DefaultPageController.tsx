import {CurrentPage} from "./CurrentPage";

export const DefaultPageController = () => {
    if (CurrentPage.getCurrentPage() === "other") {
        // eslint-disable-next-line no-restricted-globals
        location.href = "/search/popular"
    }

    return <></>
}