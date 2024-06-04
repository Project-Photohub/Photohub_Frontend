import {Group} from "./Group";
import React from "react";

export const GroupComponent = () => {
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
        ]}/>
}