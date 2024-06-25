export enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS"
}

let BASE_URL_STORAGE: string = ""
let FRONT_BASE_URL_STORAGE: string = ""

if (import.meta.env.VITE_ENVIRONMENT == "prod") {
    BASE_URL_STORAGE = import.meta.env.VITE_BASE_URL
    FRONT_BASE_URL_STORAGE = import.meta.env.VITE_FRONT_BASE_URL
} else if (import.meta.env.VITE_ENVIRONMENT == "stag") {
    BASE_URL_STORAGE = import.meta.env.VITE_STAG_BASE_URL
    FRONT_BASE_URL_STORAGE = import.meta.env.VITE_FRONT_STAG_BASE_URL
}

export const BASE_URL = BASE_URL_STORAGE
export const FRONT_BASE_URL = FRONT_BASE_URL_STORAGE

console.log(BASE_URL, " | ", FRONT_BASE_URL)