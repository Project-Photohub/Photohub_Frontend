export interface MemberSelectionProps {
    id: number
    name: string
    nickname: string
    selectedMemberId: number,
    setSelectedMemberId: (value: number) => void
}

export const MemberSelection = (props: MemberSelectionProps) => {
    return <div
        className={`${props.selectedMemberId === props.id ? "bg-background-highlight" : "bg-background-hover hover:bg-background-highlight"} flex items-center gap-[10px] w-max h-[60px] rounded-[30px] pe-[20px] pl-[20px] pt-[10px] pb-[10px] animated`}
        onClick={() => {
            props.setSelectedMemberId(props.id)
        }}>
        {
            props.nickname &&
            <p className={"font-preahvihear text-text-subtext2 text-[32px]"}>{props.nickname}</p>
        }
        <p className={"font-p-regular text-text-white text-[32px]"}>{props.name}</p>
    </div>
};