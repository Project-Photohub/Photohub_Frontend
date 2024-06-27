import {PageBase} from "../PageBase";
import {TextInput} from "../../component/body/input/TextInput";
import {useState} from "react";
import {AuthForm} from "../../component/body/auth/AuthForm";
import {
    idMaxSize,
    idMinSize,
    nicknameMaxSize,
    nicknameMinSize,
    passwordMaxSize,
    passwordMinSize
} from "../../component/body/auth/AuthValidationValue";
import axios, {AxiosError} from "axios";
import {HttpMethod} from "../../module/request/ServerInfo";

export const SignupPage = () => {

    let errored: boolean = false

    const [id, setId] = useState<string>();
    const [idError, setIdError] = useState<string>();
    const [nickname, setNickname] = useState<string>();
    const [nicknameError, setNicknameError] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();

    return (
        <PageBase>
            <div className={"flex flex-row w-full justify-center"}>
                <AuthForm
                    title={"Sign Up"} anotherText={"Login"}
                    onClickAnotherButton={() => {
                        location.pathname = "/auth/login"
                    }}
                    onSubmit={() => {
                        if (!id) {
                            setIdError("ID를 입력해주세요")
                            errored = true
                        } else if (id!.length < idMinSize) {
                            setIdError("ID가 너무 짧습니다. (2자 이상)")
                            errored = true
                        } else if (id!.length > idMaxSize) {
                            setIdError("ID가 너무 깁니다. (20자 이하)")
                            errored = true
                        } else {
                            setIdError(undefined)
                        }
                        if (!nickname) {
                            setNicknameError("닉네임을 입력해주세요")
                            errored = true
                        } else if (nickname!.length < nicknameMinSize) {
                            setNicknameError("닉네임이 너무 짧습니다. (1자 이상)")
                            errored = true
                        } else if (nickname!.length > nicknameMaxSize) {
                            setNicknameError("닉네임이 너무 깁니다. (20자 이하)")
                            errored = true
                        } else {
                            setNicknameError(undefined)
                        }
                        if (!password) {
                            setPasswordError("비밀번호를 입력해주세요")
                            errored = true
                        } else if (password!.length < passwordMinSize) {
                            setPasswordError("비밀번호가 너무 짧습니다. (5자 이상)")
                            errored = true
                        } else if (password!.length > passwordMaxSize) {
                            setPasswordError("비밀번호가 너무 깁니다. (30자 이하)")
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
                            url: "/auth/signup",
                            data: {
                                id: id,
                                nickname: nickname,
                                password: password
                            }
                        }).then(() => {
                            location.pathname = "/auth/login"
                        }).catch((reason: AxiosError) => {
                            switch (reason.response?.status) {
                                case 409:
                                    setIdError("이미 존재하는 ID입니다.")
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
                                   setValue={setNickname} placeholder={"Nickname"}
                                   error={nicknameError} maxLength={20}/>
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