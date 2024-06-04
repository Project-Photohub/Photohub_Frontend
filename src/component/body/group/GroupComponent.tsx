import {Group} from "./Group";
import React from "react";

export const GroupComponent = () => {
    // eslint-disable-next-line no-restricted-globals
    const paths = location.href.split('/')

    if (paths[paths.length - 3] !== ('group')) {
        return <></>
    }

    const selectedGroup = Number(paths[paths.length - 2])

    const selectedMember = Number(paths[paths.length - 1])

    return <Group
        groups={[
            {
                id: 1,
                logo: "/images/qwer.png",
                name: "QWER"
            },
            {
                id: 2,
                logo: "/images/le_sserafim.png",
                name: "LE SSERAFIM"
            }
        ]}
        currentGroupId={selectedGroup}
        currentGroupMembers={[
            {
                id: 1,
                nickname: "Q",
                name: "쵸단"
            },
            {
                id: 2,
                nickname: "W",
                name: "마젠타"
            },
            {
                id: 3,
                nickname: "E",
                name: "냥뇽녕냥"
            },
            {
                id: 4,
                nickname: "R",
                name: "이시연"
            }
        ]}
        currentMemberId={selectedMember}/>
}