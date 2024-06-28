import Cookies from 'js-cookie'

const sessionIdKey = "SESSIONID"

export function setSessionId(value: string) {
    window.localStorage.setItem(sessionIdKey, value)
}

export function getSessionId() {
    return Cookies.get(sessionIdKey)
}

export function deleteSessionId() {
    Cookies.remove(sessionIdKey)
}
