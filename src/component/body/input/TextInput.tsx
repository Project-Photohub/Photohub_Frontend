export interface TextInputProps {
    setValue?: (value: string) => void;
    placeholder?: string
    error?: string
    className?: string
    maxLength?: number
}

export const TextInput = (props: TextInputProps) => {
    return (
        <div className={`flex flex-col w-full gap-[10px] items-start justify-center`}>
            <div className={"flex flex-col gap-[20px] w-full px-[20px]"}>
                <div className={"px-[20px]"}>
                    <input
                        className={`bg-background-default ${props.className} placeholder:text-text-subtext3 placeholder:font-p-medium text-text-white text-[24px] outline-0`}
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
                </div>
                <div className={"bg-text-white h-[1px] w-full"}/>
            </div>
            {props.error && <div className={"px-[50px]"}>
                <p className={"text-highlight-red"}>{props.error}</p>
            </div>}
        </div>
    )
}