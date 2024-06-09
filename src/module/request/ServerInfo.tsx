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

    HOSTNAME: "localhost" as const,
    PORT: 8080 as const,
    HOST: "localhost:8080" as const,
}

export const BASE_URL = ServerInfo.PROTOCOL + "://" + ServerInfo.HOST