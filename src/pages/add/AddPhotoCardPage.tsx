import {PageBase} from "../PageBase";
import {InputPhotoCard} from "../../component/body/photocard/add/InputPhotoCard";
import {useState} from "react";
import {
    currentMemberId,
    DefaultGroupMemberSelectionComponent
} from "../../component/body/group/DefaultGroupMemberSelectionComponent";
import {DivButton} from "../../component/button/DivButton";
import axios from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";

export const AddPhotoCardPage = () => {

    const [image, setImage] =
        useState<string | null>("images/inputImage.png");
    const [backImage, setBackImage] =
        useState<string | null>("images/inputImage.png");
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
            <div className={"flex flex-col gap-[50px]"}>
                <div className={"flex pl-[100px]"}>
                    <p className={"font-light text-text-subtext3 text-[32px]"}>누구에 대한 포토카드인가요?</p>
                </div>
                <DefaultGroupMemberSelectionComponent/>
            </div>

            <div className={"flex flex-row w-full justify-center gap-[30px]"}>
                <InputPhotoCard image={image} setImage={setImage}/>
                <InputPhotoCard image={backImage} setImage={setBackImage}/>
            </div>

            <div className={"flex flex-row w-full justify-center"}>
                <DivButton className={"flex w-fit bg-[#FF9000] rounded-[10px] pl-[100px] pr-[100px] pt-[20px] pb-[20px]"} onClick={() => {
                    axios.request({
                        method: HttpMethod.POST,
                        url: "/photo-cards/url",
                        data: {
                            image: image,
                            backImage: backImage,
                            name: title,
                            memberId: currentMemberId
                        }
                    })

                    console.log("asd")
                }}>
                    <p className={"text-text-black text-[32px] font-p-extra-bold"}>Submit</p>
                </DivButton>
            </div>
        </PageBase>
    )
}