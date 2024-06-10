import {GroupSelection} from "./GroupSelection";
import {MemberSelection} from "./MemberSelection";
import {CurrentPage} from "../../../initializer/CurrentPage";
import {CurrentGroupMemberRepository} from "../../../module/repository/CurrentGroupMemberRepository";

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
    props.groups.forEach((value) => {
        groups.push(
            <GroupSelection
                key={value.name + value.id} id={value.id} name={value.name} logo={value.logo}
                isSelected={selectedGroup === value.id}/>)

        if (selectedGroup === value.id) {
            CurrentGroupMemberRepository.group = value
        }
    })

    const members: JSX.Element[] = []
    props.currentGroupMembers.forEach((value) => {
        members.push(
            <MemberSelection
                key={value.name + value.id} id={value.id} name={value.name} nickname={value.nickname}
                isSelected={selectedMember === value.id}/>)

        if (selectedMember === value.id) {
            CurrentGroupMemberRepository.member = value
        }
    })

    return <div className={"flex flex-col gap-[20px] ml-[100px] mr-[100px]"}>
        <div className={"overflow-x-scroll w-full"}>
            <div className={"flex gap-[10px] w-fit overflow-auto"}>
                {groups}
            </div>
        </div>
        <div className={"overflow-x-scroll w-full"}>
            <div className={"flex gap-[10px] w-fit overflow-auto pl-[50px] pe-[50px]"}>
                {members}
            </div>
        </div>
    </div>
}