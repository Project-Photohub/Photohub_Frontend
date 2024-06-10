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
                }}
                text={"포토카드 추가"}
            />
            {/*<HeaderButton
                iconUri={"/Profile.svg"}
                onClick={() => {
                }}
                text={"로그인"}
            />*/}
        </div>
    )
}