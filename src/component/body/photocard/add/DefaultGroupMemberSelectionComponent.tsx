import {GroupMemberInfoList, GroupMemberSelections} from "./GroupMemberSelections";
import {useEffect, useState} from "react";
import {SkeletonGroups} from "../../group/SkeletonGroups";
import axios from "axios";
import {HttpMethod} from "../../../../module/request/ServerInfo";
import {AnyRepository} from "../../../../module/repository/AnyRepository";

const info =
    new AnyRepository<GroupMemberInfoList | undefined>(undefined)

let [currentGroupId, currentMemberId] = [0, 0]

export const DefaultGroupMemberSelectionComponent = () => {

    const [group, setGroup] =
        useState<JSX.Element>(<SkeletonGroups/>)

    const [clickCount, setClickCount] =
        useState(0);

    const [selectedGroupId, setSelectedGroupId] =
        useState<number>(1)
    const [selectedMemberId, setSelectedMemberId] =
        useState<number>(1)

    const getGroupMemberInfo = async () => {

        if (info.data === undefined) {
            const response = await axios.request({
                method: HttpMethod.GET,
                url: "groups/all/member"
            })

            info.data = response.data as GroupMemberInfoList

            setSelectedGroupId(info.data!.groups[0].group.id)
            setSelectedMemberId(info.data!.groups[0].members[0].id)
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
                        plusClickCount: () => {
                            setClickCount(clickCount + 1)
                        }
                    }
                }
            )
        )

        currentGroupId = selectedGroupId
        currentMemberId = selectedMemberId
    }

    useEffect(() => {
        getGroupMemberInfo()
    }, [clickCount])

    return group!
}