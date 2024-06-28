import {PhotoCards, PhotoCardsProps} from "./PhotoCards";
import {
    GetCurrentMemberPhotoCardsProps
} from "../../../module/request/domain/photocard/GetCurrentMemberPhotoCardsProps";
import {useEffect, useState} from "react";
import {SkeletonPhotoCards} from "./SkeletonPhotoCards";
import {CurrentPage, PageName} from "../../../initializer/CurrentPage";
import {GetDefaultPhotoCardsProps} from "../../../module/request/domain/photocard/GetDefaultPhotoCardsProps";

export const PhotoCardComponent = () => {

    const [component, setComponent] =
        useState<JSX.Element>(
            <SkeletonPhotoCards/>
        );

    const [toast, setToast] =
        useState<JSX.Element>()
    const [modal, setModal] =
        useState<JSX.Element | undefined>()

    const insertProps = async () => {

        let props: PhotoCardsProps

        if (CurrentPage.getCurrentPage() === PageName.GROUP.toString()) {
            props = await GetCurrentMemberPhotoCardsProps()
        } else {
            props = await GetDefaultPhotoCardsProps()
        }

        setComponent(
            PhotoCards(
                props,
                (value: JSX.Element | undefined) => {
                    setModal(value)
                },
                toast,
                setToast
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
            {toast}
        </>
    )
}