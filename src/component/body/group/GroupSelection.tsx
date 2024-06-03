export interface GroupSelectionProps {
    name: string
    logo: string,
}

export const GroupSelection = (props: GroupSelectionProps) => {
    return <div className="bg-background-hover flex items-center gap-[10px] h-[70px] rounded-[30px] pe-[20px] pl-[20px] pt-[10px] pb-[10px]">
        <img className={"h-[50px] w-[50px]"} src={props.logo} alt={props.name} height={"50px"} width={"50px"}/>
        <p className={"font-p-regular text-text-white text-[32px]"}>{props.name}</p>
    </div>
};