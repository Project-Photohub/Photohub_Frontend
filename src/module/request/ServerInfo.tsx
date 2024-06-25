export enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS"
}

export const BASE_URL = import.meta.env.VITE_BASE_URL
export const FRONT_BASE_URL = import.meta.env.VITE_FRONT_BASE_URL

console.log(BASE_URL, " | ", FRONT_BASE_URL)