export interface MemberSelectionProps {
    id: number
    name: string
    nickname: string
    isSelected: boolean
}

export const MemberSelection = (props: MemberSelectionProps) => {
    return <div key={`group-${props.name}`}
        className={`${props.isSelected ? "bg-background-highlight" : "bg-background-hover hover:bg-background-highlight"} flex gap-[10px] rounded-[30px] h-[60px] pe-[20px] pl-[20px] pt-[10px] pb-[10px]`}>
        <p className={"font-p-regular text-text-subtext2 text-[32px]"}>{props.nickname}</p>
        <p className={"font-p-regular text-text-white text-[32px]"}>{props.name}</p>
    </div>
};