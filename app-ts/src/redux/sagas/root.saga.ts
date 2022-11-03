import { all } from "redux-saga/effects";
import { sagaWatcheraddData } from "./sagas.addData";
import { sagaWatcherDeleteData } from "./sagas.deleteData";
import { sagaWatchersetData } from "./sagas.editData";
import { sagaWatcherGetData } from "./sagas.getData";
import {sagaWatcherLogin} from "./sagas.login"
import { sagaWatcherLogout } from "./sagas.logout";
import {sagaWatcherRegister} from "./sagas.register"


export default function* rootSaga(){
    yield all([
        sagaWatcherLogin(),
        sagaWatcherRegister(),
        sagaWatcherGetData(),
        sagaWatcherDeleteData(),
        sagaWatcheraddData(),
        sagaWatchersetData(),
        sagaWatcherLogout()
    ])
}