import {Toast} from "./Toast";

export interface CompleteCopyToastProps {
    toast: JSX.Element | undefined
    setToast: (toast: JSX.Element | undefined) => void
}

export const CompleteCopyToast = (props: CompleteCopyToastProps) => {
    return <Toast
        currentToast={props.toast}
        setToast={props.setToast}>
        <img src={"/Check.svg"} width={"40px"} alt={""}/>
        <p className={"text-text-white text-[30px] font-p-regular"}>링크가 복사되었습니다!</p>
    </Toast>
}