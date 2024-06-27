import {DivButton} from "../../button/DivButton";

export interface AuthFormProps {
    title: string
    anotherText: string
    onSubmit: () => void
    onClickAnotherButton: () => void
    children: JSX.Element[]
}

export const AuthForm = (props: AuthFormProps) => {
    return (
        <div
            className={"flex flex-col justify-center items-center bg-background-hover w-[720px] rounded-[50px] px-[50px] py-[30px] gap-[80px]"}
            onKeyUp={(event) => {
                if (event.key !== "Enter") {
                    return
                }

                document.getElementById("submit-button")!.click()
            }}>
            <p className={"text-text-white text-[40px] font-p-black"}>{props.title}</p>
            {props.children}
            <div className={"flex flex-row gap-[30px]"}>
                <DivButton
                    className={"flex items-center justify-center bg-photocard-stroke w-[300px] rounded-[10px] py-[20px]"}
                    onClick={props.onClickAnotherButton}>
                    <p className={"text-text-black text-[32px] font-p-extra-bold"}>{props.anotherText}</p>
                </DivButton>
                <DivButton
                    className={"flex items-center justify-center bg-highlight-orange w-[300px] rounded-[10px] py-[20px]"}
                    onClick={props.onSubmit}>
                    <p id={"submit-button"}
                       className={"text-text-black text-[32px] font-p-extra-bold"}>{props.title}</p>
                </DivButton>
            </div>
        </div>
    )
}