import {InputPhotoCard} from "../../component/body/photocard/add/InputPhotoCard";
import {useState} from "react";
import {currentGroupId, currentMemberId} from "../../component/body/group/DefaultGroupMemberSelectionComponent";
import {DivButton} from "../../component/button/DivButton";
import axios from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";
import {PageBase} from "../PageBase";
import {InputPhotoCardTitle} from "../../component/body/photocard/add/InputPhotoCardTitle";
import {PhotoCardGroupMemberSelector} from "../../component/body/photocard/add/PhotoCardGroupMemberSelector";
import {LoadingCircle} from "../../asset/LoadingCircle";
import {IconTextToast} from "../../component/body/toast/IconTextToast";

let isRequested = 0

export const AddPhotoCardPage = () => {

    const [modal, setModal]
        = useState<JSX.Element>();
    const [toast, setToast]
        = useState<JSX.Element>()
    const [loading, setLoading]
        = useState<boolean>(false);

    const [image, setImage] =
        useState<string | null>("images/inputImage.png");
    const [imageFile, setImageFile] =
        useState<File | null>(null);
    const [backImage, setBackImage] =
        useState<string | null>("images/inputImage.png");
    const [backImageFile, setBackImageFile] =
        useState<File | null>(null);
    const [title, setTitle] =
        useState<string | null>()

    return (
        <PageBase>
            <InputPhotoCardTitle setTitle={setTitle}/>

            <PhotoCardGroupMemberSelector/>

            <div className={"flex flex-row w-full justify-center gap-[30px]"}>
                <InputPhotoCard image={image} setImage={setImage}
                                setImageFile={setImageFile} setModal={setModal} id={1}/>
                <InputPhotoCard image={backImage} setImage={setBackImage}
                                setImageFile={setBackImageFile} setModal={setModal} id={2}/>
            </div>

            <div className={"flex flex-row w-full justify-center"}>
                <DivButton
                    className={"flex w-fit bg-[#FF9000] items-center gap-[30px] rounded-[10px] pl-[100px] pr-[100px] pt-[20px] pb-[20px]"}
                    onClick={() => {

                        isRequested++
                        if (isRequested > 1) {
                            setTimeout(() => {
                                isRequested--
                                setLoading(false)
                            }, 100)
                            return
                        }
                        setLoading(true)

                        if (imageFile === null || backImageFile === null || title === undefined || title === null) {
                            setToast(
                                <IconTextToast
                                    iconUrl={"/Warning.svg"}
                                    text={"입력되지 않은 칸이 있습니다!"}
                                    toast={toast}
                                    setToast={setToast}/>
                            )
                            isRequested = 0;
                            setLoading(false)
                            return
                        }

                        const formData = new FormData()

                        formData.append('image', imageFile)
                        formData.append('backImage', backImageFile)
                        formData.append('name', title)
                        formData.append('memberId', currentMemberId.toString())

                        axios.request({
                            method: HttpMethod.POST,
                            url: "/photo-cards",
                            data: formData,
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }).then(() => {
                            location.pathname = `/search/group/${currentGroupId}/${currentMemberId}`
                        }).catch((err) => {
                            console.error(err)
                            isRequested = 0;
                            setLoading(false)
                        })
                    }}>
                    <p className={"text-text-black text-[32px] font-p-extra-bold"}>Submit</p>
                </DivButton>
            </div>
            {modal!}
            {toast!}
            <LoadingCircle loading={loading}/>
        </PageBase>
    )
}