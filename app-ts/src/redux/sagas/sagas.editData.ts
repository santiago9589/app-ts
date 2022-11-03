import { takeLatest,put,call } from "redux-saga/effects";
import { TodoActions } from "../../models/TodoActions";
import { modifyData } from "../../service/firebase/firestore";
import { setTodoFail,setTodoStart,setTodoSucces} from "../state/todo";


function* sagaWorkersetData(actions:TodoActions) : Generator<any>{

    console.log(actions)
    try {
        yield call(modifyData,actions.payload)
        yield put (setTodoSucces())
    } catch (error) {
        yield put (setTodoFail(error))
    }
}


export function* sagaWatchersetData(){
    yield takeLatest(setTodoStart,sagaWorkersetData)
}