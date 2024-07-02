import Cookies from 'js-cookie'

const sessionIdKey = "SESSIONID"

export function setStorageSessionId(value: string) {
    window.localStorage.setItem(sessionIdKey, value)
}

export function getSessionIdInCookie() {
    return Cookies.get(sessionIdKey)
}

export function getSessionIdInStorage() {
    return window.localStorage.getItem(sessionIdKey)
}

export function deleteSessionId() {
    Cookies.remove(sessionIdKey)
    window.localStorage.removeItem(sessionIdKey)
}
