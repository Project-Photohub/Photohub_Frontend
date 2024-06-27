import {HeaderButton} from "./HeaderButton";
import {useState} from "react";
import axios, {AxiosError} from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";

export const HeaderButtons = () => {

    const [authButton, setAuthButton]
        = useState<JSX.Element>(
        <HeaderButton
            iconUri={"/Profile.svg"}
            text={"로그인"}
            gotoPath={"/auth/login"}
        />)

    if (document.cookie.includes("SESSIONID")) {

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
                document.cookie = "SESSIONID=; expire=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            }
            console.log(err)
        })
    }

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