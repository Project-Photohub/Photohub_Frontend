export interface SearchTypeSelectMarkProps {
    isInvisible: boolean
}

export const SearchTypeSelectMark = (props: SearchTypeSelectMarkProps) => {
    return <div className={`w-full bg-text-white h-[1px] ${props.isInvisible ? "invisible" : ""}`}></div>
}