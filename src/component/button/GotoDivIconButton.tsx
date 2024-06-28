import {DivIconButton, IconProps} from "./DivIconButton";

export interface GotoDivIconButtonProps {
    iconProps: IconProps
    gap?: string
    text: string
    textSize: string
    gotoPath: string
    className?: string
}

export const GotoDivIconButton = (props: GotoDivIconButtonProps) => {
    return (
        <a href={props.gotoPath}>
            <DivIconButton
                iconProps={props.iconProps}
                gap={props.gap ? props.gap : "10px"}
                text={props.text}
                textSize={props.textSize}
                className={`p-[10px] ${props.className}`}
            />
        </a>
    )
}