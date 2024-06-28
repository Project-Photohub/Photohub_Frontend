import {PhotoCardImage} from "./PhotoCardImage";
import {PhotoCardProps} from "./PhotoCard";
import {BlurModal} from "../modal/BlurModal";
import {HttpMethod} from "../../../module/request/ServerInfo";
import axios from "axios";
import {AnyRepository} from "../../../module/repository/AnyRepository";
import {DivIconButton} from "../../button/DivIconButton";
import {GotoDivIconButton} from "../../button/GotoDivIconButton";
import {PageName} from "../../../initializer/CurrentPage";
import {CompleteCopyToast} from "../toast/CompleteCopyToast";

export interface PhotoCardModalProps {
    id: string
    image: string
    backImage: string
    name: string
    groupName: string
    memberName: string
    memberNickname: string
    createdAt: string
    likeCount: number
}

export const PhotoCardModal = (
    props: PhotoCardProps,
    setModel: (value: JSX.Element | undefined) => void,
    isLiked: AnyRepository<boolean>,
    toast: JSX.Element | undefined,
    setToast: (value: JSX.Element | undefined) => void
) => {

    const PhotoCardModalInfo = (props: PhotoCardModalProps) => {
        return (
            <div className={"flex flex-col items-center"}>
                <p className={"text-text-white font-p-semi-bold text-[36px]"}>{props.name}</p>
                <p className={"text-text-subtext2 font-preahvihear text-[24px]"}>
                    {`${props.groupName}, ${props.memberNickname != null ? (props.memberNickname + " ") : ""}${props.memberName}`}
                </p>
                <p className={"text-text-subtext3 font-p-light text-[20px]"}>
                    {props.createdAt}
                </p>
            </div>
        )
    }

    const PhotoCardModalImages = (props: PhotoCardModalProps) => {
        return (
            <div className={`flex gap-[30px]`}>
                <PhotoCardImage image={props.image} width={"275px"} height={"425px"}/>
                <PhotoCardImage image={props.backImage} width={"275px"} height={"425px"}/>
            </div>
        )
    }

    const Buttons = (props: PhotoCardModalProps) => {
        return (
            <div className={"flex flex-row gap-[10px] items-center justify-center"}>
                {PhotoCardLikeApi(props)}
                <DivIconButton
                    iconProps={{
                        iconUri: "/Share.svg",
                        iconWidth: "40px",
                        iconHeight: "40px"
                    }}
                    gap={"10px"} className={`rounded-[10px] p-[10px] hover:bg-photocard-addicon animated`}
                    text={"공유하기"} textSize={"32px"}
                    onClick={() => {
                        navigator.clipboard.writeText(location.host + `/${PageName.PHOTOCARD}/${props.id}`)
                        if (toast === undefined) {
                            setToast(
                                <CompleteCopyToast toast={toast} setToast={setToast}/>
                            )
                        }
                    }}
                />
                <GotoDivIconButton
                    gotoPath={`/${PageName.PHOTOCARD}/${props.id}`}
                    iconProps={{
                        iconUri: "/Zoom.svg",
                        iconWidth: "40px",
                        iconHeight: "40px"
                    }}
                    gap={"10px"} className={"rounded-[10px] p-[10px] hover:bg-photocard-addicon animated"}
                    text={"크게보기"} textSize={"32px"}/>
            </div>
        )
    }

    const PhotoCardLikeApi = (props: PhotoCardModalProps) => {

        return (
            <div
                className={"flex flex-row gap-[10px] items-center p-[10px] rounded-[10px] hover:bg-photocard-addicon animated"}
                onClick={(event) => {
                    event.stopPropagation()
                    if (!isLiked.data) {
                        isLiked.data = true

                        axios.request({
                            method: HttpMethod.PATCH,
                            url: `/sphoto-card/like/${props.id}`
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

    axios.request({
        method: HttpMethod.GET,
        url: `/photo-cards/${props.id}`
    }).then((response) => {

        const props = response.data as PhotoCardModalProps

        setModel(
            <BlurModal
                className={"w-[980px]"}
                setModel={setModel}>
                {PhotoCardModalInfo(props)}
                {PhotoCardModalImages(props)}
                {Buttons(props)}
            </BlurModal>
        )
    })

}

