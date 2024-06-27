import {Header} from "../component/header/Header";
import {Footer} from "../component/footer/Footer";

export interface PageBaseProps {
    children: JSX.Element[]
}

export const PageBase = (props: PageBaseProps) => {
    return (
        <div className={"flex flex-col gap-[50px]"}>

            <Header/>

            {props.children}

            <Footer/>
        </div>
    )
}