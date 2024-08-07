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
        <div key={"photo-card" + props.id} className={`flex hover:translate-y-[-8%] hover:scale-110 hover:shadow-[0_15px_15px_0_rgba(0,0,0,0.25)] rounded-[25px] animated`}>
            <div onClick={() => {
                PhotoCardModal(props, setModel, isLiked, toast, setToast)
            }}>
                <PhotoCardImage width={"220px"} height={"340px"} image={props.image}/>
            </div>
        </div>
    )
}