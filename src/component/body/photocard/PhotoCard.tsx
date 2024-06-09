import {PhotoCardModal} from "./PhotoCardModal";
import {PhotoCardImage} from "./PhotoCardImage";

export interface PhotoCardProps {
    id: string,
    image: string,
    backImage: string,
    name: string,
    groupName: string,
    memberName: string,
    memberNickname: string,
    createdAt: string,
    likeCount: number,
}

export const PhotoCard = (
    props: PhotoCardProps,
    setModel: (value: JSX.Element | undefined) => void
) => {

    console.log(props.image)

    return (
        <div key={"photo-card" + props.id} className={`flex `}>
            <div onClick={() => {
                setModel(PhotoCardModal(props, setModel))
            }}>
                <PhotoCardImage width={"220px"} height={"340px"} image={props.image}/>
            </div>
        </div>
    )
}