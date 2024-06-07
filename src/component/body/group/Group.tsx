import {GroupSelection} from "./GroupSelection";
import {MemberSelection} from "./MemberSelection";
import {CurrentPage} from "../../../initializer/CurrentPage";

export interface GroupProps {
    groups: GroupInfo[],
    currentGroupMembers: MemberInfo[]
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

    // eslint-disable-next-line no-restricted-globals
    const paths = location.href.split('/')
    const pathLength = paths.length

    if (CurrentPage.getCurrentPage() !== 'group') {
        return <></>
    }

    const selectedGroup = Number(paths[pathLength - 2])

    const selectedMember = Number(paths[pathLength - 1])

    const groups: JSX.Element[] = []
    props.groups.forEach((it) => {
        groups.push(<GroupSelection key={it.name + it.id} id={it.id} name={it.name} logo={it.logo}
                                    isSelected={selectedGroup === it.id}/>)
    })

    const members: JSX.Element[] = []
    props.currentGroupMembers.forEach((it) => {
        members.push(<MemberSelection key={it.name + it.id} id={it.id} name={it.name} nickname={it.nickname}
                                      isSelected={selectedMember === it.id}/>)
    })

    return <div className={"flex flex-col gap-[20px] pl-[100px] pe-[100px]"}>
        <div className={"flex gap-[10px]"}>
            {groups}
        </div>
        <div className={"flex gap-[10px] pl-[50px] pe-[50px]"}>
            {members}
        </div>
    </div>
}