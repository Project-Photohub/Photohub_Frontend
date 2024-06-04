import {SearchType} from "./SearchType";
import {useEffect} from "react";
import {CurrentPage} from "../../../info/CurrentPage";

export const SearchTypes = () => {

    useEffect(() => {
        const currentSelected = document.getElementById(
            `search-type-${CurrentPage.getCurrentPage()}`
        )

        if (currentSelected === undefined || currentSelected === null) {
            return
        }

        const bottomLine = currentSelected!.lastElementChild!

        bottomLine.classList.remove(`invisible`)
    })

    return (
        <div className={"flex flex-row gap-[20px]"}>
            <SearchType name={"Popular"}/>
            <SearchType name={"Latest"}/>
            <SearchType name={"Group"}/>
            <SearchType name={"My"}/>
            <SearchType name={"Random"}/>
        </div>
    )
}