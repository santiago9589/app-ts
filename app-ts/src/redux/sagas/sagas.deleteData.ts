import { takeLatest,put,call } from "redux-saga/effects";
import { TodoActions } from "../../models/TodoActions";
import { deleteData } from "../../service/firebase/firestore";
import { deleteTodoStart,deleteTodoFail,deleteTodoSucces} from "../state/todo";


function* sagaWorkerDeleteData(actions:TodoActions) : Generator<any>{
    try {
        const response = yield call(deleteData,actions.payload)
        yield put (deleteTodoSucces(response))
    } catch (error) {
        yield put (deleteTodoFail(error))
    }
}


export function* sagaWatcherDeleteData(){
    yield takeLatest(deleteTodoStart,sagaWorkerDeleteData)
}