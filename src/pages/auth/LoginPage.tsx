import {PageBase} from "../PageBase";
import {TextInput} from "../../component/body/input/TextInput";
import {useState} from "react";
import {AuthForm} from "../../component/body/auth/AuthForm";
import axios, {AxiosError} from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";

export const LoginPage = () => {

    let errored: boolean = false

    const [id, setId] = useState<string>();
    const [idError, setIdError] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();

    return (
        <PageBase>
            <div className={"flex flex-row w-full justify-center"}>
                <AuthForm
                    title={"Login"} anotherText={"Sign Up"}
                    onClickAnotherButton={() => {
                        location.pathname = "/auth/signup"
                    }}
                    onSubmit={() => {
                        if (!id) {
                            setIdError("ID를 입력해주세요")
                            errored = true
                        } else {
                            setIdError(undefined)
                        }
                        if (!password) {
                            setPasswordError("비밀번호를 입력해주세요")
                            errored = true
                        } else {
                            setPasswordError(undefined)
                        }

                        if (errored) {
                            errored = false
                            return
                        }

                        axios.request({
                            method: HttpMethod.POST,
                            url: "/auth/login",
                            data: {
                                id: id,
                                password: password
                            }
                        }).then(() => {
                            location.pathname = "/search/popular"
                        }).catch((reason: AxiosError) => {
                            switch (reason.response?.status) {
                                case 401:
                                case 403:
                                case 404:
                                    setIdError("계정이 존재하지 않거나 비밀번호가 틀렸습니다")
                                    setPasswordError("계정이 존재하지 않거나 비밀번호가 틀렸습니다")
                                    break
                                default:
                                    console.error(reason)
                            }
                        })
                    }}>
                    <div className={"flex flex-col items-center justify-center w-full gap-[30px]"}>
                        <TextInput className={"bg-background-hover w-full"}
                                   setValue={setId} placeholder={"ID"}
                                   error={idError} maxLength={20}/>
                        <TextInput className={"bg-background-hover w-full"}
                                   setValue={setPassword} placeholder={"Password"}
                                   error={passwordError} maxLength={30}/>
                    </div>
                    <></>
                </AuthForm>
            </div>
            <></>
        </PageBase>
    )
}