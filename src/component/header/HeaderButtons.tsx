import {HeaderButton} from "./HeaderButton";

export const HeaderButtons = () => {
    return (<div className={"gap-2.5 flex"}>
            {/*<HeaderButton
                iconUri={"/Picture.svg"}
                onClick={() => {
                }}
                text={"내 포토카드"}
            />*/}
            <HeaderButton
                iconUri={"/Plus.svg"}
                text={"포토카드 추가"}
                gotoPath={"/add"}
            />
            <HeaderButton
                iconUri={"/Profile.svg"}
                text={"문의하기"}
                gotoPath={"/ask"}
            />
        </div>
    )
}