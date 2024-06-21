import {useState} from "react";

let topLevelModal: JSX.Element | undefined = undefined;
let setTopLevelModal: ((value: JSX.Element | undefined) => void) | undefined = undefined;

export function getTopLevelModalSetter() {
    return setTopLevelModal!
}

export const ModalBase = () => {
    const [modal, setModal]
        = useState<JSX.Element | undefined>();

    topLevelModal = modal
    setTopLevelModal = setModal

    return <>
        {modal && modal}
    </>
}