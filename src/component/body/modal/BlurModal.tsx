export interface BlurModalProps {
    children: JSX.Element[],
    setModel: (value: JSX.Element | undefined) => void,
    onClose?: () => void
}

export const BlurModal = (
    props: BlurModalProps
) => {

    return (
        /* Blur, Has modal div on child. */
        <div
            className={"fixed top-0 bottom-0 left-0 w-screen h-screen bg-blur-default overflow-hidden"}
            onClick={() => {
                props.setModel(undefined)
                props.onClose && props.onClose()
            }}>

            {/* Modal Wrapper, Align Modal */}
            <div className={"flex w-full h-full justify-center items-center"}>

                {/* The Modal. */}
                <div
                    className={"flex flex-col gap-[30px] items-center rounded-[30px] bg-background-highlight pt-[20px] pb-[20px] pl-[50px] pe-[50px] shadow-blur-modal"}
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