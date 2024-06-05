import {PhotoCardModal} from "./PhotoCardModal";
import {useState} from "react";
import {PhotoCardImage} from "./PhotoCardImage";

export interface PhotoCardProps {
    image: string,
    backImage: string,
    name: string,
    groupName: string,
    memberName: string,
    memberNickname: string,
    writer: string,
    createdAt: string,
    like: number,
}

export const PhotoCard = (props: PhotoCardProps) => {

    const [isModelOpened, openModal] = useState(false)

    return (
        <div className={`flex `}>
            <div onClick={() => {
                openModal(true)
            }}>
                <PhotoCardImage width={"220px"} height={"340px"} image={props.image}/>
            </div>
            {isModelOpened && PhotoCardModal(props)}
        </div>
    )
}