export interface MemberSelectionProps {
    id: number
    name: string
    nickname: string
    isSelected: boolean
}

export const MemberSelection = (props: MemberSelectionProps) => {
    return <div
        key={`group-${props.name}`}
        className={`${props.isSelected ? "bg-background-highlight" : "bg-background-hover hover:bg-background-highlight"} flex gap-[10px] items-center rounded-[30px] w-max h-[60px] pe-[20px] pl-[20px] pt-[10px] pb-[10px] animated`}
        onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            const paths = location.href.split('/')

            const currentMemberIdSize = paths[paths.length - 1].length

            // eslint-disable-next-line no-restricted-globals
            location.href = location.href.substring(0, location.href.length - currentMemberIdSize) + props.id.toString()
        }}>
        <p className={"font-preahvihear text-text-subtext2 text-[32px]"}>{props.nickname}</p>
        <p className={"font-p-regular text-text-white text-[32px]"}>{props.name}</p>
    </div>
};