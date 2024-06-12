import {SearchTypeSelectMark} from "./SearchTypeSelectMark";

export interface SearchTypeProps {
    readonly name: string
}

export const SearchType = (props: SearchTypeProps) => {
    return (
        <a href={`/search/${props.name.toLowerCase()}`}>
            <div
                id={`search-type-${props.name.toLowerCase()}`}
                className={"bg-header-default hover:bg-header-hover flex flex-col justify-between items-center h-[50px] rounded-[10px] pl-[20px] pe-[20px] animated"}>
                <SearchTypeSelectMark isInvisible={true}/>
                <p className={"font-p-semi-bold text-text-white text-[24px]"}>{props.name}</p>
                <SearchTypeSelectMark isInvisible={true}/>
            </div>
        </a>
    )
}