import {DivButton, DivButtonProps} from "./DivButton";

export interface IconButtonProps {
    readonly iconUri: string,
    readonly iconGap: string,
    readonly iconWidth: string,
    readonly iconHeight: string,
    readonly innerClassName: string,
    readonly buttonProps: DivButtonProps
}

export const IconButton = (props: IconButtonProps) => {
    return (
        DivButton({
            className: props.buttonProps.className,
            type: props.buttonProps.type,
            onClick: props.buttonProps.onClick,
            inner: (<div className={`gap-[${props.iconGap}] ${props.innerClassName}`}>
                <img width={props.iconWidth} height={props.iconHeight} src={props.iconUri} alt="icon"/>
                {props.buttonProps.inner}
            </div>)
        })
    )
}