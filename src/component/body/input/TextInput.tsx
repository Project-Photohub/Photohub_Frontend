export interface TextInputProps {
    setValue?: (value: string) => void;
    placeholder?: string
    error?: string
    className?: string
    maxLength?: number
    inputType: "text" | "password" | "email" | "url"
}

export const TextInput = (props: TextInputProps) => {

    let isBlockAble = props.inputType === "password"
    let view: boolean = false

    return (
        <div className={`flex flex-col w-full gap-[10px] items-start justify-center`}>
            <div className={"flex flex-col gap-[20px] w-full px-[20px]"}>
                <div className={"flex flex-row items-center px-[20px]"}>
                    <input
                        id={`text-input-${props.placeholder}-${props.maxLength}`}
                        className={`bg-background-default ${props.className} placeholder:text-text-subtext3 placeholder:font-p-medium text-text-white text-[24px] outline-0`}
                        type={props.inputType}
                        placeholder={props.placeholder}
                        maxLength={props.maxLength}
                        onChange={(event) => {
                            if (props.setValue) {
                                props.setValue(
                                    (event.target as HTMLInputElement).value
                                )
                            }
                        }}
                    />
                    {isBlockAble &&
                        <div className={"w-[30px] h-[30px]"}
                             onClick={() => {
                                 const input = document.getElementById(`text-input-${props.placeholder}-${props.maxLength}`) as HTMLInputElement
                                 const img = document.getElementById(`text-input-eye-${props.placeholder}-${props.maxLength}`) as HTMLImageElement

                                 if (view) {
                                     view = false
                                     input.type = props.inputType
                                     img.src = "/GrayEye.svg"
                                 } else {
                                     view = true
                                     input.type = "text"
                                     img.src = "/Eye.svg"
                                 }
                             }}>
                            <img id={`text-input-eye-${props.placeholder}-${props.maxLength}`}
                                 src={"/GrayEye.svg"} alt={""}/>
                        </div>
                    }
                </div>
                <div className={"bg-text-white h-[1px] w-full"}/>
            </div>
            {props.error && <div className={"px-[50px]"}>
                <p className={"text-highlight-red"}>{props.error}</p>
            </div>}
        </div>
    )
}