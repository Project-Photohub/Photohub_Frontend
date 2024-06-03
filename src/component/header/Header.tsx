import {HeaderButtons} from "./HeaderButtons";

export const Header = () => {
    return (
        <header className={"bg-header-default w-full h-[150px] pe-[100px] pl-[100px] g-[10px]"}>
            <div className={"top-header flex justify-between items-center h-[70px]"}>
                <img width={202.5} src="/Logo.svg" alt="logo"/>
                <HeaderButtons/>
            </div>
            <div className={"bottom-header"}>
            </div>
        </header>
    );
}