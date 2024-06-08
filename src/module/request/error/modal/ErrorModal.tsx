import {BlurModal} from "../../../../component/body/modal/BlurModal";
import {useState} from "react";

export interface ErrorModalProps {
    readonly statusCode: number
    readonly message: string
}

export const ErrorModal = (props: ErrorModalProps) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <div>
            {isModalOpened && <BlurModal setIsModalOpened={setIsModalOpened}>
                <p className={"font-p-black text-[64px] text-text-white"}>{props.statusCode}</p>
                <p className={"font-p-medium text-[48px] text-text-white"}>{props.message}</p>
            </BlurModal>}
        </div>
    )
}