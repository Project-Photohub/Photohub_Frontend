export interface GroupSelectionProps {
    id: number
    name: string
    logo: string
    selectedGroupId: number
    setSelectedGroupId: (value: number) => void
    callGroupClickEvent: (groupId: number) => void
}

export const GroupSelection = (props: GroupSelectionProps) => {
    return <div
        key={`group-${props.id}`}
        className={`${props.selectedGroupId === props.id ? "bg-background-highlight" : "bg-background-hover hover:bg-background-highlight"} flex items-center gap-[10px] w-max h-[70px] rounded-[30px] pe-[20px] pl-[20px] pt-[10px] pb-[10px] animated`}
        onClick={() => {
            props.callGroupClickEvent(props.id)
            props.setSelectedGroupId(props.id)
        }}>
        <img className={"h-[50px] w-[50px] rounded-[10px] object-contain"} src={props.logo} alt={props.name} height={"50px"} width={"50px"}/>
        <p className={"font-preahvihear text-text-white text-[32px]"}>{props.name}</p>
    </div>
};