export interface MemberSelectionProps {
    name: string
    nickname: string,
}

export const MemberSelection = (props: MemberSelectionProps) => {
    return <div className="bg-background-hover flex gap-[10px] rounded-[30px] h-[60px] p-[10px]">
       <p className={"font-p-regular text-text-subtext2 text-[32px]"}>{props.nickname}</p>
       <p className={"font-p-regular text-text-white text-[32px]"}>{props.name}</p>
    </div>
};