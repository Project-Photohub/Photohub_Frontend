import {GroupInfo, MemberInfo} from "../../component/body/group/Group";

export interface Entity {
    group: GroupInfo | undefined,
    member: MemberInfo | undefined
}

export const CurrentGroupMemberRepository: Entity = {
    group: undefined,
    member: undefined
}