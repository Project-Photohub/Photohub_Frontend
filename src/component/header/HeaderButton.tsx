import {DivIconButton} from "../button/DivIconButton";

export interface HeaderButtonProps {
    readonly iconUri: string,
    readonly text: string
    readonly gotoPath: string
}

export const HeaderButton = (props: HeaderButtonProps) => {
    return (
        <a href={props.gotoPath}>
            <DivIconButton
                iconProps={{
                    iconUri: props.iconUri,
                    iconWidth: "20px",
                    iconHeight: "20px"
                }}
                gap={"10px"}
                text={props.text}
                textSize={"16px"}
                className={"rounded-[10px] h-[50px] p-[10px] hover:bg-header-hover animated"}
            />
        </a>
    )
}