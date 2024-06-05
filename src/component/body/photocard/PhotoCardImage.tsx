export interface PhotoCardImageProps {
    image: string,
    width: string
    height: string,
}

export const PhotoCardImage = (props: PhotoCardImageProps) => {
    return (
        <img width={props.width} height={props.height} src={props.image}
             className={`w-[${props.width}] h-[${props.height}] object-cover border-photocard-stroke border-[5px] border-solid rounded-[25px]`} alt="photocard"/>
    )
}