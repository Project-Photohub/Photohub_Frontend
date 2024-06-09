import {PhotoCards} from "./PhotoCards";
import {
    GetCurrentMemberPhotoCardsProps
} from "../../../module/request/domain/photocard/GetCurrentMemberPhotoCardsProps";
import {useEffect, useState} from "react";

export const MemberPhotoCardComponent = () => {

    const [component, setComponent] =
        useState<JSX.Element>();

    const [modal, setModal] =
        useState<JSX.Element | undefined>()

    const insertProps = async () => {
        const props = await GetCurrentMemberPhotoCardsProps();

        console.log(props)

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