import {GroupMemberInfoList, GroupMemberSelections} from "./GroupMemberSelections";
import {useEffect, useState} from "react";
import {SkeletonGroups} from "./SkeletonGroups";
import axios from "axios";
import {HttpMethod} from "../../../module/request/ServerInfo";
import {AnyRepository} from "../../../module/repository/AnyRepository";

const info =
    new AnyRepository<GroupMemberInfoList | undefined>(undefined)

export let [currentGroupId, currentMemberId] = [0, 0]

export const DefaultGroupMemberSelectionComponent = () => {

    const [group, setGroup] =
        useState<JSX.Element>(<SkeletonGroups/>)

    const [selectedGroupId, setSelectedGroupId] =
        useState<number>(1)
    const [selectedMemberId, setSelectedMemberId] =
        useState<number>(1)

    const [clickEvent, setClickEvent] =
        useState([1, selectedGroupId]);

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

        let newSelectedMemberId: number = selectedMemberId

        if (clickEvent[0] === 0) {
            return
        }

        if (clickEvent[0] === 1) {
            info.data.groups.forEach((value) => {
                    if (clickEvent[1] == value.group.id) {
                        setSelectedMemberId(value.members[0].id)
                        newSelectedMemberId = value.members[0].id
                    }
                }
            )
        }

        setClickEvent([0, clickEvent[1]])

        setGroup(
            GroupMemberSelections(
                {
                    info: info.data!,
                    state: {
                        selectedGroupId: selectedGroupId,
                        setSelectedGroupId: setSelectedGroupId,
                        selectedMemberId: newSelectedMemberId,
                        setSelectedMemberId: setSelectedMemberId,
                        callGroupClickEvent: (groupId: number) => {
                            setClickEvent([1, groupId])
                        },
                        callMemberClickEvent: () => {
                            setClickEvent([2, selectedGroupId])
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
    }, [clickEvent])

    return group!
}