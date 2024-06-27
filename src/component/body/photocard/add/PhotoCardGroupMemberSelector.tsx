import {DefaultGroupMemberSelectionComponent} from "../../group/DefaultGroupMemberSelectionComponent";

export const PhotoCardGroupMemberSelector = () => {
    return (
        <div className={"flex flex-col gap-[30px]"}>
            <div className={"flex pl-[100px]"}>
                <p className={"font-light text-text-subtext3 text-[32px]"}>누구에 대한 포토카드인가요?</p>
            </div>
            <DefaultGroupMemberSelectionComponent/>
        </div>
    )
}