import {CurrentPage} from "./CurrentPage";

export const DefaultPageController = () => {
    if (CurrentPage.getCurrentPage() == "home") {
        // eslint-disable-next-line no-restricted-globals
        location.href = "/search/popular"
    } else if (CurrentPage.getCurrentPage() == "group") {
        // eslint-disable-next-line no-restricted-globals
        if (location.href.endsWith("/group")) {
            // eslint-disable-next-line no-restricted-globals
            location.href = location.href + "/1/1"
        }
    }

    return <></>
}