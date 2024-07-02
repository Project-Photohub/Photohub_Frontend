import {HeaderButton} from "./HeaderButton";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";
import {deleteSessionId, getSessionId} from "../../module/cookie/SessionManager";
import {DivIconButton} from "../button/DivIconButton";
import {LogoutModal} from "../body/modal/LogoutModal";
import {CurrentPage, PageName} from "../../initializer/CurrentPage";
import {Toast} from "../body/toast/Toast";

export const HeaderButtons = () => {

    const [modal, setModal]
        = useState<JSX.Element>();
    const [toast, setToast]
        = useState<JSX.Element>();

    const [authButton, setAuthButton]
        = useState<JSX.Element>(
        <HeaderButton
            iconUri={"/Profile.svg"}
            text={"로그인"}
            gotoPath={"/auth/login"}
        />)

    useEffect(() => {
            console.log(getSessionId())
            if (getSessionId()) {
                axios.request({
                    method: HttpMethod.GET,
                    url: "/user"
                }).then((response) => {
                    if (CurrentPage.getCurrentPage() == PageName.LOGIN ||
                        CurrentPage.getCurrentPage() == PageName.SIGNUP) {
                        setToast(
                            <Toast currentToast={toast} setToast={setToast}>
                                <img src={"/Warning.svg"} width={"30px"} alt={""}/>
                                <p className={"text-text-white text-[24px] font-p-regular"}>이미 로그인중입니다</p>
                            </Toast>
                        )
                    }

                    setAuthButton(
                        DivIconButton(
                            {
                                iconProps: {
                                    iconUri: "/Profile.svg",
                                    iconWidth: "20px",
                                    iconHeight: "20px"
                                },
                                gap: "10px",
                                text: response.data.nickname,
                                textSize: "16px",
                                className: "rounded-[10px] h-[50px] p-[10px] hover:bg-header-hover animated",
                                onClick: () => {
                                    setModal(
                                        <LogoutModal setModal={setModal} onCancel={() => {
                                            setModal(undefined)
                                        }}/>
                                    )
                                }
                            }
                        )
                    )
                }).catch((err: AxiosError) => {
                    if (err.response?.status === 401) {
                        deleteSessionId()
                    }
                    console.log(err)
                })
            }
        }
        ,
        []
    )
    ;

    return (<div className={"gap-2.5 flex"}>
            {/*<HeaderButton
                iconUri={"/Picture.svg"}
                onClick={() => {
                }}
                text={"내 포토카드"}
            />*/}
            <HeaderButton
                iconUri={"/Plus.svg"}
                text={"포토카드 추가"}
                gotoPath={"/add"}
            />
            {authButton}
            {modal && modal}
            {toast && toast}
        </div>
    )
}