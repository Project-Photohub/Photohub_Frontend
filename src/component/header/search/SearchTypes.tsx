import {SearchType} from "./SearchType";

export const SearchTypes = () => {

    const ael = () => {
        document.addEventListener('DOMContentLoaded', markSelectedSearchType);

        return <></>
    }

    const markSelectedSearchType = () => {

        // eslint-disable-next-line no-restricted-globals
        const paths = location.href.split('/')

        const endPoint = paths[paths.length - 1]

        const currentSelected = document.getElementById(
            `search-type-${endPoint.substring(0, endPoint.length - 5)}`
        );

        console.log(`search-type-${endPoint.substring(0, endPoint.length - 5)}`)

        if (currentSelected === undefined || currentSelected === null) {
            console.log("sf")
            return
        }

        const bottomLine = currentSelected!.lastElementChild!

        bottomLine.classList.remove("invisible")

        console.log(bottomLine.classList)
    }

    return (
        <div className={"flex flex-row gap-[20px]"}>
            <SearchType name={"Popular"} goto={"asdf"}/>
            <SearchType name={"Latest"} goto={"asdf"}/>
            <SearchType name={"Group"} goto={"asdf"}/>
            <SearchType name={"My"} goto={"asdf"}/>
            <SearchType name={"Random"} goto={"asdf"}/>
            {ael()}
        </div>
    )
}