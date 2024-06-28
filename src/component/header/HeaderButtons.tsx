import {HeaderButton} from "./HeaderButton";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";
import {deleteSessionId, getSessionId} from "../../module/cookie/SessionManager";

export const HeaderButtons = () => {

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
                setAuthButton(
                    HeaderButton({
                        iconUri: "/Profile.svg",
                        text: response.data.nickname,
                        gotoPath: ""
                    })
                )
            }).catch((err: AxiosError) => {
                if (err.response?.status === 401) {
                    deleteSessionId()
                }
                console.log(err)
            })
        }
    }, []);

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
        </div>
    )
}