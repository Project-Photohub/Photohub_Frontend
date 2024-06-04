export interface GroupSelectionProps {
    id: number
    name: string
    logo: string
    isSelected: boolean
}

export const GroupSelection = (props: GroupSelectionProps) => {
    return <div
        key={`group-${props.name}`}
        className={`${props.isSelected ? "bg-background-highlight" : "bg-background-hover hover:bg-background-highlight"} flex items-center gap-[10px] h-[70px] rounded-[30px] pe-[20px] pl-[20px] pt-[10px] pb-[10px] animated`}
        onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            const paths = location.href.split('/')

            const currentGroupAndMemberIdSize = paths[paths.length - 1].length + paths[paths.length - 2].length + 1

            // eslint-disable-next-line no-restricted-globals
            location.href = location.href.substring(0, location.href.length - currentGroupAndMemberIdSize) + props.id.toString() + "/1"
        }}>
        <img className={"h-[50px] w-[50px]"} src={props.logo} alt={props.name} height={"50px"} width={"50px"}/>
        <p className={"font-p-regular text-text-white text-[32px]"}>{props.name}</p>
    </div>
};