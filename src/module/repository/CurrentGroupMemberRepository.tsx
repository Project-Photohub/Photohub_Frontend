import {GroupInfo, MemberInfo} from "../../component/body/group/GroupMemberSelections";

export interface Entity {
    group: GroupInfo | undefined,
    member: MemberInfo | undefined
}

export const CurrentGroupMemberRepository: Entity = {
    group: undefined,
    member: undefined
}