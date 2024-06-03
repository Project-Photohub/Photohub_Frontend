export interface IconProps {
    readonly iconUri: string,
    readonly iconWidth: string,
    readonly iconHeight: string,
}

export interface DivIconButtonProps {
    readonly iconProps: IconProps,
    readonly gap: string,
    readonly onClick?: () => void,
    readonly text?: string,
    readonly textSize?: string,
    readonly className?: string,
}

export const DivIconButton = (props: DivIconButtonProps) => {
    return (
        <div
            className={`${props.className} flex gap-[10px] items-center`}
            onClick={props.onClick}
        >
            <img className={`w-[${props.iconProps.iconWidth}] h-[${props.iconProps.iconHeight}]`}
                 width={props.iconProps.iconWidth}
                 height={props.iconProps.iconHeight}
                 src={props.iconProps.iconUri}
                 alt="icon"
            />
            <p className={`text-[${props.textSize}]`}>{props.text}</p>
        </div>
    )
}