export interface PhotoCardNameInputProps {
    setTitle: (title: string | null) => void
}

export const InputPhotoCardTitle = (props: PhotoCardNameInputProps) => {
    return (
        <div className={"flex flex-row w-full justify-start pl-[100px]"}>
            <div
                className={"flex border-background-highlight border-solid border-[3px] rounded-[30px] pl-[80px] pr-[80px] pt-[20px] pb-[20px]"}>
                <input type={"text"} placeholder={"멋진 이름을 지어주세요!"}
                       className={"bg-background-default placeholder:text-text-subtext3 placeholder:font-p-light outline-0 min-w-[650px] font-p-light text-text-white text-[36px]"}
                       maxLength={30}
                       onInput={(event) => {
                           const text = (event.target as HTMLInputElement).value

                           if (text === null || text === undefined || text.trim() === "") {
                               props.setTitle(null);
                           } else {
                               props.setTitle((event.target as HTMLInputElement).value);
                           }
                       }}
                />
            </div>
        </div>
    )
}