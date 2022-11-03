import { call, put, takeLatest } from 'redux-saga/effects'
import {registerTodoFail,registerTodoStart,registerTodoSucces} from "../../redux/state/user"
import { userRegisterEmailPass } from '../../service/firebase/auth'
import  {TodoActions} from "../../models/TodoActions"



function* sagaWorkerRegister(actions:TodoActions){
    try {
        yield call(userRegisterEmailPass,actions.payload)
        yield put(registerTodoSucces())
    } catch (error) {
        yield put(registerTodoFail(error))
    }
}

export function* sagaWatcherRegister(){
    yield takeLatest(registerTodoStart,sagaWorkerRegister)
}