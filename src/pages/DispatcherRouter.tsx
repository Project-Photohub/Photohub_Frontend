import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./error/NotFoundPage";
import {GroupSearchPage} from "./search/GroupSearchPage";
import {SearchPage} from "./search/SearchPage";
import {AddPhotoCardPage} from "./add/AddPhotoCardPage";

export const DispatcherRouter = () => {
    return (
        <Routes>
            <Route path={'/search'}>
                <Route path={'group/*'} element={<GroupSearchPage/>}/>
                <Route path={'*'} element={<SearchPage/>}/>
            </Route>
            <Route path={'/add'} element={<AddPhotoCardPage/>}/>
            <Route path={'/*'} element={<NotFoundPage/>}/>
        </Routes>
    )
}