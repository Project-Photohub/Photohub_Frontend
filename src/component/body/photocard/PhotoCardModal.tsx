import {PhotoCardImage} from "./PhotoCardImage";
import {PhotoCardProps} from "./PhotoCard";
import {BlurModal} from "../modal/BlurModal";
import {HttpMethod} from "../../../module/request/ServerInfo";
import axios from "axios";
import {AnyRepository} from "../../../module/repository/AnyRepository";

export const PhotoCardModal = (
    props: PhotoCardProps,
    setModel: (value: JSX.Element | undefined) => void,
    isLiked: AnyRepository<boolean>
) => {
    return (
        <BlurModal setModel={setModel}>
            {PhotoCardModalInfo(props)}
            {PhotoCardModalImages(props)}
            {PhotoCardLikeApi(props, isLiked)}
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

const PhotoCardLikeApi = (props: PhotoCardProps, isLiked: AnyRepository<boolean>) => {

    return (
        <div className={"flex flex-row gap-[10px] p-[10px"}
             onClick={(event) => {
                 event.stopPropagation()
                 if (!isLiked.data) {
                     isLiked.data = true

                     axios.request({
                         method: HttpMethod.PATCH,
                         url: `/photo-cards/like/${props.id}`
                     }).catch();

                     (event.currentTarget.firstChild as HTMLImageElement).src = "/Filled Heart.svg";
                     (event.currentTarget.lastChild as HTMLPreElement).innerHTML =
                         (++(props.likeCount)).toString();
                 }
             }}>
            <img src={isLiked.data ? "/Filled Heart.svg" : "/Heart.svg"}
                 width={"40px"} height={"40px"} alt={"heart"}/>
            <p className={"text-text-white font-p-regular text-[32px]"}>{props.likeCount}</p>
        </div>
    )
}