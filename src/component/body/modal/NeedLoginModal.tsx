import {CheckModal} from "./CheckModal";

export interface NeedLoginModalProps {
    setModal: (value: JSX.Element | undefined) => void
}

export const NeedLoginModal = (props: NeedLoginModalProps) => {
    return (
        <CheckModal
            setModal={props.setModal}
            checkMessage={"Login Page"}
            cancelMessage={"Back"}
            onCheck={() => {
                location.pathname = "/auth/login"
            }}>
            <p className={"text-text-white text-[32px] font-p-semi-bold"}>로그인이 필요한 서비스입니다.</p>
            <p className={"text-text-white text-[24px] font-p-semi-bold"}>로그인 페이지로 이동하시겠습니까?</p>
        </CheckModal>
    )
}