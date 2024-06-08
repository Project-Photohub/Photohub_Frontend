import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {UnauthorizedErrorResolver} from "./resolver/UnauthorizedErrorResolver";
import {ErrorModal} from "./error/modal/ErrorModal";
import {ErrorResponseData} from "./ErrorResponseData";

export enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS"
}

export interface RequestFactoryProps {
    readonly method: HttpMethod,
    readonly uri: string
}

export const serverInfo = {

    PROTOCOL: "http" as const,

    HOSTNAME: "localhost" as const,
    PORT: 8080 as const,
    HOST: "localhost:8080" as const,
}

/**
 * HTTP 응답 중, 추가적이며 공통적인 에러 처리에 대한 로직(ex > 토큰 만료 등)을 분리해 재사용하기 위한 axios Wrapper
 *
 * @param config axios 모듈에 전달, request 객체
 */
export const RequestSender = (config: AxiosRequestConfig) => {
    axios.request(config)
        .then((response: AxiosResponse) => {
            return response;
        })
        .catch((response: AxiosResponse) => {
            switch (response.status) {
                /* case 401:
                    return UnauthorizedErrorResolver(config, response) */
                default:
                    return <ErrorModal statusCode={response.status} message={(response.data as ErrorResponseData).message}/>
            }
        })
}

function getServerBaseURL() {
    return serverInfo.PROTOCOL + "://" + serverInfo.HOST
}