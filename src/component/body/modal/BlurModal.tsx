export interface BlurModalProps {
    children: JSX.Element[],
    setIsModalOpened: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export const BlurModal = (
    props: BlurModalProps
) => {

    return (
        /* Blur, Has modal div on child. */
        <div
            className={"fixed top-0 bottom-0 left-0 w-screen h-screen bg-blur-default overflow-hidden"}
            onClick={() => {
                props.setIsModalOpened(false)
            }}>

            {/* Modal Wrapper, Align Modal */}
            <div className={"flex w-full h-full justify-center items-center"}>

                {/* The Modal. */}
                <div
                    className={"flex flex-col gap-[30px] items-center rounded-[30px] bg-background-highlight w-[1000px] pt-[20px] pb-[20px] pl-[50px] pe-[50px]"}
                    onClick={(event) => {
                        event.stopPropagation()
                    }}>

                    {/* Modal's content. */}
                    {props.children}
                </div>
            </div>
        </div>
    )
}