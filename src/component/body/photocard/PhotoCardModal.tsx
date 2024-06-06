import {PhotoCardImage} from "./PhotoCardImage";
import {PhotoCardProps} from "./PhotoCard";
import {BlurModal} from "../modal/BlurModal";

export const PhotoCardModal = (
    props: PhotoCardProps,
    setIsModalOpened: (value: (((prevState: boolean) => boolean) | boolean)) => void
) => {
    return (
        <BlurModal setIsModalOpened={setIsModalOpened}>
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
                {`- ${props.writer} | ${props.createdAt}`}
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