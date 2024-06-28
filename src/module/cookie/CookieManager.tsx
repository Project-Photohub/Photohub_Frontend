import Cookies from 'js-cookie'

const sessionIdCookieKey = "SESSIONID"

export function getSessionCookie() {
    return Cookies.get(sessionIdCookieKey)
}

export function deleteSessionCookie() {
    Cookies.remove(sessionIdCookieKey)
}
