export class CurrentPage {

    private constructor() {
    }

    private static currentPage: string

    private static pageNames = ["popular", "latest", "group", "my", "random", "login", "signup", "other"]

    static isPageName(string: string): boolean {
        return this.pageNames.includes(string)
    }

    static getCurrentPage(): string {
        return this.currentPage
    }

    static initialCurrentPage(currentPage: string) {
        if (CurrentPage.currentPage != null || !CurrentPage.isPageName(currentPage)) {
            return
        }

        CurrentPage.currentPage = currentPage
    }
}

export const CurrentPageInitializer = () => {
    // eslint-disable-next-line no-restricted-globals
    const paths = location.href.split('/')

    paths.forEach((it) => {
        if (CurrentPage.isPageName(it)) {
            CurrentPage.initialCurrentPage(it)
            return <></>
        }
    })

    CurrentPage.initialCurrentPage("other")

    return <></>
}