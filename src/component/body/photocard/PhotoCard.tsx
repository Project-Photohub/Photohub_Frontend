import {PhotoCardModal} from "./PhotoCardModal";
import {useState} from "react";
import {PhotoCardImage} from "./PhotoCardImage";

export interface PhotoCardProps {
    id: number,
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

    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

    return (
        <div key={"photo-card" + props.id} className={`flex `}>
            <div onClick={() => {
                setIsModalOpened(true)
            }}>
                <PhotoCardImage width={"220px"} height={"340px"} image={props.image}/>
            </div>
            {isModalOpened && PhotoCardModal(props, setIsModalOpened)}
        </div>
    )
}