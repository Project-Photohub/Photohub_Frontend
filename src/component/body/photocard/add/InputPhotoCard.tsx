import {useState} from "react";
import {PhotoCardImage} from "../PhotoCardImage";
import {BlurModal} from "../../modal/BlurModal";

export interface InputPhotoCardProps {
    image: string | null
    setImage: (value: string | null) => void
    setModal: (value: JSX.Element | undefined) => void
}

export const InputPhotoCard = (props: InputPhotoCardProps) => {

    return (
        <div>
            <div onClick={() => {
                props.setModal(
                    <BlurModal setModel={props.setModal}>
                        <input type={"text"} placeholder={"이미지 링크를 삽입해주세요."}
                               onInput={(input) => {
                                   const text = (input.target as HTMLInputElement).value

                                   if (text === null || text === undefined || text.trim() === "") {
                                       props.setImage(null)
                                   } else {
                                       props.setImage((input.target as HTMLInputElement).value)
                                   }
                               }}
                               className={"bg-background-highlight placeholder:text-text-subtext3 placeholder:font-p-light outline-0 text-text-white w-[500px] pl-[30px] pr-[30px] pt-[10px] pb-[10px]"}/>
                        <></>
                    </BlurModal>
                )
            }}>
                <PhotoCardImage
                    image={props.image !== null ? props.image : "/images/inputImage.png"}
                    width={"440px"} height={"680px"}
                />
            </div>
        </div>
    )
}