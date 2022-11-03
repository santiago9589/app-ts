import { takeLatest,put,call } from "redux-saga/effects";
import { TodoActions } from "../../models/TodoActions";
import { addData } from "../../service/firebase/firestore";
import { addTodoFail,addTodoStart,addTodoSucces} from "../state/todo";


function* sagaWorkeraddData(actions:TodoActions) : Generator<any>{
    try {
        yield call(addData,actions.payload)
        yield put (addTodoSucces())
    } catch (error) {
        yield put (addTodoFail(error))
    }
}


export function* sagaWatcheraddData(){
    yield takeLatest(addTodoStart,sagaWorkeraddData)
}