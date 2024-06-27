import {PhotoCardImage} from "../PhotoCardImage";
import {BlurModal} from "../../modal/BlurModal";
import React from "react";

export interface InputPhotoCardProps {
    image: string | null
    setImage: (value: string | null) => void
    setImageFile: (value: File | null) => void
    setModal: (value: JSX.Element | undefined) => void
    id: number
}

export const InputPhotoCard = (props: InputPhotoCardProps) => {

    function closeInputModal() {
        props.setModal(undefined)
        document.onpaste = null
    }

    function setImage(file: File) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (event) => {
            props.setImageFile(file)
            props.setImage(event.target!.result as string)
        }
    }

    function isImageFile(file: File) {
        return file.type === "image/png" ||
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/heic"
    }

    return (
        <div onClick={() => {
            document.onpaste = (event) => {

                if (event.clipboardData == null || event.clipboardData.files[0] == null) {
                    return
                }

                const file = event.clipboardData.files[0]

                if (isImageFile(file)) {
                    setImage(file)
                }

                closeInputModal()
            }

            props.setModal(
                <BlurModal setModel={props.setModal} onClose={closeInputModal}>
                    <></>
                    <input id={`input-photo-card-${props.id}`}
                           type={"file"}
                           accept={"image/png,image/jpeg,image/heic"}
                           multiple={false}
                           hidden={true}
                           onInput={(input) => {
                               const file = (input.target as HTMLInputElement).files!.item(0)!

                               setImage(file)

                               closeInputModal()
                           }}/>
                    <label htmlFor={`input-photo-card-${props.id}`}>
                        <div
                            className={"flex justify-center items-center border-dashed border-[10px] border-header-default w-[800px] h-[550px]"}>
                            <p className={"text-center text-[32px] font-p-medium text-text-subtext3"}>
                                클릭하여 이미지를 불러오거나<br/>붙여넣기 하세요
                            </p>
                        </div>
                    </label>
                </BlurModal>
            )
        }}>
            <PhotoCardImage
                image={props.image !== null ? props.image : "/images/inputImage.png"}
                width={"440px"} height={"680px"}
            />
        </div>
    )
}