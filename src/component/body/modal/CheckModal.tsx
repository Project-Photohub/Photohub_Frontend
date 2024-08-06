import {BlurModal} from "./BlurModal";
import {DivButton} from "../../button/DivButton";

export interface CheckModalProps {
    setModal: (value: JSX.Element | undefined) => void
    checkMessage: string
    cancelMessage: string
    onCheck: () => void
    children: JSX.Element[]
}

export const CheckModal = (props: CheckModalProps) => {
    return (
        <BlurModal
            className={"w-[650px]"}
            setModel={props.setModal}>
            <div className={"flex flex-col items-center justify-center gap-[30px] py-[20px]"}>
                {props.children}
            </div>
            <div className={"flex flex-row gap-[30px]"}>
                <DivButton
                    className={"flex items-center justify-center rounded-[10px] w-[250px] py-[20px] bg-photocard-stroke"}
                    onClick={() => {
                        props.setModal(undefined)
                    }}>
                    <p className={"text-text-black text-[26px] font-p-extra-bold"}>{props.cancelMessage}</p>
                </DivButton>
                <DivButton
                    className={"flex items-center justify-center rounded-[10px] w-[250px] py-[20px] bg-highlight-orange"}
                    onClick={props.onCheck}>
                    <p className={"text-text-black text-[26px] font-p-extra-bold"}>{props.checkMessage}</p>
                </DivButton>
            </div>
        </BlurModal>
    )
}