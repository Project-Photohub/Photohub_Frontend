import {Button, ButtonProps} from "./Button";

export interface IconButtonProps {
    readonly iconUri: string,
    readonly iconGap: string,
    readonly buttonProps: ButtonProps
}

export const IconButton = (props: IconButtonProps) => {
    return (
        Button({
            className: props.buttonProps.className,
            type: props.buttonProps.type,
            onClick: props.buttonProps.onClick,
            inner: (<div className={`gap-[${props.iconGap}]`}>
                        <img src={props.iconUri} alt="icon"/>
                        {props.buttonProps.inner}
                    </div>)
        })
    )
}