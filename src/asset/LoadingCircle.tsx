export interface LoadingCircleProps {
    className?: string
    loading: boolean
}

export const LoadingCircle = (props: LoadingCircleProps) => {
    return (
        <div
            className={`${props.className} ${props.loading ? "" : "hidden"} fixed right-[50px] bottom-[50px] bg-background-highlight rounded-full p-[5px]`}>
            <div
                className={`flex w-[50px] h-[50px] justify-center items-center rounded-full border-solid border-[5px] border-header-default border-t-photocard-stroke spin`}>
                <div className={"w-[30px] h-[30px] rounded-full bg-background-default"}/>
            </div>
        </div>
    )
}