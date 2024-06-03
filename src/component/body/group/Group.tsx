import {GroupSelection, GroupSelectionProps} from "./GroupSelection";
import {MemberSelection, MemberSelectionProps} from "./MemberSelection";

export interface GroupProps {
    groups: GroupSelectionProps[],
    currentGroupMembers: MemberSelectionProps[]
}

export const Group = (props: GroupProps) => {
    const groups: JSX.Element[] = []
    props.groups.forEach((it) => {
        groups.push(<GroupSelection key={`group-selection-${it.name}`} name={it.name} logo={it.logo}/>)
    })

    const members: JSX.Element[] = []
    props.currentGroupMembers.forEach((it) => {
        members.push(MemberSelection(it))
    })

    return (<div className={"flex flex-col gap-[20px] pl-[100px] pe-[100px]"}>
        <div className={"flex gap-[10px]"}>
            {groups}
        </div>
        <div className={"flex gap-[10px] pl-[50px] pe-[50px]"}>
            {members}
        </div>
    </div>)
}