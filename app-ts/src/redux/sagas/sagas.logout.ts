import { takeLatest,put,call } from "redux-saga/effects";
import { LogoutUser } from "../../service/firebase/auth";
import { logoutTodoFail, logoutTodoStart, logoutTodoSucces } from "../state/user";


function* sagaWorkerLogout() : Generator<any>{
    try {
        yield call(LogoutUser)
        yield put (logoutTodoSucces())
    } catch (error) {
        yield put (logoutTodoFail(error))
    }
}


export function* sagaWatcherLogout(){
    yield takeLatest(logoutTodoStart,sagaWorkerLogout)
}