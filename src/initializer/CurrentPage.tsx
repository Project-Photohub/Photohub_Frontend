export enum PageName {
    POPULAR = "popular",
    LATEST = "latest",
    GROUP = "group",
    RANDOM = "random",
    ADD = "add",
    ASK = "ask",
    OTHER = "other"
}

export class CurrentPage {

    private constructor() {
    }

    private static currentPage: PageName

    private static isInitialized: boolean = false;

    static getCurrentPage(): string {
        return this.currentPage
    }

    static isPageName(string: string): boolean {
        return string.toUpperCase() in PageName
    }

    static initialCurrentPage(currentPage: PageName) {
        if (this.isInitialized) {
            return
        }

        CurrentPage.currentPage = currentPage
        this.isInitialized = true
    }
}

export const CurrentPageInitializer = () => {
    // eslint-disable-next-line no-restricted-globals
    const paths = location.href.split('/')

    paths.forEach((it) => {
        if (CurrentPage.isPageName(it)) {
            CurrentPage.initialCurrentPage(it as PageName)
            return <></>
        }
    })

    CurrentPage.initialCurrentPage(PageName.OTHER)

    return <></>
}