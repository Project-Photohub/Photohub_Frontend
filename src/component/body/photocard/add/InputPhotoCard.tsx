import {PhotoCardImage} from "../PhotoCardImage";

export interface InputPhotoCardProps {
    image: string | null
    setImage: (value: string | null) => void
    setImageFile: (value: File | null) => void
    setModal: (value: JSX.Element | undefined) => void
    id: number
}

export const InputPhotoCard = (props: InputPhotoCardProps) => {
    return (
        <div>
            <input id={`input-photo-card-${props.id}`}
                   type={"file"}
                   accept={"image/png,image/jpeg,image/heic"}
                   multiple={false}
                   hidden={true}
                   onInput={(input) => {
                       const file = (input.target as HTMLInputElement).files?.item(0)

                       if (file === null || file === undefined) {
                           props.setImage(null)
                           props.setImageFile(null)
                       } else {
                           const reader = new FileReader()
                           reader.readAsDataURL(file)
                           reader.onload = (event) => {
                               props.setImageFile(file)
                               props.setImage(event.target!.result as string)
                           }
                       }
                   }}
                   className={"bg-background-highlight placeholder:text-text-subtext3 placeholder:font-p-light outline-0 text-text-white w-[500px] pl-[30px] pr-[30px] pt-[10px] pb-[10px]"}/>
            <label htmlFor={`input-photo-card-${props.id}`}>
                <PhotoCardImage
                    image={props.image !== null ? props.image : "/images/inputImage.png"}
                    width={"440px"} height={"680px"}
                />
            </label>
        </div>
    )
}