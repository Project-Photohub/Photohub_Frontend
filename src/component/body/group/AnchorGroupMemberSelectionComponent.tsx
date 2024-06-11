import {useEffect, useState} from "react";
import {SkeletonGroups} from "./SkeletonGroups";
import axios from "axios";
import {HttpMethod} from "../../../module/request/ServerInfo";
import {GroupMemberInfoList, GroupMemberSelections} from "../photocard/add/GroupMemberSelections";
import {AnyRepository} from "../../../module/repository/AnyRepository";

const info =
    new AnyRepository<GroupMemberInfoList | undefined>(undefined)

export const AnchorGroupMemberSelectionComponent = () => {

    const [group, setGroup] =
        useState<JSX.Element>(<SkeletonGroups/>)

    const [clickEvent, setClickEvent] =
        useState(0);

    if (location.pathname === "/search/group") {
        location.pathname = `/search/group/1/1`
    }

    const paths = location.pathname.split('/')
    const [selectedGroupId, setSelectedGroupId] =
        useState<number>(Number(paths[paths.length - 2]))
    const [selectedMemberId, setSelectedMemberId] =
        useState<number>(Number(paths[paths.length - 1]))

    const getGroupMemberInfo = async () => {

        if (info.data === undefined) {
            const response = await axios.request({
                method: HttpMethod.GET,
                url: "groups/all/member"
            })

            info.data = response.data as GroupMemberInfoList
        }

        setGroup(
            GroupMemberSelections(
                {
                    info: info.data!,
                    state: {
                        selectedGroupId: selectedGroupId,
                        setSelectedGroupId: setSelectedGroupId,
                        selectedMemberId: selectedMemberId,
                        setSelectedMemberId: setSelectedMemberId,
                        callGroupClickEvent: () => {
                            setClickEvent(1)
                        },
                        callMemberClickEvent: () => {
                            setClickEvent(2)
                        }
                    }
                }
            )
        )
    }

    useEffect(() => {
        getGroupMemberInfo()
    }, [])

    useEffect(() => {
        if (clickEvent === 1) {
            location.pathname = `/search/group/${selectedGroupId}/${
                info.data!.groups.filter((value) => {
                        return selectedGroupId == value.group.id
                    }
                )[0].members[0].id
            }`
        } else if (clickEvent === 2) {
            location.pathname = `/search/group/${selectedGroupId}/${selectedMemberId}`
        }
    }, [clickEvent]);

    return group!
}