import {FooterElement} from "./FooterElement";
import {HeaderButton} from "../header/HeaderButton";

export const FooterElements = () => {
    return (
        <div className={"flex flex-row gap-[100px] pe-[30px] pl-[30px]"}>
            <FooterElement>
                <p className={"font-p-medium text-text-white text-[16px"}>
                    Daybreak312 <span className={"font-p-light"}>/ Daybreak</span>
                </p>
                <p className={"font-p-medium text-text-white text-[16px"}>
                    <span className={"font-p-light"}>Designed By</span> Daybreak312
                </p>
                <p className={"font-p-medium text-text-white text-[16px"}>
                    Copyright 2024
                </p>
            </FooterElement>
            <FooterElement>
                <HeaderButton iconUri={"/Github.svg"} text={"Daybreak312"}
                              gotoPath={"https://github.com/Daybreak312"}/>
                <HeaderButton iconUri={"/Github.svg"} text={"Photohub Backend"}
                              gotoPath={"https://github.com/Project-Photohub/Photohub_Backend"}/>
                <HeaderButton iconUri={"/Github.svg"} text={"Photohub Frontend"}
                              gotoPath={"https://github.com/Project-Photohub/Photohub_Frontend"}/>
            </FooterElement>
        </div>
    )
}