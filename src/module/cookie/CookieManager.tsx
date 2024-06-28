export function setCookie(key: string, value: string, exp: number) {
    const date = new Date()
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000)
    document.cookie = key + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
};

export function getCookie(key: string) {
    const value = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)')
    return value ? value[2] : null;
};

export function deleteCookie(key: string) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

const sessionIdCookieKey = "SESSIONID"

export function getSessionCookie() {
    return getCookie(sessionIdCookieKey)
}

export function deleteSessionCookie() {
    deleteCookie(sessionIdCookieKey)
}
