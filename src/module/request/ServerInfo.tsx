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

    PROTOCOL: "https" as const,

    HOSTNAME: "photohub-backend-stag.xquare.app" as const,
    PORT: 8080 as const,
    HOST: "photohub-backend-stag.xquare.app" as const,

    FRONT_HOST: "photohub-stag.xquare.app" as const,
}

export const BASE_URL = ServerInfo.PROTOCOL + "://" + ServerInfo.HOST
export const FRONT_BASE_URL = ServerInfo.PROTOCOL + "://" + ServerInfo.FRONT_HOST