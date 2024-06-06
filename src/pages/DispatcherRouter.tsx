import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./error/NotFoundPage";
import {GroupSearchPage} from "./search/GroupSearchPage";
import {DefaultSearchPage} from "./search/DefaultSearchPage";

export const DispatcherRouter = () => {
    return (
        <Routes>
            <Route path={'/search'}>
                <Route path='group/:groupId/:memberId' element={<GroupSearchPage/>}/>
                <Route path='*' element={<DefaultSearchPage/>}/>
            </Route>
            <Route path={'/*'} element={<NotFoundPage/>}/>
        </Routes>
    )
}