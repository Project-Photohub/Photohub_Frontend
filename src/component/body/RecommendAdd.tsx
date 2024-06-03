import {HeaderButton} from "../header/HeaderButton";

export const RecommendAdd = () => {
    return (<div className={"flex flex-col items-center gap-[50px] pl-[10px] pe-[10px] pb-[30px] pt-[30px]"}>
        <div className={"flex flex-col items-center gap-[20px]"}>
            <p className={"font-p-medium text-text-white text-[24px]"}>
                마음에 드는 포토카드를 찾지 못했나요?
            </p>
            <p className={"font-p-medium text-text-white text-[24px]"}>
                다른 사람들에게 나만의 포토카드를 공유하고 싶은가요?
            </p>
            <p className={"font-p-semi-bold text-text-white text-[28px]"}>
                직접 만들어보세요.
            </p>
        </div>
        <HeaderButton
            iconUri={"/Plus.svg"}
            onClick={() => {
            }}
            text={"포토카드 추가"}
        />
    </div>)
}