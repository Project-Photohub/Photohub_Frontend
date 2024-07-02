import {PageBase} from "../PageBase";
import {useEffect, useState} from "react";
import axios from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";
import {PhotoCardModalProps} from "../../component/body/photocard/PhotoCardModal";
import {PhotoCardImage} from "../../component/body/photocard/PhotoCardImage";
import {DivIconButton} from "../../component/button/DivIconButton";
import {AnyRepository} from "../../module/repository/AnyRepository";
import {IconTextToast} from "../../component/body/toast/IconTextToast";

let info: PhotoCardModalProps | undefined = undefined

export const PhotoCardPage = () => {

    const [photoCardInfo, setPhotoCardInfo]
        = useState<JSX.Element>()
    const [toast, setToast]
        = useState<JSX.Element>()
    const isLiked = new AnyRepository<boolean>(false)

    const getPhotoCardInfo = async () => {

        if (info === undefined) {
            const paths = location.pathname.split('/')
            const photoCardId = paths[paths.length - 1]

            info = (await axios.request({
                method: HttpMethod.GET,
                url: `/photo-cards/${photoCardId}`
            })).data as PhotoCardModalProps
        }

        setPhotoCardInfo(
            <div className={"flex flex-col gap-[30px] items-start"}>
                <div className={"flex flex-col px-[100px] items-start"}>
                    <p className={"text-text-white text-[48px] font-p-semi-bold"}>{info.name}</p>
                    <p className={"text-text-subtext2 text-[36px] font-p-regular"}>{`${info.groupName}, ${info.memberNickname != null ? (info.memberNickname + " ") : ""}${info.memberName}`}</p>
                    <p className={"text-text-subtext3 text-[32px] font-p-light"}>{info.createdAt}</p>
                </div>
                <div className={"flex flex-row gap-[30px]"}>
                    <PhotoCardImage image={info.image} width={"440px"} height={"680px"}/>
                    <PhotoCardImage image={info.backImage} width={"440px"} height={"680px"}/>
                </div>
                <div className={"flex flex-row gap-[10px] w-full items-center justify-center"}>
                    <div
                        className={"flex flex-row gap-[10px] items-center p-[10px] rounded-[10px] hover:bg-background-hover animated"}
                        onClick={(event) => {
                            event.stopPropagation()
                            if (!isLiked.data) {
                                isLiked.data = true

                                axios.request({
                                    method: HttpMethod.PATCH,
                                    url: `/photo-cards/like/${info!.id}`
                                }).catch();

                                (event.currentTarget.firstChild as HTMLImageElement).src = "/Filled Heart.svg";
                                (event.currentTarget.lastChild as HTMLPreElement).innerHTML =
                                    (++(info!.likeCount)).toString();
                            }
                        }}>
                        <img src={isLiked.data ? "/Filled Heart.svg" : "/Heart.svg"}
                             width={"40px"} height={"40px"} alt={"heart"}/>
                        <p className={"text-text-white font-p-regular text-[32px]"}>{info.likeCount}</p>
                    </div>
                    <DivIconButton
                        iconProps={{
                            iconUri: "/Share.svg",
                            iconWidth: "40px",
                            iconHeight: "40px"
                        }}
                        gap={"10px"} className={`rounded-[10px] p-[10px] hover:bg-background-hover animated`}
                        text={"공유하기"} textSize={"32px"}
                        onClick={() => {
                            navigator.clipboard.writeText(location.href)
                            if (toast === undefined) {
                                setToast(
                                    <IconTextToast
                                        iconUrl={"/Check.svg"}
                                        text={"링크가 복사되었습니다!"}
                                        toast={toast}
                                        setToast={setToast}/>
                                )
                            }
                        }}
                    />
                </div>
                {toast}
            </div>
        )
    }

    useEffect(() => {
        getPhotoCardInfo()
    }, [toast]);

    return (
        <PageBase>

            <></>
            <div className={"flex flex-col items-center justify-center w-full"}>
                {photoCardInfo}
            </div>

        </PageBase>
    )
}