import { takeLatest,put,call } from "redux-saga/effects";
import { getData } from "../../service/firebase/firestore";
import { getTodoFail, getTodoStart, getTodoSucces } from "../state/todo";


function* sagaWorkerGetData() : Generator<any>{
    try {
        const response = yield call(getData)
        yield put (getTodoSucces(response))
    } catch (error) {
        yield put (getTodoFail(error))
    }
}


export function* sagaWatcherGetData(){
    yield takeLatest(getTodoStart,sagaWorkerGetData)
}