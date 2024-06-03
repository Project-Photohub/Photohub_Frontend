import {HeaderButtons} from "./HeaderButtons";
import {SearchTypes} from "./search/SearchTypes";

export const Header = () => {
    return (
        <header className={"bg-header-default w-full h-[150px] pe-[100px] pl-[100px]"}>
            <div className={"top-header flex justify-between items-center h-[70px]"}>
                <a className={"hover:bg-header-hover rounded-[10px]"} href={"/"}>
                    <img width={202.5} src="/Logo.svg" alt="logo"/>
                </a>
                <HeaderButtons/>
            </div>
            <div className={"bottom-header flex items-center h-[70px] pl-[10px]"}>
                <SearchTypes/>
            </div>
        </header>
    );
}