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
                onClick={() => {
                    location.pathname = "/add"
                }}
                text={"포토카드 추가"}
            />
            <HeaderButton
                iconUri={"/Profile.svg"}
                onClick={() => {
                    location.pathname = "/ask"
                }}
                text={"문의하기"}
            />
        </div>
    )
}