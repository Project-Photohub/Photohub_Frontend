import {FooterElements} from "./FooterElements";

export const Footer = () => {
    return (
        <footer className={"flex flex-col gap-[20px] w-full p-[50px]"}>
            <div className={"h-[1px] w-full bg-text-white"}/>
            <FooterElements/>
        </footer>
    )
}