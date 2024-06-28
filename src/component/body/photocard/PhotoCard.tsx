import {PhotoCardModal} from "./PhotoCardModal";
import {PhotoCardImage} from "./PhotoCardImage";
import {AnyRepository} from "../../../module/repository/AnyRepository";

export interface PhotoCardProps {
    readonly id: string
    readonly image: string
}

export const PhotoCard = (
    props: PhotoCardProps,
    setModel: (value: JSX.Element | undefined) => void,
    toast: JSX.Element | undefined,
    setToast: (value: JSX.Element | undefined) => void
) => {

    const isLiked = new AnyRepository<boolean>(false)

    return (
        <div key={"photo-card" + props.id} className={`flex `}>
            <div onClick={() => {
                PhotoCardModal(props, setModel, isLiked, toast, setToast)
            }}>
                <PhotoCardImage width={"220px"} height={"340px"} image={props.image}/>
            </div>
        </div>
    )
}