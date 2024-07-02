import {Toast} from "./Toast";

export interface CompleteCopyToastProps {
    iconUrl: string
    text: string
    toast: JSX.Element | undefined
    setToast: (toast: JSX.Element | undefined) => void
}

export const IconTextToast = (props: CompleteCopyToastProps) => {
    return <Toast
        currentToast={props.toast}
        setToast={props.setToast}>
        <img src={props.iconUrl} width={"30px"} alt={""}/>
        <p className={"text-text-white text-[24px] font-p-regular"}>{props.text}</p>
    </Toast>
}