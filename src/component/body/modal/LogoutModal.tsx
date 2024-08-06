import {deleteSessionId} from "../../../module/cookie/SessionManager";
import {CheckModal} from "./CheckModal";

export interface LogoutModalProps {
    setModal: (value: JSX.Element | undefined) => void
}

export const LogoutModal = (props: LogoutModalProps) => {
    return (
        <CheckModal
            setModal={props.setModal}
            checkMessage={"Logout"}
            cancelMessage={"Back"}
            onCheck={() => {
                deleteSessionId()
                location.pathname = "/"
            }}>
            <p className={"text-text-white text-[32px] font-p-semi-bold"}>이미 로그인중입니다.</p>
            <p className={"text-text-white text-[24px] font-p-semi-bold"}>로그아웃하시겠습니까?</p>
        </CheckModal>
    )
}