import {GroupSelection} from "./GroupSelection";
import {MemberSelection} from "./MemberSelection";

export interface GroupProps {
    groups: GroupInfo[],
    currentGroupId: number,
    currentGroupMembers: MemberInfo[]
    currentMemberId: number,
}

export interface GroupInfo {
    id: number,
    name: string,
    logo: string
}

export interface MemberInfo {
    id: number,
    name: string,
    nickname: string
}

export const Group = (props: GroupProps) => {
    const groups: JSX.Element[] = []
    props.groups.forEach((it) => {
        groups.push(
            <GroupSelection id={it.id} name={it.name} logo={it.logo}
                            isSelected={props.currentGroupId === it.id}/>
        )
    })

    const members: JSX.Element[] = []
    props.currentGroupMembers.forEach((it) => {
        members.push(<MemberSelection id={it.id} name={it.name} nickname={it.nickname}
                                      isSelected={props.currentMemberId === it.id}/>)
        console.log(props.currentMemberId)
        console.log(it.name)
    })


    return <div key={"group"} className={"flex flex-col gap-[20px] pl-[100px] pe-[100px]"}>
        <div key={"groups"} className={"flex gap-[10px]"}>
            {groups}
        </div>
        <div key={"members"} className={"flex gap-[10px] pl-[50px] pe-[50px]"}>
            {members}
        </div>
    </div>
}