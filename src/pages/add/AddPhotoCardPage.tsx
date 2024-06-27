import {InputPhotoCard} from "../../component/body/photocard/add/InputPhotoCard";
import {useState} from "react";
import {currentGroupId, currentMemberId} from "../../component/body/group/DefaultGroupMemberSelectionComponent";
import {DivButton} from "../../component/button/DivButton";
import axios from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";
import {BlurModal} from "../../component/body/modal/BlurModal";
import {PageBase} from "../PageBase";
import {InputPhotoCardTitle} from "../../component/body/photocard/add/InputPhotoCardTitle";
import {PhotoCardGroupMemberSelector} from "../../component/body/photocard/add/PhotoCardGroupMemberSelector";

let isRequested = 0

export const AddPhotoCardPage = () => {

    const [modal, setModal]
        = useState<JSX.Element | undefined>();

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
                    className={"flex w-fit bg-[#FF9000] rounded-[10px] pl-[100px] pr-[100px] pt-[20px] pb-[20px]"}
                    onClick={() => {

                        isRequested++
                        if (isRequested > 1) {
                            setTimeout(() => {
                                isRequested--;
                            }, 100)
                            return
                        }

                        if (imageFile === null || backImageFile === null || title === undefined || title === null) {
                            setModal(
                                <BlurModal setModel={setModal}>
                                    <p>오류</p>
                                    <p>입력되지 않은 칸이 있습니다.</p>
                                </BlurModal>
                            )
                            isRequested = 0;
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
                        })
                    }}>
                    <p className={"text-text-black text-[32px] font-p-extra-bold"}>Submit</p>
                </DivButton>
            </div>
            {modal!}
        </PageBase>
    )
}