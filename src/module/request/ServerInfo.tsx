export enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS"
}

export const ServerInfo = {

    PROTOCOL: "http" as const,

    HOSTNAME: "photohub-backend-stag.xquare.app" as const,
    PORT: 8080 as const,
    HOST: "photohub-backend-stag.xquare.app" as const,
}

export const BASE_URL = ServerInfo.PROTOCOL + "://" + ServerInfo.HOST