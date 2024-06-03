export interface ButtonProps {
    readonly type: "submit" | "reset" | "button",
    readonly onClick?: () => void,
    readonly inner?: JSX.Element,
    readonly className?: string,
}

export const Button = (props: ButtonProps) => {
    return (
        <button className={props.className} type={props.type} onClick={props.onClick}>
            {props.inner}
        </button>
    )
}