import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./error/NotFoundPage";
import {GroupSearchPage} from "./search/GroupSearchPage";
import {SearchPage} from "./search/SearchPage";

export const DispatcherRouter = () => {
    return (
        <Routes>
            <Route path={'/search'}>
                <Route path={'group/*'} element={<GroupSearchPage/>}/>
                <Route path='*' element={<SearchPage/>}/>
            </Route>
            <Route path={'/*'} element={<NotFoundPage/>}/>
        </Routes>
    )
}