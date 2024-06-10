import {PhotoCard, PhotoCardProps} from "./PhotoCard";

export interface PhotoCardsProps {
    photoCardProps: PhotoCardProps[]
}

export const PhotoCards = (
    props: PhotoCardsProps,
    setModel: (value: JSX.Element | undefined) => void
) => {

    if (props.photoCardProps === undefined) {
        return <>
        </>
    }

    return <div className={`flex flex-wrap gap-[50px] w-full justify-center items-start content-center p-[100px]`}>
        {props.photoCardProps.map((value) => PhotoCard(value, setModel))}
    </div>
}