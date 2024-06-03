import {SearchType} from "./SearchType";
import {useEffect} from "react";

export const SearchTypes = () => {

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        const paths = location.href.split('/')
        const currentSelected = document.getElementById(
            `search-type-${paths[paths.length - 1]}`
        );

        if (currentSelected === undefined || currentSelected === null) {
            return
        }

        const bottomLine = currentSelected!.lastElementChild!

        bottomLine.classList.remove(`invisible`)
    })

    return (
        <div className={"flex flex-row gap-[20px]"}>
            <SearchType name={"Popular"} goto={"asdf"}/>
            <SearchType name={"Latest"} goto={"asdf"}/>
            <SearchType name={"Group"} goto={"asdf"}/>
            <SearchType name={"My"} goto={"asdf"}/>
            <SearchType name={"Random"} goto={"asdf"}/>
        </div>
    )
}