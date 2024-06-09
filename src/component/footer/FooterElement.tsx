export interface FooterElementProps {
    readonly children: JSX.Element[] | JSX.Element
}

export const FooterElement = (props: FooterElementProps) => {
    return (
        <div className={"flex flex-col gap-[20px]"}>
            {props.children}
        </div>
    )
}