import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./error/NotFoundPage";
import {GroupSearchPage} from "./search/GroupSearchPage";
import {SearchPage} from "./search/SearchPage";
import {AddPhotoCardPage} from "./add/AddPhotoCardPage";
import {SignupPage} from "./auth/SignupPage";
import {LoginPage} from "./auth/LoginPage";
import {PhotoCardPage} from "./photocard/PhotoCardPage";

export const DispatcherRouter = () => {
    return (
        <Routes>
            <Route path={'/search'}>
                <Route path={'group/*'} element={<GroupSearchPage/>}/>
                <Route path={'*'} element={<SearchPage/>}/>
            </Route>
            <Route path={'/add'} element={<AddPhotoCardPage/>}/>
            <Route path={'/auth'}>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'signup'} element={<SignupPage/>}/>
            </Route>
            <Route path={"/photocard/*"} element={<PhotoCardPage/>}/>
            <Route path={'/*'} element={<NotFoundPage/>}/>
        </Routes>
    )
}