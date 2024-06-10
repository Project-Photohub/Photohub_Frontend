import {PhotoCardImage} from "./PhotoCardImage";

export const SkeletonPhotoCards = () => {

    const skeletons = []

    for (let i = 0; i < 9; i++) {
        skeletons.push(
            SkeletonPhotoCard(i)
        )
    }

    return (
        <div className={"flex flex-wrap gap-[50px] w-full justify-center items-start content-center p-[100px]"}>
            {skeletons}
        </div>
    )
}

const SkeletonPhotoCard = (key: number) => {
    return (
        <PhotoCardImage key={`skeleton-photo-card-${key}`} width={"220px"} height={"340px"} image={"/images/SkeletonPhotoCard.png"}/>
    )
}
