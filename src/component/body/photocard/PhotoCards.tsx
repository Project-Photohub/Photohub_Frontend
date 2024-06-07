import {PhotoCard, PhotoCardProps} from "./PhotoCard";

export interface PhotoCardsProps {
    photoCardProps: PhotoCardProps[]
}

export const PhotoCards = (props: PhotoCardsProps) => {

    const components = props.photoCardProps.map((value) => {
        return PhotoCard(value)
    })

    return <div className={`flex flex-wrap gap-[50px] w-full justify-center items-start content-center p-[100px]`}>
        {components}
    </div>
}