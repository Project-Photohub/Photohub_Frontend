export interface DivButtonProps {
    readonly onClick?: () => void,
    readonly children?: JSX.Element,
    readonly className?: string,
}

export const DivButton = (props: DivButtonProps) => {
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.children}
        </div>
    )
}