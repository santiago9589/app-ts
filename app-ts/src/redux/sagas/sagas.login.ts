import {call,put,takeLatest} from "redux-saga/effects"
import { userLoginEmailPass } from "../../service/firebase/auth"
import { loginTodoFail, loginTodoStart, loginTodoSucces } from "../state/user"
import { TodoActions } from "../../models/TodoActions"

function* sagaWorkerLogin(actions:TodoActions){
    try {
        yield call (userLoginEmailPass,actions.payload)
        yield put (loginTodoSucces())
    } catch (error) {
        yield put (loginTodoFail(error))
    }
}

export function* sagaWatcherLogin(){
    yield takeLatest(loginTodoStart,sagaWorkerLogin)
}