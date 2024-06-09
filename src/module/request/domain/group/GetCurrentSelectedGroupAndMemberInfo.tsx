import {GroupInfo, GroupProps, MemberInfo} from "../../../../component/body/group/Group";
import axios from "axios";
import {HttpMethod} from "../../ServerInfo";

export const GetCurrentSelectedGroupAndMemberInfo = async () => {

    const groups =
        (await axios.request({
            method: HttpMethod.GET,
            url: "/groups/all"
        })).data as AllGroupsResponse

    // eslint-disable-next-line no-restricted-globals
    const paths = location.href.split('/')

    if (paths[paths.length - 1] === "group") { // {hostname}/search/group

        const response =
            (await axios.request({
                method: HttpMethod.GET,
                url: `/members/${groups.list[0].id}`
            })).data as MembersResponse

        console.log(response)

        // eslint-disable-next-line no-restricted-globals
        location.href += `/${groups.list[0].id}/${response.members[0].id}`

    } else if (paths[paths.length - 2] === "group") { // {hostname}/search/group/{groupId}\
        console.log("{hostname}/search/group/{groupId}")

        let response =
            (await axios.request({
                method: HttpMethod.GET,
                url: `/members/${paths[paths.length - 1]}`
            })).data as MembersResponse

        console.log(response)

        // eslint-disable-next-line no-restricted-globals
        location.href += `/${response!.members[0].id}`
    }

    // Last, {hostname}/search/group/{groupId}/{memberId}
    console.log("{hostname}/search/group/{groupId}/{memberId}")

    let response =
        (await axios.request({
            method: HttpMethod.GET,
            url: `/members/${paths[paths.length - 2]}`
        })).data as MembersResponse

    return {
        groups: groups!.list,
        currentGroupMembers: response!.members
    } as unknown as GroupProps
}

interface AllGroupsResponse {
    list: GroupInfo[]
}

interface MembersResponse {
    members: MemberInfo[]
}