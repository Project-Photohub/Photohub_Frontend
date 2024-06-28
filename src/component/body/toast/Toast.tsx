export interface ToastProps {
    children: JSX.Element[]
    className?: string
    currentToast: JSX.Element | undefined
    setToast: (value: JSX.Element | undefined) => void
}

export const Toast = (props: ToastProps) => {

    const animeId = setTimeout(() => {
        try {
            document.getElementById('toast')!.className += " toast-down-animation"
        } catch (e) {
            if (e instanceof TypeError) {
                // 상관 없음
                return
            }
            console.error(e)
        }
    }, 4000)
    const removeId = setTimeout(() => {
        props.setToast(undefined)
    }, 5000)


    return (
        <div
            id={`toast`}
            className={`fixed bottom-[30px] right-[30px] flex flex-row items-center h-[100px] bg-background-highlight border-[1px] border-solid border-photocard-stroke gap-[10px] px-[30px] py-[10px] rounded-[30px] toast-up-animation ${props.className}`}>
            {props.children}
        </div>
    )
}