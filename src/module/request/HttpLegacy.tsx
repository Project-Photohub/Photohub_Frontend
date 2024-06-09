// 코드 기록용 레거시, 사용되지 않음

import http from "node:http";

/*export*/ enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE",

    HEAD = "HEAD",
    OPTIONS = "OPTIONS"
}

/*export*/ enum HttpHeader {
    AUTHORIZATION = "Authorization",
    CONTENT_TYPE = "Content-Type",
    CONTENT_LENGTH = "Content-Length",
}

/*export*/ const ServerInfo = {

    PROTOCOL: "http" as const,

    HOSTNAME: "localhost" as const,
    PORT: 8080 as const,
    HOST: "localhost:8080" as const
}

/*export*/ const BASE_URL = ServerInfo.PROTOCOL + "://" + ServerInfo.HOST

/**
 * http 모듈보다 더 고수준에서 요청을 보내기 위한 모듈
 *
 * 주어진 Request에 추가적으로 기본 설정이 덧붙여짐
 *
 * @param request Request 정보
 */
/*export*/ const HttpJsonRequestSender = (request: HttpJsonRequest) => {
    let responseToReturn: http.IncomingMessage

    const sendAbleRequest = http.request({
            protocol: ServerInfo.PROTOCOL,
            host: ServerInfo.HOST,
            port: ServerInfo.PORT,
            method: request.method,

            path: request.path
        },
        (response) => {
            responseToReturn = response
        }
    )

    if (request.params !== undefined) {
        let queryString = "?"

        request.params.forEach((value, key) => {
            queryString += key + "=" + encodeURIComponent(value) + "&"
        })

        queryString = queryString.substring(0, queryString.length - 2)

        sendAbleRequest.path += queryString
    }

    sendAbleRequest.end(
        request.data
    )

    return responseToReturn!
}

/*export*/ interface HttpJsonRequest {
    method: HttpMethod
    path: string
    headers?: Map<string, string>
    params?: Map<string, string>
    data?: JSON
}