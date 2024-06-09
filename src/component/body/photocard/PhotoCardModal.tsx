import {PhotoCardImage} from "./PhotoCardImage";
import {PhotoCardProps} from "./PhotoCard";
import {BlurModal} from "../modal/BlurModal";
import {CurrentGroupMemberRepository} from "../../../module/repository/CurrentGroupMemberRepository";

export const PhotoCardModal = (
    props: PhotoCardProps,
    setModel: (value: JSX.Element | undefined) => void
) => {
    return (
        <BlurModal setModel={setModel}>
            {PhotoCardModalInfo(props)}
            {PhotoCardModalImages(props)}
        </BlurModal>
    )
}

const PhotoCardModalInfo = (props: PhotoCardProps) => {
    return (
        <div className={"flex flex-col items-center"}>
            <p className={"text-text-white font-p-semi-bold text-[36px]"}>{props.name}</p>
            <p className={"text-text-subtext2 font-preahvihear text-[24px]"}>
                {`${props.groupName}, ${props.memberNickname} ${props.memberName}`}
            </p>
            <p className={"text-text-subtext3 font-p-light text-[20px]"}>
                {props.createdAt}
            </p>
        </div>
    )
}

const PhotoCardModalImages = (props: PhotoCardProps) => {
    return (
        <div className={`flex gap-[30px]`}>
            <PhotoCardImage image={props.image} width={"275px"} height={"425px"}/>
            <PhotoCardImage image={props.backImage} width={"275px"} height={"425px"}/>
        </div>
    )
}