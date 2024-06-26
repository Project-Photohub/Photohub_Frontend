import {PageBase} from "../PageBase";
import {InputPhotoCard} from "../../component/body/photocard/add/InputPhotoCard";
import {useState} from "react";
import {
    currentGroupId,
    currentMemberId,
    DefaultGroupMemberSelectionComponent
} from "../../component/body/group/DefaultGroupMemberSelectionComponent";
import {DivButton} from "../../component/button/DivButton";
import axios from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";
import {BlurModal} from "../../component/body/modal/BlurModal";
import {getTopLevelModalSetter} from "../ModalBase";

let isRequested = 0

export const AddPhotoCardPage = () => {

    const setModal = getTopLevelModalSetter()

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
            <div className={"flex flex-row w-full justify-start pl-[100px]"}>
                <div
                    className={"flex border-background-highlight border-solid border-[3px] rounded-[30px] pl-[80px] pr-[80px] pt-[20px] pb-[20px]"}>
                    <input type={"text"} placeholder={"멋진 이름을 지어주세요!"}
                           className={"bg-background-default placeholder:text-text-subtext3 placeholder:font-p-light outline-0  font-p-light text-text-white text-[36px]"}
                           onInput={(input) => {
                               const text = (input.target as HTMLInputElement).value

                               if (text === null || text === undefined || text.trim() === "") {
                                   setTitle(null)
                               } else {
                                   setTitle((input.target as HTMLInputElement).value)
                               }
                           }}
                    />
                </div>
            </div>
            <div className={"flex flex-col gap-[30px]"}>
                <div className={"flex pl-[100px]"}>
                    <p className={"font-light text-text-subtext3 text-[32px]"}>누구에 대한 포토카드인가요?</p>
                </div>
                <DefaultGroupMemberSelectionComponent/>
            </div>

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
                            isRequested--
                            return
                        }

                        if (imageFile === null || backImageFile === null || title === undefined || title === null) {
                            setModal(
                                <BlurModal setModel={setModal}>
                                    <p>오류</p>
                                    <p>입력되지 않은 칸이 있습니다.</p>
                                </BlurModal>
                            )
                            isRequested--;
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
                        })

                        location.pathname = `/search/group/${currentGroupId}/${currentMemberId}`
                    }}>
                    <p className={"text-text-black text-[32px] font-p-extra-bold"}>Submit</p>
                </DivButton>
            </div>
        </PageBase>
    )
}