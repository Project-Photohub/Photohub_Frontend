import {GroupSelection} from "./GroupSelection";
import {MemberSelection} from "./MemberSelection";

export interface GroupMemberSelectionsProps {
    info: GroupMemberInfoList
    state: GroupMemberSelectionState
}

export interface GroupMemberInfoList {
    groups: GroupMemberInfo[]
}

export interface GroupMemberInfo {
    group: GroupInfo
    members: MemberInfo[]
}

export interface GroupInfo {
    id: number
    name: string
    logo: string
}

export interface MemberInfo {
    id: number
    name: string
    nickname: string
}

export interface GroupMemberSelectionState {
    selectedGroupId: number,
    setSelectedGroupId: (value: number) => void
    selectedMemberId: number,
    setSelectedMemberId: (value: number) => void
    callGroupClickEvent: (groupId: number) => void
    callMemberClickEvent: () => void
}

export const GroupMemberSelections = (props: GroupMemberSelectionsProps) => {
    return (
        <div className={"flex flex-col gap-[20px] ml-[100px] mr-[100px]"}>
            <div className={"overflow-x-scroll w-full pb-[10px]"}>
                <div className={"flex gap-[10px] w-fit overflow-auto"}>
                    {
                        props.info.groups.map((value) => {
                            return (
                                <GroupSelection
                                    key={value.group.id}
                                    id={value.group.id}
                                    name={value.group.name}
                                    logo={value.group.logo}
                                    selectedGroupId={props.state.selectedGroupId}
                                    setSelectedGroupId={props.state.setSelectedGroupId}
                                    callGroupClickEvent={props.state.callGroupClickEvent}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className={"overflow-x-scroll w-full pb-[10px]"}>
                <div className={"flex gap-[10px] w-fit overflow-auto pl-[50px] pe-[50px]"}
                     onClick={() => {
                         props.state.callMemberClickEvent()
                     }}>
                    {
                        props.info.groups.filter((value) => {
                            return value.group.id === props.state.selectedGroupId
                        })[0].members.map((value) => {
                            return (
                                <MemberSelection
                                    key={value.id}
                                    id={value.id}
                                    name={value.name}
                                    nickname={value.nickname}
                                    selectedMemberId={props.state.selectedMemberId}
                                    setSelectedMemberId={props.state.setSelectedMemberId}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}