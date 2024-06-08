import {AxiosRequestConfig, AxiosResponse} from "axios";
import {ErrorResponseData} from "../ErrorResponseData";

export const UnauthorizedErrorResolver = (
    request: AxiosRequestConfig,
    response: AxiosResponse
) => {
    const responseData = response.data as ErrorResponseData
    if (responseData.message === UnauthorizedErrorMessage.INVALID_TOKEN
        || responseData.message === UnauthorizedErrorMessage.EXPIRED_TOKEN) {
        // TODO("Auth..")
    }
}

const UnauthorizedErrorMessage = {
    INVALID_TOKEN: "Invalid token.",
    EXPIRED_TOKEN: "Expired token."
}
