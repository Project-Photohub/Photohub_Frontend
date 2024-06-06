import {PhotoCardImage} from "./PhotoCardImage";
import {PhotoCardProps} from "./PhotoCard";

export const PhotoCardModal = (
    props: PhotoCardProps,
    setIsModalOpened: (value: (((prevState: boolean) => boolean) | boolean)) => void
) => {
    return (
        <div id={"photo-card-modal"}
             className={"fixed top-0 bottom-0 left-0 w-screen h-screen bg-blur-default overflow-hidden"}
             onClick={(event) => {
                 setIsModalOpened(false)
             }}>
            <div
                className={"flex flex-col gap-[30px] items-center rounded-[30px] bg-background-highlight w-[1000px] pt-[20px] pb-[20px] pl-[50px] pe-[50px] m-auto"}
                onClick={(event) => {
                    event.stopPropagation()
                }}>
                {PhotoCardModalInfo(props)}
                {PhotoCardModalImages(props)}
            </div>
        </div>
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
            <PhotoCardImage image={props.image} width={"330px"} height={"510px"}/>
            <PhotoCardImage image={props.backImage} width={"330px"} height={"510px"}/>
        </div>
    )
}