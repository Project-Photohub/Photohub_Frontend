import {Header} from "../component/header/Header";
import {RecommendAdd} from "../component/body/RecommendAdd";

export const DefaultSearchPage = () => {
    return (
        <div className={"flex flex-col gap-[50px]"}>
            <Header/>
            <RecommendAdd/>
        </div>
    )
}