import {PhotoCards} from "./PhotoCards";
import {
    GetCurrentMemberPhotoCardsProps
} from "../../../module/request/domain/photocard/GetCurrentMemberPhotoCardsProps";
import {useEffect, useState} from "react";
import {SkeletonPhotoCards} from "./SkeletonPhotoCards";

export const MemberPhotoCardComponent = () => {

    const [component, setComponent] =
        useState<JSX.Element>(
            <SkeletonPhotoCards/>
        );

    const [modal, setModal] =
        useState<JSX.Element | undefined>()

    const insertProps = async () => {
        const props = await GetCurrentMemberPhotoCardsProps();

        setComponent(
            PhotoCards(
                props,
                (value: JSX.Element | undefined) => {
                    setModal(value)
                }
            )
        )
    }

    useEffect(() => {
        insertProps()
    }, [])

    return (
        <>
            {component}
            {modal && modal}
        </>
    )
}