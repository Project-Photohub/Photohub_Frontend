import {BlurModal} from "./BlurModal";
import {DivButton} from "../../button/DivButton";
import {deleteSessionId} from "../../../module/cookie/SessionManager";

export interface LogoutModalProps {
    setModal: (value: JSX.Element | undefined) => void
    onCancel: () => void
}

export const LogoutModal = (props: LogoutModalProps) => {
    return (
        <BlurModal
            className={"w-[1000px]"}
            setModel={props.setModal}>
            <div className={"flex flex-col items-center justify-center gap-[30px] py-[30px]"}>
                <p className={"text-text-white text-[40px] font-p-semi-bold"}>이미 로그인중입니다.</p>
                <p className={"text-text-white text-[32px] font-p-semi-bold"}>로그아웃하시겠습니까?</p>
            </div>
            <div className={"flex flex-row gap-[30px]"}>
                <DivButton
                    className={"flex items-center justify-center rounded-[10px] w-[300px] py-[20px] bg-photocard-stroke"}
                    onClick={props.onCancel}>
                    <p className={"text-text-black text-[32px] font-p-extra-bold"}>Back</p>
                </DivButton>
                <DivButton
                    className={"flex items-center justify-center rounded-[10px] w-[300px] py-[20px] bg-highlight-orange"}
                    onClick={() => {
                        deleteSessionId()
                        location.pathname = "/"
                    }}>
                    <p className={"text-text-black text-[32px] font-p-extra-bold"}>Logout</p>
                </DivButton>
            </div>
        </BlurModal>
    )
}